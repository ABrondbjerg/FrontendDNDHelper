import { Outlet } from "react-router-dom";
import Header from "/Users/alexbrondbjerg/DndhelperFrontend/FrontendDNDHelper/src/components/layout/Header.jsx";

export default function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
