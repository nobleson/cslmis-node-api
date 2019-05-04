// External Dependancies

// Get Data Models
const Report = require('../../models/center/Report')

exports.create = (req, res) => {
    // Validate request
    //console.log("content in json:  "+JSON.stringify(req.body));

    const centerReport= new Report(req.body);

    // Save centerReport in the database
    centerReport.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the centerReport."
        });
    });
};

exports.findAll = (req, res) => {
    Report.find()
    .then(centerReport => {
        res.send(centerReport);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
};
exports.findOne = (req, res) => {
    Report.findById(req.params.centerReportId)
    .then(centerReport => {
        if(!centerReport) {
            return res.status(404).send({
                message: "centerReport not found with id " + req.params.centerReportId
            });            
        }
        res.send(centerReport);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "centerReport not found with id " + req.params.centerReportId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.centerReportId
        });
    });
};

exports.update = (req, res) => {
 
    const id = req.params.centerReportId
    const art = req.body
    const { ...updateData } = art
    Report.findByIdAndUpdate(id,updateData,{new: true})
    .then(centerReport => {
        if(!centerReport) {
            return res.status(404).send({
                message: "centerReport not found with id " + req.params.centerReportId
            });
        }
        res.send(centerReport);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "centerReport not found with id " + req.params.centerReportId
            });                
        }
        return res.status(500).send({
            message: "Error updating note with id " + req.params.centerReportId
        });
    });
};
exports.delete = (req, res) => {
    Report.findByIdAndRemove(req.params.centerReportId)
    .then(centerReport => {
        if(!centerReport) {
            return res.status(404).send({
                message: "centerReport not found with id " + req.params.centerReportId
            });
        }
        res.send({message: "centerReport deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "centerReport not found with id " + req.params.centerReportId
            });                
        }
        return res.status(500).send({
            message: "Could not delete note with id " + req.params.centerReportId
        });
    });
};