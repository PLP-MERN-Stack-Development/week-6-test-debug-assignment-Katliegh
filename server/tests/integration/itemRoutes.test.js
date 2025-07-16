const request = require('supertest');
const app = require('../../src/App');

describe('GET /api/items', () => {
  it('returns list of items', async () => {
    const res = await request(app).get('/api/items');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body[0]).toHaveProperty('id');
  });
});
