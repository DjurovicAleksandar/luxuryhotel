import { useEffect, useRef } from "react";
import island from "../assets/video/island.mp4";
import {
  useAnimation,
  useInView,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import AnimatedText from "./helper/AnimatedText";

function Island({ onIsActive }) {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const controls = useAnimation();
  const { scrollYProgress } = useScroll(ref);

  const videoScale =
    window.innerWidth >= 1024 &&
    useTransform(scrollYProgress, [0.42, 0.6], [1, 7]);
  const textY =
    window.innerWidth >= 1024 &&
    useTransform(scrollYProgress, [0.4, 0.6], [0, 200]);

  const opacityY =
    window.innerWidth >= 1024 &&
    useTransform(scrollYProgress, [0.3, 0.5], [1, 0]);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
      if (window.innerWidth >= 1024) onIsActive("the-island");
    }
  }, [isInView, controls]);

  return (
    <section
      ref={ref}
      id="the-island"
      className="relative lg:h-full  lg:content  bg-[#c88e57] text-white p-4 pt-12 text-center lg:flex flex-col items-center justify-center"
    >
      <h3 className="uppercase  font-light  lg:translate-y-14">the island</h3>
      <div
        className="translate-y-4 lg:translate-y-14
      "
      >
        <AnimatedText
          textX={textY}
          text="Experience the best of island"
          classes="text-[2.2em] prism lg:text-[4.625em] lg:w-[700px] lg:leading-[100px]"
          controls={controls}
        />
      </div>
      <motion.video
        src={island}
        className={`w-full h-auto lg:w-[500px]`}
        muted
        autoPlay
        loop
        style={{ scale: videoScale }}
      />
      <div className="-translate-y-10 lg:-translate-y-14">
        <AnimatedText
          textX={textY}
          opacityY={opacityY}
          text="Living on Bali"
          classes="text-[2.8em] leading-10 prism  lg:text-[4.625em]"
          controls={controls}
        />
      </div>

      <p
        id="rotation__text"
        className="text-[.75em]  mb-20 lg:w-[400px] lg:absolute top-1/2  -left-[6rem]  lg:rotate-90 font-thin leading-5 lg:hover:left-5 lg:hover:rotate-0 duration-300 ease-in-out"
      >
        LIVING ON ONE24 OFFERS A CHANCE TO EXPERIENCE THE ISLAND&apos;S LUSH
        GREEN LANDSCAPES, PICTURESQUE BEACHES, AND WARM CLIMATE ALL YEAR ROUND.
        THE ISLAND IS HOME TO A DIVERSE ARRAY OF OUTDOOR ACTIVITIES, FROM HIKING
        TO PARAGLIDING, AND THE LOCAL CULTURE IS RICH WITH HISTORY AND
        TRADITION. IN ADDITION, MADEIRA HAS A GROWING ECONOMY, MAKING IT AN
        EXCELLENT PLACE TO LIVE AND WORK. WHETHER YOU&apos;RE LOOKING FOR A
        PEACEFUL RETREAT OR AN EXCITING ADVENTURE, MADEIRA ISLAND HAS SOMETHING
        FOR EVERYONE.
      </p>
    </section>
  );
}

export default Island;
