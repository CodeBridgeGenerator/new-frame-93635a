const assert = require('assert');
const app = require('../../src/app');

describe('\'secframework\' service', () => {
  it('registered the service', () => {
    const service = app.service('secframework');

    assert.ok(service, 'Registered the service (secframework)');
  });
});
