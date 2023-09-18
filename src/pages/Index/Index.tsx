import { Outlet } from "react-router-dom";

export function Index() {
	return (
		<div>
			Index<Outlet></Outlet>
		</div>
	);
}
