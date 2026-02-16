import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Heart, Star, ExternalLink, LayoutGrid, Grid3X3, List } from "lucide-react";
import { Link } from "react-router-dom";
import SearchAndFilter from "@/components/SearchAndFilter";
import type { GalleryItem } from "@/data/galleryData";
import { FEATURES } from "@/config/features"; 

interface GalleryGridProps {
  items: GalleryItem[];
  basePath?: string;
}

const GalleryGrid = ({ items, basePath }: GalleryGridProps) => {
  const [selected, setSelected] = useState<GalleryItem | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tutti");
  const [viewMode, setViewMode] = useState<"grid" | "compact" | "list">("grid");

  const categories = useMemo(() => {
    const cats = [...new Set(items.map((i) => i.category))];
    return ["Tutti", ...cats];
  }, [items]);

  const filtered = useMemo(() => {
    return items.filter((item) => {
      const matchCat = selectedCategory === "Tutti" || item.category === selectedCategory;
      const q = searchQuery.toLowerCase();
      const matchSearch =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.tags.some((t) => t.includes(q));
      return matchCat && matchSearch;
    });
  }, [items, selectedCategory, searchQuery]);

  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
        <div className="flex-1">
          <SearchAndFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            placeholder="Cerca prodotti..."
          />
        </div>
        <div className="flex items-center gap-1 bg-card border border-border rounded-lg p-1 shrink-0">
          {([
            { mode: "grid" as const, icon: LayoutGrid, label: "Griglia" },
            { mode: "compact" as const, icon: Grid3X3, label: "Compatta" },
            { mode: "list" as const, icon: List, label: "Lista" },
          ]).map(({ mode, icon: Icon, label }) => (
            <button
              key={mode}
              onClick={() => setViewMode(mode)}
              title={label}
              className={`p-2 rounded-md transition-colors ${
                viewMode === mode ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Icon size={16} />
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="text-muted-foreground text-center py-12">Nessun risultato trovato.</p>
      ) : (
        <div
          className={
            viewMode === "grid"
              ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              : viewMode === "compact"
              ? "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
              : "flex flex-col gap-3"
          }
        >
          {filtered.map((item, i) =>
            viewMode === "list" ? (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                className="group cursor-pointer"
                onClick={() => setSelected(item)}
              >
                <div className="card-glow rounded-lg overflow-hidden bg-card flex items-center gap-4 p-3">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded object-cover shrink-0"
                    loading="lazy"
                  />
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] font-medium text-primary">{item.category}</span>
                    <h4 className="font-display font-medium text-foreground text-sm truncate">{item.title}</h4>
                    <p className="text-muted-foreground text-xs mt-0.5 line-clamp-1">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
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
                      <span className="text-foreground font-display font-semibold opacity-0 group-hover:opacity-100 transition-opacity text-xs sm:text-sm">
                        Visualizza
                      </span>
                    </div>
                    <span className="absolute top-2 left-2 px-1.5 py-0.5 bg-primary/90 text-primary-foreground text-[10px] font-medium rounded">
                      {item.category}
                    </span>
                  </div>
                  {viewMode === "grid" && (
                    <div className="p-4">
                      <h4 className="font-display font-medium text-foreground text-sm">{item.title}</h4>
                      <p className="text-muted-foreground text-xs mt-1 line-clamp-1">{item.description}</p>
                    </div>
                  )}
                </div>
              </motion.div>
            )
          )}
        </div>
      )}

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
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-xs font-medium text-primary">{selected.category}</span>
                    <h3 className="font-display text-2xl font-bold text-foreground mt-1">
                      {selected.title}
                    </h3>
                  </div>
                  {basePath && (
                    <Link
                      to={`${basePath}/${selected.id}`}
                      className="shrink-0 flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
                    >
                      Scheda <ExternalLink size={14} />
                    </Link>
                  )}
                </div>
                <p className="text-muted-foreground mt-2">{selected.description}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {selected.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 bg-secondary text-secondary-foreground rounded text-xs">
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* 🔒 Interazioni utente - mostrate solo se features attive */}
                {(FEATURES.WISHLIST || FEATURES.RATINGS) && (
                  <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border">
                    {FEATURES.WISHLIST && (
                      <button className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors">
                        <Heart size={18} /> Mi piace
                      </button>
                    )}
                    {FEATURES.RATINGS && (
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            size={16}
                            className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                          />
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GalleryGrid;
