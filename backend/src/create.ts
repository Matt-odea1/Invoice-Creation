import csvtojson from 'csvtojson'
import { promises as fsPromises } from 'fs';
import { Invoice } from 'ubl-builder';
import * as InvoiceHelpers from './ublBuilderHelper';
import { UBLInvoice } from './interface'

// Temp local file path for testing
const csvFilePath = "./tests/testFiles/invoiceTest.csv";
export async function csvToJsonFnc() {
    try {
		// Convert the specified CSV file to JSON using 'csvtojson' library
        // 'await' is used to wait for the promise returned by 'fromFile' method to resolve
        // This ensures that the function execution pauses until the conversion is complete
        const json = await csvtojson().fromFile(csvFilePath);
        return json; // Return the JSON once it's ready
    } catch (error) {
        console.error("Error converting CSV to JSON:", error);
        throw error; // Throw the error to be caught in the calling function
    }
}

// Temp local file path for testing
const jsonFilePath = "./tests/testFiles/invoiceTemplate.json";

// UBL Builder doccumentation: https://github.com/pipesanta/ubl-builder
// Async function to convert JSON to UBL and export it as XML
export async function convertJsonToUbl(filepath: string): Promise<void> {
    try {
        const inputInvoice = await readJsonFileAsync(filepath);
        if (!InvoiceHelpers.isInvoiceValid(inputInvoice)) {
            console.error('Invalid invoice format');
            return;
        }

        const outputInvoice = createUblInvoice(inputInvoice);
        await exportInvoiceXml(outputInvoice);
    } catch (err) {
        console.error("Error in convertJsonToUbl:", err);
    }
}

// Function to create a UBL invoice from input JSON
export function createUblInvoice(inputInvoice: any): Invoice {
	const { Invoice } = require("ubl-builder");
    const outputInvoice = new Invoice('1', {});
    outputInvoice.addProperty('xmlns', 'urn:oasis:names:specification:ubl:schema:xsd:Invoice-2');
    
    // Apply helper functions to set properties on the output invoice
    helperFunctions.forEach(helperFunction => {
		helperFunction(inputInvoice, outputInvoice)
	});
    return outputInvoice;
}

// Async function to export the invoice XML content to a file
export async function exportInvoiceXml(invoice: Invoice): Promise<void> {
    const invoiceXmlContent = invoice.getXml(); 
    const outputPath = './src/output/invoice.xml';
    try {
        await exportXmlToFile(invoiceXmlContent, outputPath);
        console.log('Invoice XML file exported successfully.');
    } catch (err) {
        console.error('Failed to export invoice XML file:', err);
    }
}

/**
 * Asynchronously reads the contents of a JSON file and parses it into a UBLInvoice object.
 * Uses file path, might have to change this for deployment.
 * @param {string} filePath - The path to the JSON file to be read.
 * @returns {Promise<UBLInvoice>} A Promise that resolves to the parsed UBLInvoice object.
 */
const readJsonFileAsync = async (filePath: string): Promise<UBLInvoice> => {
    const jsonString = await fsPromises.readFile(filePath, 'utf8');
    return JSON.parse(jsonString) as UBLInvoice;
};

/**
 * Writes the provided XML content to a file locally will need to be replaced for deployment.
 * @param xmlContent The XML content to write to the file.
 * @param outputPath The path where the XML file will be saved.
 */
export const exportXmlToFile = async (xmlContent: string, outputPath: string): Promise<void> => {
    try {
        await fsPromises.writeFile(outputPath, xmlContent, 'utf8');
        console.log(`XML content has been successfully written to ${outputPath}`);
    } catch (err) {
        console.error(`Error writing XML to file: ${err}`);
        throw err; // Re-throw the error for further handling if necessary
    }
};

// Helper Functions array 
// Don't like that it's here but it makes the main function 
// less cluttered
// The double indented COMMENTED functions have to be fixed since they need
// more logic; most don't work due to type conflicts
// The single indent COMMENTED functions are not implemented in the ubl 
// builder package but we should be fine to leave those for future sprints 
// as they are not required to create a ubl invoice
// (yes I am aware my comments are garbage it's 2 am)
const helperFunctions = [
	InvoiceHelpers.setIdHelper,
	InvoiceHelpers.setCopyIndicatorHelper,
    InvoiceHelpers.setUuidHelper,
    InvoiceHelpers.setIssueDateHelper,
    InvoiceHelpers.setIssueTimeHelper,
    InvoiceHelpers.setDueDateHelper,
    InvoiceHelpers.setInvoiceTypeCodeHelper,
    InvoiceHelpers.setNoteHelper,
    InvoiceHelpers.setTaxPointDateHelper,
    InvoiceHelpers.setDocumentCurrencyCodeHelper,
    InvoiceHelpers.setTaxCurrencyCodeHelper,
    InvoiceHelpers.setPricingCurrencyCodeHelper,
    InvoiceHelpers.setPaymentCurrencyCodeHelper,
    InvoiceHelpers.setPaymentAlternativeCurrencyCodeHelper,
    InvoiceHelpers.setAccountingCostCodeHelper,
    InvoiceHelpers.setAccountingCostHelper,
    InvoiceHelpers.setLineCountNumericHelper,
    InvoiceHelpers.setBuyerReferenceHelper,
    InvoiceHelpers.setInvoicePeriodHelper,
    InvoiceHelpers.setOrderReferenceHelper,
    InvoiceHelpers.setBillingReferenceHelper,
    InvoiceHelpers.setDespatchDocumentReferenceHelper,
    InvoiceHelpers.setReceiptDocumentReferenceHelper,
    InvoiceHelpers.setStatementDocumentReferenceHelper,
    InvoiceHelpers.setOriginatorDocumentReferenceHelper,
    InvoiceHelpers.setContractDocumentReferenceHelper,
    InvoiceHelpers.setAdditionalDocumentReferenceHelper,
    InvoiceHelpers.setProjectReferenceHelper,
    	//InvoiceHelpers.setSignatureHelper, // Not implemented in the ubl builder
    InvoiceHelpers.setAccountingSupplierPartyHelper,
    InvoiceHelpers.setAccountingCustomerPartyHelper,
    //InvoiceHelpers.setPayeePartyHelper,
    //InvoiceHelpers.setBuyerCustomerPartyHelper,
    //InvoiceHelpers.setSellerSupplierPartyHelper,
    	//InvoiceHelpers.setTaxRepresentativePartyHelper,
    InvoiceHelpers.setDeliveryHelper,
    InvoiceHelpers.setDeliveryTermsHelper,
    //InvoiceHelpers.setPaymentMeansHelper,
    //InvoiceHelpers.setPaymentTermsHelper,
	InvoiceHelpers.setPrepaidPaymentHelper,
    //InvoiceHelpers.setAllowanceChargeHelper,
    //InvoiceHelpers.setTaxExchangeRateHelper,
    //InvoiceHelpers.setPricingExchangeRateHelper,
    InvoiceHelpers.setPaymentExchangeRateHelper,
    //InvoiceHelpers.setPaymentAlternativeExchangeRateHelper,
    	//InvoiceHelpers.setTaxTotalHelper,
    //InvoiceHelpers.setWithholdingTaxTotalHelper,
    InvoiceHelpers.setLegalMonetaryTotalHelper,
	InvoiceHelpers.setInvoiceLineHelper
];