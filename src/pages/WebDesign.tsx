import ServicePageLayout from "@/components/ServicePageLayout";
import GalleryGrid from "@/components/GalleryGrid";
import serviceWebdesign from "@/assets/service-webdesign.jpg";
import { webDesignItems } from "@/data/galleryData";

const WebDesign = () => (
  <ServicePageLayout
    title="Web Design"
    subtitle="Siti web moderni, responsive e ad alte prestazioni. Dalla landing page al portale enterprise."
    heroImage={serviceWebdesign}
  >
    <h2 className="font-display text-2xl font-bold text-foreground mb-8">Portfolio</h2>
    <GalleryGrid items={webDesignItems} basePath="/web-design" />
  </ServicePageLayout>
);

export default WebDesign;
