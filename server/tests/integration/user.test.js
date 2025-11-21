const request = require('supertest');
const app = require('../../server'); // Express app
const mongoose = require('mongoose');

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_TEST_URI);
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe('User API', () => {
  it('registers a new user', async () => {
    const res = await request(app)
      .post('/api/auth/register')
      .send({ username: 'testuser', password: '123456' });

    expect(res.statusCode).toBe(201);
    expect(res.body.username).toBe('testuser');
  });
});
