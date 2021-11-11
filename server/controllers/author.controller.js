const Author = require("../models/author.model")


module.exports.findAllAuthors = (req,res)=>{
    Author.find()
        .then(allAuthors =>{
            res.json({results: allAuthors })
            console.log("logging allAuthors",allAuthors)
        })
        .catch(err => res.json({message: "Something went wrong when finding all Authors!", err: err}))
}

module.exports.createAuthor = (req,res)=>{
    Author.create(req.body)
        .then(newlyCreatedAuthor =>{
            res.json({results: newlyCreatedAuthor })
            console.log(newlyCreatedAuthor);
        })
        .catch(err => res.json({message: "Something went wrong when creating a Author!", err: err}))
}

module.exports.findOneAuthor = (req,res)=>{
    Author.findOne({_id:req.params.id })
        .then(foundAuthor =>{
            res.json({results: foundAuthor })
        })
        .catch(err => res.json({message: "Something went wrong when finding one Author!", err: err}))
}

module.exports.updateOneAuthor = (req,res)=>{
    Author.findOneAndUpdate(
        {_id:req.params.id }, //locate which Author we want to update
        req.body, //info from the form we using to update the Author with
        {new:true, runValidators:true}
        )
    .then(updatedAuthor =>{
        res.json({results: updatedAuthor })
    })
    .catch(err => res.json({message: "Something went wrong when updating a Author!", err: err}))
}


module.exports.deleteOneAuthor = (req,res)=>{
    Author.deleteOne({_id:req.params.id })
        .then(deletedAuthor =>{
            res.json({results: deletedAuthor })
        })
        .catch(err => res.json({message: "Something went wrong when deleting a Author!", err: err}))
}