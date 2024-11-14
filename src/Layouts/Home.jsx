import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";

const Home = () => {
  return (
    <>
      <header>
        <Header />
        <section className="w-11/12 mx-auto">
          <LatestNews />
        </section>
      </header>
      <nav></nav>
      <main></main>
    </>
  );
};

export default Home;
