import React from 'react';
import { BrowserRouter as  Router,  Route, Link, Switch } from 'react-router-dom';
const navBar = () => {
    return (
<nav class="navbar navbar-expand-lg navbar-light bg-light">
<div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <Link to="/">Home</Link>
      </li>
      </ul>
      </div>
    </nav>
      );
}
 
export default navBar;