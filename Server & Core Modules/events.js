// Events
const EventEmitter = require('events');

const emitter = new EventEmitter();

// register a listener for bellRing event
emitter.on('bellRing', ({ period, text }) => {
    console.log(`Run Nodejs Run because ${period} ${text}`);
});

// raise an event
setTimeout(() => {
    emitter.emit('bellRing', {
        period: 'first',
        text: 'period ended',
    });
}, 2000);
