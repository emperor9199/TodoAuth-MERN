import React from "react";
import Dashboard from "./components/Dashboard";
import EditTask from "./components/EditTask";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Dashboard} exact />
        <Route path="/editTask/:id" component={EditTask} exact />
      </Switch>
    </Router>
  );
};

export default App;
