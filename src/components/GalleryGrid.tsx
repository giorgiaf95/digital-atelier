import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Heart, Star } from "lucide-react";

interface GalleryItem {
  id: string;
  title: string;
  image: string;
  description: string;
}

interface GalleryGridProps {
  items: GalleryItem[];
}

const GalleryGrid = ({ items }: GalleryGridProps) => {
  const [selected, setSelected] = useState<GalleryItem | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="group cursor-pointer"
            onClick={() => setSelected(item)}
          >
            <div className="card-glow rounded-lg overflow-hidden bg-card">
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/30 transition-colors flex items-center justify-center">
                  <span className="text-foreground font-display font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    Visualizza
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-display font-medium text-foreground text-sm">{item.title}</h4>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/90 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full bg-card rounded-lg overflow-hidden card-glow"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 z-10 bg-background/80 rounded-full p-2 text-foreground hover:text-primary transition-colors"
              >
                <X size={20} />
              </button>
              <img
                src={selected.image}
                alt={selected.title}
                className="w-full max-h-[60vh] object-contain bg-background"
              />
              <div className="p-6">
                <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                  {selected.title}
                </h3>
                <p className="text-muted-foreground">{selected.description}</p>
                <div className="flex items-center gap-4 mt-4">
                  <button className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors">
                    <Heart size={18} /> Mi piace
                  </button>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={16}
                        className="text-muted-foreground hover:text-accent transition-colors cursor-pointer"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GalleryGrid;
