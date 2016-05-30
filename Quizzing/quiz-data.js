var consts = require('../Common/consts.js').consts;

var generate = function generate(orgUnit, start, end) {
    var results = {},
        startDate = new Date(start).setUTCHours(0,0,0,0),
        endDate = new Date(end).setUTCHours(0,0,0,0);

        
    results[orgUnit] = {
        "Quiz": {}
    };
    
    
    results[orgUnit]["Quiz"] = {};
    //results[orgUnit]["Quiz"][startDate] = Math.floor((Math.random() * 100) + 1).toString();
    
    results[orgUnit]["Quiz"][startDate] = "5";
    
    return results;
};

module.exports = {
    'generate': generate,
};