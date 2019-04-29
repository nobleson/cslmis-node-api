// External Dependancies

// Get Data Models
const Course = require('../../models/center/Course')

exports.create = (req, res) => {
    // Validate request
    //console.log("content in json:  "+JSON.stringify(req.body));

    const course = new Course(req.body);

    // Save course in the database
    course.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the course."
        });
    });
};

exports.findAll = (req, res) => {
    Course.find()
    .then(course => {
        res.send(course);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
};
exports.findOne = (req, res) => {
    Course.findById(req.params.courseId)
    .then(course => {
        if(!course) {
            return res.status(404).send({
                message: "course not found with id " + req.params.courseId
            });            
        }
        res.send(course);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "course not found with id " + req.params.courseId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.courseId
        });
    });
};

exports.update = (req, res) => {
 
    const id = req.params.courseId
    const art = req.body
    const { ...updateData } = art
    Course.findByIdAndUpdate(id,updateData,{new: true})
    .then(course => {
        if(!course) {
            return res.status(404).send({
                message: "course not found with id " + req.params.courseId
            });
        }
        res.send(course);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "course not found with id " + req.params.courseId
            });                
        }
        return res.status(500).send({
            message: "Error updating note with id " + req.params.courseId
        });
    });
};
exports.delete = (req, res) => {
    Course.findByIdAndRemove(req.params.courseId)
    .then(course => {
        if(!course) {
            return res.status(404).send({
                message: "course not found with id " + req.params.courseId
            });
        }
        res.send({message: "course deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "course not found with id " + req.params.courseId
            });                
        }
        return res.status(500).send({
            message: "Could not delete note with id " + req.params.courseId
        });
    });
};