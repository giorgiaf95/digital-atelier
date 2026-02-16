import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search, User, Heart, Settings, LogIn } from "lucide-react";
import { FEATURES } from "@/config/features";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Web Design", path: "/web-design" },
  { label: "Modelli 3D", path: "/modelli-3d" },
  { label: "Grafiche 2D", path: "/grafiche-2d" },
  { label: "Game Design", path: "/game-design" },
  { label: "Narrative Design", path: "/narrative-design" },
  { label: "News", path: "/news" },
  { label: "Contatti", path: "/contatti" },
];

// 🔒 User menu items - filtrati in base alle features attive
const getUserMenuItems = () => {
  const items = [];
  
  if (FEATURES.USER_AUTHENTICATION) {
    items.push({ label: "Accedi / Registrati", icon: LogIn, path: "/login" });
  }
  if (FEATURES.USER_PROFILES) {
    items.push({ label: "Area Personale", icon: User, path: "/profilo" });
  }
  if (FEATURES.WISHLIST) {
    items.push({ label: "Wishlist", icon: Heart, path: "/wishlist" });
  }
  if (FEATURES.USER_SETTINGS) {
    items.push({ label: "Impostazioni", icon: Settings, path: "/impostazioni" });
  }
  
  return items;
};

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchRef = useRef<HTMLInputElement>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);

  const userMenuItems = getUserMenuItems();
  const hasUserMenu = userMenuItems.length > 0;

  useEffect(() => {
    if (searchOpen && searchRef.current) searchRef.current.focus();
  }, [searchOpen]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(e.target as Node)) {
        setUserMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
      setSearchOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="font-display text-xl font-bold gradient-text">
            DIGITAL ATELIER
          </Link>

          {/* Desktop nav */}
          <div className="hidden xl:flex items-center gap-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right side: search + user (condizionale) */}
          <div className="flex items-center gap-2">
            {/* Search toggle */}
            {FEATURES.SEARCH && (
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 rounded-md text-muted-foreground hover:text-foreground transition-colors"
              >
                <Search size={20} />
              </button>
            )}

            {/* User menu - mostrato solo se ci sono features utente attive */}
            {hasUserMenu && (
              <div className="relative hidden xl:block" ref={userMenuRef}>
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="p-2 rounded-md text-muted-foreground hover:text-foreground transition-colors"
                >
                  <User size={20} />
                </button>
                <AnimatePresence>
                  {userMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.95 }}
                      className="absolute right-0 mt-2 w-56 bg-card border border-border rounded-lg shadow-lg overflow-hidden"
                    >
                      {userMenuItems.map((item) => {
                        const Icon = item.icon;
                        return (
                          <Link
                            key={item.path}
                            to={item.path}
                            onClick={() => setUserMenuOpen(false)}
                            className="flex items-center gap-3 px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                          >
                            <Icon size={16} />
                            {item.label}
                          </Link>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="xl:hidden p-2 rounded-md text-muted-foreground hover:text-foreground"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Search bar */}
        <AnimatePresence>
          {searchOpen && FEATURES.SEARCH && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <form onSubmit={handleSearch} className="py-3">
                <input
                  ref={searchRef}
                  type="text"
                  placeholder="Cerca progetti, servizi..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 bg-secondary text-foreground placeholder:text-muted-foreground rounded-lg border border-border focus:border-primary focus:outline-none"
                />
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden border-t border-border overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname === item.path
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* User menu items in mobile */}
              {hasUserMenu && (
                <>
                  <div className="h-px bg-border my-2" />
                  {userMenuItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-3 px-4 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                      >
                        <Icon size={16} />
                        {item.label}
                      </Link>
                    );
                  })}
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;