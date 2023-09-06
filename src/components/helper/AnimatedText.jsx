import { motion } from "framer-motion";

function AnimatedText(props) {
  const { text, classes, controls, textY, opacityY, textX } = props;
  const variantsX = {
    visible: {
      opacity: 1,
      y: 0,
    },
    hidden: { opacity: 0, y: 100 },
  };

  return (
    <motion.div
      transition={{ delay: 0.3 }}
      className={`text-[2.2em] uppercase ${classes} pointer-events-none`}
      style={{ x: textY, opacity: opacityY, y: textX }}
    >
      {text.split("").map((lettter, i) => {
        return (
          <motion.span
            initial="hidden"
            animate={controls}
            variants={variantsX}
            transition={{
              delay: Math.random() * 0.5,
            }}
            key={i}
          >
            {lettter}
          </motion.span>
        );
      })}
    </motion.div>
  );
}

export default AnimatedText;
