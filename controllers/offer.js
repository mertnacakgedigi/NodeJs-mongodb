const db = require('../models')



async function create(req,res) {
    try{
        let user = await db.User.findById(req.body.user);
        let newOffer = await db.Offer.create(req.body);
        let request = await db.Request.findById(req.params.id)

        user.requests.push(newOffer._id);
        await user.save();
        request.offer.push(newOffer._id)
        await request.save()
        let json = await [newOffer,user,request]

        res.json(json)
    }
    catch (err) {
        console.log(`Create Request Error:`, err);
        res.sendStatus(500);
    }
}

module.exports = {
    create,
}