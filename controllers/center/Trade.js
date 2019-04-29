// External Dependancies

// Get Data Models
const Trade = require('../../models/center/Trade')

exports.create = (req, res) => {
    // Validate request
    //console.log("content in json:  "+JSON.stringify(req.body));

    const centerTrade = new Trade(req.body); 

    // Save centerTrade in the database
    centerTrade.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the centerTrade."
        });
    });
};

exports.findAll = (req, res) => {
    Trade.find()
    .then(centerTrade => {
        res.send(centerTrade);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
};
exports.findOne = (req, res) => {
    Trade.findById(req.params.centerTradeId)
    .then(centerTrade => {
        if(!centerTrade) {
            return res.status(404).send({
                message: "centerTrade not found with id " + req.params.centerTradeId
            });            
        }
        res.send(centerTrade);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "centerTrade not found with id " + req.params.centerTradeId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.centerTradeId
        });
    });
};

exports.update = (req, res) => {
 
    const id = req.params.centerTradeId
    const art = req.body
    const { ...updateData } = art
    Trade.findByIdAndUpdate(id,updateData,{new: true})
    .then(centerTrade => {
        if(!centerTrade) {
            return res.status(404).send({
                message: "centerTrade not found with id " + req.params.centerTradeId
            });
        }
        res.send(centerTrade);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "centerTrade not found with id " + req.params.centerTradeId
            });                
        }
        return res.status(500).send({
            message: "Error updating note with id " + req.params.centerTradeId
        });
    });
};
exports.delete = (req, res) => {
    Trade.findByIdAndRemove(req.params.centerTradeId)
    .then(centerTrade => {
        if(!centerTrade) {
            return res.status(404).send({
                message: "centerTrade not found with id " + req.params.centerTradeId
            });
        }
        res.send({message: "centerTrade deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "centerTrade not found with id " + req.params.centerTradeId
            });                
        }
        return res.status(500).send({
            message: "Could not delete note with id " + req.params.centerTradeId
        });
    });
};