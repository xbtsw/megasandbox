var consts = require('../Common/consts.js').consts,
    getRandomLogins = require('../Common/utils.js').getRandomLogins;

var generate = function generate() {
    var results = {},
        endDate = new Date(Date.now()).setUTCHours(0,0,0,0),
        //hard coding startDate to be 10 days ago
        startDate = new Date(endDate - (consts.MS_PER_YEAR-consts.MS_PER_DAY*355)).setUTCHours(0,0,0,0),
        //startDate = new Date(endDate - consts.MS_PER_YEAR).setUTCHours(0,0,0,0),
        dateDiff = endDate - startDate,
        roleIds = consts.ROLE_IDS;
        
    
    numVals = Math.floor(dateDiff / consts.MS_PER_DAY);

    for(var j = 0; j <  roleIds.length; j++){
        var role = roleIds[j];
        results[role.id] = {};
        for (var k = 0; k<=numVals; k++){

            var currTimestamp = startDate + consts.MS_PER_DAY * k;
            currTimestamp = currTimestamp + 14400000;

            
            var currDate = new Date(currTimestamp).getDate();
            var currMonth = new Date(currTimestamp).getMonth();
            var currYear = new Date(currTimestamp).getFullYear();
            
            //gave up on figuring out how to adjust time stamps to account for daylight savings time
            //instead, shortened the time window to reduce the time users will see abstract art (should only be 2 weeks per year)
            /*
            //subtract one hour for "spring forward" on Mar 8, 2015
            if(currYear==2015 && currMonth==2 && currDate==8){
               currTimestamp = currTimestamp - consts.MS_PER_HOUR; 
            }
            
            //add one hour for "fall back" on Nov 1, 2015
            if(currYear==2015 && currMonth==10 && currDate==1){
               currTimestamp = currTimestamp + consts.MS_PER_HOUR;
            }
            
            //subtract one hour for "spring forward" on Mar 13, 2016
            if(currYear==2016 && currMonth==2 && currDate==13){
               currTimestamp = currTimestamp - consts.MS_PER_HOUR;
            }
            
            //add one hour for "fall back" on Nov 6, 2016
            if(currYear==2016 && currMonth==10 && currDate==6){
               currTimestamp = currTimestamp - consts.MS_PER_HOUR; 
            }*/
            
            
            
            var day = new Date(currTimestamp).getDay();

            results[role.id][currTimestamp] = getRandomLogins(100, role.useLevel, consts.DAY_WEIGHTS[day]);
        }
    }
    
    return results;
};

module.exports = {
    'generate': generate
};