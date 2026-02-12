import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Index from "./pages/Index";
import WebDesign from "./pages/WebDesign";
import Modelli3D from "./pages/Modelli3D";
import Grafiche2D from "./pages/Grafiche2D";
import GameDesign from "./pages/GameDesign";
import NarrativeDesign from "./pages/NarrativeDesign";
import News from "./pages/News";
import Contatti from "./pages/Contatti";
import ProductDetail from "./pages/ProductDetail";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/web-design" element={<WebDesign />} />
            <Route path="/modelli-3d" element={<Modelli3D />} />
            <Route path="/grafiche-2d" element={<Grafiche2D />} />
            <Route path="/game-design" element={<GameDesign />} />
            <Route path="/narrative-design" element={<NarrativeDesign />} />
            <Route path="/news" element={<News />} />
            <Route path="/contatti" element={<Contatti />} />
            <Route path="/:section/:id" element={<ProductDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
