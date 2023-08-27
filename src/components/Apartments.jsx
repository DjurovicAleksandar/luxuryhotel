import bedroom from "../assets/img/aparments/bedroom.jpg";
import bathroom from "../assets/img/aparments/bathroom.jpg";
import kitchen from "../assets/img/aparments/kitchen.jpg";
import pool from "../assets/img/aparments/pool.jpg";
import { useInView, useAnimation, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import AnimatedText from "./helper/AnimatedText";

function Apartments() {
  const ref = useRef(null);
  const ref2 = useRef(null);
  const isInView = useInView(ref);
  const isInView2 = useInView(ref2);
  const aparments = [bedroom, kitchen, bathroom, pool];

  const controls = useAnimation();

  const informations = [
    { category: "Location", value: "Lopud" },
    { category: "Typologies", value: "t1;t2;t3 duplex" },
    { category: "Relase date", value: "2023" },
    { category: "Nr. of apartments", value: "15" },
  ];
  useEffect(() => {
    if (isInView) setTimeout(() => controls.start("visible"), 500);
    else controls.start("hidden");
  }, [isInView, isInView2, controls]);

  return (
    <section className="p-4  lg:basis-[160vw] lg:flex  items-center gap-5">
      <div className="lg:h-[38rem] flex flex-col justify-between">
        <div className="border-[#4f414170]  border-solid border-[1px] border-x-0 border-b-0 lg:border-t-0 py-2 text-[0.8124rem] mb-10 lg:mb-0">
          <ul className="lg:w-[20rem]">
            {informations.map(({ category, value }, i) => {
              return (
                <li
                  key={value + i}
                  className="w-full flex items-center justify-between uppercase lg:text-xs"
                >
                  <p>{category}</p>
                  <p>{value}</p>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <h2 className="text-[.8125em] uppercase text-gray-500 my-4">
            Aparments
          </h2>
          <div ref={ref}>
            <AnimatedText
              text="An osasis of nature"
              classes="text-[2.5em] prism lg:w-[20rem]"
              controls={controls}
            />
          </div>

          <div className="w-full my-6 flex items-center justify-between lg:justify-start lg:gap-20">
            <p className="uppercase text-[#c88e57] text-xs">
              available apartments
            </p>
            <a className="w-[2.5rem] h-[2.5rem] rounded-full bg-[#c88e57] text-white text-[10px]  flex items-center justify-center">
              &#8594;
            </a>
          </div>
        </div>
      </div>

      {window.innerWidth >= 1024 ? (
        <div className="flex items-center">
          <img
            className="w-full lg:w-[50rem] h-auto lg:h-[38rem] "
            alt="pool"
            src={pool}
          />

          <div className="mx-4 flex flex-col">
            <img
              className="w-full lg:w-[35rem] h-auto lg:h-[18.5rem] mb-4"
              alt="kitchen"
              src={kitchen}
            />
            <img
              className="w-full lg:w-[35rem] h-auto lg:h-[18.5rem] "
              alt="bathroom"
              src={bathroom}
            />
          </div>

          <img
            className="w-full lg:w-[50rem] h-auto lg:h-[38rem]"
            alt="bedroom"
            src={bedroom}
          />
        </div>
      ) : (
        <div className="">
          {aparments.map((src, i) => {
            return (
              <div key={i} className="relative w-full h-full">
                <img
                  className="w-full lg:w-[50rem] h-auto lg:h-[38rem] mb-2"
                  src={src}
                  alt="i"
                  key={i}
                />
                {/* <div
                // initial="hidden"
                // animate={controls}
                // variants={variantsX}
                // transition={{
                //   delay: 0.1,
                //   duration: 0.35,
                // }}
                ref={ref2}
                className={`bg-[#c88e57] absolute inset-0 w-full`}
              /> */}
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}

export default Apartments;
