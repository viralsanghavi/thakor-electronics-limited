import {AlertCircle, Badge, CheckCircle, Circle} from "lucide-react";
import {Timeline, TimelineItem} from "./Timeline";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {NavLink} from "@remix-run/react";
import {lazy, Suspense} from "react";
const Hero = lazy(() => import("./Hero"));

const ProductRange = () => {
  const productsTimeline = [
    {
      productName: "RESISTORS",
      description:
        "Essential components in electrical circuits, designed to limit the flow of electric current.",
      id: crypto.randomUUID(),
      to: "/",
    },
    {
      productName: "TMOV",
      description:
        "TMOVs combine surge protection with thermal disconnect features, providing enhanced safety.",
      id: crypto.randomUUID(),
      to: "/",
    },
    {
      productName: "MOV",
      description:
        "MOVs are protective devices designed to absorb and dissipate voltage spikes.",
      id: crypto.randomUUID(),
      to: "/",
    },
    {
      productName: "SMD",
      description:
        "Compact surface-mount varistor for robust over-voltage protection in electronic circuits.",
      id: crypto.randomUUID(),
      to: "/",
    },
    {
      productName: "GDT",
      description:
        "A standalone component or combined with other components to make a multistage protection circuit.",
      id: crypto.randomUUID(),
      to: "/",
    },
    {
      productName: "NTC",
      description:
        "A type of thermistor that's used in electronics to measure temperature and control it.",
      id: crypto.randomUUID(),
      to: "/",
    },
  ];
  return (
    <div className="bg-white">
      <div className="container mx-auto text-black py-20">
        <h1 className="font-bold text-3xl text-center mb-4">
          Our Product Range
        </h1>
        <p className="font-normal text-base text-center">
          Discover innovative solutions tailored to meet your needs
        </p>
        <Timeline className="max-w-xl mx-auto">
          {productsTimeline.map(({productName, description, id, to}) => (
            <TimelineItem
              icon={<Circle className="h-4 w-4 text-green-500" />}
              key={id}
            >
              <NavLink to={to}>
                <Card className="relative cursor-pointer">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      {productName}
                    </CardTitle>
                    <CardDescription>{description}</CardDescription>
                  </CardHeader>
                </Card>
              </NavLink>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
      <Suspense>
        <Hero />
      </Suspense>
    </div>
  );
};

export default ProductRange;
