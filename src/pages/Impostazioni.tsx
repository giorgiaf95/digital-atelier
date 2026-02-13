import { useState } from "react";
import { motion } from "framer-motion";
import { Bell, Palette, Shield, Globe } from "lucide-react";

const Impostazioni = () => {
  const [notifications, setNotifications] = useState(true);
  const [newsletter, setNewsletter] = useState(false);
  const [language, setLanguage] = useState("it");

  return (
    <div className="pt-16 min-h-screen">
      <div className="container mx-auto px-4 py-12 max-w-2xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="font-display text-3xl font-bold text-foreground mb-8">Impostazioni</h1>

          <div className="space-y-6">
            {/* Notifications */}
            <div className="bg-card rounded-xl p-6 card-glow">
              <div className="flex items-center gap-3 mb-4">
                <Bell size={20} className="text-primary" />
                <h2 className="font-display font-semibold text-foreground">Notifiche</h2>
              </div>
              <div className="space-y-4">
                <label className="flex items-center justify-between cursor-pointer">
                  <span className="text-sm text-muted-foreground">Notifiche push</span>
                  <button
                    onClick={() => setNotifications(!notifications)}
                    className={`w-11 h-6 rounded-full transition-colors relative ${notifications ? "bg-primary" : "bg-secondary"}`}
                  >
                    <span className={`block w-4 h-4 rounded-full bg-foreground absolute top-1 transition-transform ${notifications ? "translate-x-6" : "translate-x-1"}`} />
                  </button>
                </label>
                <label className="flex items-center justify-between cursor-pointer">
                  <span className="text-sm text-muted-foreground">Newsletter settimanale</span>
                  <button
                    onClick={() => setNewsletter(!newsletter)}
                    className={`w-11 h-6 rounded-full transition-colors relative ${newsletter ? "bg-primary" : "bg-secondary"}`}
                  >
                    <span className={`block w-4 h-4 rounded-full bg-foreground absolute top-1 transition-transform ${newsletter ? "translate-x-6" : "translate-x-1"}`} />
                  </button>
                </label>
              </div>
            </div>

            {/* Appearance */}
            <div className="bg-card rounded-xl p-6 card-glow">
              <div className="flex items-center gap-3 mb-4">
                <Palette size={20} className="text-primary" />
                <h2 className="font-display font-semibold text-foreground">Aspetto</h2>
              </div>
              <p className="text-sm text-muted-foreground">Tema: Dark (predefinito)</p>
            </div>

            {/* Language */}
            <div className="bg-card rounded-xl p-6 card-glow">
              <div className="flex items-center gap-3 mb-4">
                <Globe size={20} className="text-primary" />
                <h2 className="font-display font-semibold text-foreground">Lingua</h2>
              </div>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="bg-secondary text-foreground border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary"
              >
                <option value="it">Italiano</option>
                <option value="en">English</option>
              </select>
            </div>

            {/* Privacy */}
            <div className="bg-card rounded-xl p-6 card-glow">
              <div className="flex items-center gap-3 mb-4">
                <Shield size={20} className="text-primary" />
                <h2 className="font-display font-semibold text-foreground">Privacy & Sicurezza</h2>
              </div>
              <div className="space-y-3">
                <button className="text-sm text-muted-foreground hover:text-foreground transition-colors">Cambia password</button>
                <br />
                <button className="text-sm text-destructive hover:text-destructive/80 transition-colors">Elimina account</button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Impostazioni;
