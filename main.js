var generateCourseAccessData = require('CourseAccess/course-access-data.js').generate,
    generateToolAccessData = require('ToolAccess/tool-access-data.js').generate,
    generateTotalLoginsData = require('TotalLogins/total-logins-data.js').generate,
    generateToolAccessDataCourse = require('ToolAccess/tool-access-data-course.js').generate,
    generateQuizData = require('Quizzing/quiz-data.js').generate,
    utils = require('Common/utils.js'),
    generateCourseAccessLastDayData = require('CourseAccess/course-access-data.js').generateLast,
    generateGradesData = require('Grades/grades-data.js').generate,
    generatePredictedGradesData = require('Grades/predicted-grades-data.js').generate;
    generateDiscussionsData = require('Discussions/discussions-data.js').generate;

/*// Last Day of Course Access of specified user for Course - NEW ROUTE
Sandbox.define('/v1/aggregates/10000/data/{orgUnitId}/{userId}','GET', function(req, res) {
    var result = generateCourseAccessLastDayData(req.params.orgUnitId, req.params.userId);

    res.type('application/json');
    res.status(200);
    res.json(result);
});*/

// Last Day of Course Access of all users for Course - NEW ROUTE
//Sandbox.define('/v1/aggregates/10000/data/{orgUnitId}','GET', function(req, res) {
Sandbox.define('/v1/aggregates/5/data/{orgUnitId}','GET', function(req, res) {
    var result = generateCourseAccessLastDayData(req.params.orgUnitId);

    res.type('application/json');
    res.status(200);
    res.json(result);
    
    //res.json({"6613":{"175":{"0":"/Date(1461166825000)/"},"178":{"0": "/Date(1461166825000)/"}}});
    //res.json({});
    
});

// Current Grade of all users for Course - NEW ROUTE
//Sandbox.define('/v1/aggregates/20000/data/{orgUnitId}','GET', function(req, res) {
Sandbox.define('/v1/aggregates/6/data/{orgUnitId}','GET', function(req, res) {
    var result = generateGradesData(req.params.orgUnitId);

    res.type('application/json');
    res.status(200);
    res.json(result);
});

// Predicted Grade of all users for Course - NEW ROUTE
//Sandbox.define('/v1/aggregates/30000/data/{orgUnitId}','GET', function(req, res) {
Sandbox.define('/v1/aggregates/8/data/{orgUnitId}','GET', function(req, res) {
    var result = generatePredictedGradesData(req.params.orgUnitId);

    res.type('application/json');
    res.status(200);
    res.json(result);
});

// Threads started
//Sandbox.define('/v1/aggregates/40000/data/{orgUnitId}','GET', function(req, res) {
Sandbox.define('/v1/aggregates/15/data/{orgUnitId}','GET', function(req, res) {
    var dates = utils.parseDates(req.query.startTime, req.query.endTime);
    
    var result = generateDiscussionsData(req.params.orgUnitId, dates.startTime, dates.endTime);

    res.type('application/json');
    res.status(200);
    res.json(result);
});

// Posts replied to
//Sandbox.define('/v1/aggregates/50000/data/{orgUnitId}','GET', function(req, res) {
Sandbox.define('/v1/aggregates/16/data/{orgUnitId}','GET', function(req, res) {
    var dates = utils.parseDates(req.query.startTime, req.query.endTime);
    
    var result = generateDiscussionsData(req.params.orgUnitId, dates.startTime, dates.endTime);

    res.type('application/json');
    res.status(200);
    res.json(result);
});

//COURSE ACCESS - OLD ROUTE
Sandbox.define('/d2l/api/adp/unstable/aggregatedEvents/null/{orgId}/Course Offering','GET', function(req, res) {
    var dates = utils.parseDates(req.query.startTime, req.query.endTime);
    
    var result = generateCourseAccessData(req.params.orgId, undefined, dates.startTime, dates.endTime);

    res.type('application/json');
    res.status(200);
    res.json(result);
});

//COURSE ACCESS - NEW ROUTE
Sandbox.define('/v1/aggregates/7/data/{orgId}/Course%20Offering', 'GET', function(req, res) {
    var dates = utils.parseDates(req.query.startTime, req.query.endTime);
    
    var result = generateCourseAccessData(req.params.orgId, undefined, dates.startTime, dates.endTime);

    res.type('application/json');
    res.status(200);
    res.json(result);
});

//COURSE ACCESS - NEW ROUTE - null
Sandbox.define('/v1/aggregates/null/data/{orgId}/Course%20Offering', 'GET', function(req, res) {
    var dates = utils.parseDates(req.query.startTime, req.query.endTime);
    
    var result = generateCourseAccessData(req.params.orgId, undefined, dates.startTime, dates.endTime);

    res.type('application/json');
    res.status(200);
    res.json(result);
});

//QUIZZING - NEW ROUTE
Sandbox.define('/v1/aggregates/14/data/{orgId}/Quiz?start={startTime}&end={endTime}', 'GET', function(req, res) {
    var dates = utils.parseDates(req.query.startTime, req.query.endTime);
    
    var result = generateQuizData(req.params.orgId, dates.startTime, dates.endTime);

    res.type('application/json');
    res.status(200);
    res.json(result);
});

//TOOL ACCESS ORG LEVEL - OLD ROUTE
Sandbox.define('/d2l/api/adp/unstable/aggregatedEvents/1','GET', function(req, res) {
    var result = generateToolAccessData();

    res.type('application/json');
    res.status(200);
    res.json(result);
});

//TOOL ACCESS ORG LEVEL - NEW ROUTE
Sandbox.define('/v1/aggregates/1/data','GET', function(req, res) {
    var result = generateToolAccessData();

    res.type('application/json');
    res.status(200);
    res.json(result);
});

//TOOL ACCESS COURSE LEVEL - OLD ROUTE
Sandbox.define('/d2l/api/adp/unstable/aggregatedEvents/2/{orgID}','GET', function(req, res) {
    var result = generateToolAccessDataCourse(req.params.orgID);

    res.type('application/json');
    res.status(200);
    res.json(result);
});

//TOOL ACCESS COURSE LEVEL - NEW ROUTE
Sandbox.define('/v1/aggregates/2/data/{orgID}','GET', function(req, res) {
    var result = generateToolAccessDataCourse(req.params.orgID);

    res.type('application/json');
    res.status(200);
    res.json(result);
});

//TOTAL LOGINS - OLD ROUTE
Sandbox.define('/d2l/api/adp/unstable/aggregatedEvents/3','GET', function(req, res) {
    var result = generateTotalLoginsData();

    res.type('application/json');
    res.status(200);
    res.json(result);
});

//TOTAL LOGINS - NEW ROUTE
Sandbox.define('/v1/aggregates/3/data','GET', function(req, res) {
    var result = generateTotalLoginsData();

    res.type('application/json');
    res.status(200);
    res.json(result);
});