import {NavLink} from "@remix-run/react";
import {lazy, Suspense} from "react";
import {Card, CardDescription, CardHeader, CardTitle} from "./ui/card";
const Hero = lazy(() => import("./Hero"));

const ProductRange = () => {
  const productsTimeline = [
    {
      productName: "RESISTORS",
      description:
        "Essential components in electrical circuits, designed to limit the flow of electric current.",
      id: crypto.randomUUID(),
      to: "/catalogue?category=resistors",
      img: "resistors.png",
    },
    {
      productName: "TMOV",
      description:
        "TMOVs combine surge protection with thermal disconnect features, providing enhanced safety.",
      id: crypto.randomUUID(),
      to: "/catalogue?category=tfmov",

      img: "tmov.png",
    },
    {
      productName: "MOV",
      description:
        "MOVs are protective devices designed to absorb and dissipate voltage spikes.",
      id: crypto.randomUUID(),
      to: "/catalogue?category=smov",
      img: "mov.png",
    },
    {
      productName: "SMD",
      description:
        "Compact surface-mount varistor for robust over-voltage protection in electronic circuits.",
      id: crypto.randomUUID(),
      to: "/catalogue?category=smd",
      img: "smd.webp",
    },
    {
      productName: "GDT",
      description:
        "A standalone component or combined with other components to make a multistage protection circuit.",
      id: crypto.randomUUID(),
      to: "/catalogue?category=gdt",
      img: "gdt.png",
    },
    {
      productName: "NTC",
      description:
        "A type of thermistor that's used in electronics to measure temperature and control it.",
      id: crypto.randomUUID(),
      to: "/catalogue?category=thermistors",
      img: "ntc.png",
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
        <div className="max-w-screen-xl items-center justify-center flex flex-wrap grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto h-full gap-12 mt-12">
          {productsTimeline.map(({productName, description, id, to, img}) => (
            <div key={id} className="h-full max-w-sm">
              <NavLink to={to}>
                <Card className="relative cursor-pointer">
                  <img src={img} className="h-80 w-full object-cover" />
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      {productName}
                    </CardTitle>
                    <CardDescription>{description}</CardDescription>
                  </CardHeader>
                </Card>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
      <Suspense>
        <Hero />
      </Suspense>
    </div>
  );
};

export default ProductRange;
