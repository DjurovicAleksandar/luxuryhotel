import { useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import AnimatedText from "./helper/AnimatedText";

function Inquire() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) setTimeout(() => controls.start("visible"), 500);
    else controls.start("hidden");
  }, [isInView, controls]);
  return (
    <section className="inquire mt-8 pt-8 text-center text-white p-4 ">
      <div ref={ref}>
        <AnimatedText
          text="Inquire today"
          classes="prism text-[2.5em] mb-5"
          controls={controls}
        />
      </div>
      <button className="mx-auto flex rounded-full w-[8rem] h-[8rem] items-center justify-center bg-[#c88e57] text-white m7-8 text-[0.825em]">
        SCHEDULE
      </button>
      <div className="w-full py-8 border-white border-[1px] border-x-0 border-t-0 mb-8">
        <p className="uppercase text-[1.25em] font-light">
          need a quick response? our sales consultants are ready to help, when
          you need it.
        </p>
      </div>
      <div>
        <p className="uppercase text-xs">visit us</p>
        <p className="uppercase text-xs">av.arriaga 7421 loja, marina</p>
        <p className="uppercase text-xs mb-6">shopping 900-055 bali</p>
      </div>
      <div>
        <p className="uppercase text-xs">contanct us</p>
        <p className="uppercase text-xs">+38765987458</p>
        <p className="uppercase text-xs">local call, fees may apply</p>
        <p className="uppercase text-xs">+385478545875</p>
        <p className="uppercase text-xs mb-6">local call, fees may apply</p>
      </div>
      <div>
        <p className="uppercase text-xs">privacy policy</p>
        <p className="uppercase text-xs mb-6">complaint book</p>
      </div>
      <div>
        <h2 className="uppercase">An exclusive</h2>
        <h2 className="prism mb-6">LOGO</h2>
      </div>
      <div className="text-xs uppercase mb-6">
        <p>Design by Duall - Created by Aleksandar</p>
        <p>One24 - 2023.all rights reserved.</p>
      </div>
    </section>
  );
}

export default Inquire;
