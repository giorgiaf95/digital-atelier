import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GalleryGrid from "@/components/GalleryGrid";
import MobileBottomBar from "@/components/MobileBottomBar";
import { client } from "@/lib/sanity";
import type { GalleryItem } from "@/data/galleryData";

const WebDesign = () => {
  const [projects, setProjects] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const query = `*[_type == "project" && category == "web-design"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      category,
      "image": mainImage.asset->url,
      description,
      tags,
      publishedAt
    }`;

    client
      .fetch(query)
      .then((data) => {
        const mappedData: GalleryItem[] = data.map((item: any) => ({
          id: item._id,
          title: item.title,
          image: item.image || "/placeholder.jpg",
          category: "Web Design",
          tags: item.tags || [],
          description: item.description || "",
          detailLink: `/product/${item.slug?.current || item._id}`,
        }));
        setProjects(mappedData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Errore caricamento progetti:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8 pt-24">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Web Design</h1>
          <p className="text-muted-foreground text-lg">
            Esplora i miei progetti di design web, dalle landing page ai siti completi.
          </p>
        </div>

        {loading ? (
          <div className="text-center py-20">
            <p className="text-muted-foreground">Caricamento progetti...</p>
          </div>
        ) : projects.length > 0 ? (
          <GalleryGrid items={projects} />
        ) : (
          <div className="text-center py-20">
            <p className="text-muted-foreground">Nessun progetto trovato.</p>
          </div>
        )}
      </main>

      <Footer />
      <MobileBottomBar />
    </div>
  );
};

export default WebDesign;