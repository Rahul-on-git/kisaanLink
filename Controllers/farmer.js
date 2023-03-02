//  Auth
exports.login = (req, res, next) =>{
    let farmerContact = req.body.farmerContact;
    let farmerPass = req.body.farmerPass;
    res.status(202);
    res.json({mess: "Log in successful"});
}

exports.signup = (req, res, next) =>{
    let farmerName = req.body.farmerName;
    let farmerContact = req.body.farmerContact;
    let farmerLocation = req.body.farmerLocation;
    let farmerPass = req.body.farmerPass;

    res.json({mess: "Sign up succesful"})
    res.status(202);
}

exports.currentUser = (req, res, next) =>{

    res.status(202);
    res.json({mess:"Current user is identified"});
}


//  Functions
exports.takeProduceDetails = (req, res, next) =>{

    let produceType = req.body.produceType;
    let produceQuantity = req.body.produceQuantity;
    let producePerishability = req.producePerishability;
    let produceDesiredPrice = req.producePerishability;

    res.status(202);
}