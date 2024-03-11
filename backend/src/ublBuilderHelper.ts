import { Invoice } from 'ubl-builder';
import { InvoiceLineParams } from 'ubl-builder/lib/ubl21/CommonAggregateComponents';
import { 
	UBLInvoice,
} from './interface'
import { InvoiceLine } from 'ubl-builder/lib/ubl21/CommonAggregateComponents';

/**
 * This file contains helper functions to set individual fields in the invoice object 
 * I choose to do it this way as some fields are arrays and need to be iterated
 * Other fields like invoiceLine need custom objects
 */


export function isInvoiceValid(inputInvoice: UBLInvoice): boolean {
	if (inputInvoice.id === null 
		|| inputInvoice.issueDate === null 
		|| inputInvoice.accountingCustomerParty === null
		|| inputInvoice.accountingSupplierParty === null
		|| inputInvoice.legalMonetaryTotal === null) {
		return false;
	}
	return true;
}

// THe following functions STUBS are already implemented by default (may remove later)
export function setUblExtensionsHelper(inputInvoice: UBLInvoice, exportInvoice: Invoice): void {
    // Implementation to set UBLExtensions
}

export function setUblVersionIdHelper(inputInvoice: UBLInvoice, exportInvoice: Invoice): void {

}

export function setCustomizationIdHelper(inputInvoice: UBLInvoice, exportInvoice: Invoice): void {
    // Implementation to set CustomizationID
}

export function setProfileIdHelper(inputInvoice: UBLInvoice, exportInvoice: Invoice): void {
    // Implementation to set ProfileID
}

export function setProfileExecutionIdHelper(inputInvoice: UBLInvoice, exportInvoice: Invoice): void {
    // Implementation to set ProfileExecutionID
}

// Required field
export function setIdHelper(inputInvoice: UBLInvoice, exportInvoice: Invoice): void {
    // Implementation to set ID
	if (inputInvoice.id != null) {
		exportInvoice.setID(inputInvoice.id);
	}
}

export function setCopyIndicatorHelper(inputInvoice: UBLInvoice, exportInvoice: Invoice): void {
    // Implementation to set CopyIndicator
	if (inputInvoice.copyIndicator != null) {
		console.log(inputInvoice.copyIndicator)
		const isCopy = inputInvoice.copyIndicator as boolean;
		exportInvoice.setCopyIndicator(isCopy);
	}
}

export function setUuidHelper(inputInvoice: UBLInvoice, exportInvoice: Invoice): void {
    if (inputInvoice.uuid != null) {
        exportInvoice.setUUID(inputInvoice.uuid);
    }
}

// Required field
export function setIssueDateHelper(inputInvoice: UBLInvoice, exportInvoice: Invoice): void {
    if (inputInvoice.issueDate != null) {
        exportInvoice.setIssueDate(inputInvoice.issueDate);
    }
}

export function setIssueTimeHelper(inputInvoice: UBLInvoice, exportInvoice: Invoice): void {
    if (inputInvoice.issueTime != null) {
        exportInvoice.setIssueTime(inputInvoice.issueTime);
    }
}

export function setDueDateHelper(inputInvoice: UBLInvoice, exportInvoice: Invoice): void {
    if (inputInvoice.dueDate != null) {
        exportInvoice.setDueDate(inputInvoice.dueDate);
    }
}

export function setInvoiceTypeCodeHelper(inputInvoice: UBLInvoice, exportInvoice: Invoice): void {
    if (inputInvoice.invoiceTypeCode != null) {
        exportInvoice.setInvoiceTypeCode(inputInvoice.invoiceTypeCode);
    }
}

export function setNoteHelper(inputInvoice: UBLInvoice, exportInvoice: Invoice): void {
    if (inputInvoice.note != null && inputInvoice.note.length > 0) {
        inputInvoice.note.forEach(note => exportInvoice.addNote(note));
    }
}

export function setTaxPointDateHelper(inputInvoice: UBLInvoice, exportInvoice: Invoice): void {
    if (inputInvoice.taxPointDate != null) {
        exportInvoice.setTaxPointDate(inputInvoice.taxPointDate);
    }
}

export function setDocumentCurrencyCodeHelper(inputInvoice: UBLInvoice, exportInvoice: Invoice): void {
    if (inputInvoice.documentCurrencyCode != null) {
        exportInvoice.setDocumentCurrencyCode(inputInvoice.documentCurrencyCode);
    }
}

