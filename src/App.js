import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as  Router,  Route, Link, Switch } from 'react-router-dom';
import  Categories  from './components/categories';
import  Home  from './components/home';
import ViewPost from './components/viewPost';
import NavBar from "./components/navBar";

class App extends Component {

  render() {
    return (
      <React.Fragment>
        <main className="container">
          <Switch>
            <Route path="/viewpost/:id" component={ViewPost} />
            <Route path="/" component={Home} />
          </Switch>
        </main>
      </React.Fragment>     

    );
  }
}

export default App;
