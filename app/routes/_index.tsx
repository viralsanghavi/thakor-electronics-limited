import type {MetaFunction} from "@remix-run/node";
import {CompaniesShowcase} from "~/components/CompaniesShowCase";
import {Footer} from "~/components/Footer";
import Header from "~/components/Header";
import {ImageSlider} from "~/components/ImageSlider";
import ProductRange from "~/components/ProductRange";

export const meta: MetaFunction = () => {
  return [
    {title: "Thakor Electronics"},
    {name: "description", content: "Thakor Electronics!"},
  ];
};

const companies = [
  {name: "Bajaj", logo: "bajaj.png"},
  {name: "BHEL", logo: "bhel.png"},
  {name: "ABB", logo: "abb.png"},
  {name: "Bharat Electronics", logo: "bharat-electronics.png"},
  {name: "Tata", logo: "/tata.png"},
];

const slides = [
  {
    id: 1,
    image:
      "https://video.wixstatic.com/video/11062b_2b14ae101c714f9ea54f1c0b0d5e4a47/1080p/mp4/file.mp4",
    title: "Welcome to Our Platform",
    description: "Discover amazing features and boost your productivity.",
  },
  {
    id: 2,
    image:
      "https://video.wixstatic.com/video/11062b_2b14ae101c714f9ea54f1c0b0d5e4a47/1080p/mp4/file.mp4",
    title: "Vision",
    description:
      "To be a global leader in passive electronic components, known for quality and innovation. We empower customers with reliable solutions, driving industry advancements and contributing to the global electronics ecosystem from India.",
  },
  {
    id: 3,
    image:
      "https://video.wixstatic.com/video/11062b_2b14ae101c714f9ea54f1c0b0d5e4a47/1080p/mp4/file.mp4",
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
