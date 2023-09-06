import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const variantsX = {
  visible: {
    opacity: 1,
    x: 0,
  },
  hidden: { opacity: 0, x: 300 },
};

function AnimatedP(props) {
  const { classes, textY, opacityY, children } = props;
  const ref = useRef(null);
  const isInView = useInView(ref);
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView]);
  return (
    <motion.div
      ref={ref}
      transition={{ delay: 0.3 }}
      className={` ${classes} pointer-events-none`}
      style={{ x: textY, opacity: opacityY }}
    >
      <motion.div
        initial="hidden"
        animate={controls}
        variants={variantsX}
        transition={{
          duration: 1,
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export default AnimatedP;
