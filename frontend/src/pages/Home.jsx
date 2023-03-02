import Categories from "../components/Categories";
import Combo from "../components/Combo";

function Home() {
  return (
    <div className="home-container">
      <h1>Combos: </h1>
      <div className="combo-container">
        <Combo />
        <Combo />
        <Combo />
        <Combo />
      </div>
      <h1>Categories: </h1>
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