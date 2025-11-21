const { authMiddleware } = require('../../middleware/auth');

describe('Auth Middleware', () => {
  test('calls next if user is authenticated', () => {
    const req = { headers: { authorization: 'Bearer fake-token' } };
    const res = {};
    const next = jest.fn();

    authMiddleware(req, res, next);
    expect(next).toHaveBeenCalled();
  });
});
