var consts = require('../Common/consts.js').consts,
    getRandomLogins = require('../Common/utils.js').getRandomLogins,
    utils = require('../Common/utils.js');

var generateLast = function generateLast(orgUnit, userId) {
    var results = {},
        userIds = utils.getUsers(orgUnit, userId);

    results[orgUnit] = {};
    
    for(var j = 0; j < userIds.length; j++){
        var user = userIds[j];
        results[orgUnit][user] = { "0": '/Date('+utils.getRandomLogin(consts.DATE_RANGE)+')/' };
        
        //results[orgUnit][user] = { "0": '/Date(1460302825000)/' };
        
        /*if(j==0){
        results[orgUnit][user] = { "0": '/Date(1460302825000)/' };
        }
        if(j==1){
        results[orgUnit][user] = { "0": '/Date(1461166825000)/' };
        }*/
    }
    
    return results;
};

var generate = function generate(orgUnit, roleId, start, end) {
    var results = {},
        startDate = new Date(start).setUTCHours(0,0,0,0),
        endDate = new Date(end).setUTCHours(0,0,0,0),
        dateDiff = endDate - startDate,
        roleIds = consts.ROLE_IDS;
        
    if (roleId){
        roleIds.push(roleId);
    }

    results[orgUnit] = {
        "Course Offering": {}
    };
    
    numVals = Math.floor(dateDiff / consts.MS_PER_DAY);

    for(var j = 0; j < roleIds.length; j++){
        var role = roleIds[j];
        results[orgUnit]["Course Offering"][role.id] = {};
        
        //hard coding k to 10 instead of numVals to shorten the length of time users see "abstract art" due to daylight savings
        for(var k = 10; k >= 0; k--){
            var currTimestamp = endDate - consts.MS_PER_DAY * k;
            currTimestamp = currTimestamp + 14400000;
            
            var day = new Date(currTimestamp).getDay();
            
            //todo: update this to use weighting based on role once role filtering is implemented in the FRA
            results[orgUnit]["Course Offering"][role.id][currTimestamp] = getRandomLogins(100, 0.01, consts.DAY_WEIGHTS[day]);
        }
    }
    
    return results;
};

module.exports = {
    'generate': generate,
    'generateLast': generateLast
};