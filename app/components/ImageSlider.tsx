"use client";

import {useState, useEffect, useCallback} from "react";
import {cn} from "~/lib/utils";
import {Tabs, TabsList, TabsTrigger} from "~/components/ui/tabs";

interface Slide {
  id: number;
  image: string;
  title: string;
  description: string;
}

interface ImageSliderProps {
  slides: Slide[];
  interval?: number;
}

export function ImageSlider({slides, interval = 5000}: ImageSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    const timer = setInterval(nextSlide, interval);
    return () => clearInterval(timer);
  }, [nextSlide, interval]);

  return (
    <div className="w-full h-auto">
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={cn(
              "absolute inset-0 transition-opacity duration-1000",
              index === currentSlide ? "opacity-100" : "opacity-0"
            )}
          >
            {!slide.image.includes(".mp4") ? (
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{backgroundImage: `url(${slide.image})`}}
              />
            ) : (
              <div className="ml-auto w-[65%] absolute top-0 right-0 inset-0 h-full z-20">
                <video className="right-0" autoPlay={true} muted loop>
                  <source src={slide.image} />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
            <div className="absolute inset-0 bg-black bg-opacity-50" />
            <div className="absolute z-0 inset-0 bg-white w-[35%]" />
            <div className="absolute inset-y-0 left-0 flex items-center p-4 sm:p-6 md:p-8 text-[#185BAA] max-w-[90%] sm:max-w-[80%] md:max-w-lg">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4 text-[#185BAA]">
                  {slide.title}
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-[#185BAA]">
                  {slide.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Tabs
        value={currentSlide.toString()}
        onValueChange={(value) => setCurrentSlide(Number.parseInt(value))}
        className="h-full "
      >
        <TabsList
          className={`mt-4 grid w-full grid-cols-1 ${
            slides.length === 3 ? "sm:grid-cols-3" : "sm:grid-cols-4"
          } gap-8 bg-transparent h-full`}
        >
          {slides.map((slide, index) => (
            <TabsTrigger
              key={slide.id}
              value={index.toString()}
              className="data-[state=active]:bg-white border-t-8 data-[state=active]:text-[#185BAA] data-[state=active]:border-[#185BAA] hover:bg-[#F8AC02] transition-all ease-out duration-1000 hover:text-[#185BAA] text-[#185BAA] flex flex-col items-start p-2 sm:p-3 overflow-hidden"
            >
              <div className="text-left">
                <div className="font-bold text-sm sm:text-3xl leading-loose mb-2">
                  {slide.title}
                </div>
                <div className="text-xs sm:text-sm truncate overflow-hidden line-clamp-1 text-ellipsis">
                  {slide.description}
                </div>
              </div>
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
}
