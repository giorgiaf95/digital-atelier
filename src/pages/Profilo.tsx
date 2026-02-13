import { motion } from "framer-motion";
import { User, Mail, Calendar, Edit2, Heart, Star, FileText } from "lucide-react";

const stats = [
  { label: "Wishlist", value: "12", icon: Heart },
  { label: "Valutazioni", value: "8", icon: Star },
  { label: "Commenti", value: "5", icon: FileText },
];

const Profilo = () => {
  return (
    <div className="pt-16 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          {/* Header */}
          <div className="bg-card rounded-2xl p-8 card-glow flex flex-col md:flex-row items-center gap-6">
            <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center">
              <User size={40} className="text-primary" />
            </div>
            <div className="text-center md:text-left flex-1">
              <h1 className="font-display text-2xl font-bold text-foreground">Utente Demo</h1>
              <div className="flex flex-col sm:flex-row gap-3 mt-2 text-sm text-muted-foreground">
                <span className="flex items-center gap-1"><Mail size={14} /> demo@digitalatelier.com</span>
                <span className="flex items-center gap-1"><Calendar size={14} /> Membro da Febbraio 2026</span>
              </div>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
              <Edit2 size={14} /> Modifica Profilo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-8">
            {stats.map((s) => (
              <div key={s.label} className="bg-card rounded-xl p-6 card-glow text-center">
                <s.icon size={24} className="text-primary mx-auto mb-2" />
                <p className="font-display text-2xl font-bold text-foreground">{s.value}</p>
                <p className="text-muted-foreground text-sm">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Activity */}
          <div className="mt-8 bg-card rounded-2xl p-8 card-glow">
            <h2 className="font-display text-xl font-semibold text-foreground mb-6">Attività Recente</h2>
            <div className="space-y-4">
              {["Hai aggiunto 'E-Commerce Moderna' alla wishlist", "Hai valutato 'RPG Open World' con 5 stelle", "Hai commentato su 'Brand Identity: Da Zero a Iconico'"].map((activity, i) => (
                <div key={i} className="flex items-start gap-3 py-3 border-b border-border last:border-0">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <p className="text-muted-foreground text-sm">{activity}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Profilo;
