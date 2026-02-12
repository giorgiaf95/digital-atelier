import ServicePageLayout from "@/components/ServicePageLayout";
import GalleryGrid from "@/components/GalleryGrid";
import service2d from "@/assets/service-2d.jpg";
import { graphics2dItems } from "@/data/galleryData";

const Grafiche2D = () => (
  <ServicePageLayout
    title="Grafiche 2D"
    subtitle="Illustrazioni digitali, brand identity, character design e concept art per ogni esigenza creativa."
    heroImage={service2d}
  >
    <h2 className="font-display text-2xl font-bold text-foreground mb-8">Portfolio</h2>
    <GalleryGrid items={graphics2dItems} />
  </ServicePageLayout>
);

export default Grafiche2D;
