const db = require('../models')



async function create(req,res) {
    try{
        let user = await db.User.findById(req.body.user);
        let newRequest = await db.Request.create(req.body);

        user.requests.push(newRequest._id);
        await user.save();
        let json = await [newRequest,user]

        res.json(json)
    }
    catch (err) {
        console.log(`Create Request Error:`, err);
        res.sendStatus(500);
    }
}

async function indexRequest(req,res) {
    try{
       let allRequest = await db.Request.find()
       res.json(allRequest)

    }
    catch (err) {
        console.log(`Index Request Error:`, err);
        res.sendStatus(500);
    }
}



module.exports = {
    create,
    indexRequest
}