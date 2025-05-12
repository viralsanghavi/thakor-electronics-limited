"use client";

import {useRef} from "react";
import {motion, useScroll, useTransform} from "framer-motion";
import {
  CircuitBoard,
  Building,
  Users,
  ShoppingBag,
  CheckCircle,
  Factory,
  Cog,
  Award,
  Sun,
  Globe,
  ChevronDown,
} from "lucide-react";

const timelineEvents = [
  {
    year: "2001",
    title: "Foundation of Excellence",
    description: "Acquisition of Thermax Electronics Ltd",
    content:
      "We began our journey by acquiring one of India's most specialized resistor manufacturing plants, forming the technical backbone for our future.",
    icon: <Building className="h-5 w-5" />,
  },
  {
    year: "2002",
    title: "Strengthening Operations",
    description: "Infrastructure Upgrade & Team Formation",
    content:
      "Focused on upgrading infrastructure and assembling a skilled team to prepare for product development and market entry.",
    icon: <Users className="h-5 w-5" />,
  },
  {
    year: "2004",
    title: "Brand Launch & Market Entry",
    description:
      "Thakor Electronics Ltd. Established & Trusted by Industry Leaders",
    content:
      "The brand was officially launched, and we began supplying to top companies like Tata Motors, Bajaj Auto, Star Engineers, and Flash Motors Group.",
    icon: <ShoppingBag className="h-5 w-5" />,
  },
  {
    year: "2008",
    title: "Focus on Quality & Efficiency",
    description: "Implementation of Advanced Testing & Process Improvements",
    content:
      "Introduced stricter quality checks and streamlined production processes to ensure high performance and reliability.",
    icon: <CheckCircle className="h-5 w-5" />,
  },
  {
    year: "2012",
    title: "Capacity Expansion",
    description: "Scale-Up to Meet Growing Demand",
    content:
      "Expanded our manufacturing lines and workforce to support increased demand from clients across India.",
    icon: <Factory className="h-5 w-5" />,
  },
  {
    year: "2014",
    title: "Automation Leap",
    description: "Installation of New Machines & Coating Line",
    content:
      "Added new automated equipment and a coating line, boosting efficiency and consistency in factory operations.",
    icon: <Cog className="h-5 w-5" />,
  },
  {
    year: "2017",
    title: "Market Leadership",
    description: "India's Largest Through-Hole Resistor Manufacturer",
    content:
      "Recognized as the biggest manufacturer in our category, achieving the highest revenue for through-hole resistors in India.",
    icon: <Award className="h-5 w-5" />,
  },
  {
    year: "2022",
    title: "Going Green",
    description: "Installation of 150 kWp Rooftop Solar System",
    content:
      "Took a major step toward clean energy by installing a rooftop solar system, reducing operational carbon impact.",
    icon: <Sun className="h-5 w-5" />,
  },
  {
    year: "2024",
    title: "Product Diversification & Global Certification",
    description: "Launch of MOV, NTC & GDT | Achieved UL Certification",
    content:
      "We expanded into MOV, NTC, and GDT product range to serve wider industrial applications, and proudly received UL approval, marking our commitment to global quality and safety standards.",
    icon: <Globe className="h-5 w-5" />,
  },
];

