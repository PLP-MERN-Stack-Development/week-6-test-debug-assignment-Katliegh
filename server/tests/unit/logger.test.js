const logger = require('../../src/middleware/logger');

test('logger calls next()', () => {
  const req = { method: 'GET', url: '/' };
  const res = {};
  const next = jest.fn();
  logger(req, res, next);
  expect(next).toHaveBeenCalled();
});
