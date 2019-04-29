// External Dependancies

// Get Data Models
const Retrenchement = require('../../models/company/Retrenchement')

exports.create = (req, res) => {
    // Validate request
    //console.log("content in json:  "+JSON.stringify(req.body));

    const retrenchement = new Retrenchement(req.body);

    // Save artisan in the database
    retrenchement.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the retrenchement."
        });
    });
};

exports.findAll = (req, res) => {
    Retrenchement.find()
    .then(retrenchement => {
        res.send(retrenchement);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
};

exports.findOne = (req, res) => {
    Retrenchement.findById(req.params.retrenchementId)
    .then(retrenchement => {
        if(!retrenchement) {
            return res.status(404).send({
                message: "retrenchement not found with id " + req.params.retrenchementId
            });            
        }
        res.send(retrenchement);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "company not found with id " + req.params.retrenchementId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.retrenchementId
        });
    });
};

exports.update = (req, res) => {
 
    const id = req.params.retrenchementId
    const art = req.body
    const { ...updateData } = art
    Retrenchement.findByIdAndUpdate(id,updateData,{new: true})
    .then(retrenchement => {
        if(!retrenchement) {
            return res.status(404).send({
                message: "retrenchement not found with id " + req.params.retrenchementId
            });
        }
        res.send(retrenchement);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "retrenchement not found with id " + req.params.retrenchementId
            });                
        }
        return res.status(500).send({
            message: "Error updating note with id " + req.params.retrenchementId
        });
    });
};
exports.delete = (req, res) => {
    Retrenchement.findByIdAndRemove(req.params.retrenchementId)
    .then(retrenchement => {
        if(!retrenchement) {
            return res.status(404).send({
                message: "retrenchement not found with id " + req.params.retrenchementId
            });
        }
        res.send({message: "retrenchement deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "retrenchement not found with id " + req.params.retrenchementId
            });                
        }
        return res.status(500).send({
            message: "Could not delete note with id " + req.params.retrenchementId
        });
    });
};