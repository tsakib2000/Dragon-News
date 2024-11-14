import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import LeftNavbar from "../Components/LayoutComponent/LeftNavbar";
import RightNav from "../Components/LayoutComponent/RightNav";
import Navbar from "../Components/Navbar";

const Home = () => {
  return (
    <div className="font-poppins">
      <header>
        <Header />
        <section className="w-11/12 mx-auto">
          <LatestNews />
        </section>
      </header>
      <nav>
        <section className="w-11/12 mx-auto py-6">
          <Navbar></Navbar>
        </section>
      </nav>
      <main className="w-11/12 mx-auto pt-5 grid grid-cols-12">
            <aside className="col-span-3"><LeftNavbar/></aside>
            <section className="col-span-6"><Outlet/></section>
            <aside className="col-span-3"><RightNav/></aside>
      </main>
    </div>
  );
};

export default Home;
