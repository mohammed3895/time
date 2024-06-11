import { Outlet } from "react-router-dom";
import Navbar from "../shared/navbar/Navbar";
import Footer from "../shared/Footer";

const MainLayout = () => {
  return (
    <main className="w-full h-dvh flex flex-col">
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
};

export default MainLayout;
