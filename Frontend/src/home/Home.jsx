import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Freecource from "../components/Freecource";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      {/* <Contact/> */}
      <Freecource />
      <Footer />
    </>
  );
}

export default Home;
