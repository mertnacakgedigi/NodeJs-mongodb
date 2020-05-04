const db = require('../models')


// async function create(req,res) {
//     try{
//         let user = await db.User.findById(req.body.user);
//         let newRequest = await db.Request.create(req.body);

//         user.requests.push(newRequest._id);
//         await user.save();
//         let json = await [newRequest,user]

//         res.json(json)
//     }
//     catch (err) {
//         console.log(`Create Rating Error:`, err);
//         res.sendStatus(500);
//       }
// }



// module.exports = {
//     create,
// }