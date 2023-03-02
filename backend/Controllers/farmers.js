const Farmer = require('../models/farmer');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
// const asyncHandler = require('express-async-handler');

//  Auth
exports.login = (req, res, next) => {
    let farmerContact = req.body.farmerContact;
    let farmerPass = req.body.farmerPass;

    if(!farmerContact || !farmerPass){
        res.status(400)
        throw new Error("Empty Email or Password");
    }

    Farmer.findOne({ farmerContact })
        .then( farmerCont => {
            if(!farmerCont){
                res.status(401);
                throw new Error("farmer contact not found");
            }
            bcrypt.compare(farmerPass, farmerCont.farmerPass)
            .then(compareVal=>{
                if ( ( compareVal )) {
                    accessToken = jwt.sign({
                        Farmer:{
                            farmerContact: farmerCont.farmerContact,
                            farmerName: farmerCont.farmerName
                        }
                    }, "kisaanLink",
                    {expiresIn: "1440"}
                    );
                    res.status(200).json(accessToken);
                }
                else{
                    res.status(401);
                    throw new Error("Email or Password not matched")
                }
            })})
}

exports.signup = (req, res, next) => {
    let farmerName = req.body.farmerName;
    let farmerContact = req.body.farmerContact;
    let farmerLocation = req.body.farmerLocation;
    let farmerPass = req.body.farmerPass;

    if (!farmerName || !farmerContact || !farmerLocation || !farmerPass) {
        res.status(400);
        throw new Error("All fields are mandatory");
    }

    Farmer.findOne({ farmerContact })
        .then(exists => {
            if (exists) {
                res.status(400);
                throw new Error("User already exists");
            }
        })

    let hashedPass;

    bcrypt.hash(farmerPass, 10)
        .then((hashedPass) => {
            const farmer = new Farmer({ farmerName: farmerName, farmerContact: farmerContact, farmerLocation: farmerLocation, farmerPass: hashedPass });
            farmer
                .save()
                .then(() => {
                    res.json({ mess: "Sign up succesful" })
                    res.status(202);
                })
                .catch((err) => { console.log(err) })
        })

}

exports.currentUser = (req, res, next) => {

}


//  Functions
exports.takeProduceDetails = (req, res, next) => {

    let produceType = req.body.produceType;
    let produceQuantity = req.body.produceQuantity;
    let producePerishability = req.producePerishability;
    let produceDesiredPrice = req.produceDesiredPrice;
    res.status(202);
}