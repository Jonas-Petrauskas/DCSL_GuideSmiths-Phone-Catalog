import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import AddPhone from "./Components/AddPhone/AddPhone";
import NavBar from "./Components/NavBar/NavBar";
import PhoneDetails from "./Components/PhoneDetails/PhoneDetails";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <div className="navbar">
          <NavBar />
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/add-phone" component={AddPhone} /> */}
          <Route exact path="/phones/:id" component={PhoneDetails} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
