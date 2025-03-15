
import React from "react";
import { Home, Grid, Users, Mail } from "lucide-react";
import { NavBar } from "@/components/ui/tubelight-navbar";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

interface LayoutProps {
  children: React.ReactNode;
  activePage?: string;
}

const navItems = [
  { name: "Home", url: "/", icon: Home },
  { name: "Mods", url: "/mods", icon: Grid },
  { name: "About", url: "/about", icon: Users },
  { name: "Contact", url: "/contact", icon: Mail },
];

export const Layout = ({ children, activePage = "Home" }: LayoutProps) => {
  const isMobile = useIsMobile();
  
  const pageVariants = {
    initial: {
      opacity: 0,
      y: 8,
    },
    in: {
      opacity: 1,
      y: 0,
    },
    out: {
      opacity: 0,
      y: -8,
    },
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.4,
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col scrollbar-none overflow-hidden">
      <NavBar items={navItems} />
      
      <motion.main
        className={`flex-1 ${isMobile ? "pt-16" : "pt-16"} pb-28 md:pt-20 md:pb-24 px-4 md:px-6 scrollbar-none overflow-y-auto`}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        {children}
      </motion.main>
      
      <footer className="py-4 md:py-6 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-xs md:text-sm text-muted-foreground">© 2023 ModdingHaven. All rights reserved.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-xs md:text-sm">Privacy Policy</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-xs md:text-sm">Terms of Service</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-xs md:text-sm">FAQ</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
