module.export = {
    catch404: (req, res, next) => {
        let err = new Error('Not Found');
        err.status = 404;
        next(err);
    },
    errorHandler: (err, req, res, next) => {
        res.locals.message = err.message;
        res.status (err.status || 500).send('Internal server error !');
        next();
    }
     
}