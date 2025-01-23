import type {MetaFunction} from "@remix-run/node";
import {CompaniesShowcase} from "~/components/CompaniesShowCase";
import {Footer} from "~/components/Footer";
import Header from "~/components/Header";
import HeroSection from "~/components/HeroSection";
import NavigationHeader from "~/components/NavigationHeader";
import ProductRange from "~/components/ProductRange";

export const meta: MetaFunction = () => {
  return [
    {title: "New Remix App"},
    {name: "description", content: "Welcome to Remix!"},
  ];
};

const companies = [
  {name: "Bajaj", logo: "https://picsum.photos/id/237/200/300"},
  {name: "BHEL", logo: "https://picsum.photos/id/237/200/300"},
  {name: "ABB", logo: "https://picsum.photos/id/237/200/300"},
  {name: "Bharat Electronics", logo: "https://picsum.photos/id/237/200/300"},
  {name: "Tata", logo: "https://picsum.photos/id/237/200/300"},
  {name: "Hooli", logo: "https://picsum.photos/id/237/200/300"},
];

export default function Index() {
  return (
    <div className="">
      <Header />
      <NavigationHeader />
      <HeroSection />
      <ProductRange />
      <CompaniesShowcase
        title="Trusted by Industry Leaders"
        description="We're proud to work with some of the most innovative companies in the world, helping them achieve their goals and drive success."
        companies={companies}
      />
      <Footer />
    </div>
  );
}
