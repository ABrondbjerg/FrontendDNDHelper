import { Outlet } from "react-router-dom";
import Header from "/Users/alexbrondbjerg/DndhelperFrontend/FrontendDNDHelper/src/components/layout/Header.jsx";

export default function LoginLayout() {
  return (
    <div>
      <h1>Login Section</h1>
      <Outlet />
    </div>
  );
}
