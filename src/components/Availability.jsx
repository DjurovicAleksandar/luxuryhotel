import { useAnimation, useInView, useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import AnimatedText from "./helper/AnimatedText";
import Button from "./helper/Button";
import brochure from "../assets/download/brochure.jpg";

function Availability({ onIsActive }) {
  const ref = useRef(null);

  const isInView = useInView(ref);
  const controls = useAnimation();

  const aparmentList = [
    {
      fraction: "K",
      beedrooms: 2,
      area: 147.01,
      floorplan: "https://imgur.com/a/qO7Aix5",
    },
    {
      fraction: "L",
      beedrooms: 2,
      area: 139.41,
      floorplan: "https://imgur.com/a/qO7Aix5",
    },
    {
      fraction: "M",
      beedrooms: 2,
      area: 147.35,
      floorplan: "https://imgur.com/a/qO7Aix5",
    },
    {
      fraction: "N",
      beedrooms: 3,
      area: 290.24,
      floorplan: "https://imgur.com/a/qO7Aix5",
    },
    {
      fraction: "J",
      beedrooms: 1,
      area: 122.51,
      floorplan: "https://imgur.com/a/qO7Aix5",
    },
    {
      fraction: "R",
      beedrooms: 1,
      area: 110.21,
      floorplan: "https://imgur.com/a/qO7Aix5",
    },
  ];

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
      if (window.innerWidth >= 1024) onIsActive("availability");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  return (
    <section
      id="availability"
      ref={ref}
      className="relative lg:content p-4 lg:pl-8 pt-28"
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
              <button
                onClick={() => window.open(floorplan, "_blank")}
                className="uppercase text-xs px-5 py-1 border-black border-[1px] rounded-2xl hover:bg-black hover:text-white duration-200 ease-linear cursor-pointer"
              >
                View floorplan
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Availability;
