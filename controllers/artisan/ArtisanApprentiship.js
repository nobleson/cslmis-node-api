// External Dependancies

// Get Data Models
const ArtisanApprentiship = require('../../models/artisan/ArtisanApprentiship')

exports.create = (req, res) => {
    // Validate request
    //console.log("content in json:  "+JSON.stringify(req.body));

    const artisanApprentiship = new ArtisanApprentiship(req.body);

    // Save artisan in the database
    artisanApprentiship.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the artisan."
        });
    });
};

exports.findAll = (req, res) => {
    ArtisanApprentiship.find()
    .then(artisanApprentiship => {
        res.send(artisanApprentiship);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
};

exports.findOne = (req, res) => {
    ArtisanApprentiship.findById(req.params.artisanApprentishipId)
    .then(artisanApprentiship => {
        if(!artisanApprentiship) {
            return res.status(404).send({
                message: "Artisan Apprentiship not found with id " + req.params.artisanApprentishipId
            });            
        }
        res.send(artisanApprentiship);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Artisan Apprentiship not found with id " + req.params.artisanApprentishipId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.artisanApprentishipId
        });
    });
};

exports.update = (req, res) => {

    const id = req.params.artisanApprentishipId
    const art = req.body
    const { ...updateData } = art
    ArtisanApprentiship.findByIdAndUpdate(id,updateData,{new: true})
    .then(artisanApprentiship => {
        if(!artisanApprentiship) {
            return res.status(404).send({
                message: "Artisan Apprentiship not found with id " + req.params.artisanApprentishipId
            });
        }
        res.send(artisanApprentiship);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Artisan Apprentiship not found with id " + req.params.artisanApprentishipId
            });                
        }
        return res.status(500).send({
            message: "Error updating note with id " + req.params.artisanApprentishipId
        });
    });
};
exports.delete = (req, res) => {
    ArtisanApprentiship.findByIdAndRemove(req.params.artisanApprentishipId)
    .then(artisanApprentiship => {
        if(!artisanApprentiship) {
            return res.status(404).send({
                message: "Artisan Apprentiship not found with id " + req.params.artisanApprentishipId
            });
        }
        res.send({message: "Artisan Apprentiship deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Artisan Apprentiship not found with id " + req.params.artisanApprentishipId
            });                
        }
        return res.status(500).send({
            message: "Could not delete note with id " + req.params.artisanApprentishipId
        });
    });
};