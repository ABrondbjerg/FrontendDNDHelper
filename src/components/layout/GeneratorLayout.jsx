import { Outlet } from "react-router-dom";
import Header from "/Users/alexbrondbjerg/DndhelperFrontend/FrontendDNDHelper/src/components/layout/Header.jsx";

export default function GeneratorLayout() {
  return (
    <div>
      <h1>Generator Section</h1>
      <Outlet />
    </div>
  );
}
