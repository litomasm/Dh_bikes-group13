const authMiddleware = function(req, res, next){
    if (req.session.email){
        return next();
    }
    res.redirect("/user/login");
}

module.exports = authMiddleware;