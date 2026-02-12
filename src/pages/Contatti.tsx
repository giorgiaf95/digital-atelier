import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, User, MessageSquare } from "lucide-react";
import { toast } from "sonner";

const Contatti = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Compila tutti i campi");
      return;
    }
    toast.success("Messaggio inviato! Ti risponderemo presto.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="pt-16 min-h-screen">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto"
        >
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground text-center">
            <span className="gradient-text">Contattaci</span>
          </h1>
          <p className="text-muted-foreground text-center mt-4 mb-12">
            Raccontaci la tua idea. Siamo pronti ad ascoltare.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="text-sm font-medium text-foreground flex items-center gap-2 mb-2">
                <User size={14} /> Nome
              </label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                maxLength={100}
                className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                placeholder="Il tuo nome"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground flex items-center gap-2 mb-2">
                <Mail size={14} /> Email
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                maxLength={255}
                className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                placeholder="la-tua@email.com"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground flex items-center gap-2 mb-2">
                <MessageSquare size={14} /> Messaggio
              </label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                maxLength={1000}
                rows={5}
                className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                placeholder="Descrivi il tuo progetto..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-display font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors"
            >
              <Send size={18} /> Invia Messaggio
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contatti;
