const passport = require('passport')
const bcrypt   = require('bcrypt');
const { User } = require('../models');

//---------------------------------------------------------------------------------
exports.signUp = async (req, res, next) => {
    const { email, password, phone, userType } = req.body;
    try {
        const exUser  = await User.findOne({ where: { email } }); 
        const exAdmin = await User.findAll({ where: { userType: 2 } }); 
        if (exUser) {
            return res.redirect('/auth/signup?error=exist');
        }
        // let userType = 0
        if (exAdmin[0]) {
            userType = 1;
        }
        const pwHash = await bcrypt.hash(password, 12);
        await User.create({ 
            email, 
            password: pwHash, 
            phone, 
            userType 
        });
            console.log('sign_up succeed')
        return res.redirect('/auth/login'); // sign_up succeed

    } catch (error){
        console.error(error);
        next(error); 
    };
};
//---------------------------------------------------------------------------------
exports.login = (req, res, next) => {
    passport.authenticate('local', (authError, user, info) => {
        if (authError) {
            console.error(authError);
            return next(authError);
        }
        if (!user) {    
            return res.redirect(`/?loginError=${info.message}`);
        }
        return req.login(user, (loginError) => { 
            if (loginError) {  
                console.error(loginError);
                return next(loginError);
            }
            console.log('login succeed')
            return res.redirect('/'); // login succeed
        });
    })(req, res, next);
};

//---------------------------------------------------------------------------------
exports.logout = (req, res, next) => { 
    try {
        req.logout(() => {
            console.log('logout succeed')
            res.redirect('/'); // logout succeed
        })
    } catch (err) {
        res.status(400).json({ message: err.message });
        next(err);
    };
};

//---------------------------------------------------------------------------------
exports.withdrawal = async (req, res, next) => {
    const { password, passwordConfirm } = req.body;
    try {
        if (password === passwordConfirm) {
            const pwCompare = await bcrypt.compare(password, req.user.password);
            if (pwCompare) {
                await User.destroy({ where: { email: req.user.email } });
                // return res.redirect('/auth/logout');  // withdrawal succeed
                req.logout(() => {
                    console.log('logout succeed')
                    return res.redirect('/'); // logout succeed
                })
                // return res.redirect('/');  // withdrawal succeed
            };
        } else if (password !== passwordConfirm) {
            return res.render('/withdrawal', message = '비밀번호 확인이 틀렸습니다.'); // => 이건 프론트로 빼기
        } else {
            return res.render('/withdrawal', message = '비밀번호를 확인하세요');
        };
    } catch (err) {
        res.status(400).json({ message: err.message });
        return next();
    };
};