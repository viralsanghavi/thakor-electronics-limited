import {Footer} from "~/components/Footer";
import Header from "~/components/Header";
import {ImageSlider} from "~/components/ImageSlider";
import NavigationHeader from "~/components/NavigationHeader";
import {MeetOurTeam} from "~/components/TeamMember";

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
const About = () => {
  return (
    <div className="">
      <Header />
      <NavigationHeader />
      <div className="h-full">
        <ImageSlider slides={slides} />
      </div>
      <div className="container mx-auto px-4 md:px-6 my-20">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Affiliations
          </h2>
        </div>
      </div>
      <MeetOurTeam />
      <Footer />
    </div>
  );
};

export default About;
