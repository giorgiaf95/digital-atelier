import { useState } from "react";
import { Monitor, Tablet, Smartphone, X, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface TemplatePreviewProps {
  title: string;
  previewUrl?: string;
  image: string;
}

const viewports = [
  { label: "Desktop", icon: Monitor, width: "100%" },
  { label: "Tablet", icon: Tablet, width: "768px" },
  { label: "Mobile", icon: Smartphone, width: "375px" },
];

const TemplatePreview = ({ title, previewUrl, image }: TemplatePreviewProps) => {
  const [open, setOpen] = useState(false);
  const [viewport, setViewport] = useState(0);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
      >
        <Monitor size={16} /> Anteprima
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex flex-col"
          >
            {/* Toolbar */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-card/80">
              <h3 className="font-display font-semibold text-foreground text-sm">{title}</h3>
              <div className="flex items-center gap-2">
                {viewports.map((vp, i) => (
                  <button
                    key={vp.label}
                    onClick={() => setViewport(i)}
                    className={`p-2 rounded-md transition-colors ${
                      viewport === i ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                    }`}
                    title={vp.label}
                  >
                    <vp.icon size={18} />
                  </button>
                ))}
                <div className="w-px h-6 bg-border mx-1" />
                <button onClick={() => setOpen(false)} className="p-2 text-muted-foreground hover:text-foreground">
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Preview area */}
            <div className="flex-1 flex items-center justify-center p-4 overflow-auto">
              <motion.div
                layout
                className="bg-card rounded-lg overflow-hidden card-glow border border-border"
                style={{ width: viewports[viewport].width, maxWidth: "100%", transition: "width 0.3s ease" }}
              >
                {previewUrl ? (
                  <iframe
                    src={previewUrl}
                    className="w-full h-[70vh] border-0"
                    title={`Preview di ${title}`}
                  />
                ) : (
                  <div className="relative">
                    <img src={image} alt={title} className="w-full" />
                    <div className="absolute inset-0 flex items-center justify-center bg-background/50">
                      <p className="text-muted-foreground text-sm font-display bg-card/90 px-4 py-2 rounded-lg">
                        Anteprima statica — demo interattiva in arrivo
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default TemplatePreview;
