import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect } from "react";

function HorizontalScrollCarousel({ children, scrollYProgress, tef }) {
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-83.5%"]);

  return (
    <div id="horizontal__container" ref={tef} className="relative h-[500vh]">
      <div className="sticky__con sticky top-0 flex  h-screen overflow-hidden w-fit ">
        <motion.div id="horizon" style={{ x }} className="flex w-full">
          {children}
        </motion.div>
      </div>
    </div>
  );
}

export default HorizontalScrollCarousel;
