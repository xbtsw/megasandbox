var consts = require('consts.js').consts;

var parseDates = function(startDate, endDate){
    var startTime = startDate === undefined || startDate === null ? 
            Math.max(0, new Date().getTime() - consts.MS_PER_DAY * consts.MAX_RESULTS) : 
            parseInt(startDate),
            
        endTime = endDate === undefined ? 
            new Date().getTime() : 
            parseInt(endDate);
            
    return {
        "startTime":startTime, 
        "endTime":endTime
    };
};

var getRandomLogins = function getRandomLogins(baseRange, useLevel, modifier) {
    modifier = modifier || 1;
    
    return (Math.round(((Math.random() * consts.VOLUME + consts.VARIANCE) * baseRange * useLevel) * modifier)).toString();
};

var getRandomLogin = function getRandomLogins(dateRange) {
    var day = new Date(),
        randomOffset = Math.round(Math.random() * dateRange);
        
    return day.setDate(day.getDate() - randomOffset).toString(); 
};

var getRandomGrade = function getRandomGrade() {
    //return Math.round(Math.random() * 10000) / 10000;
    var temp = Math.round(Math.random() * 10000) / 10000;
    if (temp <= 0.4){
        temp = temp + 0.5;
    }
    return temp;
};

var getUsers = function getUsers(orgUnit, userId){
    //return userId ? [userId] : ((orgUnit === "6689") ? consts.USER_IDS.LARGE : consts.USER_IDS.SMALL);
    if (orgUnit==="6609"){
        return consts.USER_IDS.COURSE1;
    }
    if (orgUnit==="6613"){
        return consts.USER_IDS.COURSE2;
    }
};

module.exports = {
    'parseDates': parseDates,
    'getRandomLogins': getRandomLogins,
    'getRandomLogin': getRandomLogin,
    'getRandomGrade': getRandomGrade,
    'getUsers': getUsers
};