export function setTaxCurrencyCodeHelper(inputInvoice: UBLInvoice, exportInvoice: Invoice): void {
    if (inputInvoice.taxCurrencyCode != null) {
        exportInvoice.setTaxCurrencyCode(inputInvoice.taxCurrencyCode);
    }
}

export function setPricingCurrencyCodeHelper(inputInvoice: UBLInvoice, exportInvoice: Invoice): void {
    if (inputInvoice.pricingCurrencyCode != null) {
        exportInvoice.setPricingCurrencyCode(inputInvoice.pricingCurrencyCode);
    }
}

export function setPaymentCurrencyCodeHelper(inputInvoice: UBLInvoice, exportInvoice: Invoice): void {
    if (inputInvoice.paymentCurrencyCode != null) {
        exportInvoice.setPaymentCurrencyCode(inputInvoice.paymentCurrencyCode);
    }
}

export function setPaymentAlternativeCurrencyCodeHelper(inputInvoice: UBLInvoice, exportInvoice: Invoice): void {
    if (inputInvoice.paymentAlternativeCurrencyCode != null) {
        exportInvoice.setPaymentAlternativeCurrencyCode(inputInvoice.paymentAlternativeCurrencyCode);
    }
}

export function setAccountingCostCodeHelper(inputInvoice: UBLInvoice, exportInvoice: Invoice): void {
    if (inputInvoice.accountingCostCode != null) {
        exportInvoice.setAccountingCostCode(inputInvoice.accountingCostCode);
    }
}

export function setAccountingCostHelper(inputInvoice: UBLInvoice, exportInvoice: Invoice): void {
    if (inputInvoice.accountingCost != null) {
        exportInvoice.setAccountingCost(inputInvoice.accountingCost);
    }
}

export function setLineCountNumericHelper(inputInvoice: UBLInvoice, exportInvoice: Invoice): void {
    if (inputInvoice.lineCountNumeric != null) {
        exportInvoice.setLineCountNumeric(inputInvoice.lineCountNumeric);
    }
}

export function setBuyerReferenceHelper(inputInvoice: UBLInvoice, exportInvoice: Invoice): void {
    if (inputInvoice.buyerReference != null) {
        exportInvoice.setBuyerReference(inputInvoice.buyerReference);
    }
}

export function setInvoicePeriodHelper(inputInvoice: UBLInvoice, exportInvoice: Invoice): void {
    if (inputInvoice.invoicePeriod != null && inputInvoice.invoicePeriod.length > 0) {
        inputInvoice.invoicePeriod.forEach(period => exportInvoice.addInvoicePeriod(period));
    }
}

export function setOrderReferenceHelper(inputInvoice: UBLInvoice, exportInvoice: Invoice): void {
    if (inputInvoice.orderReference != null) {
        exportInvoice.setOrderReference(inputInvoice.orderReference);
    }
}

export function setBillingReferenceHelper(inputInvoice: UBLInvoice, exportInvoice: Invoice): void {
    if (inputInvoice.billingReference != null && inputInvoice.billingReference.length > 0) {
        inputInvoice.billingReference.forEach(reference => exportInvoice.addBillingReference(reference));
    }
}

export function setDespatchDocumentReferenceHelper(inputInvoice: UBLInvoice, exportInvoice: Invoice): void {
    if (inputInvoice.despatchDocumentReference != null && inputInvoice.despatchDocumentReference.length > 0) {
        inputInvoice.despatchDocumentReference.forEach(reference => exportInvoice.addDespatchDocumentReference(reference));
    }
}

export function setReceiptDocumentReferenceHelper(inputInvoice: UBLInvoice, exportInvoice: Invoice): void {
    if (inputInvoice.receiptDocumentReference != null && inputInvoice.receiptDocumentReference.length > 0) {
        inputInvoice.receiptDocumentReference.forEach(reference => exportInvoice.addReceiptDocumentReference(reference));
    }
}

export function setStatementDocumentReferenceHelper(inputInvoice: UBLInvoice, exportInvoice: Invoice): void {
    if (inputInvoice.statementDocumentReference != null && inputInvoice.statementDocumentReference.length > 0) {
        inputInvoice.statementDocumentReference.forEach(reference => exportInvoice.addStatementDocumentReference(reference));
    }
}

