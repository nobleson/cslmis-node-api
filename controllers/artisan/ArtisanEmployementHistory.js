// External Dependancies

// Get Data Models
const ArtisanEmployementHistory = require('../../models/artisan/ArtisanEmployementHistory')

exports.create = (req, res) => {
    // Validate request
    //console.log("content in json:  "+JSON.stringify(req.body));

    const artisanEmployementHistory = new ArtisanEmployementHistory(req.body);

    // Save artisan in the database
    artisanEmployementHistory.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the artisan."
        });
    });
};

exports.findAll = (req, res) => {
    ArtisanEmployementHistory.find()
    .then(artisanEmployementHistory => {
        res.send(artisanEmployementHistory);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
};
exports.findOne = (req, res) => {
    ArtisanEmployementHistory.findById(req.params.artisanEmployementHistoryId)
    .then(artisanEmployementHistory => {
        if(!artisanEmployementHistory) {
            return res.status(404).send({
                message: "Artisan Employement History not found with id " + req.params.artisanEmployementHistoryId
            });            
        }
        res.send(artisanEmployementHistory);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Artisan Employement History not found with id " + req.params.artisanEmployementHistoryId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.artisanEmployementHistoryId
        });
    });
};

exports.update = (req, res) => {
    
    const id = req.params.artisanEmployementHistoryId
    const art = req.body
    const { ...updateData } = art
    ArtisanEmployementHistory.findByIdAndUpdate(id,updateData,{new: true})
    .then(artisanEmployementHistory => {
        if(!artisanEmployementHistory) {
            return res.status(404).send({
                message: "Artisan Employement History not found with id " + req.params.artisanEmployementHistoryId
            });
        }
        res.send(artisanEmployementHistory);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Artisan Employement History not found with id " + req.params.artisanEmployementHistoryId
            });                
        }
        return res.status(500).send({
            message: "Error updating note with id " + req.params.artisanEmployementHistoryId
        });
    });
};
exports.delete = (req, res) => {
    ArtisanEmployementHistory.findByIdAndRemove(req.params.artisanEmployementHistoryId)
    .then(artisanEmployementHistory => {
        if(!artisanEmployementHistory) {
            return res.status(404).send({
                message: "Artisan Employement History not found with id " + req.params.artisanEmployementHistoryId
            });
        }
        res.send({message: "Artisan Employement History deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Artisan Employement History not found with id " + req.params.artisanEmployementHistoryId
            });                
        }
        return res.status(500).send({
            message: "Could not delete note with id " + req.params.artisanEmployementHistoryId
        });
    });
};