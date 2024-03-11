import request from 'supertest';
import { port, url } from './config.json';
import fs from 'fs';

const SERVER_URL = `${url}:${port}`;

describe('(/alive) Success Tests', () => {
  test('Server is Alive', async () => {
    const response = await request(SERVER_URL).get('/alive');
    
    expect(response.status).toEqual(200);
    expect(response.body).toEqual({
      status: 'alive',
      data: expect.any(String),
    });
  });
});

// // How will the file go through this API route?
// describe('(invoices/{invoice-id}) Success Tests', () => {
//     test('Retrieved XML from s3 Bucket', async () => {
//       const invoiceId = 1;
  
//       const response = await request(SERVER_URL).get(`/v1/invoices/${invoiceId}`);
  
//       expect(response.status).toBe(200);
//       expect(response.header['content-type']).toContain('application/xml');
  
//       // Additional assertion about UBLInvoice ID
//     });
// });

// // How will the files go through this API route?
// describe('(invoices/}) Success Tests', () => {
//   test('Retrieved XML from s3 Bucket', async () => {
//     const invoiceId = 1; // Replace with a valid invoice ID

//     const response = await request(SERVER_URL).get(`/v1/invoices/${invoiceId}`);

//     expect(response.status).toBe(200);
//     expect(response.header['content-type']).toContain('application/xml');

//     // Add additional assertions based on the expected content of the XML response
//     expect(response.text).toContain('<UBLInvoice>'); // Replace with an XML tag from your response
//   });
// });