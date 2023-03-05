import Categories from "../components/Categories";
import Combo from "../components/Combo";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import HomeImg from '../assets/home-img.jpg'

function Home() {
  const [combos, setCombos] = useState([])

  useEffect(() => {
    async function fetchCombos() {
      const response = await fetch('/buyers/comboTest', {
        method: 'GET'
      })

      const json = await response.json()
      console.log(json)
      setCombos(json)
    }

    fetchCombos()
  }, [])


  return (
    <div className="home">
      <div className="home-img" />
      <div className="home-container">
        <h1>Combos</h1>
        <div className="combo-container">
          {/* <Combo />
          <Combo />
          <Combo />
          <Combo /> */}
          { 
            combos.map((combo) => {return <Combo combo={combo} key={combo._id}/>})
          }
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
    </div>
  );
}

export default Home