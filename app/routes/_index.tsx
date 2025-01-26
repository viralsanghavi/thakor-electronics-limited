import type {MetaFunction} from "@remix-run/node";
import {CompaniesShowcase} from "~/components/CompaniesShowCase";
import {Footer} from "~/components/Footer";
import Header from "~/components/Header";
import {ImageSlider} from "~/components/ImageSlider";
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

const slides = [
  {
    id: 1,
    image: "https://picsum.photos/id/237/1200/600/",
    title: "Welcome to Our Platform",
    description: "Discover amazing features and boost your productivity.",
  },
  {
    id: 2,
    image: "https://picsum.photos/id/237/1200/600/",
    title: "Vision",
    description:
      "To be a global leader in passive electronic components, known for quality and innovation. We empower customers with reliable solutions, driving industry advancements and contributing to the global electronics ecosystem from India.",
  },
  {
    id: 3,
    image: "https://picsum.photos/id/237/1200/600/",
    title: "Mission",
    description:
      "At Thakor Electronics, we lead in high-quality passive electronic components, made with precision in India. We prioritize innovation, sustainability, and reliability, ensuring superior performance for our customers and building lasting global partnerships through ethical practices",
  },
];

export default function Index() {
  return (
    <div className="">
      <Header />
      <div className="h-full">
        <ImageSlider slides={slides} />
      </div>
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
