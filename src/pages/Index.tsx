import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Palette, Lightbulb } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import heroBg from "@/assets/hero-bg.jpg";
import serviceWebdesign from "@/assets/service-webdesign.jpg";
import service3d from "@/assets/service-3d.jpg";
import service2d from "@/assets/service-2d.jpg";
import serviceGamedesign from "@/assets/service-gamedesign.jpg";
import serviceNarrative from "@/assets/service-narrative.jpg";
import { Link } from "react-router-dom";

const services = [
  { title: "Web Design", description: "Siti web moderni, responsive e ad alte prestazioni.", image: serviceWebdesign, path: "/web-design" },
  { title: "Modelli 3D", description: "Modellazione 3D per giochi, architettura e visualizzazione.", image: service3d, path: "/modelli-3d" },
  { title: "Grafiche 2D", description: "Illustrazioni, brand identity e concept art.", image: service2d, path: "/grafiche-2d" },
  { title: "Game Design", description: "Meccaniche di gioco, level design e game systems.", image: serviceGamedesign, path: "/game-design" },
  { title: "Narrative Design", description: "Worldbuilding, dialoghi e storytelling interattivo.", image: serviceNarrative, path: "/narrative-design" },
];

const highlights = [
  { icon: Sparkles, title: "Creatività Digitale", text: "Ogni progetto nasce dall'unione di arte e tecnologia." },
  { icon: Palette, title: "Design su Misura", text: "Soluzioni personalizzate per ogni esigenza creativa." },
  { icon: Lightbulb, title: "Innovazione Continua", text: "Strumenti e tecniche all'avanguardia per risultati unici." },
];

const scrollToServices = () => {
  document.getElementById("servizi")?.scrollIntoView({ behavior: "smooth" });
};

const Index = () => {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center overflow-hidden">
        <img src={heroBg} alt="Digital Atelier" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/20" />
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground leading-tight">
              Digital
              <br />
              <span className="gradient-text">Atelier</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl mt-6 max-w-lg">
              Design, arte e storytelling al servizio della tua visione creativa.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                to="/contatti"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-display font-semibold hover:bg-primary/90 transition-colors"
              >
                Inizia un Progetto <ArrowRight size={18} />
              </Link>
              <button
                onClick={scrollToServices}
                className="inline-flex items-center gap-2 border border-border text-foreground px-6 py-3 rounded-lg font-display font-medium hover:bg-secondary transition-colors"
              >
                Esplora i Servizi
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Presentation */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Perché <span className="gradient-text">Digital Atelier</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
            Un laboratorio creativo dove le idee prendono forma.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="bg-card rounded-xl p-8 card-glow text-center"
            >
              <div className="w-12 h-12 rounded-full bg-primary/15 flex items-center justify-center mx-auto mb-4">
                <h.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{h.title}</h3>
              <p className="text-muted-foreground text-sm">{h.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section id="servizi" className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            I Nostri <span className="gradient-text">Servizi</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
            Dalla progettazione alla realizzazione, offriamo soluzioni creative complete.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.path} {...service} index={i} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 pb-20">
        <div className="bg-card rounded-2xl p-12 text-center card-glow">
          <h2 className="font-display text-3xl font-bold text-foreground mb-4">
            Hai un progetto in mente?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Raccontaci la tua idea e trasformiamola in realtà.
          </p>
          <Link
            to="/contatti"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-display font-semibold hover:bg-primary/90 transition-colors"
          >
            Contattaci <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
