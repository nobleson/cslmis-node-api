// External Dependancies

// Get Data Models
const ArtisanCertificate = require('../../models/artisan/ArtisanCertificate')

exports.create = (req, res) => {
    // Validate request
    //console.log("content in json:  "+JSON.stringify(req.body));

    const artisanCertificate = new ArtisanCertificate(req.body);

    // Save artisan in the database
    artisanCertificate.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the artisan."
        });
    });
};

exports.findAll = (req, res) => {
    ArtisanCertificate.find()
    .then(artisanCertificate => {
        res.send(artisanCertificate);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
};
exports.findOne = (req, res) => {
    ArtisanCertificate.findById(req.params.artisanCertificateId)
    .then(artisanCertificate => {
        if(!artisanCertificate) {
            return res.status(404).send({
                message: "Artisan Certificate not found with id " + req.params.artisanCertificateId
            });            
        }
        res.send(artisanCertificate);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Artisan Certificatenot found with id " + req.params.artisanCertificateId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.artisanCertificateId
        });
    });
};

exports.update = (req, res) => {
 
    const id = req.params.artisanCertificateId
    const art = req.body
    const { ...updateData } = art
    ArtisanCertificate.findByIdAndUpdate(id,updateData,{new: true})
    .then(artisanCertificate => {
        if(!artisanCertificate) {
            return res.status(404).send({
                message: "Artisan Certificate not found with id " + req.params.artisanCertificateId
            });
        }
        res.send(artisanCertificate);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Artisan Certificate not found with id " + req.params.artisanCertificateId
            });                
        }
        return res.status(500).send({
            message: "Error updating note with id " + req.params.artisanCertificateId
        });
    });
};
exports.delete = (req, res) => {
    ArtisanCertificate.findByIdAndRemove(req.params.artisanCertificateId)
    .then(artisanCertificate => {
        if(!artisanCertificate) {
            return res.status(404).send({
                message: "Artisan Certificate not found with id " + req.params.artisanCertificateId
            });
        }
        res.send({message: "Artisan deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Artisan Certifcate not found with id " + req.params.artisanCertificateId
            });                
        }
        return res.status(500).send({
            message: "Could not delete note with id " + req.params.artisanCertificateId
        });
    });
};