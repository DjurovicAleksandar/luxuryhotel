import NavButton from "./helper/NavButton";
import { useTransform, motion } from "framer-motion";
import { scrollToPosition } from "./helper/HelpserFunctions";

import AnimatedCursor from "react-animated-cursor";
import { useState } from "react";

const NavButtons = [
  { name: "home", value: 0 },
  { name: "vision", value: 1.075 },
  { name: "apartments", value: 1.5 },
  { name: "the-island", value: 3.19 },
  { name: "location", value: 4.25 },
  { name: "availability", value: 5.4 },
];

const colors = [
  "rgb(255,255,255)", // home
  "rgb(0,0,0)", // vision and aparments
  "rgb(255,255,255)", // island
  "rgb(0,0,0)", //location and availability
];

function Nav({ scrollYProgress, isActive, onIsActive }) {
  const color =
    window.innerWidth >= 1024
      ? useTransform(scrollYProgress, [0, 0.2, 0.65, 1], colors)
      : "black";

  return (
    <motion.nav
      id="nav"
      className="absolute lg:fixed top-0 left-0 right-0 w-full h-22 z-[200] flex items-center justify-end lg:justify-between p-5"
      style={{ color: color }}
    >
      {" "}
      {window.innerWidth >= 1024 && (
        <>
          <div>&nbsp;</div>
          <div>
            {NavButtons.map(({ name, value }) => {
              return (
                <NavButton
                  key={name}
                  value={value}
                  scrollToSection={scrollToPosition}
                  onIsActive={onIsActive}
                  isActive={isActive}
                  color={color}
                  name={name}
                />
              );
            })}
          </div>
        </>
      )}
      <div className="w-fit">
        <button href="#" className="text-xs mr-10 cursor-pointer uppercase">
          En
        </button>
        <NavButton
          name="inquire"
          color={color}
          value={document.body.scrollHeight}
          isActive={isActive}
          scrollToSection={scrollToPosition}
          onIsActive={onIsActive}
        />
      </div>
    </motion.nav>
  );
}
export default Nav;
