import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ServicePageLayoutProps {
  title: string;
  subtitle: string;
  heroImage: string;
  children: ReactNode;
}

const ServicePageLayout = ({ title, subtitle, heroImage, children }: ServicePageLayoutProps) => {
  return (
    <div className="pt-16">
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img src={heroImage} alt={title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-end pb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-6xl font-bold text-foreground text-glow"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-muted-foreground text-lg mt-3 max-w-2xl"
          >
            {subtitle}
          </motion.p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">{children}</div>
    </div>
  );
};

export default ServicePageLayout;
