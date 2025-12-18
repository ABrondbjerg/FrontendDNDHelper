import { Outlet } from "react-router-dom";

export default function GeneratorLayout() {
  return (
    <div>
      <h1>Generator Section</h1>
      <Outlet />
    </div>
  );
}
