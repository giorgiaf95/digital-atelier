import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border bg-card/50 mt-20">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <span className="font-display text-xl font-bold gradient-text">STUDIO</span>
          <p className="text-muted-foreground text-sm mt-3">
            Creatività digitale senza limiti. Web, 3D, 2D, Game & Narrative Design.
          </p>
        </div>
        <div>
          <h4 className="font-display font-semibold text-foreground mb-3">Servizi</h4>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <Link to="/web-design" className="hover:text-primary transition-colors">Web Design</Link>
            <Link to="/modelli-3d" className="hover:text-primary transition-colors">Modelli 3D</Link>
            <Link to="/grafiche-2d" className="hover:text-primary transition-colors">Grafiche 2D</Link>
            <Link to="/game-design" className="hover:text-primary transition-colors">Game Design</Link>
            <Link to="/narrative-design" className="hover:text-primary transition-colors">Narrative Design</Link>
          </div>
        </div>
        <div>
          <h4 className="font-display font-semibold text-foreground mb-3">Contatti</h4>
          <p className="text-muted-foreground text-sm">info@studio.com</p>
          <Link to="/contatti" className="text-primary text-sm hover:underline mt-2 inline-block">
            Scrivici →
          </Link>
        </div>
      </div>
      <div className="border-t border-border mt-8 pt-6 text-center text-muted-foreground text-xs">
        © 2026 Studio. Tutti i diritti riservati.
      </div>
    </div>
  </footer>
);

export default Footer;
