import { React, Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import NotFound from "./components/404";
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";

// https://saasitive.com/tutorial/

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/signup" component={Signup}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/dashboard" component={Dashboard}></Route>

            <Route exact path="/" component={Home}></Route>
            <Route path="*" component={NotFound}></Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
