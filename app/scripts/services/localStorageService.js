'use strict';

guestlistApp.factory('LocalStorageService', function() {
  var LocalStorageService = {},
      lsPrefix = guestlistApp.settings.lsPrefix;

  function isSupported() {
    try{
      return ( 'localStorage' in window && window.localStorage !== null );
    }catch( e ){
      return false;
    }
  }

  LocalStorageService.get = function( key ) {
    if( !isSupported() ){
      //TODO
      return false;
    }
    return localStorage.getItem( lsPrefix + key );
  };
  
  LocalStorageService.set = function( key, value ) {
    if( !isSupported() ){
      //TODO
      return false;
    }
    localStorage.setItem(lsPrefix + key, value );
  };

  return LocalStorageService;
});
