import React, {useEffect, useRef, useState} from "react";
import {Button} from "./ui/button";
import CountUp from "react-countup";
import {NavLink} from "@remix-run/react";

const Hero = () => {
  const lister = [
    {
      title: 500,
      desc: "Products",
    },
    {
      title: 200,
      desc: "No. of Customers",
    },
    {
      title: 25,
      desc: "Years of Experience",
    },
    {
      title: 9,
      desc: "No. of industries",
    },
  ];
  const [isVisible, setIsVisible] = useState(false);
  const countUpRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Disconnect after it's visible once
        }
      },
      {
        threshold: 0.5, // 50% of the element is visible
      }
    );

    if (countUpRef.current) {
      observer.observe(countUpRef.current);
    }

    return () => {
      if (countUpRef.current) {
        observer.unobserve(countUpRef.current);
      }
    };
  }, []);
  return (
    <div className="my-20 relative">
      <img
        src="/hero-bg.jpg"
        className="w-full relative object-cover max-h-[650px] h-full"
      />
      <div className="bg-white relative w-full container mx-auto md:-mt-48 p-20">
        <div className="flex gap-8 flex-wrap items-center justify-center">
          <div className="flex-[.4]">
            <h1 className="font-bold text-2xl mb-8 text-center md:text-left">
              Your partner in circuit protection and precision{" "}
            </h1>
            <NavLink to="/about">
              <Button variant="default" className="p-6">
                Learn more about our company
              </Button>
            </NavLink>
          </div>
          <div className="flex gap-4 flex-[.6] flex-wrap">
            {lister.map(({title, desc}, index) => (
              <div className="text-black p-4 " key={title} ref={countUpRef}>
                {isVisible && (
                  <h3 className="text-5xl mt-4 text-center">
                    <CountUp end={title} duration={2} startOnMount={true} />+
                  </h3>
                )}
                <p className="mt-4 text-lg font-display text-center">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
