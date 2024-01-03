import { useState, useRef } from "react";
import { useScroll } from "framer-motion";
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

import CountUpNum from "./components/helper/CountUp";

function App() {
  const targetRef = useRef(null);
  const [isActive, setIsActive] = useState("home");
  const [isLoaded, setIsLodaed] = useState(true);

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

    setTimeout(() => {
      setIsLodaed(true);
    }, 6000);
  }, []);

  return (
    <>
      <CountUpNum isLoaded={isLoaded} />
      <div
        id="application"
        className="duration-300 ease-in opacity-0"
        style={{ opacity: isLoaded && 1 }}
      >
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
            <Island
              scrollYProgress={scrollYProgress}
              onIsActive={setIsActive}
            />
            <Location
              scrollYProgress={scrollYProgress}
              onIsActive={setIsActive}
            />
            <Availability onIsActive={setIsActive} />
          </HorizontalScrollCarousel>
          <Inquire onIsActive={setIsActive} />
        </main>
      </div>
    </>
  );
}

export default App;
