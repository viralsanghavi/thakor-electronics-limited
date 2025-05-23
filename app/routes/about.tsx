import WhyChooseUs from "~/components/ChooseUs";
import {Footer} from "~/components/Footer";
import Header from "~/components/Header";
import {ImageSlider} from "~/components/ImageSlider";
import Industries from "~/components/Industries";
import {MeetOurTeam} from "~/components/TeamMember";
import Timeline from "~/components/Timeline";

const slides = [
  {
    id: 4,
    image: "mission.webp",
    title: "Learn About Our Company",
    description:
      "At Thakor Electronics, we lead in high-quality passive electronic components, made with precision in India. We prioritize innovation, sustainability, and reliability, ensuring superior performance for our customers and building lasting global partnerships through ethical practices",
  },
  {
    id: 2,
    image: "/vision.jpg",
    title: "Vision",
    description:
      "To be a global leader in passive electronic components, known for quality and innovation. We empower customers with reliable solutions, driving industry advancements and contributing to the global electronics ecosystem from India.",
  },
  {
    id: 3,
    image: "mission.webp",
    title: "Mission",
    description:
      "At Thakor Electronics, we lead in high-quality passive electronic components, made with precision in India. We prioritize innovation, sustainability, and reliability, ensuring superior performance for our customers and building lasting global partnerships through ethical practices",
  },
];
const About = () => {
  return (
    <div className="">
      <Header />
      <div className="h-full">
        <ImageSlider slides={slides} />
      </div>
      <Timeline />
      <div className="container mx-auto px-4 md:px-6 my-20">
        <Industries />
        <WhyChooseUs />
      </div>
      <div className="container mx-auto px-4 md:px-6 my-20">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-8 text-gray-900 ">
            Affiliations
          </h2>
          <div className="flex items-center gap-8 flex-wrap justify-center">
            <img
              src="/aff-1.jpeg"
              className="object-contain h-40 max-w-[30%]"
            />
            <img src="/aff-2.jpeg" className="object-contain max-w-[30%]" />
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-6 my-20">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-8 text-gray-900">
            Certifications
          </h2>
          <div className="flex items-center gap-12 flex-wrap justify-center">
            <h1 className="text-4xl font-bold">ISO 9001</h1>
            <h1 className="text-4xl font-bold">ISO 45001</h1>
            <h1 className="text-4xl font-bold">ISO 14001</h1>
            <img src="/cert.png" className="object-contain max-w-[30%] h-20" />
          </div>
        </div>
      </div>
      <MeetOurTeam />
      <Footer />
    </div>
  );
};

export default About;
