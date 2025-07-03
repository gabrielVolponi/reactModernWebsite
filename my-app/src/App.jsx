import { useState } from "react";
import "./App.css";
import CardQuestion from "./components/card";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SectionAbout from "./components/SectionAbout";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <SectionAbout src='https://cdn.abacus.ai/images/c0a21b4c-f636-482d-94c7-4d42782c470d.png' title='Bring the best of open source to you, your team, and your company' text='Relied upon by more than 17 million developers worldwide, npm is committed to making JavaScript development elegant, productive, and safe. The free npm Registry has become the center of JavaScript code sharing, and with more than two million packages, the largest software registry in the world. Our other tools and services take the Registry, and the work you do around it, to the future.' />
    </>
  );
}

export default App;
