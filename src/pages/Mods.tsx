
import React, { useState } from "react";
import { Layout } from "@/components/layout";
import { ModCard } from "@/components/mod-card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Search, Filter, X } from "lucide-react";
import { motion } from "framer-motion";

// Mock data for mods with download URLs
const mods = [
  {
    title: "Enhanced Graphics Overhaul",
    description: "A comprehensive graphics mod that transforms the game's visuals with realistic lighting, textures, and weather effects.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    author: "PixelPerfect",
    downloads: 52438,
    rating: 4.8,
    categories: ["Graphics", "Environment"],
    downloadUrl: "https://example.com/downloads/enhanced-graphics-overhaul.zip",
  },
  {
    title: "Ultimate Weapon Pack",
    description: "Introduces over 100 new weapons with custom sounds, animations, and fully balanced gameplay integration.",
    image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    author: "ArsenalCreator",
    downloads: 34129,
    rating: 4.7,
    categories: ["Weapons", "Combat"],
    downloadUrl: "https://example.com/downloads/ultimate-weapon-pack.zip",
  },
  {
    title: "New Frontier Expansion",
    description: "Adds a massive new region with unique quests, NPCs, and storylines to explore.",
    image: "https://images.unsplash.com/photo-1536825211030-094de935f680?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    author: "QuestMaster",
    downloads: 28753,
    rating: 4.9,
    categories: ["Expansion", "Quests"],
    downloadUrl: "https://example.com/downloads/new-frontier-expansion.zip",
  },
  {
    title: "Performance Optimizer",
    description: "Drastically improves game performance without sacrificing visual quality through engine tweaks and optimization.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    author: "FPSWizard",
    downloads: 76532,
    rating: 4.6,
    categories: ["Performance", "Utility"],
    downloadUrl: "https://example.com/downloads/performance-optimizer.zip",
  },
  {
    title: "Character Enhancement Suite",
    description: "Overhauls character creation with new options, traits, and backgrounds. Includes advanced face sculpting tools.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    author: "RPGMaster",
    downloads: 23451,
    rating: 4.5,
    categories: ["Characters", "Customization"],
    downloadUrl: "https://example.com/downloads/character-enhancement-suite.zip",
  },
  {
    title: "Weather Phenomena",
    description: "Introduces advanced weather systems with realistic storms, dynamic snow accumulation, and seasonal changes.",
    image: "https://images.unsplash.com/photo-1534088568595-a066f410bcda?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    author: "StormChaser",
    downloads: 18932,
    rating: 4.7,
    categories: ["Weather", "Environment"],
    downloadUrl: "https://example.com/downloads/weather-phenomena.zip",
  },
  {
    title: "Immersive Sound Overhaul",
    description: "Complete audio redesign with new ambient sounds, 3D positional audio, and enhanced music dynamics.",
    image: "https://images.unsplash.com/photo-1558504806-f2416b7de7a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    author: "AudioPhile",
    downloads: 31254,
    rating: 4.8,
    categories: ["Audio", "Immersion"],
    downloadUrl: "https://example.com/downloads/immersive-sound-overhaul.zip",
  },
  {
    title: "Advanced AI Behaviors",
    description: "Makes NPCs more realistic with complex schedules, relationships, and reactive behaviors to player actions.",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    author: "SentientAI",
    downloads: 15487,
    rating: 4.6,
    categories: ["AI", "NPCs"],
    downloadUrl: "https://example.com/downloads/advanced-ai-behaviors.zip",
  },
  {
    title: "New Gameplay Mechanics",
    description: "Adds survival elements, crafting expansions, and new skill trees that fundamentally enhance the core gameplay.",
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    author: "GameInnovator",
    downloads: 28753,
    rating: 4.5,
    categories: ["Gameplay", "Mechanics"],
    downloadUrl: "https://example.com/downloads/new-gameplay-mechanics.zip",
  },
];

// Extract all unique categories
const allCategories = Array.from(new Set(mods.flatMap(mod => mod.categories)));

