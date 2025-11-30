import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { ChevronLeft, ChevronRight, Pencil, Home, Lightbulb, Wrench } from "lucide-react";

const ServicesCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const services = [
    {
      icon: <Pencil className="w-8 h-8" />,
      title: "Interior Design",
      description: "Custom design solutions tailored to your lifestyle, from concept to completion with meticulous attention to detail.",
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Space Planning",
      description: "Optimized layouts that maximize functionality while maintaining aesthetic appeal and flow throughout your space.",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Lighting Design",
      description: "Strategic lighting solutions that enhance ambiance, highlight architectural features, and create the perfect mood.",
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Project Management",
      description: "Comprehensive oversight from initial concept through final installation, ensuring seamless execution and delivery.",
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Furniture Selection",
      description: "Curated furniture pieces that blend comfort, style, and quality to perfectly complement your interior vision.",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Color Consultation",
      description: "Expert color palettes that create harmony and enhance the emotional impact of your living or working space.",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-5xl lg:text-6xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Comprehensive interior design solutions for every aspect of your project
            </p>
          </div>
          <div className="hidden lg:flex gap-4">
            <button
              onClick={scrollPrev}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
              aria-label="Previous service"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={scrollNext}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
              aria-label="Next service"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex-[0_0_100%] sm:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(33.333%-16px)] min-w-0"
              >
                <div className="bg-white rounded-3xl p-8 shadow-luxury hover-scale h-full border border-border/50 transition-all duration-300 hover:border-[#ff9934]">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-white transition-all duration-300" style={{ backgroundColor: '#ff9934' }}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex lg:hidden justify-center gap-4 mt-8">
          <button
            onClick={scrollPrev}
            className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            aria-label="Previous service"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={scrollNext}
            className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            aria-label="Next service"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesCarousel;
