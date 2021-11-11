import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import AllAuthor from './components/AllAuthor';
import CreateAuthorForm from './components/CreateAuthorForm';
import EditAuthorForm from './components/EditAuthor';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  return (
    <div className="container">
      <BrowserRouter>
          <div className="container">
            <h2 className="text-center text-dark mt-3">Favorite Authors</h2>
            <h2 className="text-center mt-4">
              <Link to="/" className="btn btn-primary mt-3 ">Home</Link>
            </h2>
          </div>
          <Route exact path = "/">
            <AllAuthor></AllAuthor>
          </Route>
          <Route exact path = "/new">
            <CreateAuthorForm></CreateAuthorForm>
          </Route>
          <Route exact path= "/edit/:authorId">
                <EditAuthorForm></EditAuthorForm>
            </Route>
      </BrowserRouter>

    </div>
  );
}

export default App;

