import { Outlet } from "react-router";
import Footer from "./Components/Footer";

function AppLayout() {
  return (
    <div>
      <Outlet />
      <Footer />
    </div>
  );
}

export default AppLayout;
