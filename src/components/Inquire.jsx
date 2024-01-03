import { useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import AnimatedText from "./helper/AnimatedText";
import LargeBtn from "./helper/LargeBtn";
// import inquireBgImage from '/src/assets/img/bgfooter.jpg"'
import inquireBgImage from "../assets/img/bgfooter.jpg";

function Inquire({ onIsActive }) {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const controls = useAnimation();

  const aparmentList = [
    {
      fraction: "A",
      beedrooms: 4,
      floor: 4,
      side: "right",
      parking: "yes",
      availability: "available",
      area: 320.21,
      floorplan: "https://imgur.com/a/qO7Aix5",
    },
    {
      fraction: "B",
      beedrooms: 5,
      floor: 5,
      side: "left",
      parking: "yes",
      availability: "available",
      area: 440.11,
      floorplan: "https://imgur.com/a/qO7Aix5",
    },
    {
      fraction: "C",
      beedrooms: 2,
      floor: 6,
      side: "right",
      parking: "yes",
      availability: "available",
      area: 135.12,
      floorplan: "https://imgur.com/a/qO7Aix5",
    },
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
    {
      fraction: "I",
      beedrooms: 3,
      floor: 3,
      side: "left",
      parking: "yes",
      availability: "available",
      area: 220.21,
      floorplan: "https://imgur.com/a/qO7Aix5",
    },
    {
      fraction: "U",
      beedrooms: 1,
      floor: 3,
      side: "left",
      parking: "yes",
      availability: "available",
      area: 115.22,
      floorplan: "https://imgur.com/a/qO7Aix5",
    },
    {
      fraction: "E",
      beedrooms: 1,
      floor: 3,
      side: "right",
      parking: "yes",
      availability: "available",
      area: 114.32,
      floorplan: "https://imgur.com/a/qO7Aix5",
    },
  ];

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
      if (window.innerWidth >= 1024) onIsActive("inquire");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls, onIsActive]);
  return (
    <>
      {" "}
      <section
        ref={ref}
        id="inquire"
        className="inquire mt-8 pt-8 text-center text-white relative"
      >
        <div className="text-black  p-4">
          {" "}
          <ul>
            <div className="w-full flex  justify-between items-start text-[10px] lg:text-[14px] py-4 lg:gap-[5rem] p-4 lg:pl-8">
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
          </ul>
          <div className="p-4 lg:pl-2">
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
                    className={`w-full flex items-center justify-between border-gray-300 border-[1px] border-x-0 border-b-0 py-4 text-[14px] ${
                      i == aparmentList.length - 1 && "border-b-[1px]"
                    }`}
                  >
                    <p className="w-[25%] lg:-ml-[40px] lg:w-full">
                      {fraction}
                    </p>
                    <p className="w-[25%] lg:w-full">{beedrooms}</p>
                    {window.innerWidth >= 1024 && (
                      <>
                        <p className="w-[25%] lg:w-full">{floor}</p>
                        <p className="w-[25%] lg:w-full uppercase">{side}</p>
                        <p className="w-[25%] lg:w-full uppercase">{parking}</p>
                        <p className="w-[25%] lg:w-full lg:mr-[15px] uppercase">
                          {availability}
                        </p>
                      </>
                    )}
                    <p className="w-[25%] lg:w-full lg:-translate-x-4">
                      {area}
                    </p>
                    <button
                      onClick={() => window.open(floorplan, "_blank")}
                      className="w-[25%] lg:w-[42%]  uppercase text-[8px] px-5 py-1 border-black border-[1px] rounded-2xl hover:bg-black hover:text-white duration-200 ease-linear cursor-pointer lg:-translate-x-4"
                    >
                      {window.innerWidth <= 1024 ? "View" : "View floorplan"}
                    </button>
                  </div>
                );
              }
            )}
          </div>
        </div>

        {/*  */}
        <div className="relative">
          <div className="absolute inset-0 z-20  p-4">
            <div>
              <AnimatedText
                text="Inquire today"
                classes="prism text-[2.5em] mb-5"
                controls={controls}
              />
            </div>
            <LargeBtn
              text="SCHEDULE"
              position="relative left-[5%] lg:left-[47%] "
            />

            <div className="w-full py-8 border-white border-[1px] border-x-0 border-t-0 mb-8">
              <p className="uppercase text-[1.25em] font-light">
                need a quick response? our sales consultants are ready to help,
                when you need it.
              </p>
            </div>
            <div className="lg:flex flex-col items-center justify-between lg:text-xs">
              <div>
                <p className="uppercase text-xs">visit us</p>
                <p className="uppercase text-xs">
                  av.arriaga 7421 loja, marina
                </p>
                <p className="uppercase text-xs mb-6">shopping 900-055 bali</p>
              </div>
              <div>
                <p className="uppercase text-xs">contanct us</p>
                <p className="uppercase text-xs">+38765987458</p>
                <p className="uppercase text-xs">local call, fees may apply</p>
                <p className="uppercase text-xs">+385478545875</p>
                <p className="uppercase text-xs mb-6">
                  local call, fees may apply
                </p>
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
            </div>
          </div>

          <div className="h-[120vh]  w-screen">
            <img className="w-full h-full" src={inquireBgImage} />
          </div>
        </div>
      </section>
    </>
  );
}

export default Inquire;
