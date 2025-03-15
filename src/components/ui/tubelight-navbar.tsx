
"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Link, useLocation } from "react-router-dom"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { useIsMobile } from "@/hooks/use-mobile"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  const location = useLocation()
  const [activeTab, setActiveTab] = useState("")
  const isMobile = useIsMobile()
  
  useEffect(() => {
    // Set active tab based on current route
    const currentPath = location.pathname
    const activeItem = items.find(item => 
      item.url === currentPath || 
      (currentPath === "/" && item.name === "Home")
    )
    
    if (activeItem) {
      setActiveTab(activeItem.name)
    }
  }, [location, items])

  return (
    <div
      className={cn(
        "fixed z-50 left-1/2 -translate-x-1/2 transition-all duration-300",
        isMobile 
          ? "top-0 w-full mb-0" 
          : "bottom-auto top-6 w-auto",
        className,
      )}
    >
      <motion.div 
        initial={{ opacity: 0, y: isMobile ? -20 : -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.5, 
          ease: [0.22, 1, 0.36, 1],
          delay: 0.2 
        }}
        className={cn(
          "flex items-center justify-center gap-1 md:gap-3 bg-background/80 backdrop-blur-lg py-1 px-1 rounded-full shadow-lg border border-border",
          isMobile ? "mx-auto w-[95%] my-2 rounded-xl" : "w-auto"
        )}
      >
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          return (
            <Link
              key={item.name}
              to={item.url}
              onClick={() => setActiveTab(item.name)}
              className={cn(
                "relative cursor-pointer text-sm font-semibold transition-all duration-300 ease-in-out flex items-center justify-center",
                isMobile 
                  ? "flex-1 px-3 py-2 rounded-full" 
                  : "px-5 py-2 rounded-full",
                "text-foreground/80 hover:text-primary",
                isActive && "bg-muted text-primary",
              )}
            >
              <motion.span 
                className="hidden md:inline"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {item.name}
              </motion.span>
              <motion.span 
                className={cn(
                  "flex items-center justify-center",
                  isMobile ? "text-center" : "md:hidden"
                )}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Icon size={isMobile ? 20 : 18} strokeWidth={2.3} />
              </motion.span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                  }}
                >
                  <div className={cn(
                    "absolute left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-full",
                    isMobile ? "top-auto bottom-0 opacity-70" : "-top-2"
                  )}>
                    <motion.div 
                      className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2"
                      animate={{ 
                        opacity: [0.3, 0.6, 0.3], 
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </div>
                </motion.div>
              )}
            </Link>
          )
        })}
      </motion.div>
    </div>
  )
}
