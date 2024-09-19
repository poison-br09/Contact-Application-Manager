const constants = require("../../constant");
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500; // Use res.statusCode
    res.status(statusCode); // Set the response status code

    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.json({
                title:"Validation Failed",
                message:err.message,
                stackTrace: err.stack
            });
            break;
        case constants.NOT_FOUND:
            res.json({
                title:"Not Found",
                message:err.message,
                stackTrace: err.stack
            });    
        default:
            console.log("No Error all good!")
            break;
    }
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack // Show stack trace only in development
    });
};

module.exports = errorHandler;
