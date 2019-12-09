import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../containers/Home/Home';
import Resume from '../containers/Resume/Resume';
import AboutMe from '../containers/AboutMe/AboutMe';
import Projects from '../containers/Projects/Projects';
import ContactMe from '../containers/ContactMe/ContactMe';
import PageNotFound from '../containers/Page-Not-Found/PageNotFound';


const Routes = () => (
        <Switch>
            <Route path="/" exact={true} component={Home}></Route>
            <Route path="/resume" component={Resume}></Route>
            <Route path="/about-me" component={AboutMe}></Route>
            <Route path="/my-projects" component={Projects}></Route>
            <Route path="/contact-me" component={ContactMe}></Route>
            <Route path="*" component={PageNotFound}></Route>
        </Switch>
)
export default Routes