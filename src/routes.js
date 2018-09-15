import React from 'react';
import { Route, Switch } from 'react-router-dom';

//app route components
import Home from './components/Home/Home.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import PageNotFound from './components/PageNotFound.js';

export default (
	<Switch>
		<Route exact path="/" component={Home}/>
		<Route path="/about" component={About}/>
		<Route path="/contact" component={Contact}/>
		<Route component={PageNotFound}/>
	</Switch>
);