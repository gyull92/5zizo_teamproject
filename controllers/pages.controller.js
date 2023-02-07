const { Product } = require('../models');
const { User } = require('../models');

// The main page shows the all product list.
exports.renderMain = async (req, res, next) => {
    try {
        res.render('main');
        
    } catch (error) {
        res.status(400).json({ errorMessage: error.message });
        return next(error);
    };
};

exports.renderProductList = async (req, res, next) => {
    try {
        const productList = await Product.findAll({
            order: [["createdAt", "DESC"]],
            attributes: { exclude: ['createdAt', 'updatedAt'] }
        });
        console.log('productList ----------------',  productList )
        res.status(200).json({ result: 'success', productList: productList });

    } catch (error) {
        res.status(400).json({ errorMessage: error.message });
        return next(error);
    };
};   

exports.renderSignUp = async (req, res, next) => {
    try {     
        const exAdmin = await User.findAll({ where: { userType: 2 } }); 
        console.log("exAdmin-----", exAdmin)
        if (exAdmin[0]) {
            // return res.status(200).json({ result: 'Exist' });
            return res.render('signup', { result: 'Exist' });
        }
        return res.render('signup', { result: 'Does not exist' });

    } catch (err) {
        return res.status(400).json({ message: err.message });
        // next(err);
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

exports.renderWithdrawal = (req, res, next) => {
    try {
        res.render('withdrawal');
    } catch (err) {
        res.status(400).json({ message: err.message });
        next(err);
    }
};

// Only general users can access -----------------------------------------------------------------------
exports.renderCart = (req, res, next) => {
    try {
        res.render('cartList')
    } catch (err) {
        res.status(400).json({ message: err.message });
        next(err);
    }
}

exports.renderProfile = (req, res, next) => {
    try {
        res.render('profile');
    } catch (err) {
        res.status(400).json({ message: err.message });
        next(err);
    }
};  

// Only admin can access -------------------------------------------------------------------------------
exports.renderAdminInProfile = (req, res, next) => {
    try {
        res.render('adminInprofile');
    } catch (err) {
        res.status(400).json({ message: err.message });
        next(err);
    }
};

exports.renderProductAdd = (req, res, next) => {
    try {
        res.render('productAdd');
    } catch (err) {
        res.status(400).json({ message: err.message });
        next(err);
    }
};

