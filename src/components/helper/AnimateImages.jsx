import { useAnimation, useInView, motion } from "framer-motion";
import { useState } from "react";
import { useEffect, useRef } from "react";

const backgroundVariants = {
  hidden: {
    opacity: 0,
    x: 100,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};

const overlayVariants = {
  hidden: {
    right: 0,
  },
  visible: {
    right: "100%",
  },
};

const handleMouseEnter = (state) => state(true);
const handleMouseLeave = (state) => {
  state(false);
};

function AnimateImages({ children }) {
  const [showText, setShowText] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [imgName, setImgName] = useState();

  const ref = useRef(null);
  const isInView = useInView(ref);

  const backgroundControls = useAnimation();
  const overlayControls = useAnimation();

  const handleMouseMove = (state, e) => {
    state({ x: e.clientX, y: e.clientY });
    if (e?.target.alt === imgName) return; //stoping unnecessary rerenders
    setImgName(e?.target.alt);
  };

  useEffect(() => {
    if (isInView) {
      backgroundControls.start("visible");

      overlayControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} className={`w-fit overflow-hidden relative`}>
      <motion.div
        variants={backgroundVariants}
        initial="hidden"
        animate={backgroundControls}
        transition={{ duration: 0.5, delay: 0.25, ease: "easeIn" }}
        whileHover={() => handleMouseEnter(setShowText)}
        onMouseLeave={() => handleMouseLeave(setShowText, setCursorPosition)}
        onMouseMove={(e) => handleMouseMove(setCursorPosition, e)}
      >
        {children}
      </motion.div>
      {showText && (
        <div
          className="absolute text-white font-thin pointer-events-none"
          style={{ top: cursorPosition.y - 70, left: 10 }}
        >
          {imgName}
        </div>
      )}

      {showText && (
        <div
          className="absolute text-white font-semibold pointer-events-none"
          style={{
            top: `${cursorPosition.y}%`,
            left: `${cursorPosition.x}%`,
          }}
        >
          Expand
        </div>
      )}
      <motion.div
        variants={overlayVariants}
        initial="hidden"
        animate={overlayControls}
        transition={{ duration: 0.5, ease: "easeIn" }}
        className="z-50 absolute top-0 bottom-0 left-0 right-0 bg-[#c88e57]"
      />
    </div>
  );
}

export default AnimateImages;
