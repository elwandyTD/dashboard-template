import { lazy } from "solid-js";
import type { RouteDefinition } from "@solidjs/router";

const routes: RouteDefinition[] = [
	{
		path: "/",
		component: lazy(() => import("@/components/Dashboard")),
		children: [
			{
				path: ["/", "/overview"],
				component: lazy(() => import("@/pages/dashboard/Overview"))
			},
			{
				path: "/users",
				component: lazy(() => import("@/pages/dashboard/Users"))
			},
			{
				path: "/stores",
				component: lazy(() => import("@/pages/dashboard/Stores"))
			},
			{
				path: "/transactions",
				component: lazy(() => import("@/pages/dashboard/Transactions"))
			},
			{
				path: "/profile",
				component: lazy(() => import("@/pages/dashboard/Profile"))
			},
		]
	},
	{
		path: "/login",
		component: lazy(() => import("@/pages/auth/Login"))
	}
];

export default routes;
