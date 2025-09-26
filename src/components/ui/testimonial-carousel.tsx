"use client"; 

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay"
import { useEffect, useState, } from "react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  avatar: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  className?: string;
}

export function TestimonialCarousel({ testimonials, className }: TestimonialCarouselProps) {
const [api, setApi] = useState<CarouselApi | null>(null);
const [currentSlide, setCurrentSlide] = useState(0);


// Handle dot click to slide to specific index
const handleDotClick = (index: number) => {
     console.log(index,api?.selectedScrollSnap());
    if (api) {
      api.scrollTo(index);
    }
  };


  // Update current slide when the carousel changes
  useEffect(() => {
    if (!api) return;

    setCurrentSlide(api.selectedScrollSnap());

    const handleSelect = () => {
      setCurrentSlide(api.selectedScrollSnap());
    };

    api.on("select", handleSelect);
    // Cleanup event listener
    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);


//   
  return (
    <div className={cn("relative w-full mx-auto max-w-5xl", className)}>
       {/*  */}
      <Carousel 
       setApi={setApi}
       plugins={[
        Autoplay({
          delay: 4000,
        }),
      ]} className="w-full">
        <CarouselContent className="-ml-1">
          {testimonials.map((testimonial) => (
            <CarouselItem key={testimonial.id} className="md:basis-1/1 pl-1 md:pl-0">
              <div className="flex items-center justify-center p-6 ">
                <div className="flex flex-col md:flex-row !items-center md:items-start gap-16 w-full max-w-5xl">
                  {/* Left: Avatar */}
                  <div className="flex-shrink-0">
                    <Avatar className="h-32 w-32 md:h-96 md:w-2xs rounded-full">
                      <AvatarImage src={testimonial.avatar} className="object-cover" />
                      <AvatarFallback className="bg-green-100 text-green-800 text-2xl">
                        {testimonial.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                  </div>

                  {/* Right: Quote Bubble */}
                  <div className="flex-1 bg-[#F4F6F6] rounded-2xl p-6">
                    {/* Quote */}
                    <blockquote className="text-xl font-questrial  text-secondary mb-4 leading-8">
                      &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>

                    {/* Author */}
                    <div className="flex items-center gap-2  text-primary text-lg">
                     <span className="font-semibold font-rubik">{testimonial.name} - </span>
                      <span className="">
                        {testimonial.role}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Indicators (dots) */}
        <div className="flex justify-center items-center mt-8 gap-2">
          {testimonials.map((_, index) => (
            <button
                key={index}
                className={cn(
                "h-4 w-4 rounded-full transition-colors",
                currentSlide === index ? "bg-[#749B3F]" : "bg-gray-300 hover:bg-gray-400"
                )}
                onClick={() => handleDotClick(index)}
                aria-label={`Go to slide ${index}`}
            />
          ))}
        </div>
      </Carousel>

    </div>
  );
}