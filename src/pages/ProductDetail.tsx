import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Heart, Star, Play, ImageIcon } from "lucide-react";
import { webDesignItems, models3dItems, graphics2dItems, gameDesignItems, narrativeDesignItems } from "@/data/galleryData";
import type { GalleryItem } from "@/data/galleryData";
import { FEATURES } from "@/config/features";

// Import condizionali - commentati se danno errore
// import TemplatePreview from "@/components/TemplatePreview";
// import GameDemoPlayer from "@/components/GameDemoPlayer";

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
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
            <div>
              <h1 className="font-display text-3xl font-bold text-foreground mb-2">{product.title}</h1>
              <p className="text-muted-foreground">{product.description}</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {product.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                  {tag}
                </span>
              ))}
            </div>

            {/* 🔒 Ratings - solo se feature attiva */}
            {FEATURES.RATINGS && (
              <div className="flex items-center gap-4 py-4 border-y border-border">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={20} className="text-muted-foreground hover:text-primary transition-colors cursor-pointer" />
                  ))}
                </div>
                <span className="text-muted-foreground text-sm">Nessuna valutazione ancora</span>
              </div>
            )}

            {/* Actions */}
            <div className="flex flex-wrap gap-3">
              {/* 🔒 Wishlist button - solo se feature attiva */}
              {FEATURES.WISHLIST && (
                <button className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-display font-semibold hover:bg-primary/90 transition-colors">
                  <Heart size={18} /> Aggiungi alla Wishlist
                </button>
              )}
              <button className="flex items-center gap-2 px-6 py-3 border border-border text-foreground rounded-lg font-display font-medium hover:bg-secondary transition-colors">
                <ImageIcon size={18} /> Richiedi Info
              </button>
            </div>

            {/* Features */}
            <div className="space-y-3">
              <h3 className="font-display font-semibold text-foreground">Caratteristiche</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Design moderno e responsive</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Ottimizzato per performance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Documentazione completa inclusa</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Supporto e aggiornamenti garantiti</span>
                </li>
              </ul>
            </div>

            {/* Specifiche tecniche */}
            <div className="space-y-3">
              <h3 className="font-display font-semibold text-foreground">Specifiche Tecniche</h3>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="bg-secondary rounded-lg p-3">
                  <p className="text-muted-foreground mb-1">Categoria</p>
                  <p className="text-foreground font-medium">{product.category}</p>
                </div>
                <div className="bg-secondary rounded-lg p-3">
                  <p className="text-muted-foreground mb-1">Formato</p>
                  <p className="text-foreground font-medium">Digitale</p>
                </div>
                <div className="bg-secondary rounded-lg p-3">
                  <p className="text-muted-foreground mb-1">Licenza</p>
                  <p className="text-foreground font-medium">Commerciale</p>
                </div>
                <div className="bg-secondary rounded-lg p-3">
                  <p className="text-muted-foreground mb-1">Aggiornamenti</p>
                  <p className="text-foreground font-medium">Inclusi</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Preview sections - TEMPORANEAMENTE DISABILITATI */}
        {/* Decommentare quando i componenti sono pronti */}
        
        {/* {isWebDesign && (
          <div className="mt-16">
            <h2 className="font-display text-2xl font-bold text-foreground mb-8">Anteprima Live</h2>
            <TemplatePreview />
          </div>
        )}

        {isGameDesign && (
          <div className="mt-16">
            <h2 className="font-display text-2xl font-bold text-foreground mb-8">Prova la Demo</h2>
            <GameDemoPlayer />
          </div>
        )} */}

        {/* Placeholder temporaneo per preview */}
        {(isWebDesign || isGameDesign) && (
          <div className="mt-16">
            <h2 className="font-display text-2xl font-bold text-foreground mb-8">
              {isWebDesign ? "Anteprima Live" : "Prova la Demo"}
            </h2>
            <div className="rounded-lg bg-card border border-border p-12 text-center">
              <Play size={48} className="text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">
                {isWebDesign ? "Preview interattiva disponibile a breve" : "Demo giocabile disponibile a breve"}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;