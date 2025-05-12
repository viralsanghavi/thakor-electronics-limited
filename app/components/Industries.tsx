import React from "react";
import {motion} from "framer-motion";
const Industries = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 text-center">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.7, ease: "easeOut"}}
        >
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">
            Industries We Serve
          </h1>
          <div className="h-1 w-16 bg-[#185BAA] mx-auto"></div>

          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Supporting a wide range of sectors, including Lighting, Automobile,
            Power Generation, Power Supply, Consumer Electronics, and Medical
            Electronics
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              className="group overflow-hidden rounded-xl border border-gray-200 bg-white transition-all hover:shadow-lg relative"
              initial={{opacity: 0, y: 30}}
              animate={{opacity: 1, y: 0}}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              whileHover={{
                y: -5,
                transition: {duration: 0.2},
              }}
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={industry.image || "/placeholder.svg"}
                  alt={industry.alt}
                  className="object-cover transition-all duration-700 ease-in-out group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Industries;

const industries = [
  {
    name: "Consumer Electronics",
    description:
      "High-quality components for smartphones, tablets, laptops, and smart home devices. Bulk quantities available with competitive wholesale pricing for manufacturers and retailers.",
    image: "/consumer-electronics.jpg",
    alt: "Circuit boards and electronic components for consumer devices",
  },
  {
    name: "Lightning",
    description:
      "Energy-efficient LED components, drivers, and control systems for commercial and residential lighting applications. Wholesale solutions for lighting manufacturers and installers.",
    image: "/lighting.jpg",
    alt: "LED components and lighting electronic parts",
  },
  {
    name: "Medical",
    description:
      "Precision electronic components for medical devices, monitoring equipment, and diagnostic tools. ISO-certified parts with full traceability for healthcare equipment manufacturers.",
    image: "/medical-electronics.jpg",
    alt: "Medical device electronics and components",
  },
  {
    name: "Automobile",
    description:
      "Automotive-grade electronic components for vehicle systems, infotainment, sensors, and control modules. Bulk supply for OEMs and aftermarket manufacturers.",
    image: "/auto.jpg",
    alt: "Automotive electronic components and circuit boards",
  },
  {
    name: "Power Generation",
    description:
      "Robust electronic components for power inverters, control systems, and monitoring equipment. Wholesale solutions for renewable and traditional energy equipment manufacturers.",
    image: "/power.jpg",
    alt: "Power electronics components and systems",
  },
];
