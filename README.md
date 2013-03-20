meteor-event-horizon
====================

A basic reactive event system for Meteor.  I've found that I often want to have one or more callbacks run when the application's reactive state reaches a particular point (such as logged in).  This framework allows you to do that.  You can set up reactive functions that will fire an event when a function you specify returns true, and then add callbacks to that event.  Here's a brief example:

```javascript
EventHorizon.fireWhenTrue('loggedIn',function(){
  return Meteor.userId() !== null;
});

EventHorizon.on('loggedIn',function(){
  console.log('The user just logged in.');
});

EventHorizon.on('loggedIn',function(){
  console.log('This function will also run when the event is fired.');
});

// Session.truthTester(key) returns a function that returns Session.isTrue(key).
// Those helpers are defined in the session-extras library.
EventHorizon.fireWhenTrue('loadedFacebook',Session.truthTester('loadedFacebook'));

EventHorizon.on('loadedFacebook',function(){
  $('.modal.facebook-dialog').open();
});

EventHorizon.fire('manual-event');

EventHorizon.on('manual-event',function(){
  console.log('Events can also be triggered manually');
});
```

The triggers and handlers for a particular event can all be stopped by running `EventHorizon.removeEvent(eventName)`.  __NOTE:__ currently, if you remove an event from inside a handler for that event, then you must have run `EventHorizon.fireWhenTrue` or `EventHorizon.fireWhenEqual` __before__ `EventHorizon.on` for that event; otherwise the event will not be properly removed.

This library works well with the [session-extras](https://github.com/belisarius222/meteor-session-extras) library, which provides some closures like `Session.getter` that are useful for associating changes to Session variables with events.
