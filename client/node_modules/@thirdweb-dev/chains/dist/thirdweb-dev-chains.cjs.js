'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./thirdweb-dev-chains.cjs.prod.js");
} else {
  module.exports = require("./thirdweb-dev-chains.cjs.dev.js");
}