const Mods = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("popular");
  const [minRating, setMinRating] = useState([0]);

  // Filter mods based on search, categories, and rating
  const filteredMods = mods.filter(mod => {
    const matchesSearch = mod.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          mod.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategories = selectedCategories.length === 0 || 
                              mod.categories.some(category => selectedCategories.includes(category));
    const matchesRating = mod.rating >= minRating[0];
    
    return matchesSearch && matchesCategories && matchesRating;
  });

  // Sort mods based on selection
  const sortedMods = [...filteredMods].sort((a, b) => {
    if (sortBy === "popular") return b.downloads - a.downloads;
    if (sortBy === "rating") return b.rating - a.rating;
    if (sortBy === "newest") return 0; // Mock data doesn't have dates
    return 0;
  });

  const toggleCategory = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategories([]);
    setMinRating([0]);
    setSortBy("popular");
  };

  return (
    <Layout activePage="Mods">
      <motion.div 
        className="container mx-auto px-4 py-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 font-display">Browse Mods</h1>
          <p className="text-muted-foreground">Discover and download amazing mods created by our community</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <div className="glass-morphism p-5 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Filters</h3>
                {(searchQuery || selectedCategories.length > 0 || minRating[0] > 0) && (
                  <Button variant="ghost" size="sm" onClick={clearFilters} className="h-8 px-2">
                    <X className="h-4 w-4 mr-1" /> Clear
                  </Button>
                )}
              </div>
              
              <div className="space-y-4">
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search mods..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-8"
                  />
                </div>
                
                <div>
                  <h4 className="text-sm font-medium mb-2">Categories</h4>
                  <div className="flex flex-wrap gap-2">
                    {allCategories.map(category => (
                      <Badge
                        key={category}
                        variant={selectedCategories.includes(category) ? "default" : "outline"}
                        className="cursor-pointer"
                        onClick={() => toggleCategory(category)}
                      >
                        {category}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium mb-2">Minimum Rating</h4>
                  <Slider
                    defaultValue={[0]}
                    max={5}
                    step={0.5}
                    value={minRating}
                    onValueChange={setMinRating}
                  />
                  <div className="text-right text-sm text-muted-foreground mt-1">
                    {minRating[0]} / 5
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mods grid */}
          <div className="lg:col-span-3">
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  {sortedMods.length} mods found
                </span>
              </div>
              
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <Tabs defaultValue="grid" className="mb-6">
              <TabsList className="grid w-[200px] grid-cols-2">
                <TabsTrigger value="grid">Grid</TabsTrigger>
                <TabsTrigger value="list">List</TabsTrigger>
              </TabsList>
              
              <TabsContent value="grid">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sortedMods.map((mod, index) => (
                    <ModCard key={index} {...mod} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="list">
                <div className="space-y-4">
                  {sortedMods.map((mod, index) => (
                    <motion.div 
                      key={index}
                      className="glass-morphism rounded-lg overflow-hidden"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <div className="flex flex-col sm:flex-row">
                        <div className="w-full sm:w-48 h-32">
                          <img 
                            src={mod.image} 
                            alt={mod.title} 
                            className="w-full h-full object-cover" 
                          />
                        </div>
                        <div className="p-4 flex-1 flex flex-col justify-between">
                          <div>
                            <div className="flex flex-wrap gap-2 mb-2">
                              {mod.categories.map(category => (
                                <Badge key={category} variant="secondary" className="text-xs">
                                  {category}
                                </Badge>
                              ))}
                            </div>
                            <h3 className="font-bold mb-1">{mod.title}</h3>
                            <p className="text-sm text-muted-foreground mb-2">{mod.description}</p>
                          </div>
                          <div className="flex justify-between items-center">
                            <div className="text-sm text-muted-foreground">
                              by {mod.author} • {mod.downloads.toLocaleString()} downloads
                            </div>
                            <Button 
                              variant="outline" 
                              size="sm"
                              asChild
                              onClick={(e) => {
                                if (mod.downloadUrl === "#") {
                                  e.preventDefault();
                                  toast({
                                    title: "Download unavailable",
                                    description: "This mod is currently unavailable for download.",
                                    variant: "destructive",
                                  });
                                } else {
                                  toast({
                                    title: "Download started",
                                    description: `${mod.title} is now downloading...`,
                                  });
                                }
                              }}
                            >
                              <a href={mod.downloadUrl || "#"} download>
                                <Download className="h-3.5 w-3.5 mr-1" /> Download
                              </a>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </motion.div>
    </Layout>
  );
};

export default Mods;
