'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./thirdweb-dev-storage.cjs.prod.js");
} else {
  module.exports = require("./thirdweb-dev-storage.cjs.dev.js");
}
