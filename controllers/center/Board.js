// External Dependancies

// Get Data Models
const Board = require('../../models/center/Board')

exports.create = (req, res) => {
    // Validate request
    //console.log("content in json:  "+JSON.stringify(req.body));

    const centerBoard = new Board(req.body);

    // Save centerBoard in the database
    centerBoard.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the centerBoard."
        });
    });
};

exports.findAll = (req, res) => {
    Board.find()
    .then(centerBoard => {
        res.send(centerBoard);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
};
exports.findOne = (req, res) => {
    Board.findById(req.params.centerBoardId)
    .then(centerBoard => {
        if(!centerBoard) {
            return res.status(404).send({
                message: "centerBoard not found with id " + req.params.centerBoardId
            });            
        }
        res.send(centerBoard);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "centerBoard not found with id " + req.params.centerBoardId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.centerBoardId
        });
    });
};

exports.update = (req, res) => {
 
    const id = req.params.centerBoardId
    const art = req.body
    const { ...updateData } = art
    Board.findByIdAndUpdate(id,updateData,{new: true})
    .then(centerBoard => {
        if(!centerBoard) {
            return res.status(404).send({
                message: "centerBoard not found with id " + req.params.centerBoardId
            });
        }
        res.send(centerBoard);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "centerBoard not found with id " + req.params.centerBoardId
            });                
        }
        return res.status(500).send({
            message: "Error updating note with id " + req.params.centerBoardId
        });
    });
};
exports.delete = (req, res) => {
    Board.findByIdAndRemove(req.params.centerBoardId)
    .then(centerBoard => {
        if(!centerBoard) {
            return res.status(404).send({
                message: "centerBoard not found with id " + req.params.centerBoardId
            });
        }
        res.send({message: "centerBoard deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "centerBoard not found with id " + req.params.centerBoardId
            });                
        }
        return res.status(500).send({
            message: "Could not delete note with id " + req.params.centerBoardId
        });
    });
};