import { motion, useAnimation } from "framer-motion";

const arrowVariationsLeft = {
  hidden: {
    x: -15,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
};

const arrowVariationsRight = {
  hidden: {
    x: 0,
    opacity: 1,
  },
  visible: {
    x: 15,
    opacity: 0,
  },
};

const hoverAnimation = {
  x: [-5, 5],
  y: [5, -5],
  scale: 1.2, // Increase size on hover
  transition: {
    duration: 0.3,
  },
};

function Button({ onMouseClick, color }) {
  const arrowControls = useAnimation();

  function handleMouse() {
    arrowControls.start("visible");
    return hoverAnimation;
  }

  return (
    <>
      <motion.div
        className="w-[2.5rem] h-[2.5rem] rounded-full bg-[#c88e57] text-white text-[12px] font-thin inline-block relative cursor-pointer"
        onClick={onMouseClick}
        whileHover={handleMouse}
        onMouseLeave={() => {
          arrowControls.start("hidden");
        }}
        style={{ backgroundColor: color }}
      >
        <motion.span
          className="flex items-center justify-center  w-full h-full text-red-400"
          variants={arrowVariationsLeft}
          initial="hidden"
          animate={arrowControls}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <svg
            clipRule="evenodd"
            fillRule="evenodd"
            strokeLinejoin="round"
            strokeMiterlimit="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            width={20}
          >
            <path
              d="m13.022 14.999v3.251c0 .412.335.75.752.75.188 0 .375-.071.518-.206 1.775-1.685 4.945-4.692 6.396-6.069.2-.189.312-.452.312-.725 0-.274-.112-.536-.312-.725-1.451-1.377-4.621-4.385-6.396-6.068-.143-.136-.33-.207-.518-.207-.417 0-.752.337-.752.75v3.251h-9.02c-.531 0-1.002.47-1.002 1v3.998c0 .53.471 1 1.002 1z"
              fillRule="nonzero"
            />
          </svg>
        </motion.span>

        <motion.span
          className="flex items-center justify-center w-full h-full text-red-400 absolute inset-0"
          variants={arrowVariationsRight}
          initial="hidden"
          animate={arrowControls}
          transition={{ duration: 0.3 }}
        >
          <svg
            clipRule="evenodd"
            fillRule="evenodd"
            strokeLinejoin="round"
            strokeMiterlimit="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            width={20}
          >
            <path
              d="m13.022 14.999v3.251c0 .412.335.75.752.75.188 0 .375-.071.518-.206 1.775-1.685 4.945-4.692 6.396-6.069.2-.189.312-.452.312-.725 0-.274-.112-.536-.312-.725-1.451-1.377-4.621-4.385-6.396-6.068-.143-.136-.33-.207-.518-.207-.417 0-.752.337-.752.75v3.251h-9.02c-.531 0-1.002.47-1.002 1v3.998c0 .53.471 1 1.002 1z"
              fillRule="nonzero"
            />
          </svg>
        </motion.span>
      </motion.div>
    </>
  );
}

export default Button;
