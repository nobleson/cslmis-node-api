// External Dependancies

// Get Data Models
const JobAdvent = require('../../models/company/JobAdvent')

exports.create = (req, res) => {
    // Validate request
    //console.log("content in json:  "+JSON.stringify(req.body));

    const jobAdvent = new JobAdvent(req.body);

    // Save artisan in the database
    jobAdvent.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the company."
        });
    });
};

exports.findAll = (req, res) => {
    JobAdvent.find()
    .then(jobAdvent => {
        res.send(jobAdvent);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
};

exports.findOne = (req, res) => {
    JobAdvent.findById(req.params.jobAdventId)
    .then(jobAdvent => {
        if(!jobAdvent) {
            return res.status(404).send({
                message: "job Advent not found with id " + req.params.jobAdventId
            });            
        }
        res.send(jobAdvent);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "job Advent not found with id " + req.params.jobAdventId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.jobAdventId
        });
    });
};

exports.update = (req, res) => {
 
    const id = req.params.jobAdventId
    const art = req.body
    const { ...updateData } = art
    JobAdvent.findByIdAndUpdate(id,updateData,{new: true})
    .then(jobAdvent => {
        if(!jobAdvent) {
            return res.status(404).send({
                message: "job Advent not found with id " + req.params.jobAdventId
            });
        }
        res.send(jobAdvent);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "job Advent not found with id " + req.params.jobAdventId
            });                
        }
        return res.status(500).send({
            message: "Error updating note with id " + req.params.jobAdventId
        });
    });
};
exports.delete = (req, res) => {
    JobAdvent.findByIdAndRemove(req.params.jobAdventId)
    .then(jobAdvent => {
        if(!jobAdvent) {
            return res.status(404).send({
                message: "job Advent not found with id " + req.params.jobAdventId
            });
        }
        res.send({message: "company deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "job Advent not found with id " + req.params.jobAdventId
            });                
        }
        return res.status(500).send({
            message: "Could not delete note with id " + req.params.jobAdventId
        });
    });
};