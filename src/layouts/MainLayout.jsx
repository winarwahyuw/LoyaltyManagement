import { Outlet } from "react-router-dom";
import AppBar from "../components/AppBar";
import Footer from '../components/Footer';


const MainLayout = () => {
  return (<>
    <div className="main-layout">
      <AppBar />
      <div className="content" style={{ flex: 1}}>
        <Outlet />
      </div>
      <Footer />
    </div>
  </>
  );
}

export default MainLayout;
  