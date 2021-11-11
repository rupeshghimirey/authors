import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {Link} from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router";


const EditAuthorForm = () => {
    const { authorId } = useParams();
    const history = useHistory() //using history to that we can redirect to "/" when the form submits
    const [allAuthors, setAllAuthors] = useState([])
    const [formInfo,setFormInfo] = useState({
        name:"",
    })
    const [formErrors, setFormErrors] = useState({
        name:"",
    })
    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${authorId}`)
            .then(res => {
                console.log("response when getting all authors-->", res)
                setFormInfo(res.data.results)
            })
            .catch(err => console.log("Error while getting all authors!", err))

    }, [])
    console.log(formInfo)

    const changeHandler = (e)=>{
        console.log("changinn the form!")
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })
    }
    const submitHandler = (e)=>{
        e.preventDefault()
        axios.put(`http://localhost:8000/api/authors/${authorId}`, formInfo)
            .then(response=>{
                console.log(response)
                if(response.data.err){ //if the form is not filled out properly
                    setFormErrors(response.data.err.errors)
                } else {
                    setFormInfo({
                        name:"",

                        
                    })
                    setFormErrors({
                        name:"",
                    })
                    history.push("/")
                }
            })
            .catch(err=>console.log("error submitting the post request-->", err))

    }

    return (
        <div className="container text-center">
            <h2 className="text-primary mt-5">Edit this Author:</h2>
            <form onSubmit= {submitHandler}>
                <div className="form-group col-lg-4 offset-lg-4 mt-3">
                    <label htmlFor="">Name:</label>
                    <input onChange={changeHandler} type="text" name="name" id="" className="form-control" value = {formInfo.name} placeholder = "" />
                    <p className="text-danger">{formErrors.name?.message}</p>
                </div>
                <p>
                <input type="submit" value="Edit" className="btn btn-danger mt-3" /> <Link to="/" className="btn btn-success mt-3">Cancel</Link>
                </p>

            </form>
        </div>
    );
};


export default EditAuthorForm;