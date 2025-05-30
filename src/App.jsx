import React from "react";
import Navbar from "./Components/Navbar";
import Cards from "./Components/Cards";
import Footer from "./Components/Footer";
import FetchProd from "./Components/FetchProd";

const App = () => {
  return (
    <>
      <Navbar />
      <FetchProd />
      <Footer />
    </>
  );
};

export default App;
