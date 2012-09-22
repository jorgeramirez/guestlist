'use strict';

guestlistApp.controller( 'MainCtrl', function( $scope, Guest, LocalStorageService ) {
  var guests;

  guests = LocalStorageService.get( 'guests' );
  if( guests === false || guests === null ){
    guests = '[]';
  }
  guests = JSON.parse( guests );
  if( guests.length === 0 ){
    guests = Guest.query(function( data ) {
      LocalStorageService.set( 'guests', JSON.stringify( data ) );
    });
  }

  $scope.guests = guests;

  $scope.updateGuestList = function() {
    LocalStorageService.set( 'guests', JSON.stringify( $scope.guests ) );
  };
});
