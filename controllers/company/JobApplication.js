// External Dependancies

// Get Data Models
const JobApplication = require('../../models/company/JobApplication')

exports.create = (req, res) => {
 
    const jobApplication = new JobApplication(req.body);

    // Save artisan in the database
    jobApplication.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Job Applicationn."
        });
    });
};

exports.findAll = (req, res) => {
    JobApplication.find()
    .then(jobApplication => {
        res.send(jobApplication);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
};

exports.findOne = (req, res) => {
    JobApplication.findById(req.params.jobApplicationId)
    .then(jobApplication => {
        if(!jobApplication) {
            return res.status(404).send({
                message: "job Applicationn not found with id " + req.params.jobApplicationId
            });            
        }
        res.send(jobApplication);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "job Applicationn not found with id " + req.params.jobApplicationId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.jobApplicationId
        });
    });
};

exports.update = (req, res) => {
 
    const id = req.params.jobApplicationId
    const art = req.body
    const { ...updateData } = art
    JobApplication.findByIdAndUpdate(id,updateData,{new: true})
    .then(jobApplication => {
        if(!jobApplication) {
            return res.status(404).send({
                message: "job Applicationn not found with id " + req.params.jobApplicationId
            });
        }
        res.send(jobApplication);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "job Applicationn not found with id " + req.params.jobApplicationId
            });                
        }
        return res.status(500).send({
            message: "Error updating note with id " + req.params.jobApplicationId
        });
    });
};
exports.delete = (req, res) => {
    JobApplication.findByIdAndRemove(req.params.jobApplicationId)
    .then(jobApplication => {
        if(!jobApplication) {
            return res.status(404).send({
                message: "job Applicationn not found with id " + req.params.jobApplicationId
            });
        }
        res.send({message: "Job Applicationn deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "job Applicationn not found with id " + req.params.jobApplicationId
            });                
        }
        return res.status(500).send({
            message: "Could not delete note with id " + req.params.jobApplicationId
        });
    });
};