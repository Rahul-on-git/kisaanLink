const Buyer = require('../models/buyer');

//  Auth
exports.login = (req, res, next) => {
    let buyerContact = req.body.buyer.Contact;
    let buyerPass = req.body.buyer.Pass;
    res.status(202);
    res.json({ mess: "Log in successful" });
}

exports.signup = (req, res, next) => {
    let buyerName = req.body.buyer.Name;
    let buyerContact = req.body.buyer.Contact;
    let buyerLocation = req.body.buyer.Location;
    let buyerPass = req.body.buyer.Pass;

    if(!buyer.Name || !buyer.Contact || !buyer.Location || !buyer.Pass){
        res.status(400);
        throw new Error("All fields are mandatory");
    }

    const userAvailable = Buyer.findOne({buyerContact})

    Buyer.findOne({ buyerContact })
        .then(exists => {
            if (exists) {
                res.status(400);
                throw new Error("User already exists");
            }
        })   

    let hashedPass;

    bcrypt.hash(buyerPass, 10)
        .then((hashedPass) => {
            const buyer = new Buyer({ buyerName: buyerName, buyerContact: buyerContact, buyerLocation: buyerLocation, buyerPass: hashedPass });
            buyer
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

exports.displayProducts = (req, res, next) =>{
    res.status(202);
}