import React from "react";
import "./App.css";
import HeroPage from "./components/pages/HeroPage/HeroPage";
import WorkPage from "./components/pages/WorkPage/WorkPage";
import Service from "./components/pages/Service/Service";
import Footer from "./components/pages/Footer/Footer";

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
