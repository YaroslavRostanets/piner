const express = require('express')
const app = express()
const {getPage} = require('./actions')
const PORT = process.env.PORT || 3000
const {getRandomArbitrary, delay} = require('./utils')

app.use(express.static('public'));
app.get('/', function (req, res) {
  res.send('Hello World!')
})

const asyncIterable = {
  [Symbol.asyncIterator]() {
    return {
      async next() {
        await getPage();
        const pause = getRandomArbitrary(1000, 60000);
        await delay(pause);
        return Promise.resolve({ done: false });
      }
    };
  }
};

(async function() {
  for await (let page of asyncIterable) {
    console.log(page);
  }
})();

app.listen(PORT)