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
      floor: 0,
      side: "left",
      parking: "yes",
      availability: "available",
      area: 147.01,
      floorplan: "https://imgur.com/a/qO7Aix5",
    },
    {
      fraction: "L",
      beedrooms: 2,
      floor: 0,
      side: "left",
      parking: "yes",
      availability: "available",
      area: 139.41,
      floorplan: "https://imgur.com/a/qO7Aix5",
    },
    {
      fraction: "M",
      beedrooms: 2,
      floor: 0,
      side: "left",
      parking: "yes",
      availability: "available",
      area: 147.35,
      floorplan: "https://imgur.com/a/qO7Aix5",
    },
    {
      fraction: "N",
      beedrooms: 3,
      floor: 1,
      side: "left",
      parking: "yes",
      availability: "available",
      area: 290.24,
      floorplan: "https://imgur.com/a/qO7Aix5",
    },
    {
      fraction: "J",
      beedrooms: 1,
      floor: 1,
      side: "left",
      parking: "yes",
      availability: "available",
      area: 122.51,
      floorplan: "https://imgur.com/a/qO7Aix5",
    },
    {
      fraction: "R",
      beedrooms: 1,
      floor: 1,
      side: "left",
      parking: "yes",
      availability: "available",
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
        <div className="w-full flex  justify-between items-start text-[14px] py-4 gap-[5rem]">
          <p className="uppercase font-light w-[25%] ">fraction</p>
          <p className="uppercase font-light w-[25%] ">bedrooms</p>
          {window.innerWidth >= 1024 && (
            <>
              <p className="uppercase font-light w-[25%] ">floor</p>
              <p className="uppercase font-light w-[25%] ">side</p>
              <p className="uppercase font-light w-[25%] ">parking</p>
            </>
          )}
          <p className="uppercase font-light w-[25%] ">areas(m2)</p>
          {window.innerWidth >= 1024 && (
            <p className="uppercase font-light w-[25%] ">availability</p>
          )}
          <p className="uppercase font-light w-[25%] ">floorplan</p>
        </div>
        {aparmentList.map(
          (
            {
              fraction,
              beedrooms,
              area,
              floorplan,
              floor,
              side,
              parking,
              availability,
            },
            i
          ) => {
            return (
              <div
                key={i + area}
                className={`w-full flex items-center justify-between border-gray-300 border-[1px] lg:text-[14px] border-x-0 border-b-0 py-4 ${
                  i == aparmentList.length - 1 && "border-b-[1px]"
                }`}
              >
                <p className="w-[25%] lg:w-full">{fraction}</p>
                <p className="w-[25%] lg:w-full">{beedrooms}</p>
                {window.innerWidth >= 1024 && (
                  <>
                    <p className="w-[25%] lg:w-full">{floor}</p>
                    <p className="w-[25%] lg:w-full uppercase">{side}</p>
                    <p className="w-[25%] lg:w-full uppercase">{parking}</p>
                    <p className="w-[25%] lg:w-full uppercase">
                      {availability}
                    </p>
                  </>
                )}
                <p className="w-[25%] lg:w-full">{area}</p>
                <button
                  onClick={() => window.open(floorplan, "_blank")}
                  className="w-[25%] lg:w-[42%]  uppercase text-[8px] px-5 py-1 border-black border-[1px] rounded-2xl hover:bg-black hover:text-white duration-200 ease-linear cursor-pointer"
                >
                  {window.innerWidth <= 1024 ? "View" : "View floorplan"}
                </button>
              </div>
            );
          }
        )}
      </ul>
    </section>
  );
}

export default Availability;
