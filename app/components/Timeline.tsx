"use client";

import {useRef} from "react";
import {motion, useScroll} from "framer-motion";
import {
  CircuitBoard,
  Cpu,
  Zap,
  Globe,
  Award,
  BarChart3,
  ChevronDown,
} from "lucide-react";

const timelineEvents = [
  {
    year: "2009",
    title: "Company Founded",
    description:
      "Thakor Electronics was established as a small distributor of electronic components.",
    icon: <CircuitBoard className="h-5 w-5" />,
  },
  {
    year: "2011",
    title: "Expanded Product Line",
    description:
      "Added Varistors and MOVs to our growing catalog of electronic components.",
    icon: <Cpu className="h-5 w-5" />,
  },
  {
    year: "2013",
    title: "New Headquarters",
    description:
      "Moved to a larger facility to accommodate our expanding inventory and team.",
    icon: <Zap className="h-5 w-5" />,
  },
  {
    year: "2015",
    title: "International Expansion",
    description:
      "Started exporting products to international markets, becoming a global supplier.",
    icon: <Globe className="h-5 w-5" />,
  },
  {
    year: "2017",
    title: "Quality Certification",
    description:
      "Received ISO certification for our commitment to quality management systems.",
    icon: <Award className="h-5 w-5" />,
  },
  {
    year: "2019",
    title: "10th Anniversary",
    description:
      "Celebrated a decade of excellence with the launch of our premium component line.",
    icon: <Zap className="h-5 w-5" />,
  },
  {
    year: "2021",
    title: "E-commerce Platform",
    description:
      "Launched our online ordering system to streamline the purchasing process.",
    icon: <BarChart3 className="h-5 w-5" />,
  },
  {
    year: "2023",
    title: "Sustainability Initiative",
    description:
      "Implemented eco-friendly packaging and sustainable business practices.",
    icon: <Zap className="h-5 w-5" />,
  },
  {
    year: "2024",
    title: "15th Anniversary",
    description:
      "Celebrating 15 years of growth, innovation, and trusted partnerships.",
    icon: <Award className="h-5 w-5" />,
  },
];

export default function Timeline() {
  const ref = useRef(null);
  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

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
              <img
                src={`/electronic-component-${(i % 5) + 1}.png`}
                alt="Electronic component"
                width={40}
                height={40}
                className="opacity-20"
              />
            </motion.div>
          ))}
        </div>

        {/* Gradient overlays */}
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-background to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.8}}
          viewport={{once: true}}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Our Journey
          </h2>
          <p className="text-lg text-muted-foreground">
            From humble beginnings to industry leadership, explore the key
            milestones that have shaped our 15-year journey.
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
          {/* Timeline line with enhanced styling */}
          <motion.div
            className="absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 to-purple-600 sm:left-1/2 sm:-ml-0.5 rounded-full shadow-[0_0_10px_rgba(79,70,229,0.5)]"
            style={{
              scaleY: scrollYProgress,
              originY: 0,
            }}
          />

          {/* Added decorative circuit nodes along timeline */}
          <div className="absolute left-4 top-[10%] sm:left-1/2 sm:-ml-3">
            <div className="h-5 w-5 rounded-full bg-blue-500/20 animate-ping"></div>
          </div>
          <div className="absolute left-4 top-[40%] sm:left-1/2 sm:-ml-3">
            <div
              className="h-5 w-5 rounded-full bg-purple-500/20 animate-ping"
              style={{animationDelay: "1s"}}
            ></div>
          </div>
          <div className="absolute left-4 top-[70%] sm:left-1/2 sm:-ml-3">
            <div
              className="h-5 w-5 rounded-full bg-blue-500/20 animate-ping"
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
                  className={`absolute left-4 -ml-3.5 flex h-7 w-7 items-center justify-center rounded-full border-4 border-background bg-gradient-to-r from-blue-600 to-purple-600 shadow-[0_0_10px_rgba(79,70,229,0.5)] z-10 sm:left-1/2`}
                >
                  <span className="text-white">{event.icon}</span>
                </motion.div>

                {/* Content */}
                <div
                  className={`relative flex flex-col items-start sm:flex-row ${
                    index % 2 === 0 ? "sm:flex-row-reverse" : ""
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

                      <span className="inline-block rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 px-3 py-1 text-sm font-semibold text-blue-700">
                        {event.year}
                      </span>
                      <h3 className="mt-2 text-xl font-semibold">
                        {event.title}
                      </h3>
                      <p className="mt-1 text-muted-foreground">
                        {event.description}
                      </p>

                      {/* Added subtle highlight effect */}
                      <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-blue-600/40 to-purple-600/40 opacity-50"></div>
                    </div>

                    {/* Added connecting lines between timeline and content */}
                    <div
                      className={`absolute top-3.5 h-0.5 bg-gradient-to-r from-blue-600/50 to-purple-600/50 hidden sm:block ${
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
            viewport={{once: true}}
            className="absolute bottom-0 left-4 sm:left-1/2 sm:-ml-5 flex h-10 w-10 items-center justify-center rounded-full border-4 border-background bg-gradient-to-r from-blue-600 to-purple-600 shadow-[0_0_15px_rgba(79,70,229,0.6)] z-10"
          >
            <span className="text-white text-xs font-bold">2024</span>
          </motion.div>
        </div>

        {/* Added statistics section to fill space at bottom */}
        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.8}}
          viewport={{once: true}}
          className="mt-24 grid grid-cols-2 gap-4 sm:grid-cols-4 max-w-4xl mx-auto"
        >
          <div className="rounded-lg border bg-background/80 backdrop-blur-sm p-4 text-center">
            <div className="text-3xl font-bold text-blue-600">15+</div>
            <div className="text-sm text-muted-foreground">
              Years of Excellence
            </div>
          </div>
          <div className="rounded-lg border bg-background/80 backdrop-blur-sm p-4 text-center">
            <div className="text-3xl font-bold text-purple-600">1000+</div>
            <div className="text-sm text-muted-foreground">Products</div>
          </div>
          <div className="rounded-lg border bg-background/80 backdrop-blur-sm p-4 text-center">
            <div className="text-3xl font-bold text-blue-600">50+</div>
            <div className="text-sm text-muted-foreground">
              Countries Served
            </div>
          </div>
          <div className="rounded-lg border bg-background/80 backdrop-blur-sm p-4 text-center">
            <div className="text-3xl font-bold text-purple-600">500+</div>
            <div className="text-sm text-muted-foreground">B2B Clients</div>
          </div>
        </motion.div>
      </div>

      {/* Enhanced decorative elements */}
      <div className="pointer-events-none absolute bottom-10 left-10 h-60 w-60 rounded-full bg-blue-500/10 blur-3xl"></div>
      <div className="pointer-events-none absolute top-10 right-10 h-60 w-60 rounded-full bg-purple-500/10 blur-3xl"></div>
    </section>
  );
}
