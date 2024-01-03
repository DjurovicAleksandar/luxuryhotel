import Marquee from "react-fast-marquee";
import location from "../assets/img/location.jpg";
import { useEffect, useRef } from "react";
import { useAnimation, useInView } from "framer-motion";
import AnimatedText from "./helper/AnimatedText";
import AnimateImages from "./helper/AnimateImages";
import Button from "./helper/Button";

function Location({ onIsActive }) {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");

      if (window.innerWidth >= 1024) onIsActive("location");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls, onIsActive]);

  return (
    <section
      ref={ref}
      id="location"
      className="relative lg:w-[100vw] lg:flex bg-[#f7f4ef]"
    >
      <div className="py-6 lg:pl-[100px] border-black/40 border-[1px] border-x-0 border-t-0 lg:border-b-0 mb-4 relative">
        <Marquee
          speed={90}
          direction={window.innerWidth <= 1024 ? "left" : "down"}
          className="lg:absolute lg:inset-0 lg:bg-transparent lg:-left-[20rem] overflow-y-hidden"
        >
          <p className="text-4xl font-light uppercase lg:-rotate-90 lg:text-[5vw]">
            &nbsp;In heart of Bali &#x2022;{" "}
          </p>
        </Marquee>
        <div className="hidden lg:block absolute top-2 bottom-0 left-[6rem] border-black/20 border-[1px] brder-b-0 border-t-0 h-full border-l-0" />
      </div>
      <div className="p-4 text-center lg:flex flex-col items-center justify-center lg:w-[50rem] relative">
        <div className="">
          <h2 className="uppercase my-4 text-[.825em] text-gray-400">
            location
          </h2>
          <div>
            <AnimatedText
              text="escape to nature's paradise"
              classes="text-[2.5em] prism leading-8 lg:w-[300px] lg:leading-10"
              controls={controls}
            />
          </div>
          <p className="py-8 leading-5 text-[.825em] font-light lg:w-[330px]">
            OUR LUXURIOUS LIVING ON MADEIRA ISLAND IS NESTLED IN THE HEART OF
            NATURE&apos;S PARADISE. THE ISLAND IS KNOWN FOR ITS STUNNING
            LANDSCAPES AND UNIQUE FLORA AND FAUNA, AND OUR DEVELOPMENT PUTS YOU
            RIGHT IN THE MIDDLE OF IT ALL.
          </p>
        </div>
        <div className="hidden text-[16px] absolute bottom-20 lg:flex items-center justify-center gap-4">
          <p className="text-[#c88e57] uppercase">See location</p>
          <Button
            onMouseClick={() => {
              window.open(
                "https://www.google.com/maps/place/GR8+Solutions+Agency/@43.8170406,18.3615588,15z/data=!4m2!3m1!1s0x0:0xe994d4c5f16eac9e?sa=X&ved=2ahUKEwjV0uLTwIuBAxVLiv0HHZRNAgcQ_BJ6BAhAEAA&ved=2ahUKEwjV0uLTwIuBAxVLiv0HHZRNAgcQ_BJ6BAhbEAg&hl=bs",
                "_blank"
              );
            }}
          />
        </div>
      </div>
      <AnimateImages>
        <img
          src={location}
          // alt="Hotel"
          className="w-full h-auto mb-8 lg:h-screen"
        />
      </AnimateImages>
    </section>
  );
}

export default Location;
