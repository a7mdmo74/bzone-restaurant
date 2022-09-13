import React, { useState } from "react";
import { Hero, Scrolling } from "../../components";
import Dishes from "../../containers/Dishes";
import Meals from "../../containers/Meals";
const Home = () => {
  const [meal, setMeal] = useState("Beef");
  return (
    <section id="home">
      <Hero />
      <Scrolling />
      <Dishes setMeal={setMeal} meal={meal} />
      <Meals meal={meal} />
    </section>
  );
};

export default Home;
