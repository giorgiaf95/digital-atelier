import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import Login from "./pages/Login";
import Profilo from "./pages/Profilo";
import Wishlist from "./pages/Wishlist";
import Impostazioni from "./pages/Impostazioni";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();


const MAINTENANCE_MODE = false;

const ComingSoon = () => (
  <div className="min-h-screen flex items-center justify-center bg-black">
    <div className="text-center">
      <h1 className="text-6xl font-bold text-yellow-500 mb-4">
        Digital Atelier
      </h1>
      <p className="text-xl text-white mb-8">
        Stiamo lavorando a qualcosa di speciale
      </p>
      <p className="text-gray-400">
        Torna presto per scoprire il portfolio
      </p>
    </div>
  </div>
);


const App = () => {
  // Se modalità manutenzione attiva, mostra solo Coming Soon
  if (MAINTENANCE_MODE) {
    return <ComingSoon />;
  }

  // Altrimenti mostra il sito normale
  return (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <main className="pb-16 xl:pb-0">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/web-design" element={<WebDesign />} />
            <Route path="/modelli-3d" element={<Modelli3D />} />
            <Route path="/grafiche-2d" element={<Grafiche2D />} />
            <Route path="/game-design" element={<GameDesign />} />
            <Route path="/narrative-design" element={<NarrativeDesign />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:id" element={<ArticleDetail />} />
            <Route path="/contatti" element={<Contatti />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profilo" element={<Profilo />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/impostazioni" element={<Impostazioni />} />
            <Route path="/:section/:id" element={<ProductDetail />} />
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
