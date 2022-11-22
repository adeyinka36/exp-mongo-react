const errorMiddleware = (err, req, res, next) => {
    const statusCode = err.status ? err.status : 500;
    res.status(statusCode);

    res.json({
        message: err.message,
        stack: process.env.envronment  === 'Production' ? null : err.stack
    })

}


module.exports = errorMiddleware;