import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FEATURES } from "@/config/features";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import Index from "./pages/Index";
import WebDesign from "./pages/WebDesign";
import Modelli3D from "./pages/Modelli3D";
import Grafiche2D from "./pages/Grafiche2D";
import GameDesign from "./pages/GameDesign";
import NarrativeDesign from "./pages/NarrativeDesign";
import News from "./pages/News";
import Contatti from "./pages/Contatti";
import ProductDetail from "./pages/ProductDetail";
import ArticleDetail from "./pages/ArticleDetail";
import NotFound from "./pages/NotFound";

// Import pages utente (sempre importate ma usate solo se features attive).
import Login from "./pages/Login";
import Profilo from "./pages/Profilo";
import Wishlist from "./pages/Wishlist";
import Impostazioni from "./pages/Impostazioni";

const queryClient = new QueryClient();

// 🔒 MODALITÀ MANUTENZIONE - false sito attivo - true sito disattivato
const MAINTENANCE_MODE = true;

/**
 * 🚧 Pagina "Coming Soon" mostrata durante manutenzione
 */
const ComingSoon = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black">
    <div className="text-center px-4">
      <div className="mb-8">
        {/* Logo/Icona */}
        <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-yellow-500/20 flex items-center justify-center">
          <span className="text-6xl">🎨</span>
        </div>
      </div>
      <h1 className="text-6xl font-bold text-yellow-500 mb-4">
        Digital Atelier
      </h1>
      <p className="text-xl text-white mb-8">
        Il nostro portfolio sta prendendo forma
      </p>
      <p className="text-gray-400 mb-4">
        Design, arte e storytelling stanno arrivando
      </p>
      <p className="text-sm text-gray-500">
        Torna presto per scoprire i nostri progetti
      </p>
    </div>
  </div>
);

const App = () => {
  // 🚧 Se modalità manutenzione attiva, mostra solo Coming Soon
  if (MAINTENANCE_MODE) {
    return <ComingSoon />;
  }

  // ✅ Altrimenti mostra il sito normale (con features attive/disattive)
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Navbar />
          <main className="pb-16 xl:pb-0">
            <Routes>
              {/* ✅ Routes Portfolio (sempre attive) */}
              <Route path="/" element={<Index />} />
              <Route path="/web-design" element={<WebDesign />} />
              <Route path="/modelli-3d" element={<Modelli3D />} />
              <Route path="/grafiche-2d" element={<Grafiche2D />} />
              <Route path="/game-design" element={<GameDesign />} />
              <Route path="/narrative-design" element={<NarrativeDesign />} />
              <Route path="/news" element={<News />} />
              <Route path="/news/:id" element={<ArticleDetail />} />
              <Route path="/contatti" element={<Contatti />} />
              <Route path="/:section/:id" element={<ProductDetail />} />
              
              {/* 🔒 Routes Utente (attive solo se FEATURES abilitate) */}
              {FEATURES.USER_AUTHENTICATION && (
                <Route path="/login" element={<Login />} />
              )}
              {FEATURES.USER_PROFILES && (
                <Route path="/profilo" element={<Profilo />} />
              )}
              {FEATURES.WISHLIST && (
                <Route path="/wishlist" element={<Wishlist />} />
              )}
              {FEATURES.USER_SETTINGS && (
                <Route path="/impostazioni" element={<Impostazioni />} />
              )}
              
              {/* 404 */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <MobileBottomBar />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;