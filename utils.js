module.exports.getRandomArbitrary = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}

module.exports.delay = (time) => {
    return new Promise(function(resolve) { 
        setTimeout(resolve, time)
    });
 }