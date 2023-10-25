import { type Component } from "solid-js";
import { Outlet } from "@solidjs/router";
import { Title } from "@solidjs/meta";

const Dashboard: Component = () => {
	return (
		<div>
			<Outlet />
			<Title>Metaverse</Title>
		</div>
	);
};

export default Dashboard;
