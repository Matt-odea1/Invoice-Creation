import ublbuilder, { Invoice } from 'ubl-builder'
import { AccountingCustomerParty, AccountingSupplierParty, AllowanceCharge, BillingReference, CarrierParty, CustomerPartyParams, Delivery, DeliveryTerms, DespatchLineReference, DocumentReference, ExchangeRate, InvoiceLine, InvoiceLineParams, InvoicePeriodBasic, Item, LegalMonetaryTotal, OrderLineReference, OrderReference, Party, PaymentMeans, PaymentTerms, PeriodType, PrepaidPayment, Price, ProjectReference, ReceiptLineReference, Signature, SupplierPartyTypeParams, TaxRepresentativeParty, TaxTotal, WithholdingTaxTotal } from 'ubl-builder/lib/ubl21/CommonAggregateComponents';
import { UBLExtensions } from 'ubl-builder/lib/ubl21/extensionComponents';
import { XsdBoolean } from 'ubl-builder/lib/ubl21/types/UnqualifiedDataTypes/essentials/xsd/XsdBoolean';

export interface UBLInvoice {
	ublExtensions?: UBLExtensions; // [0..1]
	ublVersionID?: string; // [0..1]
	customizationID?: string; // [0..1]
	profileID?: string; // [0..1]
	profileExecutionID?: string; // [0..1]
	id: string; // [1..1] - Required
	copyIndicator?: boolean; // [0..1]
	uuid?: string; // [0..1]
	issueDate: string; // [1..1] - Required
	issueTime?: string; // [0..1]
	dueDate?: string; // [0..1]
	invoiceTypeCode?: string; // [0..1]
	note?: string[]; // [0..*]
	taxPointDate?: string; // [0..1]
	documentCurrencyCode?: string; // [0..1]
	taxCurrencyCode?: string; // [0..1]
	pricingCurrencyCode?: string; // [0..1]
	paymentCurrencyCode?: string; // [0..1]
	paymentAlternativeCurrencyCode?: string; // [0..1]
	accountingCostCode?: string; // [0..1]
	accountingCost?: string; // [0..1]
	lineCountNumeric?: string; // [0..1]
	buyerReference?: string; // [0..1]
	invoicePeriod?: InvoicePeriodBasic[]; // [0..*]
	orderReference?: OrderReference; // [0..1]
	billingReference?: BillingReference[]; // [0..*]
	despatchDocumentReference?: DocumentReference[]; // [0..*]
	receiptDocumentReference?: DocumentReference[]; // [0..*]
	statementDocumentReference?: DocumentReference[]; // [0..*]
	originatorDocumentReference?: DocumentReference[]; // [0..*]
	contractDocumentReference?: DocumentReference[]; // [0..*]
	additionalDocumentReference?: DocumentReference[]; // [0..*]
	projectReference?: ProjectReference[]; // [0..*]
	signature?: Signature[]; // [0..*]
	accountingSupplierParty: AccountingSupplierParty; // [1..1] - Required
	accountingCustomerParty: AccountingCustomerParty; // [1..1] - Required
	payeeParty?: CustomerPartyParams; // [0..1]
	buyerCustomerParty?: CustomerPartyParams; // [0..1]
	sellerSupplierParty?: SupplierPartyTypeParams; // [0..1]
	taxRepresentativeParty?: Party; // [0..1]
	delivery?: Delivery[]; // [0..*]
	deliveryTerms?: DeliveryTerms; // [0..1]
	paymentMeans?: PaymentMeans[]; // [0..*]
	paymentTerms?: PaymentTerms[]; // [0..*]
	prepaidPayment?: PrepaidPayment[]; // [0..*]
	allowanceCharge?: AllowanceCharge[]; // [0..*]
	taxExchangeRate?: ExchangeRate; // [0..1]
	pricingExchangeRate?: ExchangeRate; // [0..1]
	paymentExchangeRate?: ExchangeRate; // [0..1]
	paymentAlternativeExchangeRate?: ExchangeRate; // [0..1]
	taxTotal?: TaxTotal[]; // [0..*]
	withholdingTaxTotal?: TaxTotal[]; // [0..*]
	legalMonetaryTotal: LegalMonetaryTotal; // [1..1] - Required
	invoiceLine: InvoiceLineParams[]; // [1..*] - Required
}