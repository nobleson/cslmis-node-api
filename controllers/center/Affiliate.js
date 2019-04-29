// External Dependancies

// Get Data Models
const Affiliate = require('../../models/center/Affiliate')

exports.create = (req, res) => {
    // Validate request
    //console.log("content in json:  "+JSON.stringify(req.body));

    const centerAffiliate = new Affiliate(req.body);

    // Save centerAffiliate in the database
    centerAffiliate.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the centerAffiliate."
        });
    });
};

exports.findAll = (req, res) => {
    Affiliate.find()
    .then(centerAffiliate => {
        res.send(centerAffiliate);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
};
exports.findOne = (req, res) => {
    Affiliate.findById(req.params.centerAffiliateId)
    .then(centerAffiliate => {
        if(!centerAffiliate) {
            return res.status(404).send({
                message: "centerAffiliate not found with id " + req.params.centerAffiliateId
            });            
        }
        res.send(centerAffiliate);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "centerAffiliate not found with id " + req.params.centerAffiliateId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.centerAffiliateId
        });
    });
};

exports.update = (req, res) => {
 
    const id = req.params.centerAffiliateId
    const art = req.body
    const { ...updateData } = art
    Affiliate.findByIdAndUpdate(id,updateData,{new: true})
    .then(centerAffiliate => {
        if(!centerAffiliate) {
            return res.status(404).send({
                message: "centerAffiliate not found with id " + req.params.centerAffiliateId
            });
        }
        res.send(centerAffiliate);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "centerAffiliate not found with id " + req.params.centerAffiliateId
            });                
        }
        return res.status(500).send({
            message: "Error updating note with id " + req.params.centerAffiliateId
        });
    });
};
exports.delete = (req, res) => {
    Affiliate.findByIdAndRemove(req.params.centerAffiliateId)
    .then(centerAffiliate => {
        if(!centerAffiliate) {
            return res.status(404).send({
                message: "centerAffiliate not found with id " + req.params.centerAffiliateId
            });
        }
        res.send({message: "centerAffiliate deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "centerAffiliate not found with id " + req.params.centerAffiliateId
            });                
        }
        return res.status(500).send({
            message: "Could not delete note with id " + req.params.centerAffiliateId
        });
    });
};