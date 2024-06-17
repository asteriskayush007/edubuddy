import React from "react";
import Navbar from "../components/Navbar";
import Cource from "../components/Cource";
import Footer from "../components/Footer";

function Cources() {
  return (
    <>
      <div>
        <Navbar />
      </div>

      <div className="min-h-screen">
        <Cource />
      </div>
      <Footer />
    </>
  );
}

export default Cources;
