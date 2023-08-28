import { useEffect, useRef } from "react";
import island from "../assets/video/island.mp4";
import {
  useAnimation,
  useInView,
  useScroll,
  useTransform,
  motion,
  useMotionValueEvent,
} from "framer-motion";
import AnimatedText from "./helper/AnimatedText";

function Island() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const controls = useAnimation();
  const { scrollY, scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // console.log("Page scroll: ", latest);
  });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
      window.location.hash = "the-island";
    } else controls.start("hidden");
  }, [isInView, controls]);

  return (
    <section
      id="island"
      className="relative lg:h-full  lg:content bg-[#c88e57] text-white p-4 pt-12 text-center lg:flex flex-col items-center justify-center"
    >
      <h3 className="uppercase  font-light  lg:translate-y-14">the island</h3>
      <div
        ref={ref}
        className="translate-y-4 lg:translate-y-14
      "
      >
        <AnimatedText
          text="Experience the best of island"
          classes="text-[2.2em] prism lg:text-[4.625em] lg:w-[700px] lg:leading-[100px] z-[30]"
          controls={controls}
        />
      </div>
      <motion.video
        src={island}
        className={`w-full h-auto lg:w-[600px]`}
        muted
        autoPlay
        loop
        style={{ scale: scrollYProgress }}
      />
      <div ref={ref} className="-translate-y-10 lg:-translate-y-14">
        <AnimatedText
          text="Living on Bali"
          classes="text-[2.8em] leading-10 prism  lg:text-[4.625em]"
          controls={controls}
        />
      </div>
      <p className="leading-4 text-[.75em] text-light mb-20 lg:w-[700px]">
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
