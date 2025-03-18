import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";
import TestimonialItem from "./TestimonialItem";

const Testimonials = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-12 text-center my-20">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
        Testimonials
      </h2>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="container mx-auto"
      >
        <CarouselContent>
          <TestimonialItem />
          <TestimonialItem />
          <TestimonialItem />
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Testimonials;
