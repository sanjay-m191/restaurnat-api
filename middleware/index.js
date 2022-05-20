const admin = require('../firebase-auth');

class Middleware {
    async decodeToken(req ,res, next){
        const token = req.headers.auth;
        return next()
/*         try{
            const decoded = await admin.auth().verifyIdToken(token);
            if(decoded){
                return next();
            }
            return res.json({code: 405,message: 'unauthorized'});
        }
        catch{
            return res.json({code: 403 ,message: 'internal error'});
        } */
    }
}

module.exports = new  Middleware();