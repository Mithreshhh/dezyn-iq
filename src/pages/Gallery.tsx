import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import collectionMondrian from "@/assets/collection-mondrian.jpg";
import collectionNirinia from "@/assets/collection-nirinia.jpg";
import collectionArtex from "@/assets/collection-artex.jpg";
import collectionBrera from "@/assets/collection-brera.jpg";
import collectionAleo from "@/assets/collection-aleo.jpg";
import collectionNirinia2 from "@/assets/collection-nirinia2.jpg";
import projectModern from "@/assets/project-modern.jpg";
import featureStyle from "@/assets/feature-style.jpg";
import aboutImage from "@/assets/about-image.jpg";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filters = ["All", "Living Spaces", "Kitchens", "Bedrooms", "Details"];

  const images = [
    { src: collectionMondrian, category: "Living Spaces", title: "Wall System" },
    { src: collectionNirinia, category: "Kitchens", title: "Modern Kitchen" },
    { src: collectionArtex, category: "Bedrooms", title: "Minimal Bedroom" },
    { src: collectionBrera, category: "Living Spaces", title: "Library Space" },
    { src: collectionAleo, category: "Details", title: "Dining Area" },
    { src: collectionNirinia2, category: "Details", title: "Home Library" },
    { src: projectModern, category: "Living Spaces", title: "Contemporary Living" },
    { src: featureStyle, category: "Living Spaces", title: "Mountain View" },
    { src: aboutImage, category: "Living Spaces", title: "Luxury Interior" },
  ];

  const filteredImages =
    activeFilter === "All"
      ? images
      : images.filter((image) => image.category === activeFilter);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 container mx-auto px-6 lg:px-12">
        <h1 className="text-6xl lg:text-7xl font-bold mb-6">Gallery</h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          A curated collection of our finest interior design work
        </p>
      </section>

      {/* Filters */}
      <section className="pb-16 container mx-auto px-6 lg:px-12">
        <div className="flex flex-wrap gap-4">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${activeFilter === filter
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-primary/10"
                }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      {/* Masonry Gallery */}
      <section className="pb-24 container mx-auto px-6 lg:px-12">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="break-inside-avoid group cursor-pointer"
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="rounded-3xl overflow-hidden shadow-luxury hover-scale relative">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                  <div className="absolute bottom-6 left-6 text-white">
                    <p className="text-sm mb-1">{image.category}</p>
                    <h3 className="text-xl font-semibold">{image.title}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-6"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Full size"
            className="max-w-full max-h-full object-contain rounded-2xl"
          />
          <button
            className="absolute top-6 right-6 text-white text-4xl hover:text-gold transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;
