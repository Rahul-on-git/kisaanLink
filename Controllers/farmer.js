exports.login = (req, res, next) =>{
    let farmerContact = req.body.farmerContact;
    let farmerPass = req.body.farmerPass;
}

exports.takeProduceDetails = (req, res, next) =>{

    let produceType = req.body.produceType;
    let produceQuantity = req.body.produceQuantity;
    let producePerishability = req.producePerishability;
    let produceDesiredPrice = req.producePerishability;

    res.status(202);

}

exports.signup = (req, res, next) =>{
    let farmerName = req.body.farmerName;
    let farmerContact = req.body.farmerContact;
    let farmerLocation = req.body.farmerLocation;
    let farmerPass = req.body.farmerPass;
}