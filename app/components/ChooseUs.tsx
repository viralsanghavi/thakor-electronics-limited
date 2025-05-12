import {useRef} from "react";
import {motion, useInView} from "framer-motion";
import {Clock, Award, BadgeCheck, HeadphonesIcon} from "lucide-react";

export default function WhyChooseUs() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, {once: true, margin: "-100px"});

  const features = [
    {
      title: "EXPERIENCE",
      description:
        "With over 25 years in the electronics industry, we bring unmatched expertise to the table, serving customers across diverse sectors with tailored solutions that meet specific needs.",
      icon: Clock,
      delay: 0.1,
    },
    {
      title: "CERTIFICATION",
      description:
        "We are ISO 14001, ISO 9001, ISO 45001 certified, and UL certified, ensuring that all our products meet the highest safety and performance standards. Our adherence to Japanese Industrial Standards (JIS) and rigorous testing guarantees the reliability of every product.",
      icon: Award,
      delay: 0.2,
    },
    {
      title: "QUALITY",
      description:
        "We specialize in precision-engineered resistors and passive components, designed to meet the highest international standards. Our products are built to perform reliably in every application, ensuring top-tier quality at every step.",
      icon: BadgeCheck,
      delay: 0.3,
    },
    {
      title: "SERVICE",
      description:
        "We have a strong, trusted dealer network that spans regions, backed by efficient after-sales support. You can rely on us for continuous assistance even after your purchase.",
      icon: HeadphonesIcon,
      delay: 0.4,
    },
  ];

  return (
    <section className="py-20" ref={containerRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{opacity: 0, y: 20}}
            animate={isInView ? {opacity: 1, y: 0} : {}}
            transition={{duration: 0.6}}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              WHY CHOOSE US?
            </h2>
            <div className="h-1 w-16 bg-[#185BAA] mx-auto"></div>
            <p className="mt-4 text-lg text-gray-600">
              We combine expertise, quality, and service to deliver electronic
              components you can trust.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{opacity: 0, y: 20}}
              animate={isInView ? {opacity: 1, y: 0} : {}}
              transition={{duration: 0.5, delay: feature.delay}}
              className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#185BAA]/10">
                    <feature.icon className="h-6 w-6 text-[#185BAA]" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
