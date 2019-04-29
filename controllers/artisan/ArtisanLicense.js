// External Dependancies

// Get Data Models
const ArtisanLicense = require('../../models/artisan/ArtisanLicense')

exports.create = (req, res) => {
    // Validate request
    //console.log("content in json:  "+JSON.stringify(req.body));

    const artisanLicense = new ArtisanLicense(req.body);

    // Save artisan in the database
    artisanLicense.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the artisan license."
        });
    });
};

exports.findAll = (req, res) => {
    ArtisanLicense.find()
    .then(artisanLicense => {
        res.send(artisanLicense);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
};
exports.findOne = (req, res) => {
    ArtisanLicense.findById(req.params.artisanLicenseId)
    .then(artisanLicense => {
        if(!artisanLicense) {
            return res.status(404).send({
                message: "Artisan not found with id " + req.params.artisanLicenseId
            });            
        }
        res.send(artisan);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Artisan not found with id " + req.params.artisanLicenseId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.artisanLicenseId
        });
    });
};

exports.update = (req, res) => {
 
    const id = req.params.artisanLicenseId
    const art = req.body
    const { ...updateData } = art
    ArtisanLicense.findByIdAndUpdate(id,updateData,{new: true})
    .then(artisanLicense => {
        if(!artisanLicense) {
            return res.status(404).send({
                message: "Artisan not found with id " + req.params.artisanLicenseId
            });
        }
        res.send(artisanLicense);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Artisan not found with id " + req.params.artisanLicenseId
            });                
        }
        return res.status(500).send({
            message: "Error updating note with id " + req.params.artisanLicenseId
        });
    });
};
exports.delete = (req, res) => {
    ArtisanLicense.findByIdAndRemove(req.params.artisanLicenseId)
    .then(artisanLicense => {
        if(!artisanLicense) {
            return res.status(404).send({
                message: "Artisan not found with id " + req.params.artisanLicenseId
            });
        }
        res.send({message: "Artisan deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Artisan not found with id " + req.params.artisanLicenseId
            });                
        }
        return res.status(500).send({
            message: "Could not delete note with id " + req.params.artisanLicenseId
        });
    });
};