import { useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import AnimatedText from "./helper/AnimatedText";
import Button from "./helper/Button";
import brochure from "../assets/download/brochure.jpg";

function Availability({ onIsActive }) {
  const ref = useRef(null);

  const isInView = useInView(ref);
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
      if (window.innerWidth >= 1024) onIsActive("availability");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls, onIsActive]);

  return (
    <section
      id="availability"
      ref={ref}
      className="relative lg:content p-4 lg:pl-8 pt-28 h-fit"
    >
      <h2 className="text-[.8125em] uppercase text-gray-500 mb-4">
        Availability
      </h2>
      <div>
        <AnimatedText
          text="discover our available apartments"
          classes="text-[2.5em] font-thin mb-5 prism lg:text-[4rem]"
          controls={controls}
        />
      </div>
      <div className="my-4 border-black/40 border-[1px] border-x-0 border-b-0 py-4 w-full lg:flex gap-10">
        <div className="w-full lg:w-fit flex items-center justify-between lg:justify-start gap-6 mb-5 lg:mb-0">
          <p className="uppercase text-[.825em] text-[#c88e57]">
            Download brochure
          </p>
          <Button
            onMouseClick={() => {
              window.location.href = brochure;
            }}
          ></Button>
        </div>
        <div className="w-full lg:w-fit flex items-center justify-between lg:justify-start gap-5">
          <p className="uppercase text-[.825em]">Make an appointement</p>
          <Button color="black" onMouseClick={() => {}}></Button>
        </div>
      </div>
      <div>
        <p className=" prism leading-8  lg:leading-10 text-[1.2em]  pointer-events-none">
          Welcome to our exclusive collection of meticulously designed
          apartments. Each unit, ranging from the intimate 114.32 square meters
          to the expansive 440.11 square meters reflects a harmonious blend of
          sophistication and comfort. Nestled across six floors, our twelve
          apartments stand tall, adorning both sides of our magnificent building
          with convenient parking facilities gracing the landscape.
          <br />
          <br />
          Step into a world where elegance meets modernity. Our thoughtfully
          curated spaces promise an unforgettable stay, inviting you to savor
          the panoramic views from the higher floors or find solace in serene
          corners. The cozy ambiance of our smaller units offers an intimate
          setting, while the grander ones provide sprawling sanctuaries,
          ensuring a tailored experience for every guest.
        </p>
      </div>
    </section>
  );
}

export default Availability;
