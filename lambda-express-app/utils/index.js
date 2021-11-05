
const PARAMS = {
    xRequestIdTTL: 60,
    basePath: '/api',
    supportedVersions:['v1'],
    currentVersion:'v1'
};

const catchAsync = fn => (req, res, next) => {
    const routePromise = fn(req,res, next);
    if(routePromise.catch){
        routePromise.catch(err=> next(err));
    }
};


module.exports = {
    catchAsync,
    PARAMS
};

