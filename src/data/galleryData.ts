import serviceWebdesign from "@/assets/service-webdesign.jpg";
import service3d from "@/assets/service-3d.jpg";
import service2d from "@/assets/service-2d.jpg";
import serviceGamedesign from "@/assets/service-gamedesign.jpg";
import serviceNarrative from "@/assets/service-narrative.jpg";

export interface GalleryItem {
  id: string;
  title: string;
  image: string;
  description: string;
  category: string;
  tags: string[];
}

export const webDesignItems: GalleryItem[] = [
  { id: "wd1", title: "E-Commerce Moderna", image: serviceWebdesign, description: "Design responsive per piattaforma e-commerce con focus su UX.", category: "E-Commerce", tags: ["responsive", "ux", "shop"] },
  { id: "wd2", title: "Landing Page Startup", image: serviceWebdesign, description: "Pagina di atterraggio ad alta conversione per startup tech.", category: "Landing Page", tags: ["startup", "conversione", "tech"] },
  { id: "wd3", title: "Portfolio Creativo", image: serviceWebdesign, description: "Portfolio artistico con animazioni interattive.", category: "Portfolio", tags: ["arte", "animazioni", "creativo"] },
  { id: "wd4", title: "Dashboard SaaS", image: serviceWebdesign, description: "Interfaccia dashboard per piattaforma SaaS enterprise.", category: "Dashboard", tags: ["saas", "enterprise", "dati"] },
  { id: "wd5", title: "Blog Editoriale", image: serviceWebdesign, description: "Design editoriale per magazine online.", category: "Blog", tags: ["editoriale", "magazine", "contenuti"] },
  { id: "wd6", title: "App Mobile UI", image: serviceWebdesign, description: "Design dell'interfaccia per applicazione mobile.", category: "Mobile", tags: ["mobile", "app", "ui"] },
];

export const models3dItems: GalleryItem[] = [
  { id: "3d1", title: "Ambiente Sci-Fi", image: service3d, description: "Ambiente 3D futuristico per videogioco sci-fi.", category: "Ambienti", tags: ["sci-fi", "gioco", "ambiente"] },
  { id: "3d2", title: "Personaggio Fantasy", image: service3d, description: "Modello 3D di personaggio per gioco di ruolo.", category: "Personaggi", tags: ["fantasy", "rpg", "character"] },
  { id: "3d3", title: "Veicolo Concept", image: service3d, description: "Modello 3D di veicolo futuristico concept.", category: "Veicoli", tags: ["veicolo", "concept", "futuristico"] },
  { id: "3d4", title: "Architettura Virtuale", image: service3d, description: "Visualizzazione architettonica in 3D.", category: "Architettura", tags: ["architettura", "visualizzazione", "rendering"] },
  { id: "3d5", title: "Props di Gioco", image: service3d, description: "Set di oggetti 3D per game development.", category: "Props", tags: ["props", "gamedev", "oggetti"] },
  { id: "3d6", title: "Scultura Digitale", image: service3d, description: "Scultura digitale ad alto dettaglio.", category: "Scultura", tags: ["scultura", "dettaglio", "arte"] },
];

export const graphics2dItems: GalleryItem[] = [
  { id: "2d1", title: "Illustrazione Fantasy", image: service2d, description: "Illustrazione digitale in stile fantasy.", category: "Illustrazione", tags: ["fantasy", "digitale", "arte"] },
  { id: "2d2", title: "Brand Identity", image: service2d, description: "Design completo di identità visiva.", category: "Branding", tags: ["brand", "logo", "identità"] },
  { id: "2d3", title: "Character Design", image: service2d, description: "Design di personaggi per animazione.", category: "Character Design", tags: ["personaggi", "animazione", "design"] },
  { id: "2d4", title: "Poster Cinematografico", image: service2d, description: "Poster promozionale stile cinema.", category: "Poster", tags: ["cinema", "poster", "promozionale"] },
  { id: "2d5", title: "Icon Set", image: service2d, description: "Set di icone personalizzate per UI.", category: "UI Design", tags: ["icone", "ui", "set"] },
  { id: "2d6", title: "Concept Art", image: service2d, description: "Concept art per produzione creativa.", category: "Concept Art", tags: ["concept", "arte", "produzione"] },
];

