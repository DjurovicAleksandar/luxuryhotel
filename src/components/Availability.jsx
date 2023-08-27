import { useAnimation, useInView, useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import AnimatedText from "./helper/AnimatedText";
import Inquire from "./Inquire";

function Availability() {
  const ref = useRef(null);
  const ref2 = useRef(null);
  const isInView = useInView(ref);
  const controls = useAnimation();

  const aparmentList = [
    { fraction: "K", beedrooms: 2, area: 147.01, floorplan: "view" },
    { fraction: "L", beedrooms: 2, area: 139.41, floorplan: "view" },
    { fraction: "M", beedrooms: 2, area: 147.35, floorplan: "view" },
    { fraction: "N", beedrooms: 3, area: 290.24, floorplan: "view" },
    { fraction: "J", beedrooms: 1, area: 122.51, floorplan: "view" },
    { fraction: "R", beedrooms: 1, area: 110.21, floorplan: "view" },
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
    if (isInView) setTimeout(() => controls.start("visible"), 500);
    else controls.start("hidden");
  }, [isInView, controls]);

  return (
    <section ref={ref2} className="p-4 lg:content h-screen ">
      <h2 className="text-[.8125em] uppercase text-gray-500 mb-4">
        Availability
      </h2>
      <div ref={ref}>
        <AnimatedText
          text="discover our available apartments"
          classes="text-[2.5em] font-thin mb-5 prism"
          controls={controls}
        />
      </div>
      <div className="my-4 border-black/40 border-[1px] border-x-0 border-b-0 py-4 w-full">
        <div className="w-full flex items-center justify-between">
          <button className="uppercase text-[.825em] text-[#c88e57]">
            Download brochure
          </button>
          <a className="px-[15px] py-[12px] rounded-full bg-[#c88e57] text-white text-[10px]  flex items-center justify-center mb-4">
            &#8594;
          </a>
        </div>
        <div className="w-full flex items-center justify-between">
          <button className="uppercase text-[.825em]">
            Make an appointement
          </button>
          <a className="px-[15px] py-[12px] rounded-full bg-[black] text-white text-[10px]  flex items-center justify-center">
            &#8594;
          </a>
        </div>
      </div>
      <ul>
        <div className="w-full flex items-center justify-between text-xs py-4">
          <p className="uppercase font-light">fraction</p>
          <p className="uppercase font-light">bedrooms</p>
          <p className="uppercase font-light">areas(m2)</p>
          <p className="uppercase font-light">floorplan</p>
        </div>
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
      </ul>
      {/* {window.innerWidth >= 1024 && <Inquire />} */}
    </section>
  );
}

export default Availability;
