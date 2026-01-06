import { Outlet } from "react-router-dom";
import Header from "/src/components/layout/Header.jsx";

export default function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
