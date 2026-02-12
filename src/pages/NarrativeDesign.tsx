import ServicePageLayout from "@/components/ServicePageLayout";
import GalleryGrid from "@/components/GalleryGrid";
import serviceNarrative from "@/assets/service-narrative.jpg";
import { narrativeDesignItems } from "@/data/galleryData";

const NarrativeDesign = () => (
  <ServicePageLayout
    title="Narrative Design"
    subtitle="Worldbuilding, dialoghi ramificati, lore e storytelling interattivo per giochi e media."
    heroImage={serviceNarrative}
  >
    <h2 className="font-display text-2xl font-bold text-foreground mb-8">Portfolio</h2>
    <GalleryGrid items={narrativeDesignItems} basePath="/narrative-design" />
  </ServicePageLayout>
);

export default NarrativeDesign;
