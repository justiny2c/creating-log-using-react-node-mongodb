"use strict";

module.exports = function(app){
    const logEntries = require("./log_entries")
    
    logEntries(app)
}