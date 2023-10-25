import type { Component } from "solid-js";
import { useRoutes, Router } from "@solidjs/router";
import routes from "./configs/routes";

const App: Component = () => {
	const Routes = useRoutes(routes);

	return (
		<Router>
			<Routes />
		</Router>
	);
};

export default App;
