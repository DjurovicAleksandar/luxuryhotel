import { useEffect, useRef } from "react";
import Badge from "./HomeSubComponenets/Badge";
import AnimatedText from "./helper/AnimatedText";
import {
  useAnimation,
  useInView,
  motion,
  useMotionValue,
  useDragControls,
} from "framer-motion";

function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const controls = useAnimation();
  const buttonControls = useAnimation();
  const x = useMotionValue(0);
  const dragControls = useDragControls();

  const variantsX = {
    visible: {
      scale: 1,
    },
    hidden: { scale: 0 },
  };

  const hoverAnimation = {
    scale: 1, // Increase size on hover
    transition: {
      duration: 0.3,
    },
  };

  useEffect(() => {
    if (isInView) setTimeout(() => controls.start("visible"), 500);
    else controls.start("hidden");
  }, [isInView, controls]);

  return (
    <div className="w-full h-full relative homebackground text-white lg:content">
      <Badge />
      <div className="w-full h-full flex flex-col absolute top-0 items-center justify-between pt-[6rem] text-center bg-black/30">
        <div ref={ref}>
          <AnimatedText
            text="Comfort and elegance at california hotel"
            classes="text-[12vw] font-thin mb-5 prism lg:text-[6.280rem] lg:w-[1000px] lg:leading-[100px]"
            controls={controls}
          />
          <p className="title__sub w-[240px] text-[12px] mx-auto uppercase mt-4 lg:text-[1.62em] lg:w-[600px]">
            Such a lovely face, plenty of room at the Hotel California. Any time
            of year,You can find it here
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

          <motion.button
            whileHover={() => {
              buttonControls.start("visible");

              return hoverAnimation;
            }}
            onMouseLeave={() => buttonControls.start("hidden")}
            className="hidden lg:flex absolute right-10 bottom-5  rounded-full w-[8rem] h-[8rem] items-center justify-center bg-[#c88e57]  text-[#fff] mr-8 text-[0.825em] ease-linear duration-300 hover:shadow-xl hover:bottom-10"
          >
            SCROLL
            <motion.span
              initial="hidden"
              variants={variantsX}
              animate={buttonControls}
              transition={{ duration: 0.4 }}
              whileFocus={{ y: "100px" }}
              className="hidden lg:flex absolute inset-0  rounded-full w-[8rem] h-[8rem] items-center justify-center bg-[#fff]  text-[#c88e57] mr-8"
            >
              SCROLL
            </motion.span>
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default Home;