export function setOriginatorDocumentReferenceHelper(inputInvoice: UBLInvoice, exportInvoice: Invoice): void {
    if (inputInvoice.originatorDocumentReference != null && inputInvoice.originatorDocumentReference.length > 0) {
        inputInvoice.originatorDocumentReference.forEach(reference => exportInvoice.addOriginatorDocumentReference(reference));
    }
}

export function setContractDocumentReferenceHelper(inputInvoice: UBLInvoice, exportInvoice: Invoice): void {
    if (inputInvoice.contractDocumentReference != null && inputInvoice.contractDocumentReference.length > 0) {
        inputInvoice.contractDocumentReference.forEach(reference => exportInvoice.addContractDocumentReference(reference));
    }
}

export function setAdditionalDocumentReferenceHelper(inputInvoice: UBLInvoice, exportInvoice: Invoice): void {
    if (inputInvoice.additionalDocumentReference != null && inputInvoice.additionalDocumentReference.length > 0) {
        inputInvoice.additionalDocumentReference.forEach(reference => exportInvoice.addAdditionalDocumentReference(reference));
    }
}

export function setProjectReferenceHelper(inputInvoice: UBLInvoice, exportInvoice: Invoice): void {
    if (inputInvoice.projectReference != null && inputInvoice.projectReference.length > 0) {
        inputInvoice.projectReference.forEach(reference => exportInvoice.addProjectReference(reference));
    }
}

export function setSignatureHelper(inputInvoice: UBLInvoice, exportInvoice: Invoice): void {
    if (inputInvoice.signature != null && inputInvoice.signature.length > 0) {
        inputInvoice.signature.forEach(signature => exportInvoice.addSignature(signature));
    }
}

// Required field
// Need to complete function
// Create party objects using ubl builder
export function setAccountingSupplierPartyHelper(inputInvoice: UBLInvoice, exportInvoice: Invoice): void {
    if (inputInvoice.accountingSupplierParty != null) {
        exportInvoice.setAccountingSupplierParty(inputInvoice.accountingSupplierParty);
    }
}


// Required field
// Need to complete function
// Create party objects using ubl builder
export function setAccountingCustomerPartyHelper(inputInvoice: UBLInvoice, exportInvoice: Invoice): void {
    if (inputInvoice.accountingCustomerParty != null) {
        exportInvoice.setAccountingCustomerParty(inputInvoice.accountingCustomerParty);
    }
}

export function setPayeePartyHelper(inputInvoice: UBLInvoice, exportInvoice: Invoice): void {
    if (inputInvoice.payeeParty != null) {
        exportInvoice.setPayeeParty(inputInvoice.payeeParty);
    }
}

export function setBuyerCustomerPartyHelper(inputInvoice: UBLInvoice, exportInvoice: Invoice): void {
    if (inputInvoice.buyerCustomerParty != null) {
        exportInvoice.setBuyerCustomerParty(inputInvoice.buyerCustomerParty);
    }
}

export function setSellerSupplierPartyHelper(inputInvoice: UBLInvoice, exportInvoice: Invoice): void {
    if (inputInvoice.sellerSupplierParty != null) {
        exportInvoice.setSellerSupplierParty(inputInvoice.sellerSupplierParty);
    }
}

export function setTaxRepresentativePartyHelper(inputInvoice: UBLInvoice, exportInvoice: Invoice): void {
    if (inputInvoice.taxRepresentativeParty != null) {
        exportInvoice.setTaxRepresentativeParty(inputInvoice.taxRepresentativeParty);
    }
}

export function setDeliveryHelper(inputInvoice: UBLInvoice, exportInvoice: Invoice): void {
    if (inputInvoice.delivery != null && inputInvoice.delivery.length > 0) {
        inputInvoice.delivery.forEach(delivery => exportInvoice.addDelivery(delivery));
    }
}

export function setDeliveryTermsHelper(inputInvoice: UBLInvoice, exportInvoice: Invoice): void {
    if (inputInvoice.deliveryTerms != null) {
        exportInvoice.setDeliveryTerms(inputInvoice.deliveryTerms);
    }
}

