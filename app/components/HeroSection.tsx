import React, {useState} from "react";
import SliderItem from "./SliderItem";
import {AnimatePresence, motion} from "framer-motion";

const HeroSection = () => {
  const [active, setActive] = useState(0);
  return (
    <section className="bg-black">
      <div className="container mx-auto">
        <div className="">
          <AnimatePresence>
            <div className="h-[520px] relative flex transition-all ease-in-out duration-200">
              <SliderItem
                className={active === 0 ? "w-full" : "w-60"}
                onClick={() => setActive(0)}
                active={active === 0}
              />
              <SliderItem
                className={active === 1 ? "w-full" : "w-60"}
                url="https://picsum.photos/id/237/200/300"
                onClick={() => setActive(1)}
                active={active === 1}
              />
              <SliderItem
                className={active === 2 ? "w-full" : "w-60"}
                url="https://picsum.photos/id/237/200/300"
                onClick={() => setActive(2)}
                active={active === 2}
              />
            </div>
          </AnimatePresence>
          <div className="text-white border-t font-bold">
            <div className="text-white border-t font-bold relative flex items-center gap-12">
              <div
                className="cursor-pointer relative py-4"
                onClick={() => setActive(0)}
              >
                <div
                  className={`absolute ${
                    active === 0 ? "bg-blue-600" : "bg-white"
                  } h-2 w-2 rounded top-0 left-0 -mt-1`}
                />
                Electronic components
              </div>
              <div
                className="cursor-pointer relative py-4"
                onClick={() => setActive(1)}
              >
                <div
                  className={`absolute ${
                    active === 1 ? "bg-blue-600" : "bg-white"
                  } h-2 w-2 rounded top-0 left-0 -mt-1`}
                />
                Electronic components
              </div>
              <div
                className="cursor-pointer relative py-4"
                onClick={() => setActive(2)}
              >
                <div
                  className={`absolute ${
                    active === 2 ? "bg-blue-600" : "bg-white"
                  } h-2 w-2 rounded top-0 left-0 -mt-1`}
                />
                Electronic components
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
