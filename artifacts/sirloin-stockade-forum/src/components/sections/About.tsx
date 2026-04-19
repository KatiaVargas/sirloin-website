import { useEffect, useRef } from "react";
import { UtensilsCrossed, Users, Sparkles, Star, MapPin, Phone, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const isOpen = () => {
    const now = new Date();
    const hour = now.getHours();
    return hour >= 12 && hour < 21; // 12 PM to 9 PM
  };

  return (
    <section id="about" className="py-24 bg-muted" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Concept Description */}
          <div className="reveal space-y-8">
            <div>
              <h2 className="text-sm font-bold text-primary uppercase tracking-wider mb-2">El Concepto</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Mucho más que un buffet tradicional</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                En Sirloin Stockade ofrecemos una experiencia gastronómica donde cada miembro de la familia encuentra lo que más le gusta. Nuestro sistema de autoservicio cuenta con la atención esmerada de nuestro personal, asegurando que tu visita sea perfecta.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                  <UtensilsCrossed className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-foreground">+50 Platillos</h4>
                <p className="text-sm text-muted-foreground">Variedad infinita que cambia diariamente.</p>
              </div>
              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                  <Users className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-foreground">Ambiente familiar</h4>
                <p className="text-sm text-muted-foreground">Espacios diseñados para tu comodidad.</p>
              </div>
              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-foreground">Higiene y limpieza</h4>
                <p className="text-sm text-muted-foreground">Estándares estrictos en cada área.</p>
              </div>
            </div>
          </div>

          {/* Real Info Card */}
          <div className="reveal relative">
            <div className="absolute inset-0 bg-primary transform translate-x-4 translate-y-4 rounded-2xl opacity-20"></div>
            <div className="relative bg-card rounded-2xl shadow-xl overflow-hidden border border-card-border p-8">
              
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Sirloin Stockade</h3>
                  <div className="flex items-center gap-2">
                    <Badge variant={isOpen() ? "default" : "destructive"} className={isOpen() ? "bg-green-600 hover:bg-green-700" : ""}>
                      {isOpen() ? "Abierto ahora" : "Cerrado"}
                    </Badge>
                    <span className="text-sm text-muted-foreground font-medium flex items-center gap-1">
                      <Star className="w-4 h-4 fill-secondary text-secondary" />
                      3.6 (1,240+ reseñas)
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-sm text-muted-foreground block mb-1">Precio est.</span>
                  <span className="font-bold text-lg text-foreground">$300-$400</span>
                  <span className="text-sm text-muted-foreground ml-1">MXN</span>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Dirección</h4>
                    <p className="text-muted-foreground text-sm">Blvd. Gral. Marcelino García Barragán 2077, Forum Tlaquepaque, 45550 Guadalajara, Jal.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Teléfono</h4>
                    <a href="tel:+523338385440" className="text-primary hover:underline text-sm font-medium">+52 33 3838 5440</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Horario de hoy</h4>
                    <p className="text-muted-foreground text-sm">12:00 PM - 9:00 PM</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
