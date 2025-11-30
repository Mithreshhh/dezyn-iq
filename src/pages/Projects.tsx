import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import projectModern from "@/assets/project-modern.jpg";
import featureStyle from "@/assets/feature-style.jpg";
import aboutImage from "@/assets/about-image.jpg";
import collectionMondrian from "@/assets/collection-mondrian.jpg";
import collectionNirinia from "@/assets/collection-nirinia.jpg";
import collectionArtex from "@/assets/collection-artex.jpg";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Living Room", "Kitchen", "Bedroom", "Furniture"];

  const projects = [
    {
      image: projectModern,
      title: "Contemporary Residence",
      category: "Living Room",
      description: "Modern minimalist design with natural elements",
    },
    {
      image: featureStyle,
      title: "Mountain View Villa",
      category: "Living Room",
      description: "Luxury living with panoramic views",
    },
    {
      image: aboutImage,
      title: "Urban Penthouse",
      category: "Living Room",
      description: "Sophisticated city living",
    },
    {
      image: collectionMondrian,
      title: "Smart Home System",
      category: "Furniture",
      description: "Integrated modern storage solutions",
    },
    {
      image: collectionNirinia,
      title: "Culinary Excellence",
      category: "Kitchen",
      description: "Premium kitchen design",
    },
    {
      image: collectionArtex,
      title: "Tranquil Bedroom",
      category: "Bedroom",
      description: "Minimalist retreat space",
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 container mx-auto px-6 lg:px-12">
        <h1 className="text-6xl lg:text-7xl font-bold mb-6">Our <span style={{ color: '#ff9934' }}>Projects</span></h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Explore our portfolio of completed projects showcasing contemporary design excellence
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
                  ? "text-white"
                  : "bg-secondary text-secondary-foreground hover:bg-[#ff9934]/10"
                }`}
              style={activeFilter === filter ? { backgroundColor: '#ff9934' } : {}}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-24 container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group cursor-pointer hover-scale"
            >
              <div className="rounded-3xl overflow-hidden shadow-luxury mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="px-2">
                <span className="text-sm text-muted-foreground mb-2 block">
                  {project.category}
                </span>
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
