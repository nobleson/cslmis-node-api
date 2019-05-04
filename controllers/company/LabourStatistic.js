// External Dependancies

// Get Data Models
const LabourStatistic = require('../../models/company/LabourStatistic')

exports.create = (req, res) => {
 
    const labourStatistic = new LabourStatistic(req.body);

    // Save artisan in the database
    labourStatistic.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the labour Statistic."
        });
    });
};

exports.findAll = (req, res) => {
    LabourStatistic.find()
    .then(labourStatistic => {
        res.send(labourStatistic);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
};

exports.findOne = (req, res) => {
    LabourStatistic.findById(req.params.labourStatisticId)
    .then(labourStatistic => {
        if(!labourStatistic) {
            return res.status(404).send({
                message: "labour Statistics not found with id " + req.params.labourStatisticId
            });            
        }
        res.send(labourStatisticId);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "labour Statistics not found with id " + req.params.labourStatisticId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.labourStatisticId
        });
    });
};

exports.update = (req, res) => {
 
    const id = req.params.labourStatisticId
    const art = req.body
    const { ...updateData } = art
    LabourStatistic.findByIdAndUpdate(id,updateData,{new: true})
    .then(labourStatistic => {
        if(!labourStatistic) {
            return res.status(404).send({
                message: "labour Statistics not found with id " + req.params.labourStatisticId
            });
        }
        res.send(labourStatistic);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "labour Statistics not found with id " + req.params.labourStatisticId
            });                
        }
        return res.status(500).send({
            message: "Error updating note with id " + req.params.labourStatisticId
        });
    });
};
exports.delete = (req, res) => {
    LabourStatistic.findByIdAndRemove(req.params.labourStatisticId)
    .then(labourStatistic => {
        if(!labourStatistic) {
            return res.status(404).send({
                message: "labour Statistics not found with id " + req.params.labourStatisticId
            });
        }
        res.send({message: "labour Statistics deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "labour Statistics not found with id " + req.params.labourStatisticId
            });                
        }
        return res.status(500).send({
            message: "Could not delete note with id " + req.params.labourStatisticId
        });
    });
};