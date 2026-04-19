import { Star, ThumbsUp, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart, Bar, XAxis, ResponsiveContainer, Cell, Tooltip } from "recharts";

const REVIEWS = [
  {
    id: 1,
    author: "María G.",
    time: "Hace 2 meses",
    rating: 5,
    text: "Excelente servicio, mucha variedad y buen sabor. Me encanta que siempre están reabasteciendo las bandejas. Ideal para ir con los niños los domingos.",
    type: "positive"
  },
  {
    id: 2,
    author: "Carlos R.",
    time: "Hace 5 meses",
    rating: 4,
    text: "Muy limpio comparado con otras sucursales. La atención de los meseros es rápida para recoger los platos. La zona de postres estaba muy bien surtida.",
    type: "mixed"
  },
  {
    id: 3,
    author: "Fernando T.",
    time: "Hace un año",
    rating: 3,
    text: "Precio alto para la calidad en algunos platillos. Las carnes están bien pero los mariscos podrían mejorar. El lugar es amplio y no tuvimos que esperar mucho por mesa.",
    type: "critical"
  }
];

const PEAK_HOURS_DATA = [
  { time: "6am", users: 5 },
  { time: "9am", users: 15 },
  { time: "12pm", users: 85, isPeak: true },
  { time: "3pm", users: 65 },
  { time: "6pm", users: 95, isPeak: true },
  { time: "9pm", users: 40 },
];

export function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-4 reveal">
            <h2 className="text-3xl font-bold text-foreground mb-4">Lo que dicen nuestros clientes</h2>
            <div className="flex items-center gap-4 mb-6">
              <div className="text-5xl font-black text-foreground">3.6</div>
              <div className="flex flex-col">
                <div className="flex text-secondary">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <div className="relative">
                    <Star className="w-5 h-5 text-muted-foreground" />
                    <div className="absolute inset-0 overflow-hidden w-[60%]">
                      <Star className="w-5 h-5 fill-secondary text-secondary" />
                    </div>
                  </div>
                  <Star className="w-5 h-5 text-muted-foreground" />
                </div>
                <span className="text-sm text-muted-foreground mt-1">1,240 reseñas en Google</span>
              </div>
            </div>
            <p className="text-muted-foreground mb-8">
              Tu opinión es importante para nosotros. Trabajamos día a día para mejorar nuestra calidad y servicio.
            </p>

            <div className="bg-muted rounded-xl p-6 border border-card-border">
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                Horarios populares
              </h3>
              <div className="h-[150px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={PEAK_HOURS_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }} />
                    <Tooltip 
                      cursor={{ fill: 'transparent' }}
                      content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          const data = payload[0].payload;
                          return (
                            <div className="bg-popover text-popover-foreground border border-border text-xs p-2 rounded shadow-sm">
                              {data.isPeak ? "Mayor concurrencia" : "Concurrencia normal"}
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                    <Bar dataKey="users" radius={[4, 4, 0, 0]}>
                      {PEAK_HOURS_DATA.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.isPeak ? 'hsl(var(--primary))' : 'hsl(var(--muted-foreground)/0.3)'} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 text-xs text-muted-foreground flex justify-between">
                <span>Tranquilo</span>
                <span className="text-primary font-medium">Mayor concurrencia</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 reveal">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {REVIEWS.map((review, i) => (
                <Card key={review.id} className={`border-card-border shadow-sm hover:shadow-md transition-shadow ${i === 2 ? 'md:col-span-2 lg:col-span-1 lg:col-start-2' : ''}`}>
                  <CardContent className="p-6 relative">
                    <Quote className="absolute top-6 right-6 w-8 h-8 text-muted/50" />
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-lg">
                        {review.author.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground text-sm">{review.author}</h4>
                        <p className="text-xs text-muted-foreground">{review.time}</p>
                      </div>
                    </div>
                    <div className="flex mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'fill-secondary text-secondary' : 'fill-muted text-muted'}`} />
                      ))}
                    </div>
                    <p className="text-foreground text-sm leading-relaxed">"{review.text}"</p>
                    <div className="mt-4 flex items-center gap-1 text-xs text-muted-foreground">
                      <ThumbsUp className="w-3 h-3" />
                      A {Math.floor(Math.random() * 10) + 1} personas les resultó útil
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

// Temporary icon since we couldn't import it at the top
function Users(props: any) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
}
