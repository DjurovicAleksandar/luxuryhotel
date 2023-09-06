import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const roundVariants = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};

function NavButton({
  value,
  name,
  isActive,
  color,
  scrollToSection,
  onIsActive,
}) {
  const roundControls = useAnimation();

  useEffect(() => {
    if (isActive === name) {
      roundControls.start("visible");
    } else roundControls.start("hidden");
  }, [roundControls, name, isActive]);

  return (
    <button
      onClick={() => {
        scrollToSection(value);
        onIsActive(name);
      }}
      className="text-xs mr-10 cursor-pointer uppercase "
    >
      <motion.span
        className="w-2 h-2 mr-2 rounded-full inline-block"
        variants={roundVariants}
        initial="hidden"
        animate={roundControls}
        transition={{ delay: 0.1, duration: 0.2 }}
        style={{ backgroundColor: color }}
      />

      {name}
    </button>
  );
}

export default NavButton;
