import { type Component } from "solid-js";
import { Outlet } from "@solidjs/router";

const Dashboard: Component = () => {
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default Dashboard;