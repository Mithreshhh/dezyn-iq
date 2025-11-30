import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const testimonials = [
    {
      quote: "The attention to detail and understanding of our vision was exceptional. They transformed our space into something beyond our imagination.",
      author: "Sarah Mitchell",
      role: "CEO, Tech Innovations",
      rating: 5,
    },
    {
      quote: "Working with this team was seamless. Their modern approach to interior design brought our brand to life in our new office space.",
      author: "James Rodriguez",
      role: "Founder, Creative Studio",
      rating: 5,
    },
    {
      quote: "Absolutely stunning work. Every corner of our home reflects luxury and comfort. The project management was flawless from start to finish.",
      author: "Emily Chen",
      role: "Private Client",
      rating: 5,
    },
    {
      quote: "They understood our needs perfectly and delivered a contemporary living space that's both functional and beautiful. Highly recommended!",
      author: "Michael Thompson",
      role: "Residential Client",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-sand/20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Testimonials from those who trusted us with their spaces
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 px-4">
                  <div className="bg-white rounded-3xl p-12 lg:p-16 shadow-luxury max-w-4xl mx-auto">
                    <Quote className="w-12 h-12 text-gold mb-8" />
                    <p className="text-2xl lg:text-3xl font-light leading-relaxed mb-8 text-foreground">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-lg">{testimonial.author}</p>
                        <p className="text-muted-foreground">{testimonial.role}</p>
                      </div>
                      <div className="flex gap-1">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <span key={i} className="text-gold text-2xl">★</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 w-12 h-12 rounded-full bg-white shadow-luxury flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 w-12 h-12 rounded-full bg-white shadow-luxury flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
