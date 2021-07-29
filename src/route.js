import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import RetrieveStudent from './allstudent';
import Create from './createstudent';
import Update from './updatestudent';
import ShowStudent from './showstudent';
import Login from './login';

function AppRoute() {
    return(
        <Router>
            <Switch>
                <Route exact path="/" component={Login}></Route>
                <Route exact path="/all" component={RetrieveStudent}></Route>
                <Route exact path="/editstudent/:id" component={Update}></Route>
                <Route exact path="/createstudent" component={Create}></Route>
                <Route exact path="/showstudent/:id" component={ShowStudent}></Route>
            </Switch>
        </Router>
    );
}

export default AppRoute;