export function setPaymentMeansHelper(inputInvoice: UBLInvoice, exportInvoice: Invoice): void {
    if (inputInvoice.paymentMeans != null && inputInvoice.paymentMeans.length > 0) {
		inputInvoice.paymentMeans.forEach(paymentMean => {
			console.log(paymentMean);		
		});
        inputInvoice.paymentMeans.forEach(paymentMeans => exportInvoice.addPaymentMeans(paymentMeans));
    }
}

export function setPaymentTermsHelper(inputInvoice: UBLInvoice, exportInvoice: Invoice): void {
    if (inputInvoice.paymentTerms != null && inputInvoice.paymentTerms.length > 0) {
        inputInvoice.paymentTerms.forEach(term => exportInvoice.addPaymentTerm(term));
    }
}

export function setPrepaidPaymentHelper(inputInvoice: UBLInvoice, exportInvoice: Invoice): void {
    if (inputInvoice.prepaidPayment != null && inputInvoice.prepaidPayment.length > 0) {
        inputInvoice.prepaidPayment.forEach(payment => exportInvoice.addPrepaidPayment(payment));
    }
}

export function setAllowanceChargeHelper(inputInvoice: UBLInvoice, exportInvoice: Invoice): void {
    if (inputInvoice.allowanceCharge != null && inputInvoice.allowanceCharge.length > 0) {
        inputInvoice.allowanceCharge.forEach(charge => exportInvoice.addAllowanceCharge(charge));
    }
}

export function setTaxExchangeRateHelper(inputInvoice: UBLInvoice, exportInvoice: Invoice): void {
    if (inputInvoice.taxExchangeRate != null) {
        exportInvoice.setTaxExchangeRate(inputInvoice.taxExchangeRate);
    }
}

export function setPricingExchangeRateHelper(inputInvoice: UBLInvoice, exportInvoice: Invoice): void {
    if (inputInvoice.pricingExchangeRate != null) {
        exportInvoice.setPricingExchangeRate(inputInvoice.pricingExchangeRate);
    }
}

export function setPaymentExchangeRateHelper(inputInvoice: UBLInvoice, exportInvoice: Invoice): void {
    if (inputInvoice.paymentExchangeRate != null) {
        exportInvoice.setPaymentExchangeRate(inputInvoice.paymentExchangeRate);
    }
}

export function setPaymentAlternativeExchangeRateHelper(inputInvoice: UBLInvoice, exportInvoice: Invoice): void {
    if (inputInvoice.paymentAlternativeExchangeRate != null) {
        exportInvoice.setPaymentAlternativeExchangeRate(inputInvoice.paymentAlternativeExchangeRate);
    }
}

export function setTaxTotalHelper(inputInvoice: UBLInvoice, exportInvoice: Invoice): void {
    if (inputInvoice.taxTotal != null && inputInvoice.taxTotal.length > 0) {
        inputInvoice.taxTotal.forEach(total => exportInvoice.addTaxTotal(total));
    }
}

export function setWithholdingTaxTotalHelper(inputInvoice: UBLInvoice, exportInvoice: Invoice): void {
    if (inputInvoice.withholdingTaxTotal != null && inputInvoice.withholdingTaxTotal.length > 0) {
        inputInvoice.withholdingTaxTotal.forEach(total => exportInvoice.addWithholdingTaxTotal(total));
    }
}

// Required field
export function setLegalMonetaryTotalHelper(inputInvoice: UBLInvoice, exportInvoice: Invoice): void {
    if (inputInvoice.legalMonetaryTotal != null) {
        // Assuming setLegalMonetaryTotal expects an object of a specific type
        exportInvoice.setLegalMonetaryTotal(inputInvoice.legalMonetaryTotal);
    }
}

// Need to fix tax totals
export function setInvoiceLineHelper(inputInvoice: UBLInvoice, exportInvoice: Invoice): void {
    if (inputInvoice.invoiceLine != null && inputInvoice.invoiceLine.length > 0) {
        inputInvoice.invoiceLine.forEach(line => {
            // Assuming addInvoiceLine expects an object of a specific type
			const myInvoice: InvoiceLine = new InvoiceLine(null);
			console.log(createTaxTotals(line));
			myInvoice.setId(line.id);
			myInvoice.setLineExtensionAmount(line.lineExtensionAmount);
			
            exportInvoice.addInvoiceLine(myInvoice);
        });
    }
}

//todo
function createTaxTotals(invoiceLine: InvoiceLineParams) {

}
