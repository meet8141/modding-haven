
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Star } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface ModCardProps {
  title: string;
  description: string;
  image: string;
  author: string;
  downloads: number;
  rating: number;
  categories: string[];
  isFeatured?: boolean;
  downloadUrl?: string;
}

export const ModCard = ({ 
  title, 
  description, 
  image, 
  author, 
  downloads, 
  rating, 
  categories,
  isFeatured = false,
  downloadUrl = "#"
}: ModCardProps) => {
  
  const handleDownload = (e: React.MouseEvent<HTMLButtonElement>) => {
    // If it's just a placeholder link, show toast instead of downloading
    if (downloadUrl === "#") {
      e.preventDefault();
      toast({
        title: "Download unavailable",
        description: "This mod is currently unavailable for download.",
        variant: "destructive",
      });
      return;
    }
    
    // For real downloads, we could track this event
    toast({
      title: "Download started",
      description: `${title} is now downloading...`,
    });
  };

  return (
    <motion.div
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className={`h-full overflow-hidden hover:border-primary/50 transition-colors ${isFeatured ? 'border-primary/30 shadow-lg shadow-primary/5' : ''}`}>
        <div className="aspect-video w-full overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        <CardHeader className="p-4">
          <div className="flex flex-wrap gap-2 mb-2">
            {categories.map((category) => (
              <Badge key={category} variant="secondary" className="text-xs">
                {category}
              </Badge>
            ))}
          </div>
          <CardTitle className="line-clamp-1">{title}</CardTitle>
          <div className="flex justify-between items-center text-sm text-muted-foreground">
            <span>by {author}</span>
            <div className="flex items-center gap-1">
              <Star className="h-3.5 w-3.5 fill-primary text-primary" />
              <span>{rating.toFixed(1)}</span>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-4 pt-0">
          <CardDescription className="line-clamp-2">{description}</CardDescription>
        </CardContent>
        <CardFooter className="p-4 pt-0 flex justify-between items-center">
          <div className="text-sm text-muted-foreground">
            <Download className="inline h-3.5 w-3.5 mr-1" />
            {downloads.toLocaleString()}
          </div>
          <Button 
            variant="outline" 
            size="sm" 
            className="gap-1"
            onClick={handleDownload}
            asChild
          >
            <a href={downloadUrl} download>
              <Download className="h-3.5 w-3.5" /> Download
            </a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};
