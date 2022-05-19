const admin = require('../firebase-auth');

class Middleware {
    async decodeToken(req ,res, next){
        const token = req.headers.auth;
        const decoded = await admin.auth().verifyIdToken(token);
        if(decoded){
            return next();
        }
        return res.json({message: 'unauthorized'});
    }
}

module.exports = new  Middleware();