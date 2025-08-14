import Banner from "../modules/home/Banner";
import CategoryCard from "../modules/home/CategoryCard";
import PopularCities from "../modules/home/PopularCities";

function HomePage() {
  return (
    <div className="container px-0 mx-auto mb-28">
      <Banner />
      <CategoryCard />
      <PopularCities />
    </div>
  );
}

export default HomePage;
