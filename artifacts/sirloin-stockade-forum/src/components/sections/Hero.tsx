import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="home" className="relative h-[100dvh] min-h-[600px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2574&auto=format&fit=crop"
          alt="Variedad de comida en buffet"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" /> {/* Dark overlay */}
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 flex flex-col items-center text-center mt-16">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-6 tracking-tight drop-shadow-lg">
            Variedad sin <span className="text-secondary">Límites</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto font-medium drop-shadow">
            Disfruta un buffet completo para toda la familia en Guadalajara.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white border-none h-14 px-8 text-lg font-semibold min-w-[200px] shadow-xl">
              <a href="#menu">Ver menú</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 hover:text-white h-14 px-8 text-lg font-semibold min-w-[200px]">
              <a href="#location">Cómo llegar</a>
            </Button>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center text-white/80 hover:text-white transition-colors animate-bounce"
      >
        <span className="text-xs uppercase tracking-widest font-semibold mb-2">Descubre más</span>
        <ChevronDown className="w-6 h-6" />
      </a>
    </section>
  );
}
