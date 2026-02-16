import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Layers, Newspaper, Heart, User } from "lucide-react";
import { FEATURES } from "@/config/features";

const serviceLinks = [
  { label: "Web Design", path: "/web-design" },
  { label: "Modelli 3D", path: "/modelli-3d" },
  { label: "Grafiche 2D", path: "/grafiche-2d" },
  { label: "Game Design", path: "/game-design" },
  { label: "Narrative Design", path: "/narrative-design" },
];

const MobileBottomBar = () => {
  const location = useLocation();
  const [servicesOpen, setServicesOpen] = useState(false);

  // 🔒 Bottom bar items - filtrati in base alle features
  const getBottomBarItems = () => {
    const items = [
      { label: "Home", icon: Home, path: "/", action: undefined as (() => void) | undefined },
      { label: "Servizi", icon: Layers, path: "", action: () => setServicesOpen((o) => !o) },
      { label: "News", icon: Newspaper, path: "/news", action: undefined as (() => void) | undefined },
    ];
    
    if (FEATURES.WISHLIST) {
      items.push({ label: "Wishlist", icon: Heart, path: "/wishlist", action: undefined as (() => void) | undefined });
    }
    
    if (FEATURES.USER_PROFILES || FEATURES.USER_AUTHENTICATION) {
      items.push({ label: "Profilo", icon: User, path: FEATURES.USER_PROFILES ? "/profilo" : "/login", action: undefined as (() => void) | undefined });
    }
    
    return items;
  };

  const bottomBarItems = getBottomBarItems();

  return (
    <>
      {/* Services overlay */}
      <AnimatePresence>
        {servicesOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm xl:hidden"
            onClick={() => setServicesOpen(false)}
          >
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25 }}
              className="absolute bottom-16 left-0 right-0 bg-card border-t border-border p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="font-display font-semibold text-foreground mb-3">Servizi</h3>
              <div className="grid grid-cols-2 gap-2">
                {serviceLinks.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    onClick={() => setServicesOpen(false)}
                    className="px-4 py-3 bg-secondary text-foreground text-sm rounded-lg hover:bg-secondary/80 transition-colors text-center"
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border xl:hidden">
        <div className="flex items-center justify-around h-16">
          {bottomBarItems.map((item) => {
            const Icon = item.icon;
            const isActive = item.path && location.pathname === item.path;
            
            if (item.action) {
              return (
                <button
                  key={item.label}
                  onClick={item.action}
                  className="flex flex-col items-center gap-1 px-3 py-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Icon size={20} />
                  <span className="text-xs">{item.label}</span>
                </button>
              );
            }

            return (
              <Link
                key={item.label}
                to={item.path}
                className={`flex flex-col items-center gap-1 px-3 py-2 transition-colors ${
                  isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Icon size={20} />
                <span className="text-xs">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MobileBottomBar;