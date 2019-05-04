// External Dependancies

// Get Data Models
const Center = require('../../models/center/Center')

exports.create = (req, res) => {
    // Validate request
    //console.log("content in json:  "+JSON.stringify(req.body));

    const center = new Center(req.body);

    // Save center in the database
    center.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the center."
        });
    });
};

exports.findAll = (req, res) => {
    Center.find()
    .then(center => {
        res.send(center);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
};
exports.findOne = (req, res) => {
    Center.findById(req.params.centerId)
    .then(center => {
        if(!center) {
            return res.status(404).send({
                message: "center not found with id " + req.params.centerId
            });            
        }
        res.send(center);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "center not found with id " + req.params.centerId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.centerId
        });
    });
};

exports.update = (req, res) => {
 
    const id = req.params.centerId
    const art = req.body
    const { ...updateData } = art
    Center.findByIdAndUpdate(id,updateData,{new: true})
    .then(center => {
        if(!center) {
            return res.status(404).send({
                message: "center not found with id " + req.params.centerId
            });
        }
        res.send(center);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "center not found with id " + req.params.centerId
            });                
        }
        return res.status(500).send({
            message: "Error updating note with id " + req.params.centerId
        });
    });
};
exports.delete = (req, res) => {
    Center.findByIdAndRemove(req.params.centerId)
    .then(center => {
        if(!center) {
            return res.status(404).send({
                message: "center not found with id " + req.params.centerId
            });
        }
        res.send({message: "center deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "center not found with id " + req.params.centerId
            });                
        }
        return res.status(500).send({
            message: "Could not delete note with id " + req.params.centerId
        });
    });
};