import "bootstrap/dist/css/bootstrap.css";

import React from "react";
import Navbar from "./Navbar";
import { Route, Redirect, Switch } from "react-router-dom";
import Cars from "./Cars";
import CarDetails from "./CarDetails";
import NotFound from "./notFound";
import DashBoard from "./DashBoard";
import LoginForm from "./loginForm";
import RegisterForm from "./registerForm";
import configureStore from "../store/configureStore";
import { Provider } from "react-redux";

const store = configureStore();
function App(props) {
  return (
    <main className="container">
      <Navbar />
      <Provider store={store}>
        <div className="container my-4">
          <Switch>
            <Route path="/register" component={RegisterForm} exact></Route>
            <Route path="/login" component={LoginForm} exact></Route>
            <Route path="/dashboard" component={DashBoard} exact></Route>
            <Route path="/cars/:id" component={CarDetails} exact></Route>
            <Route path="/cars" component={Cars} exact></Route>
            <Route path="/not-found" component={NotFound} exact />
            <Redirect from="/" to="/dashboard" exact></Redirect>
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </Provider>
    </main>
  );
}

export default App;
