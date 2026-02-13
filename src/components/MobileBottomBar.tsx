import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Home, Layers, Newspaper, Heart, User, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const serviceLinks = [
  { label: "Web Design", path: "/web-design" },
  { label: "Modelli 3D", path: "/modelli-3d" },
  { label: "Grafiche 2D", path: "/grafiche-2d" },
  { label: "Game Design", path: "/game-design" },
  { label: "Narrative Design", path: "/narrative-design" },
];

const servicePaths = serviceLinks.map((s) => s.path);

const MobileBottomBar = () => {
  const location = useLocation();
  const [servicesOpen, setServicesOpen] = useState(false);

  const isServiceActive = servicePaths.includes(location.pathname);

  const items = [
    { label: "Home", icon: Home, path: "/", action: undefined as (() => void) | undefined },
    { label: "Servizi", icon: Layers, path: "", action: () => setServicesOpen((o) => !o) },
    { label: "News", icon: Newspaper, path: "/news", action: undefined as (() => void) | undefined },
    { label: "Wishlist", icon: Heart, path: "/wishlist", action: undefined as (() => void) | undefined },
    { label: "Profilo", icon: User, path: "/profilo", action: undefined as (() => void) | undefined },
  ];

  return (
    <>
      {/* Services overlay */}
      <AnimatePresence>
        {servicesOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden"
            onClick={() => setServicesOpen(false)}
          >
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              className="absolute bottom-20 left-4 right-4 bg-card border border-border rounded-xl overflow-hidden shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-4 py-3 border-b border-border">
                <span className="font-display font-semibold text-foreground text-sm">Servizi</span>
                <button onClick={() => setServicesOpen(false)} className="text-muted-foreground hover:text-foreground">
                  <X size={18} />
                </button>
              </div>
              {serviceLinks.map((s) => (
                <Link
                  key={s.path}
                  to={s.path}
                  onClick={() => setServicesOpen(false)}
                  className={`block px-4 py-3 text-sm transition-colors ${
                    location.pathname === s.path
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  {s.label}
                </Link>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom bar – only on small screens */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-xl border-t border-border md:hidden">
        <div className="flex items-center justify-around h-16 px-2">
          {items.map((item) => {
            const active =
              item.label === "Servizi"
                ? isServiceActive || servicesOpen
                : location.pathname === item.path;

            if (item.action) {
              return (
                <button
                  key={item.label}
                  onClick={item.action}
                  className={`flex flex-col items-center gap-0.5 px-3 py-1 rounded-lg transition-colors ${
                    active ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  <item.icon size={20} />
                  <span className="text-[10px] font-medium">{item.label}</span>
                </button>
              );
            }

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center gap-0.5 px-3 py-1 rounded-lg transition-colors ${
                  active ? "text-primary" : "text-muted-foreground"
                }`}
              >
                <item.icon size={20} />
                <span className="text-[10px] font-medium">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default MobileBottomBar;
