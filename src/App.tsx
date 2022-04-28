import React from "react";
import "./App.css";
import HeroPage from "./components/HeroPage/HeroPage";
import WorkPage from "./components/WorkPage/WorkPage";
import Service from "./components/Service/Service";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <React.Fragment>
      <HeroPage />
      <WorkPage />
      <Service />
      <Footer />
    </React.Fragment>
  );
}

export default App;
