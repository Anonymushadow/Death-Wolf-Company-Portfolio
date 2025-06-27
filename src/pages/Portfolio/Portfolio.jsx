import { NavLink, Outlet } from 'react-router-dom';
import { Navbar } from "@components/features/Portfolio//Navbar/Navbar";

export const Portfolio = () => {
  return (
    <>
      <Navbar />
      <section>
        <Outlet />
      </section>
    </>
  );
};
