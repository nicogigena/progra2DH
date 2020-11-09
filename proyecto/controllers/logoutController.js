let logoutController = {
    logout: function(req, res){
        req.session.destroy();
        res.clearCookie('userId');
        return res.redirect('/login');
    }
    
}

module.exports = logoutController;