export default function Timeline() {
  const ref = useRef(null);
  const containerRef = useRef(null) as any;

  // Modified scroll settings with a more precise offset
  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ["start end", "end 90%"],
    container: containerRef.current,
  });

  // Transform the scroll progress to ensure it reaches 1 at the right time
  // but still allows retracting when scrolling back up
  const lineProgress = useTransform(
    scrollYProgress,
    [0, 0.85, 0.95],
    [0, 0.9, 1]
  );

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      {/* Enhanced background with multiple layers */}
      <div className="absolute inset-0">
        {/* Circuit board pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <pattern
              id="circuit-pattern"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0 50 H100 M50 0 V100 M25 25 H75 V75 H25 Z M40 40 H60 V60 H40 Z"
                stroke="currentColor"
                fill="none"
                strokeWidth="0.5"
              ></path>
            </pattern>
            <rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              fill="url(#circuit-pattern)"
            ></rect>
          </svg>
        </div>

        {/* Floating electronic components */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              initial={{
                x: `${Math.random() * 100}%`,
                y: `${Math.random() * 100}%`,
                opacity: 0.1 + Math.random() * 0.2,
                scale: 0.5 + Math.random() * 0.5,
              }}
              animate={{
                y: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
                rotate: [0, Math.random() > 0.5 ? 360 : -360],
              }}
              transition={{
                duration: 20 + Math.random() * 30,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
              style={{
                zIndex: 0,
              }}
            >
              <CircuitBoard className="h-10 w-10 opacity-20 text-[#185BAA]" />
            </motion.div>
          ))}
        </div>

        {/* Gradient overlays */}
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-background to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent"></div>
      </div>

      <div
        className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8"
        ref={containerRef}
      >
        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.8}}
          viewport={{once: true}}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">
            {/* <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl text-[#185BAA]"> */}
            Our Journey
          </h1>
          <div className="h-1 w-16 bg-[#185BAA] mx-auto mb-8"></div>

          <p className="text-lg text-muted-foreground">
            From acquisition to industry leadership, explore the key milestones
            that have shaped our remarkable journey since 2001.
          </p>

          {/* Added animated scroll indicator */}
          <motion.div
            className="mt-8 flex justify-center"
            animate={{y: [0, 10, 0]}}
            transition={{duration: 2, repeat: Number.POSITIVE_INFINITY}}
          >
            <ChevronDown className="h-6 w-6 text-muted-foreground" />
          </motion.div>
        </motion.div>
        <div className="relative mx-auto max-w-5xl">
          {/* Timeline line with enhanced styling - using lineProgress */}
          <motion.div
            className="absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-[#185BAA] to-[#F8AC02] sm:left-1/2 sm:-ml-0.5 rounded-full shadow-[0_0_10px_rgba(24,91,170,0.5)]"
            style={{
              scaleY: lineProgress,
              originY: 0,
            }}
          />

          {/* Added decorative circuit nodes along timeline */}
          <div className="absolute left-4 top-[10%] sm:left-1/2 sm:-ml-3">
            <div className="h-5 w-5 rounded-full bg-[#185BAA]/20 animate-ping"></div>
          </div>
          <div className="absolute left-4 top-[40%] sm:left-1/2 sm:-ml-3">
            <div
              className="h-5 w-5 rounded-full bg-[#F8AC02]/20 animate-ping"
              style={{animationDelay: "1s"}}
            ></div>
          </div>
          <div className="absolute left-4 top-[70%] sm:left-1/2 sm:-ml-3">
            <div
              className="h-5 w-5 rounded-full bg-[#185BAA]/20 animate-ping"
              style={{animationDelay: "2s"}}
            ></div>
          </div>

          {/* Timeline events */}
          <div className="space-y-16">
            {timelineEvents.map((event, index) => (
              <div key={index} className="relative">
                {/* Dot with icon */}
                <motion.div
                  initial={{scale: 0}}
                  whileInView={{scale: 1}}
                  transition={{duration: 0.5, delay: 0.2}}
                  viewport={{once: true}}
                  className={`absolute left-12 -ml-3.5 flex h-7 w-7 items-center justify-center rounded-full border-4 border-background bg-gradient-to-r from-[#185BAA] to-[#F8AC02] shadow-[0_0_10px_rgba(24,91,170,0.5)] z-10 sm:left-1/2`}
                >
                  <span className="text-white">{event.icon}</span>
                </motion.div>

                {/* Content */}
                <div
                  className={`relative flex flex-col items-start sm:flex-row ${
                    index % 2 === 0 ? "sm:flex-row-reverse ml-8" : "mr-8"
                  }`}
                >
                  <motion.div
                    initial={{opacity: 0, x: index % 2 === 0 ? 50 : -50}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{duration: 0.5, delay: 0.3}}
                    viewport={{once: true}}
                    className="ml-12 w-full sm:ml-0 sm:w-1/2"
                  >
                    <div
                      className={`rounded-lg border bg-background/80 backdrop-blur-sm p-6 shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden ${
                        index % 2 === 0 ? "sm:mr-8" : "sm:ml-8"
                      }`}
                    >
                      {/* Added decorative circuit traces */}
                      <div className="absolute -right-2 -top-2 h-12 w-12 opacity-10">
                        <svg
                          viewBox="0 0 100 100"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0,50 Q25,25 50,50 T100,50"
                            stroke="currentColor"
                            fill="none"
                            strokeWidth="2"
                          />
                          <circle cx="50" cy="50" r="5" fill="currentColor" />
                          <circle cx="25" cy="25" r="3" fill="currentColor" />
                          <circle cx="75" cy="75" r="3" fill="currentColor" />
                        </svg>
                      </div>

                      {/* Year - Title format */}
                      <h3 className="text-xl font-semibold text-[#185BAA]">
                        <span className="inline-block rounded-full bg-gradient-to-r from-[#185BAA]/20 to-[#F8AC02]/20 px-3 py-1 text-sm font-semibold text-[#185BAA] mr-2">
                          {event.year}
                        </span>
                        – {event.title}
                      </h3>

                      {/* Description as a separate element */}
                      <p className="mt-2 font-medium text-[#185BAA]">
                        {event.description}
                      </p>

                      {/* Additional content */}
                      <p className="mt-1 text-muted-foreground">
                        {event.content}
                      </p>

                      {/* Added subtle highlight effect */}
                      <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-[#185BAA]/40 to-[#F8AC02]/40 opacity-50"></div>
                    </div>

                    {/* Added connecting lines between timeline and content */}
                    <div
                      className={`absolute top-3.5 h-0.5 bg-gradient-to-r from-[#185BAA]/50 to-[#F8AC02]/50 hidden sm:block ${
                        index % 2 === 0 ? "right-full w-8" : "left-full w-8"
                      }`}
                    ></div>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>

          {/* Added timeline end marker */}
          <motion.div
            initial={{scale: 0}}
            whileInView={{scale: 1}}
            transition={{duration: 0.5, delay: 0.2}}
            viewport={{once: true, margin: "-50px"}}
            className="absolute bottom-0 left-4 sm:left-1/2 sm:-ml-5 flex h-10 w-10 items-center justify-center rounded-full border-4 border-background bg-gradient-to-r from-[#185BAA] to-[#F8AC02] shadow-[0_0_15px_rgba(24,91,170,0.6)] z-10"
          >
            <span className="text-white text-xs font-bold">2024</span>
          </motion.div>
        </div>
      </div>

      {/* Enhanced decorative elements */}
      <div className="pointer-events-none absolute bottom-10 left-10 h-60 w-60 rounded-full bg-[#185BAA]/10 blur-3xl"></div>
      <div className="pointer-events-none absolute top-10 right-10 h-60 w-60 rounded-full bg-[#F8AC02]/10 blur-3xl"></div>
    </section>
  );
}
