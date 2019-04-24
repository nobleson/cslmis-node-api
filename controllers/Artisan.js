// External Dependancies

// Get Data Models
const Artisan = require('../models/Artisan')

exports.create = (req, res) => {
    // Validate request
    console.log("content in json:  "+JSON.stringify(req.body));
/*     
    if(!req.body.content) {
        return res.status(400).send({
            message: "Artisan content can not be empty"
        });
    }
 */
    const artisan = new Artisan(req.body);

    // Save artisan in the database
    artisan.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the artisan."
        });
    });
};

exports.findAll = (req, res) => {
    Artisan.find()
    .then(artisan => {
        res.send(artisan);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
};
exports.findOne = (req, res) => {
    Artisan.findById(req.params.artisanId)
    .then(artisan => {
        if(!artisan) {
            return res.status(404).send({
                message: "Artisan not found with id " + req.params.artisanId
            });            
        }
        res.send(artisan);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Artisan not found with id " + req.params.artisanId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.artisanId
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
    const id = req.params.artisanId
    const art = req.body
    const { ...updateData } = art
    Artisan.findByIdAndUpdate(id,updateData,{new: true})
    .then(artisan => {
        if(!artisan) {
            return res.status(404).send({
                message: "Artisan not found with id " + req.params.artisanId
            });
        }
        res.send(artisan);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Artisan not found with id " + req.params.artisanId
            });                
        }
        return res.status(500).send({
            message: "Error updating note with id " + req.params.artisanId
        });
    });
};
exports.delete = (req, res) => {
    Artisan.findByIdAndRemove(req.params.artisanId)
    .then(artisan => {
        if(!artisan) {
            return res.status(404).send({
                message: "Artisan not found with id " + req.params.artisanId
            });
        }
        res.send({message: "Artisan deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Artisan not found with id " + req.params.artisanId
            });                
        }
        return res.status(500).send({
            message: "Could not delete note with id " + req.params.artisanId
        });
    });
};