import { useTransform, motion } from "framer-motion";
import { useEffect } from "react";

function Nav({ scrollYProgress }) {
  const scrollToSection = (value = 0, section = "home") => {
    window.scrollTo(0, value);

    setTimeout(() => {
      window.location.hash = section;
    }, 100);
  };

  const color = useTransform(
    scrollYProgress,
    [0, 0.2, 0.65, 0.99, 1],
    [
      "rgb(255,255,255)", // home
      "rgb(0,0,0)", // vision and aparments
      "rgb(255,255,255)", // island
      "rgb(0,0,0)", //location and availability
      "rgb(255,255,255)", //inquire
    ]
  );

  return (
    <motion.nav
      id="nav"
      className="absolute lg:fixed top-0 left-0 right-0 w-full h-22 z-[200] flex items-center justify-end lg:justify-between p-5 uppercase"
      style={{
        color: color,
      }}
    >
      {window.innerWidth >= 1024 && (
        <>
          <div>&nbsp;</div>
          <div className="">
            <a
              onClick={scrollToSection}
              className="text-xs mr-10 cursor-pointer"
            >
              Home
            </a>
            <a
              onClick={() =>
                scrollToSection(window.innerHeight - 150, "vision")
              }
              className="text-xs mr-10 cursor-pointer"
            >
              Vision
            </a>
            <a
              onClick={() =>
                scrollToSection(window.innerHeight + 97, "apartments")
              }
              className="text-xs mr-10 cursor-pointer"
            >
              Apartments
            </a>
            <a
              onClick={() =>
                scrollToSection(window.innerHeight * 2.4, "the-island")
              }
              className="text-xs mr-10 cursor-pointer"
            >
              The Island
            </a>
            <a
              onClick={() =>
                scrollToSection(window.innerHeight * 3.2, "location")
              }
              className="text-xs mr-10 cursor-pointer"
            >
              Location
            </a>
            <a
              onClick={() =>
                scrollToSection(window.innerHeight * 4, "availability")
              }
              className="text-xs mr-10 cursor-pointer"
            >
              Availability
            </a>
          </div>
        </>
      )}

      <div className="w-fit">
        <a href="#" className="text-xs mr-10 cursor-pointer">
          En
        </a>
        <a
          onClick={() => {
            // scrollToSection(window.innerHeight * 5.1)
            const height = document.body.scrollHeight;
            window.scroll(0, height);
          }}
          className="text-xs cursor-pointer"
        >
          Inquire
        </a>
      </div>
    </motion.nav>
  );
}

export default Nav;
