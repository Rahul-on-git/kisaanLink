const TruckDriver = require('../models/truckDriver');
const bcrypt = require('bcrypt');

//  Auth
exports.login = (req, res, next) => {
    let truckDriverContact = req.body.truckDriverContact;
    let truckDriverPass = req.body.truckDriverPass;
    res.status(202);
    res.json({ mess: "Log in successful" });
}

exports.signup = (req, res, next) => {
    let truckDriverName = req.body.truckDriverName;
    let truckDriverContact = req.body.truckDriverContact;
    let truckDriverLocation = req.body.truckDriverLocation;
    let truckDriverPass = req.body.truckDriverPass;

    if ( truckDriverName ||  truckDriverContact ||  truckDriverLocation ||  truckDriverPass) {
        res.status(400);
        throw new Error("All fields are mandatory");
    }

    TruckDriver.findOne({ truckDriverContact })
        .then(exists => {
            if (exists) {
                res.status(400);
                throw new Error("User already exists");
            }
        })

    let hashedPass;

    bcrypt.hash(truckDriverPass, 10)
        .then((hashedPass) => {
            const truckDriver = new truckDriver({ truckDriverName: truckDriverName, truckDriverContact: truckDriverContact, truckDriverLocation: truckDriverLocation, truckDriverPass: hashedPass });
         truckDriver
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

//Functions