import { MapPin, Phone, Clock, Star, Users, ArrowRight } from "lucide-react";
import cuceiLogo from "@assets/imagen_1776859246105.png";

export function Footer() {
  return (
    <footer className="bg-[#1C1C1C] text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold text-secondary mb-4">SIRLOIN STOCKADE</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              El restaurante buffet familiar más completo de Guadalajara. Gran variedad de cortes, mariscos, sushi y postres por un solo precio.
            </p>
            <div className="flex gap-4">
              {/* Social icons could go here */}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Enlaces</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-secondary transition-colors text-sm">Inicio</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-secondary transition-colors text-sm">Concepto</a></li>
              <li><a href="#menu" className="text-gray-400 hover:text-secondary transition-colors text-sm">Menú</a></li>
              <li><a href="#gallery" className="text-gray-400 hover:text-secondary transition-colors text-sm">Galería</a></li>
              <li><a href="#reviews" className="text-gray-400 hover:text-secondary transition-colors text-sm">Reseñas</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-lg font-semibold mb-4 text-white">Contacto y Ubicación</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <span>Blvd. Gral. Marcelino García Barragán 2077,<br />Forum Tlaquepaque, Guadalajara, Jalisco</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone className="w-5 h-5 text-secondary shrink-0" />
                <a href="tel:+523338385440" className="hover:text-white transition-colors">+52 33 3838 5440</a>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Clock className="w-5 h-5 text-secondary shrink-0" />
                <span>Lunes a Domingo: 12:00 PM - 9:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="text-xs text-gray-400 leading-relaxed space-y-1">
            <p><span className="text-gray-500">Alumna:</span> Katia Paola Vargas Flores</p>
            <p><span className="text-gray-500">Profesor:</span> Axel Daniel Saldivar Zaldivar</p>
            <p><span className="text-gray-500">Materia:</span> Bases de datos</p>
            <p><span className="text-gray-500">Ciclo escolar:</span> 2026A - Abril 2026</p>
          </div>
          <img
            src={cuceiLogo}
            alt="CUCEI - Universidad de Guadalajara"
            className="h-[45px] md:h-[61px] w-auto opacity-90 self-end md:self-auto"
          />
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Sirloin Stockade – Forum Tlaquepaque. Todos los derechos reservados.
          </p>
          <p className="text-xs text-gray-600">
            Información basada en Google Maps
          </p>
        </div>
      </div>
    </footer>
  );
}
