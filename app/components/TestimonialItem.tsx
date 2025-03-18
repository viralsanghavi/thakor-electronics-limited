import {Card} from "./ui/card";
import {CarouselItem} from "./ui/carousel";

const TestimonialItem = () => {
  return (
    <CarouselItem>
      <Card className="w-full p-20">
        <div>
          <div className="flex flex-col justify-center items-center gap-8 mb-8">
            <img src="abb.png" className="w-80 h-60 object-contain" />
            <h1 className="text-black font-semibold tracking-widest text-4xl">
              Danny
            </h1>
          </div>
          <div className="flex items-center gap-20">
            <img src="qoute.png" className="ml-4" />
            <p className="text-black text-lg">
              From cutting-edge software development to web development , we
              pave the way for innovation and excellence in every aspect of your
              digital journey. From cutting-edge software development to UX
              design.”
            </p>
          </div>
        </div>
      </Card>
    </CarouselItem>
  );
};

export default TestimonialItem;
