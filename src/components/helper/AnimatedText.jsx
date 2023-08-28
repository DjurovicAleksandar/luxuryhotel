import { motion } from "framer-motion";

function AnimatedText(props) {
  const { text, classes, controls } = props;
  const variantsX = {
    visible: {
      opacity: 1,
      y: 0,
    },
    hidden: { opacity: 0, y: 100 },
  };

  return (
    <motion.div className={`text-[2.2em] uppercase ${classes}`}>
      {text.split("").map((lettter, i) => {
        return (
          <motion.span
            initial="hidden"
            animate={controls}
            variants={variantsX}
            transition={{
              delay: Math.random(),
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
