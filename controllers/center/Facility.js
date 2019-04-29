// External Dependancies

// Get Data Models
const Facility = require('../../models/center/Facility')

exports.create = (req, res) => {
    // Validate request
    //console.log("content in json:  "+JSON.stringify(req.body));

    const centerFacility = new Facility(req.body);

    // Save centerFacility in the database
    centerFacility.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the centerFacility."
        });
    });
};

exports.findAll = (req, res) => {
    Facility.find()
    .then(centerFacility => {
        res.send(centerFacility);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
};
exports.findOne = (req, res) => {
    Facility.findById(req.params.centerFacilityId)
    .then(centerFacility => {
        if(!centerFacility) {
            return res.status(404).send({
                message: "centerFacility not found with id " + req.params.centerFacilityId
            });            
        }
        res.send(centerFacility);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "centerFacility not found with id " + req.params.centerFacilityId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.centerFacilityId
        });
    });
};

exports.update = (req, res) => {
 
    const id = req.params.centerFacilityId
    const art = req.body
    const { ...updateData } = art
    Facility.findByIdAndUpdate(id,updateData,{new: true})
    .then(centerFacility => {
        if(!centerFacility) {
            return res.status(404).send({
                message: "centerFacility not found with id " + req.params.centerFacilityId
            });
        }
        res.send(centerFacility);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "centerFacility not found with id " + req.params.centerFacilityId
            });                
        }
        return res.status(500).send({
            message: "Error updating note with id " + req.params.centerFacilityId
        });
    });
};
exports.delete = (req, res) => {
    Facility.findByIdAndRemove(req.params.centerFacilityId)
    .then(centerFacility => {
        if(!centerFacility) {
            return res.status(404).send({
                message: "centerFacility not found with id " + req.params.centerFacilityId
            });
        }
        res.send({message: "centerFacility deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "centerFacility not found with id " + req.params.centerFacilityId
            });                
        }
        return res.status(500).send({
            message: "Could not delete note with id " + req.params.centerFacilityId
        });
    });
};