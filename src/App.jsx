import { useEffect, useState } from "react";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Vision from "./components/Vision";
import Apartments from "./components/Apartments";
import Island from "./components/Island";
import Location from "./components/Location";
import Availability from "./components/Availability";
import Inquire from "./components/Inquire";
import {
  motion,
  useTransform,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";

function App() {
  function transformSection(section) {
    const offsetTop = section?.parentElement.offsetTop;
    const scrollSection = section?.querySelector(".scroll__section");
    let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;
    percentage = percentage < 0 ? 0 : percentage > 400 ? 400 : percentage;
    scrollSection.style.transform = `translate3d(${-percentage}vw,0,0)`;
  }

  useEffect(() => {
    if (window.innerWidth <= 800) return;

    window.addEventListener("scroll", () => {
      const stickySection = document.querySelector(".sticky");
      transformSection(stickySection);
    });

    return window.removeEventListener("scroll", () => {});
  }, []);

  if (window.innerWidth <= 800)
    return (
      <div className="h-screen w-screen ">
        <Nav />
        <Home />
        <Vision />
        <Apartments />
        <Island />
        <Location />
        <Availability />
        <Inquire />
      </div>
    );

  return (
    <div className="h-screen w-screen">
      <Nav />
      <main>
        <div className="sticky__parent">
          <div className="sticky">
            <div className="scroll__section">
              <Home />
              <Vision />
              <Apartments />
              <Island />
              <Availability />
            </div>
          </div>
        </div>
        <div>
          <Inquire />
        </div>
      </main>
    </div>
  );
}

export default App;
