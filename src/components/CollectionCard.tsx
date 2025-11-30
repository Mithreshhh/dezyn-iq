import { ArrowUpRight } from "lucide-react";

interface CollectionCardProps {
  image: string;
  title: string;
}

const CollectionCard = ({ image, title }: CollectionCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-3xl cursor-pointer hover-scale">
      <div className="aspect-[4/5] relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
        
        {/* Title */}
        <div className="absolute bottom-6 left-6 text-white font-semibold text-xl">
          {title}
        </div>
        
        {/* Arrow Button */}
        <div className="absolute bottom-6 right-6">
          <div className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-400 shadow-md" style={{ backgroundColor: '#ff9934' }}>
            <ArrowUpRight className="w-5 h-5 text-white transition-colors" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
