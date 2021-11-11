import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from "react-router-dom";


const AllAuthor = () => {

    const [allAuthors, setAllAuthors] = useState([])

    const [deleteToggle, setDeleteToggle] = useState(false)

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
            .then(res => {
                console.log("response when getting all authors-->", res)
                setAllAuthors(res.data.results)
            })
            .catch(err => console.log("Error while getting all authors!", err))

    }, [deleteToggle])

    const deleteAuthor = (authorId) => {
        console.log("Here is the ", authorId)
        axios.delete(`http://localhost:8000/api/authors/delete/${authorId}`)
            .then(res => {
                console.log("response after axios delete-->", res)
                setDeleteToggle(!deleteToggle)
            })
            .catch(err => console.log("errrrrr when deleting from homePage-->", err))
    }


    return (
        <div className="mt-4">
            <h2 className="text-">
                <Link to="/new">Add an Author</Link>
            </h2>
            <h2 className="text-danger"> We have quotes by:</h2>
            <table className="table">

                <thead className="thead-dark">
                    <tr>
                        <th scope="col"><h2>Name</h2></th>
                        <th scope="col" className="h2">Actions Available</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allAuthors.map((author, i) => {
                            return (
                                <tr className="text-success">
                                    <td><h3>{author.name}</h3></td>
                                    <td><Link to={`/edit/${author._id}`} className="btn btn-success">Edit</Link> <button onClick={(e) => deleteAuthor(author._id)} className="btn btn-danger ">Delete</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>


        </div>
    );
};

export default AllAuthor;