export const gameDesignItems: GalleryItem[] = [
  { id: "gd1", title: "RPG Open World", image: serviceGamedesign, description: "Design di un gioco RPG open world con sistema di quest.", category: "RPG", tags: ["rpg", "open-world", "quest"] },
  { id: "gd2", title: "Puzzle Platformer", image: serviceGamedesign, description: "Meccaniche di gioco per puzzle platformer.", category: "Puzzle", tags: ["puzzle", "platformer", "meccaniche"] },
  { id: "gd3", title: "Strategy Game", image: serviceGamedesign, description: "Sistema di gioco per strategico a turni.", category: "Strategia", tags: ["strategia", "turni", "sistema"] },
  { id: "gd4", title: "Mobile Casual", image: serviceGamedesign, description: "Game design per gioco casual mobile.", category: "Mobile", tags: ["mobile", "casual", "casual-game"] },
  { id: "gd5", title: "Multiplayer Arena", image: serviceGamedesign, description: "Design arena multiplayer competitiva.", category: "Multiplayer", tags: ["multiplayer", "arena", "competitivo"] },
  { id: "gd6", title: "VR Experience", image: serviceGamedesign, description: "Esperienza interattiva in realtà virtuale.", category: "VR", tags: ["vr", "realtà-virtuale", "interattivo"] },
];

export const narrativeDesignItems: GalleryItem[] = [
  { id: "nd1", title: "Saga Epica", image: serviceNarrative, description: "Narrativa ramificata per RPG epico.", category: "RPG Narrativo", tags: ["saga", "rpg", "ramificata"] },
  { id: "nd2", title: "Horror Interattivo", image: serviceNarrative, description: "Script narrativo per horror psicologico.", category: "Horror", tags: ["horror", "psicologico", "script"] },
  { id: "nd3", title: "Visual Novel", image: serviceNarrative, description: "Design narrativo per visual novel romantica.", category: "Visual Novel", tags: ["visual-novel", "romantica", "narrativa"] },
  { id: "nd4", title: "Worldbuilding Sci-Fi", image: serviceNarrative, description: "Costruzione di un universo sci-fi coerente.", category: "Worldbuilding", tags: ["worldbuilding", "sci-fi", "universo"] },
  { id: "nd5", title: "Dialoghi GDR", image: serviceNarrative, description: "Sistema di dialoghi per gioco di ruolo.", category: "Dialoghi", tags: ["dialoghi", "gdr", "sistema"] },
  { id: "nd6", title: "Lore & Mythology", image: serviceNarrative, description: "Creazione di mitologia e lore per franchise.", category: "Lore", tags: ["lore", "mitologia", "franchise"] },
];

export const newsArticles = [
  { id: "n1", title: "Il Futuro del Web Design nel 2026", excerpt: "Esploriamo le tendenze emergenti nel design web: AI-driven layouts, micro-interazioni e design generativo.", category: "Web Design", date: "2026-02-10", image: serviceWebdesign, tags: ["tendenze", "ai", "web"] },
  { id: "n2", title: "Come Creare Personaggi 3D Memorabili", excerpt: "Guida pratica alla creazione di personaggi 3D con personalità e storia.", category: "Modelli 3D", date: "2026-02-05", image: service3d, tags: ["3d", "personaggi", "guida"] },
  { id: "n3", title: "Brand Identity: Da Zero a Iconico", excerpt: "Il processo completo per costruire un'identità visiva che lascia il segno.", category: "Grafiche 2D", date: "2026-01-28", image: service2d, tags: ["brand", "identità", "processo"] },
  { id: "n4", title: "Game Design Document: La Bibbia del Tuo Gioco", excerpt: "Come strutturare un GDD completo che guida lo sviluppo dall'inizio alla fine.", category: "Game Design", date: "2026-01-20", image: serviceGamedesign, tags: ["gdd", "sviluppo", "guida"] },
  { id: "n5", title: "Storytelling Interattivo: Oltre il Lineare", excerpt: "Tecniche avanzate per creare narrazioni ramificate che coinvolgono il giocatore.", category: "Narrative Design", date: "2026-01-15", image: serviceNarrative, tags: ["storytelling", "ramificato", "giocatore"] },
  { id: "n6", title: "L'Arte del Level Design", excerpt: "Principi fondamentali per progettare livelli che raccontano storie senza parole.", category: "Game Design", date: "2026-01-10", image: serviceGamedesign, tags: ["level-design", "principi", "gioco"] },
];
