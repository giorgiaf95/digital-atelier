import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Tag, Share2 } from "lucide-react";
import { newsArticles } from "@/data/galleryData";

const ArticleDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const article = newsArticles.find((a) => a.id === id);

  if (!article) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-2xl font-bold text-foreground">Articolo non trovato</h1>
          <button onClick={() => navigate("/news")} className="mt-4 text-primary hover:underline">Torna alle News</button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero image */}
      <div className="relative h-[40vh] min-h-[300px] overflow-hidden">
        <img src={article.image} alt={article.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
      </div>

      <div className="container mx-auto px-4 -mt-20 relative z-10 max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <button
            onClick={() => navigate("/news")}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft size={18} /> Torna alle News
          </button>

          <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full mb-4">
            {article.category}
          </span>

          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight">
            {article.title}
          </h1>

          <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1"><Calendar size={14} /> {new Date(article.date).toLocaleDateString("it-IT", { day: "numeric", month: "long", year: "numeric" })}</span>
            <button className="flex items-center gap-1 hover:text-foreground transition-colors"><Share2 size={14} /> Condividi</button>
          </div>

          <div className="mt-8 bg-card rounded-2xl p-8 card-glow">
            <p className="text-foreground text-lg leading-relaxed mb-6">{article.excerpt}</p>
            
            {/* Placeholder article content */}
            <div className="prose prose-invert max-w-none space-y-4 text-muted-foreground leading-relaxed">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <h2 className="font-display text-xl font-semibold text-foreground !mt-8 !mb-4">Approfondimento</h2>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            </div>

            <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-border">
              {article.tags.map((tag) => (
                <span key={tag} className="flex items-center gap-1 px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs">
                  <Tag size={10} /> {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Related articles */}
          <div className="mt-12 mb-12">
            <h3 className="font-display text-xl font-semibold text-foreground mb-6">Articoli Correlati</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {newsArticles.filter((a) => a.id !== article.id).slice(0, 2).map((a) => (
                <Link key={a.id} to={`/news/${a.id}`} className="bg-card rounded-lg overflow-hidden card-glow group flex">
                  <img src={a.image} alt={a.title} className="w-24 h-24 object-cover shrink-0" />
                  <div className="p-3 flex flex-col justify-center">
                    <span className="text-xs text-primary">{a.category}</span>
                    <h4 className="font-display text-sm font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2">{a.title}</h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ArticleDetail;
