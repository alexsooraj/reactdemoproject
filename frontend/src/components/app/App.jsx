import "bootstrap/dist/css/bootstrap.css";

import React from "react";
import Navbar from "../navbar/Navbar";
import { Route, Redirect, Switch } from "react-router-dom";
import Cars from "../cars/Cars";
import CarDetails from "../cars/CarDetails";
import NotFound from "../notfound/notFound";
import DashBoard from "../dashboard/DashBoard";
import LoginForm from "../user/loginForm";
import RegisterForm from "../user/registerForm";
import configureStore from "../../store/reduxstore/configureStore";
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
