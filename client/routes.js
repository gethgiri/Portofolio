import React from "react";
import {
	BrowserRouter,
	Switch,
	Route,
	Redirect,
	HashRouter,
	ReactRouter
} from "react-router-dom";

import HomePage from "./Components/HomePage/HomePage.js";

const appRoutes = [
	{
		path: "/",
		isExactPath: true,
		component: <HomePage />
	},
	{
		path: "/home",
		isExactPath: true,
		component: <HomePage />
	}
];
const routes = (
	<BrowserRouter>
		<Switch>
			{appRoutes.map((routeItem, idx) => {
				return <Route
					key={routeItem.path}
					path={routeItem.path}
					exact={routeItem.isExactPath}
					render={(params) => {
						return routeItem.component;
					}}
				/>;
			})}
		</Switch>
	</BrowserRouter>
);

export default routes;