class LogoutController {
    index(req, res, next) {
        req.session.isAuthenticated = false;
        req.session.authUser = null;
        res.redirect('/')
    }
}

module.exports = new LogoutController();