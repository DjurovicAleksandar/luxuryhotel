import { useEffect, useRef } from "react";
import visionPic from "../assets/img/visionPic.jpg";
import { useAnimation, useInView } from "framer-motion";
import AnimatedText from "./helper/AnimatedText";
import AnimateImages from "./helper/AnimateImages";
import AnimatedP from "./helper/AnimatedP";

function Vision({ onIsActive, scrollY }) {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
      if (window.innerWidth >= 1024) onIsActive("home");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls, onIsActive]);

  return (
    <section
      ref={ref}
      id="vision"
      className="relative p-4 lg:w-[40vw]  lg:pt-24 lg:flex flex-col bg-[#f7f4ef]"
    >
      <h3 className="uppercase text-[0.8124rem] my-5 text-[#6f6f6f] ">
        elevate your lifestyle
      </h3>
      <div>
        <AnimatedText
          text="our vision for luxury living on one24 is to create a one-of-a-kind
          development that combines contemporary design with the natural beauty of the island"
          classes="text-[8vw] font-thin mb-5 lg:mb-0 leading-8  lg:w-[90%] lg:text-[2.2em] "
          controls={controls}
        />
      </div>
      <div className="relative w-full h-full lg:flex items-center gap-5">
        {window.innerWidth <= 800 ? (
          <img
            className="w-full lg:w-[14rem] h-auto mb-5 lg:mb-2"
            src={visionPic}
            alt="Sunset"
          />
        ) : (
          <AnimateImages>
            <img
              className="w-full lg:w-[14rem] h-auto mb-5 lg:mb-2"
              src={visionPic}
              alt="Sunset"
            />
          </AnimateImages>
        )}
        {/* {window.innerWidth > 800 && ( */}
        <AnimatedP>
          <p className="text-[0.8124rem] mb-10 lg:mb-20  lg:w-[18rem] lg:text-xs">
            FEATURING STRAIGHT LINES AND MODERN AMENITIES, OUR DEVELOPMENT WILL
            OFFER RESIDENTS THE ULTIMATE IN STYLE AND COMFORT. OUR VISION IS TO
            SET A NEW STANDARD FOR LUXURY LIVING ON MADEIRA ISLAND.
          </p>
        </AnimatedP>
        {/* )} */}
      </div>
      {/* {window.innerWidth <= 800 && (
        <AnimatedP>
          <p className="text-[0.8124rem] mb-10 lg:mb-20  lg:w-[18rem] lg:text-xs">
            FEATURING STRAIGHT LINES AND MODERN AMENITIES, OUR DEVELOPMENT WILL
            OFFER RESIDENTS THE ULTIMATE IN STYLE AND COMFORT. OUR VISION IS TO
            SET A NEW STANDARD FOR LUXURY LIVING ON MADEIRA ISLAND.
          </p>
        </AnimatedP>
      )} */}
    </section>
  );
}

export default Vision;
