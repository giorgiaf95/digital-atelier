import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Heart, Star, Play, ImageIcon } from "lucide-react";
import { webDesignItems, models3dItems, graphics2dItems, gameDesignItems, narrativeDesignItems } from "@/data/galleryData";
import type { GalleryItem } from "@/data/galleryData";
import TemplatePreview from "@/components/TemplatePreview";
import GameDemoPlayer from "@/components/GameDemoPlayer";

const allItems: Record<string, GalleryItem[]> = {
  "web-design": webDesignItems,
  "modelli-3d": models3dItems,
  "grafiche-2d": graphics2dItems,
  "game-design": gameDesignItems,
  "narrative-design": narrativeDesignItems,
};

const ProductDetail = () => {
  const { section, id } = useParams();
  const navigate = useNavigate();

  const items = section ? allItems[section] : undefined;
  const product = items?.find((i) => i.id === id);

  if (!product) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-2xl font-bold text-foreground">Prodotto non trovato</h1>
          <button onClick={() => navigate(-1)} className="mt-4 text-primary hover:underline">
            Torna indietro
          </button>
        </div>
      </div>
    );
  }

  const isWebDesign = section === "web-design";
  const isGameDesign = section === "game-design";

  return (
    <div className="pt-16 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft size={18} /> Torna alla galleria
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Images section */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
            <div className="rounded-lg overflow-hidden card-glow">
              <img src={product.image} alt={product.title} className="w-full aspect-[4/3] object-cover" />
            </div>
            <div className="grid grid-cols-4 gap-3">
              {[1, 2, 3, 4].map((n) => (
                <div key={n} className={`aspect-square rounded-lg overflow-hidden border-2 cursor-pointer transition-colors ${n === 1 ? "border-primary" : "border-border hover:border-primary/50"}`}>
                  <img src={product.image} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div className="rounded-lg bg-card border border-border p-8 flex flex-col items-center justify-center gap-3 text-muted-foreground">
              <Play size={32} />
              <span className="text-sm font-medium">Video / Clip disponibile a breve</span>
            </div>
          </motion.div>

          {/* Info section */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="space-y-6">
            <div>
              <span className="text-xs font-medium text-primary uppercase tracking-wider">{product.category}</span>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">{product.title}</h1>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed">{product.description}</p>

            <div className="flex flex-wrap gap-2">
              {product.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">#{tag}</span>
              ))}
            </div>

            {/* Rating */}
            <div className="flex items-center gap-4 py-4 border-y border-border">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={20} className="text-muted-foreground hover:text-primary transition-colors cursor-pointer" />
                ))}
              </div>
              <span className="text-muted-foreground text-sm">Nessuna valutazione ancora</span>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-3">
              <button className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-display font-semibold hover:bg-primary/90 transition-colors">
                <Heart size={18} /> Aggiungi alla Wishlist
              </button>
              <button className="flex items-center gap-2 px-6 py-3 border border-border text-foreground rounded-lg font-display font-medium hover:bg-secondary transition-colors">
                <ImageIcon size={18} /> Richiedi Info
              </button>
            </div>

            {/* Template Preview / Game Demo */}
            {isWebDesign && (
              <div className="bg-card rounded-lg p-6 card-glow">
                <h3 className="font-display font-semibold text-foreground mb-3">Simulatore Anteprima</h3>
                <p className="text-muted-foreground text-sm mb-4">Visualizza il template su diversi dispositivi.</p>
                <TemplatePreview title={product.title} image={product.image} />
              </div>
            )}

            {isGameDesign && (
              <div className="bg-card rounded-lg p-6 card-glow">
                <h3 className="font-display font-semibold text-foreground mb-3">Demo Giocabile</h3>
                <p className="text-muted-foreground text-sm mb-4">Prova la demo del gioco direttamente nel browser.</p>
                <GameDemoPlayer title={product.title} image={product.image} hasDemo={true} />
              </div>
            )}

            {/* Details */}
            <div className="bg-card rounded-lg p-6 card-glow space-y-4">
              <h3 className="font-display font-semibold text-foreground">Dettagli Prodotto</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-muted-foreground">Categoria</span>
                  <p className="text-foreground font-medium">{product.category}</p>
                </div>
                <div>
                  <span className="text-muted-foreground">ID</span>
                  <p className="text-foreground font-medium">{product.id}</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Formato</span>
                  <p className="text-foreground font-medium">Digitale</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Stato</span>
                  <p className="text-foreground font-medium">Disponibile</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
