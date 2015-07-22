var Vertx  = require("vertx-js/vertx");
var config = vertx.getOrCreateContext().config();
console.log(JSON.stringify(config));
