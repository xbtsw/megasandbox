var consts = require('../Common/consts.js').consts;

var generate = function generate(orgUnit){

    var allData = {};
    
    allData[orgUnit] = {};

    for(var i =0; i<consts.ROLE_IDS.length; i++){
        var role = consts.ROLE_IDS[i];
        allData[orgUnit][role.id] = {};
        for (var j = 0; j<role.tools.length; j++){
            var tool = role.tools[j];
            allData[orgUnit][role.id][tool.id] = {};
            var date = Date.now();
            for(var k = date - consts.MS_PER_YEAR; k <= date; k += consts.MS_PER_DAY){
                allData[orgUnit][role.id][tool.id][k] = Math.floor((Math.random() * 100 * tool.useLevel * role.useLevel) + 1).toString();
            }
        }
    }

    return allData;
    
};



module.exports = {
    'generate': generate,
};