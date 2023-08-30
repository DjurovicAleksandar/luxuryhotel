import { useAnimation, useInView, useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import AnimatedText from "./helper/AnimatedText";

function Availability({ onIsActive }) {
  const ref = useRef(null);

  const isInView = useInView(ref);
  const controls = useAnimation();

  const aparmentList = [
    { fraction: "K", beedrooms: 2, area: 147.01, floorplan: "view" },
    { fraction: "L", beedrooms: 2, area: 139.41, floorplan: "view" },
    { fraction: "M", beedrooms: 2, area: 147.35, floorplan: "view" },
    { fraction: "N", beedrooms: 3, area: 290.24, floorplan: "view" },
    { fraction: "J", beedrooms: 1, area: 122.51, floorplan: "view" },
    { fraction: "R", beedrooms: 1, area: 110.21, floorplan: "view" },
  ];

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
      onIsActive("availability");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  return (
    <section
      id="availability"
      ref={ref}
      className="relative lg:content pl-8 pt-28"
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
        <div className="w-full lg:w-fit flex items-center justify-between lg:justify-start gap-6">
          <button className="uppercase text-[.825em] text-[#c88e57]">
            Download brochure
          </button>
          <a className="px-[15px] py-[12px] rounded-full bg-[#c88e57] text-white text-[10px]  flex items-center justify-center mb-4 lg:mb-0">
            &#8594;
          </a>
        </div>
        <div className="w-full lg:w-fit flex items-center justify-between lg:justify-start gap-5">
          <button className="uppercase text-[.825em]">
            Make an appointement
          </button>
          <a className="px-[15px] py-[12px] rounded-full bg-[black] text-white text-[10px]  flex items-center justify-center">
            &#8594;
          </a>
        </div>
      </div>
      <ul>
        <div className="w-full lg: flex items-center justify-between text-xs py-4">
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
    </section>
  );
}

export default Availability;
