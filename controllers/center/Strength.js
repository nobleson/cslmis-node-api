// External Dependancies

// Get Data Models
const Strength = require('../../models/center/Strength')

exports.create = (req, res) => {
    // Validate request
    //console.log("content in json:  "+JSON.stringify(req.body));

    const centerStrength = new Strength(req.body);

    // Save centerStrength in the database
    centerStrength.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the centerStrength."
        });
    });
};

exports.findAll = (req, res) => {
    Strength.find()
    .then(centerStrength => {
        res.send(centerStrength);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
};
exports.findOne = (req, res) => {
    Strength.findById(req.params.centerStrengthId)
    .then(centerStrength => {
        if(!centerStrength) {
            return res.status(404).send({
                message: "centerStrength not found with id " + req.params.centerStrengthId
            });            
        }
        res.send(centerStrength);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "centerStrength not found with id " + req.params.centerStrengthId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.centerStrengthId
        });
    });
};

exports.update = (req, res) => {
 
    const id = req.params.centerStrengthId
    const art = req.body
    const { ...updateData } = art
    Strength.findByIdAndUpdate(id,updateData,{new: true})
    .then(centerStrength => {
        if(!centerStrength) {
            return res.status(404).send({
                message: "centerStrength not found with id " + req.params.centerStrengthId
            });
        }
        res.send(centerStrength);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "centerStrength not found with id " + req.params.centerStrengthId
            });                
        }
        return res.status(500).send({
            message: "Error updating note with id " + req.params.centerStrengthId
        });
    });
};
exports.delete = (req, res) => {
    Strength.findByIdAndRemove(req.params.centerStrengthId)
    .then(centerStrength => {
        if(!centerStrength) {
            return res.status(404).send({
                message: "centerStrength not found with id " + req.params.centerStrengthId
            });
        }
        res.send({message: "centerStrength deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "centerStrength not found with id " + req.params.centerStrengthId
            });                
        }
        return res.status(500).send({
            message: "Could not delete note with id " + req.params.centerStrengthId
        });
    });
};