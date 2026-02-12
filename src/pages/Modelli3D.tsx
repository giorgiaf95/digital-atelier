import ServicePageLayout from "@/components/ServicePageLayout";
import GalleryGrid from "@/components/GalleryGrid";
import service3d from "@/assets/service-3d.jpg";
import { models3dItems } from "@/data/galleryData";

const Modelli3D = () => (
  <ServicePageLayout
    title="Modelli 3D"
    subtitle="Modellazione 3D per giochi, architettura, visualizzazione e stampa. Dalla bassa alla alta poligonazione."
    heroImage={service3d}
  >
    <h2 className="font-display text-2xl font-bold text-foreground mb-8">Portfolio</h2>
    <GalleryGrid items={models3dItems} />
  </ServicePageLayout>
);

export default Modelli3D;
