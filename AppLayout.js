import { Outlet } from "react-router";
import Footer from "./src/Components/Footer";
import Header from "./src/Components/Header";


const AppLayout = () => {
  return (
    <div>
      <Header />
         <Outlet />
      <Footer />
    </div>
  );
};

export default AppLayout;