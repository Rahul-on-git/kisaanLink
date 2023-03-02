const Farmer = require('../models/farmer');
const bcrypt = require('bcrypt');

//  Auth
exports.login = (req, res, next) => {
    let farmerContact = req.body.farmerContact;
    let farmerPass = req.body.farmerPass;
    res.status(202);
    res.json({ mess: "Log in successful" });
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

    res.status(202);
    res.json({ mess: "Current user is identified" });
}


//  Functions
exports.takeProduceDetails = (req, res, next) => {

    let produceType = req.body.produceType;
    let produceQuantity = req.body.produceQuantity;
    let producePerishability = req.producePerishability;
    let produceDesiredPrice = req.produceDesiredPrice;

    res.status(202);
}