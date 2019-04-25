// External Dependancies

// Get Data Models
const ArtisanEducation = require('../../models/artisan/ArtisanEducation')

exports.create = (req, res) => {
    // Validate request
    //console.log("content in json:  "+JSON.stringify(req.body));

    const artisanEducation = new ArtisanEducation(req.body);

    // Save artisan in the database
    artisanEducation.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the artisan."
        });
    });
};

exports.findAll = (req, res) => {
    ArtisanEducation.find()
    .then(artisanEducation => {
        res.send(artisanEducation);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
};
exports.findOne = (req, res) => {
    ArtisanEducation.findById(req.params.artisanEducationId)
    .then(artisanEducation => {
        if(!artisanEducation) {
            return res.status(404).send({
                message: "Artisan not found with id " + req.params.artisanEducationId
            });            
        }
        res.send(artisanEducation);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Artisan not found with id " + req.params.artisanEducationId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.artisanEducationId
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
    const id = req.params.artisanEducationId
    const art = req.body
    const { ...updateData } = art
    ArtisanEducation.findByIdAndUpdate(id,updateData,{new: true})
    .then(artisanEducation => {
        if(!artisanEducation) {
            return res.status(404).send({
                message: "Artisan Eduction not found with id " + req.params.artisanEducationId
            });
        }
        res.send(artisanEducation);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Artisan Education not found with id " + req.params.artisanEducationId
            });                
        }
        return res.status(500).send({
            message: "Error updating note with id " + req.params.artisanEducationId
        });
    });
};
exports.delete = (req, res) => {
    ArtisanEducation.findByIdAndRemove(req.params.artisanEducationId)
    .then(artisanEducation => {
        if(!artisanEducation) {
            return res.status(404).send({
                message: "Artisan Education not found with id " + req.params.artisanEducationId
            });
        }
        res.send({message: "Artisan Education deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Artisan Education not found with id " + req.params.artisanEducationId
            });                
        }
        return res.status(500).send({
            message: "Could not delete note with id " + req.params.artisanEducationId
        });
    });
};