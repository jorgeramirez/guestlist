'use strict';

describe('Controller: MainCtrl', function() {

  // load the controller's module
  beforeEach(module('guestlistApp', ['ngResource']));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller){
    scope = {};
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of guests to the scope', function() {
    expect(scope.guests.length).toBe(159);
  });
});
