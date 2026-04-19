import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";

export function Menu() {
  const categories = [
    {
      id: "carnes",
      label: "Carnes",
      description: "Cortes de la mejor calidad, preparados a la parrilla justo en su punto.",
      items: ["Sirloin tradicional", "Costillas BBQ", "Pollo asado", "Cortes del día", "Salchichas asadas"],
      image: "https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=2606&auto=format&fit=crop"
    },
    {
      id: "mariscos",
      label: "Mariscos",
      description: "Frescura del mar a tu mesa con variedad de preparaciones.",
      items: ["Pescado empanizado", "Ceviche", "Camarones", "Sopa de mariscos", "Paella"],
      image: "https://images.unsplash.com/photo-1534080564583-6be75777b70a?q=80&w=2670&auto=format&fit=crop"
    },
    {
      id: "sushi",
      label: "Sushi",
      description: "Rollos frescos preparados al momento por nuestros sushiman.",
      items: ["California Roll", "Maki picante", "Nigiri variado", "Sushi empanizado", "Ensalada de surimi"],
      image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=2670&auto=format&fit=crop"
    },
    {
      id: "pastas",
      label: "Pastas",
      description: "Recetas italianas clásicas y especialidades de la casa.",
      items: ["Espagueti a la Boloñesa", "Fettuccine Alfredo", "Macarrones con queso", "Ensalada de pasta", "Lasaña"],
      image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=2600&auto=format&fit=crop"
    },
    {
      id: "postres",
      label: "Postres",
      description: "El final perfecto para una gran comida.",
      items: ["Helado suave", "Pastel de chocolate", "Gelatinas variadas", "Fruta fresca", "Flan casero"],
      image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=2564&auto=format&fit=crop"
    }
  ];

  return (
    <section id="menu" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <Badge variant="outline" className="mb-4 border-primary text-primary px-4 py-1 text-sm">
            Buffet ilimitado
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Todo incluido por un solo precio</h2>
          <p className="text-lg text-muted-foreground">
            Disfruta libremente de todas nuestras estaciones. Sirvete cuantas veces quieras y prueba de todo un poco.
          </p>
        </div>

        <div className="reveal">
          <Tabs defaultValue="carnes" className="w-full">
            <TabsList className="w-full flex flex-wrap h-auto justify-center gap-2 bg-transparent p-0 mb-12">
              {categories.map((cat) => (
                <TabsTrigger 
                  key={cat.id} 
                  value={cat.id}
                  className="px-6 py-3 rounded-full text-base data-[state=active]:bg-primary data-[state=active]:text-primary-foreground bg-muted hover:bg-muted/80 transition-all"
                >
                  {cat.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((cat) => (
              <TabsContent key={cat.id} value={cat.id} className="mt-0 focus-visible:outline-none">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-muted/30 rounded-3xl p-6 md:p-10 border border-muted">
                  
                  <div className="order-2 md:order-1">
                    <h3 className="text-3xl font-bold text-foreground mb-4">{cat.label}</h3>
                    <p className="text-lg text-muted-foreground mb-8">{cat.description}</p>
                    
                    <div className="space-y-4 mb-8">
                      {cat.items.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                          <span className="font-medium text-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="inline-flex items-center gap-2 text-sm font-semibold text-secondary-foreground bg-secondary/20 px-4 py-2 rounded-lg">
                      <span className="w-2 h-2 rounded-full bg-secondary"></span>
                      Incluido en tu pase de buffet
                    </div>
                  </div>

                  <div className="order-1 md:order-2 h-[300px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg">
                    <img 
                      src={cat.image} 
                      alt={`Estación de ${cat.label}`}
                      loading="lazy"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

      </div>
    </section>
  );
}
