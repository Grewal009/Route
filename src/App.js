import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Restaurant from "./components/Restaurants";
import Contact from "./components/Contact";
import About from "./components/About";

const App = () => {
  return (
    <>
      <Header />
      <Restaurant />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
