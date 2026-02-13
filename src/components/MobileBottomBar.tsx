import { Link, useLocation } from "react-router-dom";
import { Home, Layers, Newspaper, Heart, User } from "lucide-react";

const items = [
  { label: "Home", icon: Home, path: "/" },
  { label: "Servizi", icon: Layers, path: "/web-design" },
  { label: "News", icon: Newspaper, path: "/news" },
  { label: "Wishlist", icon: Heart, path: "/wishlist" },
  { label: "Profilo", icon: User, path: "/profilo" },
];

const MobileBottomBar = () => {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-xl border-t border-border xl:hidden">
      <div className="flex items-center justify-around h-16 px-2">
        {items.map((item) => {
          const active = location.pathname === item.path || 
            (item.path === "/web-design" && ["/web-design", "/modelli-3d", "/grafiche-2d", "/game-design", "/narrative-design"].includes(location.pathname));
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
  );
};

export default MobileBottomBar;
