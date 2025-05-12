"use client";

import {useState, useEffect, useCallback} from "react";
import {cn} from "~/lib/utils";

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
              // Image background
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{backgroundImage: `url(${slide.image})`}}
              />
            ) : (
              // Video background
              <div className="absolute inset-0 h-full z-10">
                <video
                  className="h-full w-full object-cover"
                  autoPlay={true}
                  muted
                  loop
                  playsInline
                >
                  <source src={slide.image} />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}

            {/* Dark overlay - higher opacity on mobile for better text readability */}
            <div className="absolute inset-0 bg-black bg-opacity-60 md:bg-opacity-50 z-20" />

            {/* White background for text */}
            <div className="absolute inset-y-0 left-0 w-full md:w-[35%] bg-white opacity-90 z-30" />

            {/* Content */}
            <div className="absolute inset-0 flex items-center p-4 sm:p-6 md:p-8 z-40">
              <div className="w-full md:max-w-[35%] text-center md:text-left">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-4 text-[#185BAA] pr-4">
                  {slide.title}
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-[#185BAA] line-clamp-3 sm:line-clamp-none pr-8">
                  {slide.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation bars */}
      <div className="flex justify-center items-center mt-4 space-x-3">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => setCurrentSlide(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? "bg-[#185BAA] w-12 sm:w-16"
                : "bg-gray-300 w-5 sm:w-6 hover:bg-[#F8AC02]"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
