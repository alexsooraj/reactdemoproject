import React from 'react';
import logo from './logo.svg';
import Navbar from "./navbar/Navbar";
import { Route, Redirect, Switch } from "react-router-dom";
import './App.css';
import DashBoard from "./dashboard/DashBoard";
import Cars from "./cars/Cars";
import NotFound from "./not-found/NotFound";

function App() {
  return (
    <main className="container">
      <Navbar />
      <div className="container my-4">
        <Switch>
          <Route path="/dashboard" component={DashBoard} exact></Route>
          {/* <Route path="/cars/:id" component={CarDetails} exact></Route> */}
          <Route path="/cars" component={Cars} exact></Route>
          <Route path="/not-found" component={NotFound} exact />
          <Redirect from="/" to="/dashboard" exact></Redirect>
          <Redirect to="/not-found" />
        </Switch>
      </div>
    </main>
  );
}

export default App;
