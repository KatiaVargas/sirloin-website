import { useState } from "react";
import { X, ZoomIn } from "lucide-react";
import imgCortes from "@assets/imagen_1776862369590.png";
import imgPostres from "@assets/imagen_1776862434510.png";
import imgInterior from "@assets/imagen_1776862754866.png";
import imgSushi from "@assets/imagen_1776862765300.png";

const IMAGES = [
  {
    src: imgCortes,
    alt: "Cortes de carne a la parrilla",
    aspect: "aspect-square"
  },
  {
    src: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2574&auto=format&fit=crop",
    alt: "Barra de buffet",
    aspect: "aspect-[4/3]"
  },
  {
    src: imgPostres,
    alt: "Mesa con postres variados",
    aspect: "aspect-[3/4]"
  },
  {
    src: imgInterior,
    alt: "Interior del buffet",
    aspect: "aspect-[4/3]"
  },
  {
    src: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=2571&auto=format&fit=crop",
    alt: "Variedad de platillos mexicanos",
    aspect: "aspect-square"
  },
  {
    src: imgSushi,
    alt: "Sushi",
    aspect: "aspect-[3/4]"
  }
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12 reveal">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Conoce nuestras instalaciones</h2>
          <p className="text-muted-foreground text-lg">Un vistazo a nuestro amplio buffet y cómodos espacios familiares.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-max reveal">
          {IMAGES.map((img, i) => (
            <div 
              key={i} 
              className={`relative overflow-hidden rounded-xl cursor-pointer group ${img.aspect}`}
              onClick={() => setSelectedImage(img.src)}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <ZoomIn className="text-white w-10 h-10" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img 
            src={selectedImage} 
            alt="Vista ampliada" 
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
          />
        </div>
      )}
    </section>
  );
}
