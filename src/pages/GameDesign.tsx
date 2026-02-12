import ServicePageLayout from "@/components/ServicePageLayout";
import GalleryGrid from "@/components/GalleryGrid";
import serviceGamedesign from "@/assets/service-gamedesign.jpg";
import { gameDesignItems } from "@/data/galleryData";

const GameDesign = () => (
  <ServicePageLayout
    title="Game Design"
    subtitle="Meccaniche di gioco, level design, bilanciamento e game systems per esperienze coinvolgenti."
    heroImage={serviceGamedesign}
  >
    <h2 className="font-display text-2xl font-bold text-foreground mb-8">Portfolio</h2>
    <GalleryGrid items={gameDesignItems} basePath="/game-design" />
  </ServicePageLayout>
);

export default GameDesign;
