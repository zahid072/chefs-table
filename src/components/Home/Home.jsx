import React, { useEffect, useState } from "react";
import Nav from "../navbar/Nav";
import Banner from "../Banner/Banner";
import Recipe from "../recipe/Recipe";

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  

  useEffect(() => {
    fetch('recipe.json')
    .then(res => res.json())
    .then(data => {
        setRecipes(data);
    } )
  }, []);
  return (
    <>
      <div>
        <Nav />
      </div>
      <div>
        <Banner />
      </div>
      <div>
        <Recipe recipes={recipes}/>
      </div>
    </>
  );
};

export default Home;
