import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import Navbar from "../Components/Navbar";

const Home = () => {
  return (
    <div className="font-poppins">
      <header>
        <Header />
        <section className="w-11/12 mx-auto">
          <LatestNews />
        </section>
        <section className="w-11/12 mx-auto py-6">
            <Navbar></Navbar>
        </section>
      </header>
      <nav></nav>
      <main></main>
    </div>


  );
};

export default Home;
