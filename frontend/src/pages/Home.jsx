import Categories from "../components/Categories";
import Combo from "../components/Combo";

function Home() {
  return (
    <div className="home-container">
      <div className="combo-container">
        <Combo />
        <Combo />
        <Combo />
        <Combo />
      </div>
      <div>Categories: </div>
      <div className="category-container">
        <Categories />
        <Categories />
        <Categories />
        <Categories />
        <Categories />
        <Categories />
        <Categories />
        <Categories />
      </div>
    </div>
  );
}

export default Home