'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./thirdweb-dev-auth.cjs.prod.js");
} else {
  module.exports = require("./thirdweb-dev-auth.cjs.dev.js");
}
