import { useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import AnimatedText from "./helper/AnimatedText";

function Inquire() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const controls = useAnimation();

  const aparmentList = [
    { fraction: "T", beedrooms: 3, area: 152.34, floorplan: "view" },
    { fraction: "V", beedrooms: 2, area: 132.42, floorplan: "view" },
    { fraction: "G", beedrooms: 2, area: 123.01, floorplan: "view" },
    { fraction: "I", beedrooms: 3, area: 220.21, floorplan: "view" },
    { fraction: "U", beedrooms: 1, area: 115.22, floorplan: "view" },
    { fraction: "E", beedrooms: 1, area: 114.32, floorplan: "view" },
    { fraction: "A", beedrooms: 4, area: 320.21, floorplan: "view" },
    { fraction: "B", beedrooms: 5, area: 440.11, floorplan: "view" },
    { fraction: "C", beedrooms: 2, area: 135.12, floorplan: "view" },
  ];

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
      window.location.hash = "inquire";
    } else controls.start("hidden");
  }, [isInView, controls]);
  return (
    <>
      <div className="hidden lg:block p-4 -translate-y-14">
        {aparmentList.map(({ fraction, beedrooms, area, floorplan }, i) => {
          return (
            <li
              key={i + area}
              className={`w-full flex items-center justify-between border-gray-300 border-[1px] border-x-0 border-b-0 py-4 ${
                i == aparmentList.length - 1 && "border-b-[1px]"
              }`}
            >
              <p>{fraction}</p>
              <p>{beedrooms}</p>
              <p>{area}</p>
              <button className="uppercase text-xs px-5 py-1 border-black border-[1px] rounded-2xl">
                {floorplan}
              </button>
            </li>
          );
        })}
      </div>
      <section
        id="inquire"
        className="inquire mt-8 pt-8 text-center text-white p-4"
      >
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
    </>
  );
}

export default Inquire;
