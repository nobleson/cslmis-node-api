// External Dependancies

// Get Data Models
const ArtisanNvqCenter = require('../../models/artisan/ArtisanNvqCenter')

exports.create = (req, res) => {
    // Validate request
    //console.log("content in json:  "+JSON.stringify(req.body));

    const artisanNvqCenter = new ArtisanNvqCenter(req.body);

    // Save artisan in the database
    artisanNvqCenter.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the artisan."
        });
    });
};

exports.findAll = (req, res) => {
    ArtisanNvqCenter.find()
    .then(artisanNvqCenter => {
        res.send(artisanNvqCenter);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
};

exports.findOne = (req, res) => {
    ArtisanNvqCenter.findById(req.params.artisanNvqCenterId)
    .then(artisanNvqCenter => {
        if(!artisanNvqCenter) {
            return res.status(404).send({
                message: "Artisan NVQ Center not found with id " + req.params.artisanNvqCenterId
            });            
        }
        res.send(artisanNvqCenter);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Artisan NVQ Center not found with id " + req.params.artisanNvqCenterId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.artisanNvqCenterId
        });
    });
};

exports.update = (req, res) => {
   
    const id = req.params.artisanNvqCenterId
    const art = req.body
    const { ...updateData } = art
    ArtisanNvqCenter.findByIdAndUpdate(id,updateData,{new: true})
    .then(artisanNvqCenter => {
        if(!artisanNvqCenter) {
            return res.status(404).send({
                message: "Artisan NVQ Center not found with id " + req.params.artisanNvqCenterId
            });
        }
        res.send(artisanNvqCenter);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Artisan NVQ Center not found with id " + req.params.artisanNvqCenterId
            });                
        }
        return res.status(500).send({
            message: "Error updating note with id " + req.params.artisanNvqCenterId
        });
    });
};
exports.delete = (req, res) => {
    ArtisanNvqCenter.findByIdAndRemove(req.params.artisanNvqCenterId)
    .then(artisanNvqCenter => {
        if(!artisanNvqCenter) {
            return res.status(404).send({
                message: "Artisan NVQ Center not found with id " + req.params.artisanNvqCenterId
            });
        }
        res.send({message: "Artisan NVQ Center deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Artisan NVQ Center not found with id " + req.params.artisanNvqCenterId
            });                
        }
        return res.status(500).send({
            message: "Could not delete note with id " + req.params.artisanNvqCenterId
        });
    });
};