import React from "react";
import Navbar from "./Components/Navbar";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import GlobalStyles from "./Components/Globalstyles";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Content />
      <Footer />
    </>
  );
};

export default App;
