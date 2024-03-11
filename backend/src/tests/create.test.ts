import request from 'supertest';
import { port, url } from './config.json';
import fs from 'fs';
import { csvToJsonFnc, convertJsonToUbl } from '../create';

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

// Assuming csvToJsonFnc() will be changed to csvToJsonFnc(filepath)
describe('csvToJsonFnc Fail Tests', () => {

    // test('Invalid File Type', async () => {
    //     const response = await csvToJsonFnc();
    //     const response = await csvToJsonFnc('src/tests/trialFiles/wrong.txt');

    //     expect(response.status).toBe(400);
    //     expect(response.body).toEqual({
    //         status: 'error',
    //         data: 'Invalid File Type'
    //     });
    // });

    // test('Invalid File Type', async () => {
    //     const response = await csvToJsonFnc();
    //     const response = await csvToJsonFnc('src/tests/trialFiles/wrong.txt');

    //     expect(response.status).toBe(400);
    //     expect(response.body).toEqual({
    //         status: 'error',
    //         data: 'Invalid File Type'
    //     });
    // });
});

// describe('convertJsonToUbl Fail Tests', () => {

// });