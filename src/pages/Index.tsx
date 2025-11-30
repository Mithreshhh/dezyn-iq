import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import CollectionCard from "@/components/CollectionCard";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import ServicesCarousel from "@/components/ServicesCarousel";
import aboutImage from "@/assets/about-image.jpg";
import projectModern from "@/assets/project-modern.jpg";
import featureStyle from "@/assets/feature-style.jpg";
import featureBathroom from "@/assets/feature-bathroom.jpg";
import featureOffice from "@/assets/feature-office.jpg";
import featureDining from "@/assets/feature-dining.jpg";
import engageCta from "@/assets/engage-cta.jpg";

const Index = () => {
  const collections = [
    { image: "/images/2025-11-26.webp", title: "Contemporary Living" },
    { image: "/images/2025-11-26 (1).webp", title: "Modern Elegance" },
    { image: "/images/2025-11-26 (2).webp", title: "Luxury Spaces" },
    { image: "/images/2024-12-16.webp", title: "Premium Interiors" },
    { image: "/images/2024-12-16 (1).webp", title: "Sophisticated Design" },
    { image: "/images/2024-12-16 (2).webp", title: "Timeless Style" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />

      {/* About Section */}
      <section id="about" className="py-24 lg:py-32 container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="fade-in-up">
            <h2 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              Spaces that harmonize <span style={{ color: '#ff9934' }}>aesthetics</span> & functionality
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              We design modern living experiences that reflect personal identity. Our philosophy combines contemporary aesthetics with timeless functionality, creating environments that inspire and endure.
            </p>
            <Stats />
          </div>
          <div className="fade-in-up">
            <div className="rounded-3xl overflow-hidden shadow-luxury hover-scale">
              <img
                src={aboutImage}
                alt="Elegant interior design"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project Section */}
      <section id="products" className="py-24 container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="rounded-3xl overflow-hidden shadow-luxury hover-scale order-2 lg:order-1">
            <img
              src={projectModern}
              alt="Modern Minimalist Project"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="fade-in-up order-1 lg:order-2">
            <span className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-6 text-white" style={{ backgroundColor: '#ff9934' }}>
              Gorgeous Interior
            </span>
            <h2 className="text-5xl font-bold mb-6">Modern Minimalist</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              A seamless blend of contemporary design and functional living spaces. This project showcases how minimalism can create warmth and comfort through careful material selection and thoughtful spatial planning.
            </p>
            <button className="btn-luxury group">
              Explore Project
              <ArrowRight className="inline-block ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>

      {/* Modern Style Section */}
      <section className="py-24 bg-sand/30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="rounded-3xl overflow-hidden shadow-luxury hover-scale">
              <img
                src={featureStyle}
                alt="Modern Style Interior"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="fade-in-up">
              <span className="text-sm tracking-widest mb-4 block font-semibold" style={{ color: '#ff9934' }}>
                Elegance • Timeless
              </span>
              <h2 className="text-5xl font-bold mb-6">Modern Style, Timeless Charm</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Discover our 2025 projects, featuring cutting-edge modular systems, bespoke interior elements, alongside dining solutions, sofas, and seating.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Each piece is crafted to elevate your living experience with uncompromising quality and sophisticated design language.
              </p>
              <button className="btn-luxury group">
                About Us
                <ArrowRight className="inline-block ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Carousel */}
      <ServicesCarousel />

      {/* Luxury Bathrooms Section */}
      <section className="py-24 container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="fade-in-up order-2 lg:order-1">
            <span className="text-sm tracking-widest mb-4 block font-semibold" style={{ color: '#ff9934' }}>
              Sanctuary • Wellness
            </span>
            <h2 className="text-5xl font-bold mb-6">Spa-Inspired Luxury</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Transform your bathroom into a personal sanctuary. Our designs blend marble elegance with contemporary fixtures to create spa-like retreats.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Experience the perfect harmony of functionality and opulence in every detail, from rainfall showers to floating vanities.
            </p>
            <button className="btn-luxury group">
              Explore Bathrooms
              <ArrowRight className="inline-block ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-luxury hover-scale order-1 lg:order-2">
            <img
              src={featureBathroom}
              alt="Luxury Bathroom Design"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Home Office Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="rounded-3xl overflow-hidden shadow-luxury hover-scale">
              <img
                src={featureOffice}
                alt="Modern Home Office"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="fade-in-up">
              <span className="text-sm tracking-widest mb-4 block font-semibold" style={{ color: '#ff9934' }}>
                Productivity • Inspiration
              </span>
              <h2 className="text-5xl font-bold mb-6">Workspaces That Inspire</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Design your ideal home office where productivity meets comfort. Ergonomic solutions combined with aesthetic excellence.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Natural light, premium materials, and intelligent storage create an environment that enhances focus and creativity.
              </p>
              <button className="btn-luxury group">
                View Office Designs
                <ArrowRight className="inline-block ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Dining Experience Section */}
      <section className="py-24 container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="fade-in-up order-2 lg:order-1">
            <span className="text-sm tracking-widest mb-4 block font-semibold" style={{ color: '#ff9934' }}>
              Entertaining • Gathering
            </span>
            <h2 className="text-5xl font-bold mb-6">Elevated Dining Spaces</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Create memorable dining experiences with spaces designed for connection. Sophisticated lighting and curated furnishings set the perfect stage.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              From intimate dinners to grand celebrations, our dining room designs adapt to every occasion with timeless elegance.
            </p>
            <button className="btn-luxury group">
              Dining Collections
              <ArrowRight className="inline-block ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-luxury hover-scale order-1 lg:order-2">
            <img
              src={featureDining}
              alt="Elegant Dining Room"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <Testimonials />

      {/* Collections Section */}
      <section id="collections" className="py-24 lg:py-32 container mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-5xl lg:text-6xl font-bold mb-4">
              Explore Our <span style={{ color: '#ff9934' }}>Proudly</span><br />Collection
            </h2>
          </div>
          <button className="hidden md:block btn-luxury">
            View All
          </button>
        </div>
        <p className="text-lg text-muted-foreground max-w-2xl mb-16">
          Poliform will showcase its vision of contemporary architecture, interior design trends, and innovative living solutions, redefining luxury interiors for 2025.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <CollectionCard
              key={index}
              image={collection.image}
              title={collection.title}
            />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 bg-luxury-black text-luxury-black-foreground">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Engage with Us in Conversation.
              </h2>
              <p className="text-lg text-luxury-black-foreground/70 leading-relaxed">
                Transform your space with our expertise. Let's create something extraordinary together that reflects your unique vision and lifestyle.
              </p>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-luxury hover-scale">
              <img
                src={engageCta}
                alt="Contact us"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
