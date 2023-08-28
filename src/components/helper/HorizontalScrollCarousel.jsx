import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

function HorizontalScrollCarousel({ children, scrollYProgress, tef }) {
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-83.5%"]);

  return (
    <div id="horizontal__container" ref={tef} className="relative h-[500vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex">
          {children}
        </motion.div>
      </div>
    </div>
  );
}

export default HorizontalScrollCarousel;
