import { type Component } from "solid-js";
import { Outlet } from "@solidjs/router";
import { Title } from "@solidjs/meta";

const Dashboard: Component = () => {
	return (
		<div class="w-screen h-screen">
			<Outlet />
			<Title>Metaverse</Title>
		</div>
	);
};

export default Dashboard;
