const { Interval, io } = require('@interval/sdk');
require('dotenv').config(); // loads environment variables from .env

const interval = new Interval({
  apiKey: process.env.INTERVAL_KEY,
  routes: {
    hello_world: async () => {
      const name = await io.input.text('Enter your name');
      return `Hello, ${name}!`;
    },
  },
});

interval.listen();
