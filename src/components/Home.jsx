import { useEffect, useRef } from "react";
import Badge from "./HomeSubComponenets/Badge";
import AnimatedText from "./helper/AnimatedText";
import { useAnimation, useInView, useTransform, motion } from "framer-motion";

import LargeBtn from "./helper/LargeBtn";

import { scrollToPosition } from "./helper/HelpserFunctions";

function Home({ onIsActive, scrollY }) {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const controls = useAnimation();

  const paralaxY = useTransform(scrollY, [0, 0.2], ["0%", "100%"]);
  const textY = useTransform(scrollY, [0, 0.1], ["0%", "100%"]);
  const opacityY = useTransform(scrollY, [0, 0.1], [1, 0]);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
      if (window.innerWidth >= 1024) onIsActive("home");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls, onIsActive]);

  if (screen.width < 1024) {
    return (
      <section
        ref={ref}
        id="home"
        className="relative lg:content h-screen homebackground text-white"
      >
        <Badge />
        <div className="w-full h-full flex flex-col absolute top-0 items-center justify-around pt-[6rem] text-center bg-black/30">
          <div>
            <h1 className="text-[12vw] font-thin mb-5 prism lg:text-[6.280rem] lg:w-[1000px] lg:leading-[100px]">
              Comfort and elegance at california hotel
            </h1>
            <p className="title__sub w-[240px] text-[12px] mx-auto uppercase mt-4 lg:text-[1.62em] lg:w-[600px] font-light tracking-wider">
              Such a lovely face, plenty of room at the Hotel California. Any
              time of year,You can find it here
            </p>
          </div>
          <div className="flex w-full p-4 items-start justify-between lg:justify-start lg:gap-10 lg:ml-8 text-xs">
            <a className="text-white" href="#">
              Call us Today
            </a>
            <div className="text-left">
              <p>+351 291 147 686</p>
              <p>Local Call, Fees may apply</p>
              <p>+351 291 147 686</p>
              <p>Local Call, Fees may apply</p>
            </div>
            <LargeBtn
              text="Scroll"
              onMouseClick={() => scrollToPosition(1.072)}
            />
          </div>
        </div>
      </section>
    );
  }

  return (
    <motion.section
      ref={ref}
      id="home"
      className="relative lg:content h-screen homebackground text-white"
      style={{ x: paralaxY }}
    >
      <Badge />
      <div className="w-full h-full flex flex-col absolute top-0 items-center justify-around pt-[6rem] text-center bg-black/30">
        <div>
          <AnimatedText
            text="Comfort and elegance at california hotel"
            classes="text-[12vw] font-thin mb-5 prism lg:text-[6.280rem] lg:w-[1000px] lg:leading-[100px]"
            controls={controls}
            textY={textY}
            opacityY={opacityY}
          />
          <motion.p
            className="title__sub w-[240px] text-[12px] mx-auto uppercase mt-4 lg:text-[1.62em] lg:w-[600px] font-light tracking-wider"
            style={{ x: textY, opacity: opacityY }}
          >
            Such a lovely face, plenty of room at the Hotel California. Any time
            of year,You can find it here
          </motion.p>
        </div>
        <motion.div
          className="flex w-full p-4 items-start justify-between lg:justify-start lg:gap-10 lg:ml-8 text-xs"
          style={{ x: textY, opacity: opacityY }}
        >
          <a className="text-white" href="#">
            Call us Today
          </a>
          <div className="text-left">
            <p>+351 291 147 686</p>
            <p>Local Call, Fees may apply</p>

            <p>+351 291 147 686</p>
            <p>Local Call, Fees may apply</p>
          </div>

          <LargeBtn
            text="Scroll"
            onMouseClick={() => scrollToPosition(1.072)}
          />
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Home;
