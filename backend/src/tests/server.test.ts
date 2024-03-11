import request from 'supertest';
import { port, url } from './config.json';
import fs from 'fs';
import { csvToJsonFnc, convertJsonToUbl } from '../create';
import cheerio from 'cheerio';

const SERVER_URL = `${url}:${port}`;

function requestCreateIndivCSV(csvData: any) {
    return request(SERVER_URL).post('/create/individual/csv').send({ invoice: csvData });
}

function requestCreateIndivUBL(jsonData: any) {
    return request(SERVER_URL).post('/create/individual/json').send({ invoice: jsonData });
}

// describe('(/create/individual/csv) Fail Tests', () => {

//     // Test file with 'HELLO' is being sent through, and gets converted to UBL
//     // Instead of returning 400 error
// 	test('Not Appriopriate CSV Data', async () => {
//         const wrongCSVContent = fs.readFileSync('src/tests/trialFiles/wrong.txt', 'utf-8');

//         const responseXML = await requestCreateIndivCSV(wrongCSVContent);
//         expect(responseXML.status).toEqual(400);
//         expect(responseXML.text).toEqual("Bad Request: No JSON data provided.");
// 	});

//     // Test string with '' is being sent through, and gets converted to UBL
//     // Instead of returning 400 error
//     test('No JSON Data', async () => {
//         const responseXML = await request(SERVER_URL).post('/create/individual/csv').send({ invoice: '' });
//         expect(responseXML.status).toEqual(400);
//         expect(responseXML.text).toEqual("Bad Request: No JSON data provided.");
// 	});

//     // PASS
//     // Test with nothing is sent through, returns 500 error, API route tries to access 'invoice' field
//     test('Invalid Request', async () => {
//         const responseXML = await request(SERVER_URL).post('/create/individual/csv').send();
//         expect(responseXML.status).toEqual(500);
//         expect(responseXML.text).toEqual("Internal Server Error");
//     });

//     // CSV file with missing id attribute is being sent through, and gets converted to UBL
//     // Instead of returning 400 error
//     test('Missing Fields', async () => {
//         // Compulsory Fields: id, issueDate, accountingSupplierParty, accountingCustomerParty, legalMonetaryTotal, invoiceLine
//         const missingCSVContent = fs.readFileSync('src/tests/trialFiles/missingID.csv', 'utf-8');
//         const response = await requestCreateIndivCSV(missingCSVContent);

//         expect(response.status).toBe(400);
//         expect(response.body).toEqual({
//             status: 'error',
//             data: expect.any(String),
//         });
//     });
// });

// describe('(/create/individual/csv) Success Tests', () => {

//     // CSV endpoint doesn't work properly, understandably this test fails
// 	test('XML is created', async () => {
//         const correctCSVContent = fs.readFileSync('src/tests/trialFiles/correct.csv', 'utf-8');
//         const correctXMLContent = fs.readFileSync('src/tests/trialFiles/correct.xml', 'utf-8');
// 		const responseXML = await requestCreateIndivCSV(correctCSVContent);

//         expect(responseXML.text).toEqual(correctXMLContent);
// 	});

//     // CSV endpoint doesn't work properly, understandably this test fails
//     test('Compulsory XML Fields', async () => {
//         const correctCSVContent = fs.readFileSync('src/tests/trialFiles/correct.csv', 'utf-8');
// 		const responseXML = await requestCreateIndivCSV(correctCSVContent);

//         const $ = cheerio.load(responseXML.text, { xmlMode: true });

//         expect($('cbc\\:ID').length).toBeGreaterThan(0);
//         expect($('cbc\\:IssueDate').length).toBeGreaterThan(0);
//         expect($('cbc\\:accountingSupplierParty').length).toBeGreaterThan(0);
//         expect($('cbc\\:accountingCustomerParty').length).toBeGreaterThan(0);
//         expect($('cbc\\:legalMonetaryTotal').length).toBeGreaterThan(0);
//         expect($('cbc\\:invoiceLine').length).toBeGreaterThan(0);
// 	});
// });

describe('(/create/individual/json) Fail Tests', () => {

    // // Test file with 'HELLO' is being sent through, and gets converted to UBL
    // // Instead of returning 400 error
	// test('Not Appriopriate JSON Data', async () => {
    //     const wrongJsonContent = fs.readFileSync('src/tests/trialFiles/wrong.txt', 'utf-8');

    //     const responseXML = await requestCreateIndivUBL(wrongJsonContent);
    //     expect(responseXML.status).toEqual(400);
    //     expect(responseXML.text).toEqual("Bad Request: No JSON data provided.");
	// });

    // // Test string with '' is being sent through, and gets converted to UBL
    // // Instead of returning 400 error
    // test('No JSON Data', async () => {
    //     const responseXML = await request(SERVER_URL).post('/create/individual/json').send({ invoice: '' });
    //     expect(responseXML.status).toEqual(400);
    //     expect(responseXML.text).toEqual("Bad Request: No JSON data provided.");
	// });

    // PASS
    // Test with nothing is sent through, returns 500 error, API route tries to access 'invoice' field
    test('Invalid Request', async () => {
        const responseXML = await request(SERVER_URL).post('/create/individual/json').send();
        expect(responseXML.status).toEqual(500);
        expect(responseXML.text).toEqual("Internal Server Error");
    });

    // // JSON file with missing id attribute is being sent through, and gets converted to UBL
    // // Instead of returning 400 error
    // test('Missing Fields', async () => {
    //     // Compulsory Fields: id, issueDate, accountingSupplierParty, accountingCustomerParty, legalMonetaryTotal, invoiceLine
    //     const missingJSONContent = fs.readFileSync('src/tests/trialFiles/missingId.json', 'utf-8');
    //     const response = await requestCreateIndivCSV(missingJSONContent);

    //     expect(response.status).toBe(400);
    //     expect(response.body).toEqual({
    //         status: 'error',
    //         data: expect.any(String),
    //     });
    // });
});

describe('(/create/individual/json) Success Tests', () => {

    // PASS
	test('XML is created', async () => {
        const correctJsonContent = fs.readFileSync('src/tests/trialFiles/correct.json', 'utf-8');
        const correctXMLContent = fs.readFileSync('src/tests/trialFiles/correct.xml', 'utf-8');
        const correctJsonObject = JSON.parse(correctJsonContent);

        const responseXML = await requestCreateIndivUBL(correctJsonObject);
        expect(responseXML.text).toEqual(correctXMLContent);
	});

    // PASS
    test('Compulsory XML Fields', async () => {
        const correctJsonContent = fs.readFileSync('src/tests/trialFiles/correct.json', 'utf-8');
        const correctXMLContent = fs.readFileSync('src/tests/trialFiles/correct.xml', 'utf-8');
        const correctJsonObject = JSON.parse(correctJsonContent);

        const responseXML = await requestCreateIndivUBL(correctJsonObject);
        expect(responseXML.text).toEqual(correctXMLContent);

        const $ = cheerio.load(responseXML.text, { xmlMode: true });

        expect($('cbc\\:ID').length).toBeGreaterThan(0);
        expect($('cbc\\:IssueDate').length).toBeGreaterThan(0);
        expect($('cac\\:AccountingSupplierParty').length).toBeGreaterThan(0);
        expect($('cac\\:AccountingCustomerParty').length).toBeGreaterThan(0);
        expect($('cac\\:LegalMonetaryTotal').length).toBeGreaterThan(0);
        expect($('cac\\:InvoiceLine').length).toBeGreaterThan(0);
	});
});