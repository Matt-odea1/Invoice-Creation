import request from 'supertest';
import { port, url } from './config.json';

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

// How are we meant to kill the server a test it???
// describe('(/alive) Fail Tests', () => {

//   const response = requestHelper('GET', '/alive', {});
//   expect(response).toHaveProperty('statusCode', 500);

//   const responseBody = JSON.parse(response.getBody());

//   const expectedResponseBody = {
//     status: 'dead'
//   };

//   expect(responseBody).toEqual(expectedResponseBody);
// });