import { Footer } from "antd/es/layout/layout";
import { Outlet, } from "react-router-dom";
import Header from "../components/Header";


const Main = () => {
   return (
      <div className="max-w-7xl mx-auto">
         <Header />
         <div className="min-h-[calc(100vh-150px)]">
            <Outlet />
         </div>
         <Footer style={{ textAlign: 'center' }}>URL Shortener ©{new Date().getFullYear()}</Footer>
      </div>
   );
};

export default Main;