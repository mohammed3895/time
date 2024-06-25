import { Outlet } from "react-router-dom";
import Navbar from "../shared/navbar/Navbar";
import Footer from "../shared/Footer";

const MainLayout = () => {
  return (
    <main className="w-full min-h-dvh flex flex-col">
      <div className="w-full h-full flex flex-col justify-between items-center">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </main>
  );
};

export default MainLayout;
