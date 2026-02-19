import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GalleryGrid from "@/components/GalleryGrid";
import MobileBottomBar from "@/components/MobileBottomBar";
import { getClient } from "@/lib/sanity";
import type { GalleryItem } from "@/data/galleryData";

const Modelli3D = () => {
  const [projects, setProjects] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();
  
  // 🔥 Abilita preview se c'è ?preview=true nell'URL
  const isPreview = searchParams.get('preview') === 'true';

  useEffect(() => {
    const client = getClient(isPreview);
    
    const query = `*[_type == "project" && category == "modelli-3d"] | order(_updatedAt desc) {
      _id,
      title,
      slug,
      category,
      "image": mainImage.asset->url,
      description,
      tags,
      _updatedAt
    }`;

    client
      .fetch(query)
      .then((data) => {
        const mappedData: GalleryItem[] = data.map((item: any) => ({
          id: item._id,
          title: item.title,
          image: item.image || "/placeholder.jpg",
          category: "Modelli 3D",
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
  }, [isPreview]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      {/* 🔍 Banner modalità preview */}
      {isPreview && (
        <div className="bg-yellow-500 text-black text-center py-2 text-sm font-semibold">
          🔍 MODALITÀ ANTEPRIMA - Stai vedendo anche le bozze non pubblicate
        </div>
      )}
      
      <main className="flex-grow container mx-auto px-4 py-8 pt-24">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Modelli 3D</h1>
          <p className="text-muted-foreground text-lg">
            Esplora la mia collezione di modelli 3D per giochi, animazioni e visualizzazioni.
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

export default Modelli3D;