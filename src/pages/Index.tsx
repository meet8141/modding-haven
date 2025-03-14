
import React from "react";
import { Layout } from "@/components/layout";
import { Hero } from "@/components/ui/hero";
import { ModCard } from "@/components/mod-card";
import { motion } from "framer-motion";
import { ChevronRight, Zap, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const featuredMods = [
  {
    title: "Enhanced Graphics Overhaul",
    description: "A comprehensive graphics mod that transforms the game's visuals with realistic lighting, textures, and weather effects.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    author: "PixelPerfect",
    downloads: 52438,
    rating: 4.8,
    categories: ["Graphics", "Environment"],
    isFeatured: true
  },
  {
    title: "Ultimate Weapon Pack",
    description: "Introduces over 100 new weapons with custom sounds, animations, and fully balanced gameplay integration.",
    image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    author: "ArsenalCreator",
    downloads: 34129,
    rating: 4.7,
    categories: ["Weapons", "Combat"],
    isFeatured: true
  },
  {
    title: "New Frontier Expansion",
    description: "Adds a massive new region with unique quests, NPCs, and storylines to explore.",
    image: "https://images.unsplash.com/photo-1536825211030-094de935f680?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    author: "QuestMaster",
    downloads: 28753,
    rating: 4.9,
    categories: ["Expansion", "Quests"],
    isFeatured: true
  }
];

const featureList = [
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Easy Installation",
    description: "One-click mod installation with automatic conflict resolution and compatibility checks."
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Secure Downloads",
    description: "All mods are scanned and verified for safety before being made available."
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Active Community",
    description: "Join thousands of modders sharing creations, tips, and tutorials."
  }
];

const Index = () => {
  return (
    <Layout activePage="Home">
      <Hero
        title="ModdingHaven"
        subtitle="Your ultimate destination for game modifications, tools, and resources"
        actions={[
          {
            label: "Browse Mods",
            href: "/mods",
            variant: "default"
          },
          {
            label: "Join Community",
            href: "/about",
            variant: "outline"
          }
        ]}
        titleClassName="font-display text-5xl md:text-6xl font-extrabold tracking-tight"
        subtitleClassName="text-lg md:text-xl max-w-[800px] mx-auto"
        actionsClassName="mt-8"
      />

      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col items-center text-center mb-12">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4 font-display"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Featured Mods
            </motion.h2>
            <motion.p 
              className="text-muted-foreground max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Discover the most popular and highest-rated modifications from our talented community
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredMods.map((mod, index) => (
              <ModCard key={index} {...mod} />
            ))}
          </div>

          <div className="flex justify-center mt-10">
            <Button asChild variant="outline" size="lg">
              <Link to="/mods" className="flex items-center">
                View All Mods <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/10">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col items-center text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4 font-display"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Why Choose ModdingHaven
            </motion.h2>
            <motion.p 
              className="text-muted-foreground max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              We're more than just a mod repository - we're a community of passionate gamers and creators
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featureList.map((feature, index) => (
              <motion.div 
                key={index}
                className="flex flex-col items-center text-center p-6 rounded-lg glass-morphism"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <motion.div 
              className="flex-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">Join Our Thriving Modding Community</h2>
              <p className="text-muted-foreground mb-6">
                Connect with fellow modders, get help with your projects, share your creations, and stay up-to-date with the latest modding techniques and tools.
              </p>
              <Button asChild>
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </motion.div>
            <motion.div 
              className="flex-1 glass-morphism rounded-lg overflow-hidden"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Community" 
                className="w-full h-full object-cover aspect-video" 
              />
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
