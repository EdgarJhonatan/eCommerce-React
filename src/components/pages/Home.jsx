import Banner from "../organisms/Banner";
import MainProducts from "../organisms/MainProducts";

const Home = () => {
  return (
    <>
      <Banner />
      <div>
        <h2 className="mt-8 text-2xl">Últimos productos ingresados</h2>
        <MainProducts />
      </div>
    </>
  );
};

export default Home;
