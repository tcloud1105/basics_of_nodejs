const EventEmitter = require('events');

// Create Class
class MyEmiiter extends EventEmitter{}

// Init Object
const myEmitter = new MyEmiiter();

// Event Listener
myEmitter.on('event', ()=>{
    console.log('Event Fired');
})

// Init Event
myEmitter.emit('event');