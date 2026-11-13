// Load the configuration for the current environment.
// Development loads development.js; production loads production.js.

module.exports = require('./env/' + process.env.NODE_ENV);