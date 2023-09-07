import { useState, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Vision from "./components/Vision";
import Apartments from "./components/Apartments";
import Island from "./components/Island";
import Location from "./components/Location";
import Availability from "./components/Availability";
import Inquire from "./components/Inquire";
import HorizontalScrollCarousel from "./components/helper/HorizontalScrollCarousel";
import { useEffect } from "react";

function App() {
  const targetRef = useRef(null);
  const [isActive, setIsActive] = useState("home");

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  useEffect(() => {
    window.addEventListener(
      "keydown",
      function (e) {
        if (["ArrowLeft", "ArrowRight"].indexOf(e.code) > -1) {
          e.preventDefault();
        }
      },
      false
    );
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
    <div className="">
      <Nav
        scrollYProgress={scrollYProgress}
        isActive={isActive}
        onIsActive={setIsActive}
      />
      <main>
        <HorizontalScrollCarousel
          tef={targetRef}
          scrollYProgress={scrollYProgress}
        >
          <Home scrollY={scrollYProgress} onIsActive={setIsActive} />

          <Vision scrollY={scrollYProgress} onIsActive={setIsActive} />

          <Apartments scrollY={scrollYProgress} onIsActive={setIsActive} />
          <Island scrollYProgress={scrollYProgress} onIsActive={setIsActive} />
          <Location
            scrollYProgress={scrollYProgress}
            onIsActive={setIsActive}
          />
          <Availability onIsActive={setIsActive} />
        </HorizontalScrollCarousel>
        <Inquire onIsActive={setIsActive} />
      </main>
    </div>
  );
}

export default App;
