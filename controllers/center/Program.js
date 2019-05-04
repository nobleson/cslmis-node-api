// External Dependancies

// Get Data Models
const Program = require('../../models/center/Program')

exports.create = (req, res) => {
    // Validate request
    //console.log("content in json:  "+JSON.stringify(req.body));

    const centerProgram = new Program(req.body);

    // Save centerProgram in the database
    centerProgram.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the centerProgram."
        });
    });
};

exports.findAll = (req, res) => {
    Program.find()
    .then(centerProgram => {
        res.send(centerProgram);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
};
exports.findOne = (req, res) => {
    Program.findById(req.params.centerProgramId)
    .then(centerProgram => {
        if(!centerProgram) {
            return res.status(404).send({
                message: "centerProgram not found with id " + req.params.centerProgramId
            });            
        }
        res.send(centerProgram);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "centerProgram not found with id " + req.params.centerProgramId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.centerProgramId
        });
    });
};

exports.update = (req, res) => {
 
    const id = req.params.centerProgramId
    const art = req.body
    const { ...updateData } = art
    Program.findByIdAndUpdate(id,updateData,{new: true})
    .then(centerProgram => {
        if(!centerProgram) {
            return res.status(404).send({
                message: "centerProgram not found with id " + req.params.centerProgramId
            });
        }
        res.send(centerProgram);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "centerProgram not found with id " + req.params.centerProgramId
            });                
        }
        return res.status(500).send({
            message: "Error updating note with id " + req.params.centerProgramId
        });
    });
};
exports.delete = (req, res) => {
    Program.findByIdAndRemove(req.params.centerProgramId)
    .then(centerProgram => {
        if(!centerProgram) {
            return res.status(404).send({
                message: "centerProgram not found with id " + req.params.centerProgramId
            });
        }
        res.send({message: "centerProgram deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "centerProgram not found with id " + req.params.centerProgramId
            });                
        }
        return res.status(500).send({
            message: "Could not delete note with id " + req.params.centerProgramId
        });
    });
};