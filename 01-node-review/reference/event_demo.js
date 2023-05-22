const eventEmitter = require('events');

// create class
class MyEmitter extends eventEmitter {}

// init object

const myEmitter = new MyEmitter();

// Event listener
myEmitter.on('event', () => console.log('Event fired'));

// Init event
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');
