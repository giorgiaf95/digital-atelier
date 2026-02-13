import { useState } from "react";
import { Gamepad2, X, Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface GameDemoPlayerProps {
  title: string;
  demoUrl?: string;
  image: string;
  hasDemo?: boolean;
}

const GameDemoPlayer = ({ title, demoUrl, image, hasDemo = false }: GameDemoPlayerProps) => {
  const [open, setOpen] = useState(false);

  if (!hasDemo) return null;

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 px-4 py-2 bg-accent text-accent-foreground rounded-lg text-sm font-medium hover:bg-accent/90 transition-colors"
      >
        <Gamepad2 size={16} /> Prova la Demo
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex flex-col"
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-card/80">
              <div className="flex items-center gap-2">
                <Gamepad2 size={18} className="text-accent" />
                <h3 className="font-display font-semibold text-foreground text-sm">Demo: {title}</h3>
              </div>
              <button onClick={() => setOpen(false)} className="p-2 text-muted-foreground hover:text-foreground">
                <X size={18} />
              </button>
            </div>

            <div className="flex-1 flex items-center justify-center p-4">
              {demoUrl ? (
                <iframe
                  src={demoUrl}
                  className="w-full max-w-4xl h-[75vh] rounded-lg border border-border"
                  title={`Demo di ${title}`}
                  allow="autoplay; fullscreen"
                />
              ) : (
                <div className="text-center">
                  <div className="w-full max-w-2xl rounded-lg overflow-hidden card-glow relative">
                    <img src={image} alt={title} className="w-full opacity-50" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center">
                        <Play size={32} className="text-accent ml-1" />
                      </div>
                      <p className="text-muted-foreground font-display text-sm">
                        Demo interattiva in fase di caricamento
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GameDemoPlayer;
