const AuthorController = require("../controllers/author.controller")


module.exports = app =>{

    //find all Authors
    app.get("/api/authors", AuthorController.findAllAuthors)

    //create new Author
    app.post("/api/authors",AuthorController.createAuthor)

    //find one Author
    app.get("/api/authors/:id", AuthorController.findOneAuthor)

    //update a Author
    app.put("/api/authors/:id", AuthorController.updateOneAuthor)

    //delete a Author
    app.delete("/api/authors/delete/:id",AuthorController.deleteOneAuthor)

    

}