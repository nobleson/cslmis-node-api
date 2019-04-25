// External Dependancies

// Get Data Models
const ArtisanCenter = require('../../models/artisan/ArtisanCenter')

exports.create = (req, res) => {
    // Validate request
    //console.log("content in json:  "+JSON.stringify(req.body));

    const artisanCenter = new ArtisanCenter(req.body);

    // Save artisan in the database
    artisanCenter.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the artisan."
        });
    });
};

exports.findAll = (req, res) => {
    ArtisanCenter.find()
    .then(artisanCenter => {
        res.send(artisanCenter);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
};

exports.findOne = (req, res) => {
    ArtisanCenter.findById(req.params.artisanCenterId)
    .then(artisanCenter => {
        if(!artisanCenter) {
            return res.status(404).send({
                message: "Artisan Center not found with id " + req.params.artisanCenterId
            });            
        }
        res.send(artisanCenter);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Artisan Center not found with id " + req.params.artisanCenterId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.artisanCenterId
        });
    });
};

exports.update = (req, res) => {
    // Validate Request
    // if(!req.body.content) {
    //     return res.status(400).send({
    //         message: "Artisan content can not be empty"
    //     });
    // }
    const id = req.params.artisanCenterId
    const art = req.body
    const { ...updateData } = art
    ArtisanCenter.findByIdAndUpdate(id,updateData,{new: true})
    .then(artisanCenter => {
        if(!artisanCenter) {
            return res.status(404).send({
                message: "Artisan Center not found with id " + req.params.artisanCenterId
            });
        }
        res.send(artisanCenter);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Artisan Center not found with id " + req.params.artisanCenterId
            });                
        }
        return res.status(500).send({
            message: "Error updating note with id " + req.params.artisanCenterId
        });
    });
};
exports.delete = (req, res) => {
    ArtisanCenter.findByIdAndRemove(req.params.artisanCenterId)
    .then(artisanCenter => {
        if(!artisanCenter) {
            return res.status(404).send({
                message: "Artisan Center not found with id " + req.params.artisanCenterId
            });
        }
        res.send({message: "Artisan Center deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Artisan Center not found with id " + req.params.artisanCenterId
            });                
        }
        return res.status(500).send({
            message: "Could not delete note with id " + req.params.artisanCenterId
        });
    });
};