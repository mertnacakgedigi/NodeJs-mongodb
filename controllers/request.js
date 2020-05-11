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

async function profileRequest(req, res) {
    try {
        let user = await db.User.findById(req.params.id)
            .populate('requests')
            .populate({
                path : 'offers',
                populate : {
                    path : "request"
                }
            })
           
        res.json(user)
    }
    catch (err) {
        console.log(`Index Request Error:`, err);
        res.sendStatus(500);
    }
}

async function singleRequest(req,res) {
    try {
        let request = await db.Request.findById(req.params.id)
            .populate({
                path : 'offer',
                populate : {
                  path : 'user'
                }
              })

        res.json(request)
    }
    catch (err) {
        console.log(`Index Request Error:`, err);
        res.sendStatus(500);
    }
}

async function updateRequest(req,res) {
    try {
        let updatedRequest = await db.Request.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new : true
            }
        )

        res.json(updatedRequest)
        
    }
    catch (err) {
        console.log(`Update Request Error:`, err);
        res.sendStatus(500);
      }
}

async function deleteRequest(req,res) {
    try {  
        let deleteRequest = await db.Request.findByIdAndDelete(req.params.id);
        res.json(deleteRequest)

    }

    catch(err){
        console.log(err)
        res.sendStatus(500)
    }
}


module.exports = {
    create,
    indexRequest,
    profileRequest,
    singleRequest,
    updateRequest,
    deleteRequest
}