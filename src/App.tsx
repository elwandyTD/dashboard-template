import type { Component } from "solid-js";
import { useRoutes, Router } from "@solidjs/router";
import routes from "./configs/routes";
import { MetaProvider } from "@solidjs/meta";

const App: Component = () => {
	const Routes = useRoutes(routes);

	return (
		<MetaProvider>
			<Router>
				<Routes />
			</Router>
		</MetaProvider>
	);
};

export default App;
