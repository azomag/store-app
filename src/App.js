
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Smallcarts from "./components/Smallcarts";
import Food from "./components/Food";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Smallcarts />
      <Food />
      <Categories />
      <Footer />
    </div>
  );
}

export default App;
