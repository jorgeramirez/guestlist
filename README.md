# guestlist
A very simple demo app to control the guest list.
Built using [Yeoman](http://yeoman.io) and [AngularJS](http://angularjs.org/).

## Launch the application

Before launching the application you must create a file name `guest.json` inside
`app/guests/` folder. This is where the application data resides. Put something
like the following in it:
  
```javascript
  [
    {"tableNumber": "1", "description": "foo", "present": false, "qty": "4"},
    {"tableNumber": "2", "description": "bar", "present": false, "qty": "6"}
  ]
```

The first time the application is launched, `guests.json`, is read and saved into
`localStorage`. Currently if your `guests.json` changes, you must do `localStorage.clear();`
before reloading the app (I will change this in the future =D).

Finally to launch the app, issue the following
    
    $ cd guestlist/
    $ yeoman server
