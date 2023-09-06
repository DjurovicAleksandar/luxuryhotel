import { useAnimation, motion } from "framer-motion";

function LargeBtn({ text, position = "right-10 bottom-5", onMouseClick }) {
  const buttonControls = useAnimation();

  const variantsX = {
    visible: {
      scale: 1,
    },
    hidden: { scale: 0 },
  };

  return (
    <motion.button
      onClick={onMouseClick}
      whileHover={() => {
        buttonControls.start("visible");
      }}
      onMouseLeave={() => buttonControls.start("hidden")}
      className={`hidden lg:flex absolute ${position} rounded-full w-[8rem] h-[8rem] items-center justify-center bg-[#c88e57]  text-[#fff] mr-8 ease-linear duration-200 hover:shadow-xl font-light uppercase  text-[0.9em] tracking-wide`}
    >
      {text}
      <motion.span
        initial="hidden"
        variants={variantsX}
        animate={buttonControls}
        transition={{ duration: 0.2 }}
        className={`hidden lg:flex absolute inset-0  rounded-full w-[8rem] h-[8rem] items-center justify-center bg-[#fff]  text-[#c88e57] mr-8 font-light uppercase  text-[1.1em] tracking-wide`}
      >
        {text}
      </motion.span>
    </motion.button>
  );
}

export default LargeBtn;
