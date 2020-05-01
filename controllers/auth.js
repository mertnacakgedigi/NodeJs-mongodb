const db = require('../models')
const bcrypt = require('bcrypt')

const register = (req, res) => {
    
    if(!req.body.email || ! req.body.password) {
        return res.status(400).json({
            status : 400,
            message : 'Please enter a name and password'
        })
    }

    db.User.findOne({ email : req.body.email},(err,foundUser)=>{


        if(err) return res.status(500).json({
            status:500,
            message: `There is error here ${err}` 
        })
            
        

        if(foundUser) return res.status(400).send({
            status : 400,
            message : 'This name already exists. Please try with new one '
        })

        bcrypt.genSalt(10,(err,salt) => {
            if(err) return res.status(550).json({
                status : 550, 
                message : `Error here ${err}`
            })

            bcrypt.hash(req.body.password,salt, (err,hash) => {
                if(err) return res.status(530).json({
                    status : 530,
                    message : `Hash errror ${err}`
                })

                const newUser = {
                email : req.body.username,
                password : hash,
                company_name: req.body.company_name,
    
                }

                db.User.create(newUser, (err, savedUser)=> {
                 if(err)  return res.status(510).json({status:510, message : `There is a problem with creatin user ${err}`})
                 
                 res.json(savedUser)
                        
                })

            })
        })
    })
}

