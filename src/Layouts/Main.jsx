// import { Outlet } from "react-router-dom";
import Header from "../Pages/Shared/Header/Header";
import Banner from "../Pages/Banner/Banner";
import Footer from "../Pages/Shared/Footer/Footer";
import Chefs from "../Pages/Chefs/Chefs";
import About from "../Pages/About/About";
import Service from "../Pages/Service/Service";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Chefs></Chefs>
      <About></About>
      <Service></Service>
      <Footer></Footer>
    </div>
  );
};

export default Main;
