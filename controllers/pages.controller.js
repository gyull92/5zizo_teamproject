exports.renderMain = (req, res, next) => {
    try {
        res.render('main');
    } catch (err) {
        res.status(400).json({ message: err.message });
        next(err);
    }
}; 

exports.renderSignUp = (req, res, next) => {
    try {
        res.render('signup');
    } catch (err) {
        res.status(400).json({ message: err.message });
        next(err);
    }
}; 

exports.renderLogin = (req, res, next) => {
    try {
        res.render('login');
    } catch (err) {
        res.status(400).json({ message: err.message });
        next(err);
    }
};  

exports.renderProfile = (req, res, next) => {
    try {
        res.render('profile');
    } catch (err) {
        res.status(400).json({ message: err.message });
        next(err);
    }
};  

exports.renderAdminInProfile = (req, res, next) => {
    try {
        res.render('adminInprofile');
    } catch (err) {
        res.status(400).json({ message: err.message });
        next(err);
    }
}; 

exports.renderWithdrawal = (req, res, next) => {
    try {
        res.render('withdrawal');
    } catch (err) {
        res.status(400).json({ message: err.message });
        next(err);
    }
};