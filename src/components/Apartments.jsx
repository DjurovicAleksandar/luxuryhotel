import bedroom from "../assets/img/aparments/bedroom.jpg";
import bathroom from "../assets/img/aparments/bathroom.jpg";
import kitchen from "../assets/img/aparments/kitchen.jpg";
import pool from "../assets/img/aparments/pool.jpg";
import { useInView, useAnimation, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import AnimatedText from "./helper/AnimatedText";
import AnimateImages from "./helper/AnimateImages";
import Button from "./helper/Button";
import { scrollToPosition } from "./helper/HelpserFunctions";

function Apartments({ onIsActive }) {
  const ref = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const getImageName = (imgName) => {
    return imgName.split("/").slice(-1).join("").replace(".jpg", "");
  };

  const openFullScreen = (imageSrc) => {
    console.log(imageSrc.split("/").slice(-1).join("").replace(".jpg", ""));
    setSelectedImage(imageSrc);
  };

  const closeFullScreen = () => {
    setSelectedImage(null);
  };

  const isInView = useInView(ref);

  const aparments = [bedroom, kitchen, bathroom, pool];

  const controls = useAnimation();

  const informations = [
    { category: "Location", value: "Lopud" },
    { category: "Typologies", value: "t1;t2;t3 duplex" },
    { category: "Relase date", value: "2023" },
    { category: "Nr. of apartments", value: "15" },
  ];

  useEffect(() => {
    if (isInView) {
      controls.start("visible");

      if (window.innerWidth >= 1024) onIsActive("apartments");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls, onIsActive]);

  useEffect(() => {
    const handleScroll = () => {
      if (selectedImage !== null) {
        closeFullScreen();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [selectedImage]);
  return (
    <motion.section
      ref={ref}
      id="apartments"
      className="relative p-4 lg:w-[160vw] lg:flex  items-center gap-5 bg-[#f7f4ef]"
    >
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
          <div>
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
            <Button onMouseClick={() => scrollToPosition(5.4)} />
          </div>
        </div>
      </div>

      {window.innerWidth >= 1024 ? (
        <div className="flex items-center relative">
          <AnimateImages>
            <img
              className="w-full lg:w-[50rem] h-auto lg:h-[38rem] cursor-pointer"
              alt="POOL"
              src={pool}
              onClick={() => openFullScreen(pool)}
            />
          </AnimateImages>

          <div className="mx-4 flex flex-col">
            <AnimateImages>
              <img
                className="w-full lg:w-[35rem] h-auto lg:h-[18.5rem] mb-4 cursor-pointer"
                alt="KITCHEN"
                src={kitchen}
                onClick={() => openFullScreen(kitchen)}
              />
              <img
                className="w-full lg:w-[35rem] h-auto lg:h-[18.5rem] z-50 cursor-pointer"
                alt="BATHROOM"
                src={bathroom}
                onClick={() => openFullScreen(bathroom)}
              />
            </AnimateImages>
          </div>

          <AnimateImages>
            <img
              className="w-full lg:w-[50rem] h-auto lg:h-[38rem] cursor-pointer"
              alt="BEDROOM"
              src={bedroom}
              onClick={() => openFullScreen(bedroom)}
            />
          </AnimateImages>

          {selectedImage !== null && (
            <div
              className={`absolute ${
                getImageName(selectedImage) === "pool"
                  ? "-left-[12%]"
                  : getImageName(selectedImage) === "bedroom"
                  ? "-right-[12%]"
                  : "left-[10%]"
              } z-[200] w-screen h-screen flex justify-center items-center`}
              onClick={closeFullScreen}
            >
              <img
                src={selectedImage}
                alt="fullscreen"
                className="max-w-full max-h-full"
              />
            </div>
          )}
        </div>
      ) : (
        <div className="">
          {aparments.map((src, i) => {
            return (
              <div key={i} className="relative w-full h-full">
                <AnimateImages>
                  <img
                    className="w-full lg:w-[50rem] h-auto lg:h-[38rem] mb-2"
                    src={src}
                    alt="i"
                    key={i}
                  />
                </AnimateImages>
              </div>
            );
          })}
        </div>
      )}
    </motion.section>
  );
}

export default Apartments;
