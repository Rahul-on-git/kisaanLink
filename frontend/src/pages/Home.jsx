import Categories from "../components/Categories";
import Combo from "../components/Combo";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      <h1>Combos</h1>
      <div className="combo-container">
        <Combo />
        <Combo />
        <Combo />
        <Combo />
      </div>
      <h1>Categories</h1>
      <div className="category-container">
        <Link to="/shop?type=fruits" className="none">
          <Categories type={'Fruits'}/>
        </Link>
        <Link to="/shop?type=vegetables" className="none">
          <Categories type={'Vegetables'}/>
        </Link>
      </div>
    </div>
  );
}

export default Home