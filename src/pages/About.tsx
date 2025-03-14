
import React from "react";
import { Layout } from "@/components/layout";
import { motion } from "framer-motion";
import { PieChart } from "recharts";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Code, Heart, Clock, Award, Cpu, Globe, Users } from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "Founder & Lead Developer",
      image: "https://i.pravatar.cc/150?img=1",
      bio: "Game developer with over 10 years of experience, passionate about creating tools that empower other modders."
    },
    {
      name: "Sarah Chen",
      role: "Community Manager",
      image: "https://i.pravatar.cc/150?img=5",
      bio: "Dedicated to fostering a helpful and inclusive modding community. Previously managed several large gaming communities."
    },
    {
      name: "Marcus Rodriguez",
      role: "Lead Mod Curator",
      image: "https://i.pravatar.cc/150?img=3",
      bio: "Expert modder who ensures all content meets our quality standards. Creator of several popular mod collections."
    },
    {
      name: "Priya Patel",
      role: "UI/UX Designer",
      image: "https://i.pravatar.cc/150?img=10",
      bio: "Designer focused on creating intuitive interfaces that make modding accessible to everyone regardless of technical expertise."
    }
  ];

  const stats = [
    { icon: <Code />, value: "10,000+", label: "Mods Available" },
    { icon: <Users />, value: "50,000+", label: "Community Members" },
    { icon: <Heart />, value: "25M+", label: "Mod Downloads" },
    { icon: <Clock />, value: "5+ Years", label: "Supporting Modders" }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <Layout activePage="About">
      <div className="container mx-auto px-4 py-8">
        {/* Hero section */}
        <motion.section 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Badge variant="outline" className="mb-4">About Us</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display">Our Passion for Modding</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            ModdingHaven was created by gamers, for gamers. We believe in the power of community-driven content to transform gaming experiences.
          </p>
        </motion.section>

        {/* Mission section */}
        <motion.section 
          className="glass-morphism p-8 rounded-2xl mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4 font-display">Our Mission</h2>
              <p className="text-muted-foreground mb-4">
                We're on a mission to create the most accessible and supportive environment for game modding. We believe that modding is a form of artistic expression and a powerful way for communities to extend and preserve the games they love.
              </p>
              <p className="text-muted-foreground">
                ModdingHaven serves as a bridge between mod creators and players, providing the tools, resources, and community support needed for both to thrive. We're committed to maintaining an open, inclusive, and innovative space where creativity flourishes.
              </p>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Our Mission" 
                className="rounded-lg max-h-80 object-cover w-full"
              />
            </div>
          </div>
        </motion.section>

        {/* Stats section */}
        <motion.section 
          className="mb-16"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center font-display">ModdingHaven By The Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="glass-morphism p-6 rounded-lg text-center"
                variants={item}
              >
                <div className="inline-flex items-center justify-center rounded-full p-3 bg-primary/10 text-primary mb-4">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold">{stat.value}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Team section */}
        <motion.section 
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center font-display">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index} 
                className="glass-morphism p-6 rounded-lg text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Avatar className="h-24 w-24 mx-auto mb-4">
                  <AvatarImage src={member.image} alt={member.name} />
                  <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <Badge variant="outline" className="mb-3">{member.role}</Badge>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Values section */}
        <motion.section 
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center font-display">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div 
              className="glass-morphism p-6 rounded-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center justify-center rounded-full p-3 bg-primary/10 text-primary mb-4">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Quality First</h3>
              <p className="text-muted-foreground">
                We believe in quality over quantity. All mods in our library undergo a careful review process to ensure they meet our standards for performance, compatibility, and creativity.
              </p>
            </motion.div>
            <motion.div 
              className="glass-morphism p-6 rounded-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center justify-center rounded-full p-3 bg-primary/10 text-primary mb-4">
                <Cpu className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-muted-foreground">
                We encourage and celebrate creative approaches to modding. Our platform is designed to highlight innovative mods that push the boundaries of what's possible in game modification.
              </p>
            </motion.div>
            <motion.div 
              className="glass-morphism p-6 rounded-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center justify-center rounded-full p-3 bg-primary/10 text-primary mb-4">
                <Globe className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Community</h3>
              <p className="text-muted-foreground">
                We foster an inclusive environment where modders of all skill levels can learn, share, and grow together. Our forums, tutorials, and events are designed to strengthen the community bonds.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* History timeline */}
        <motion.section 
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center font-display">Our Journey</h2>
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
            {[
              {
                year: "2018",
                title: "Our Beginning",
                description: "ModdingHaven was founded by a small group of passionate modders who wanted to create a better platform for sharing game modifications."
              },
              {
                year: "2019",
                title: "Community Growth",
                description: "Our user base grew to over 10,000 members as we expanded our mod library and added support for more games."
              },
              {
                year: "2020",
                title: "New Tools & Features",
                description: "We launched our mod manager application and introduced advanced features for mod creators, including analytics and feedback tools."
              },
              {
                year: "2021",
                title: "Going Global",
                description: "ModdingHaven expanded internationally, adding support for multiple languages and regional mod communities."
              },
              {
                year: "Present",
                title: "Looking Forward",
                description: "Today, we continue to innovate and improve our platform while staying true to our core mission of supporting the modding community."
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="relative flex items-start md:justify-between"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="md:w-2/5 md:pr-16 md:text-right">
                  <Badge variant="outline" className="mb-2">{item.year}</Badge>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
                <div className="absolute left-5 top-5 h-3 w-3 rounded-full border-2 border-primary md:left-1/2 md:-translate-x-1.5" />
                <div className="md:w-2/5 md:pl-16 md:block hidden" />
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </Layout>
  );
};

export default About;
