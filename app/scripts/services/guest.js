'use strict';

guestlistApp.factory( 'Guest', function( $resource ) {
  var Guest = $resource( 'guests/:guestId.json', {}, {
    query: {method: 'GET', params: {guestId: 'guests'}, isArray: true}
  });

  return Guest;
});
