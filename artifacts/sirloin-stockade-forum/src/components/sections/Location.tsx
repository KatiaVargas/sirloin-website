import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Location() {
  return (
    <section id="location" className="py-0 relative">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        
        {/* Map Column */}
        <div className="h-[400px] lg:h-[600px] bg-muted w-full relative">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.398642390623!2d-103.3168864239851!3d20.65337288090547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428b248a31e8c07%3A0xcb1b590e82c5a770!2sSirloin%20Stockade%20Forum%20Tlaquepaque!5e0!3m2!1sen!2smx!4v1709230000000!5m2!1sen!2smx" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 grayscale-[20%] contrast-125"
            title="Ubicación de Sirloin Stockade Forum"
          ></iframe>
        </div>

        {/* Info Column */}
        <div className="bg-primary px-6 py-16 md:p-16 lg:p-24 flex flex-col justify-center text-white reveal">
          <div className="max-w-md">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">Visítanos hoy</h2>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Ubicación</h4>
                  <p className="text-white/80 leading-relaxed">
                    Blvd. Gral. Marcelino García Barragán 2077,<br />
                    Forum Tlaquepaque, 45550<br />
                    Guadalajara, Jalisco
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Horario</h4>
                  <p className="text-white/80">Lunes a Domingo</p>
                  <p className="font-medium text-white">12:00 PM - 9:00 PM</p>
                  <p className="text-sm text-green-400 mt-1 font-semibold flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-green-400 inline-block"></span>
                    Abierto, cierra a las 9 PM
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Contacto</h4>
                  <a href="tel:+523338385440" className="text-white/80 hover:text-white text-lg font-medium transition-colors">
                    +52 33 3838 5440
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold h-14 text-base shadow-xl">
                <a href="https://maps.google.com/?q=Sirloin+Stockade+Forum+Tlaquepaque" target="_blank" rel="noreferrer">
                  <Navigation className="w-5 h-5 mr-2" />
                  Abrir en Google Maps
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white/30 text-white hover:bg-white/10 hover:text-white font-bold h-14 text-base">
                <a href="tel:+523338385440">
                  <Phone className="w-5 h-5 mr-2" />
                  Llamar ahora
                </a>
              </Button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
