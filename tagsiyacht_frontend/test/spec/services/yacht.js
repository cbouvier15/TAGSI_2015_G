'use strict';

describe('Service: Yacht', function () {

  // load the service's module
  beforeEach(module('app'));

  // instantiate service
  var Yacht;
  beforeEach(inject(function (_Yacht_) {
    Yacht = _Yacht_;
  }));

  it('should do something', function () {
    expect(!!Yacht).toBe(true);
  });

});
