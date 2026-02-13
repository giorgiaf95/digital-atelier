import { motion } from "framer-motion";
import { Heart, Trash2, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { webDesignItems, gameDesignItems } from "@/data/galleryData";

// Mock wishlist items
const wishlistItems = [
  { ...webDesignItems[0], section: "web-design" },
  { ...gameDesignItems[0], section: "game-design" },
  { ...webDesignItems[2], section: "web-design" },
];

const Wishlist = () => {
  return (
    <div className="pt-16 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex items-center gap-3 mb-8">
            <Heart size={28} className="text-primary" />
            <h1 className="font-display text-3xl font-bold text-foreground">La Mia Wishlist</h1>
          </div>

          {wishlistItems.length === 0 ? (
            <div className="text-center py-20">
              <Heart size={48} className="text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">La tua wishlist è vuota.</p>
              <Link to="/" className="text-primary text-sm hover:underline mt-2 inline-block">Esplora i prodotti</Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {wishlistItems.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-card rounded-lg overflow-hidden card-glow group"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                    <span className="absolute top-3 left-3 px-2 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded">{item.category}</span>
                  </div>
                  <div className="p-4">
                    <h4 className="font-display font-medium text-foreground">{item.title}</h4>
                    <p className="text-muted-foreground text-xs mt-1 line-clamp-2">{item.description}</p>
                    <div className="flex items-center gap-2 mt-4">
                      <Link
                        to={`/${item.section}/${item.id}`}
                        className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
                      >
                        <ExternalLink size={14} /> Dettagli
                      </Link>
                      <button className="p-2 border border-border rounded-lg text-muted-foreground hover:text-destructive hover:border-destructive transition-colors">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Wishlist;
