import React from "react";
import { Layout } from "@/components/layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, MessageCircle, Github, Twitter, MessagesSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, ContactFormValues } from "@/schemas/contact-schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call with a delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log("Form submitted:", data);
      
      toast({
        title: "Message sent",
        description: "We'll get back to you as soon as possible.",
      });
      
      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      value: "support@moddinghaven.com",
      link: "mailto:support@moddinghaven.com"
    },
    {
      icon: <MessagesSquare className="h-5 w-5" />,
      title: "Discord",
      value: "Join our community",
      link: "#"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Location",
      value: "San Francisco, CA",
      link: "#"
    }
  ];

  return (
    <Layout activePage="Contact">
      <div className="container mx-auto px-4 py-8">
        <motion.section 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Badge variant="outline" className="mb-4">Contact Us</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display">Get in Touch</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions about modding or need help with our platform? We're here to help!
          </p>
        </motion.section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="glass-morphism p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="john@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input placeholder="How can we help?" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us more about your inquiry..."
                            className="min-h-[150px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="glass-morphism p-8 rounded-lg mb-8">
              <h2 className="text-2xl font-bold mb-6">Other Ways to Connect</h2>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-primary/5 transition-colors"
                  >
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-medium">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="glass-morphism p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6">FAQ</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium mb-2">How do I install mods?</h3>
                  <p className="text-sm text-muted-foreground">
                    Most mods can be installed using our mod manager. Check our detailed installation guides for specific instructions.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">How can I become a mod creator?</h3>
                  <p className="text-sm text-muted-foreground">
                    Start by checking out our modding tutorials and guides. Join our Discord community to connect with other creators.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Are the mods safe to use?</h3>
                  <p className="text-sm text-muted-foreground">
                    All mods on our platform are scanned for malware and reviewed by our team before being made available.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.section
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-8">Follow Us</h2>
          <div className="flex justify-center gap-4">
            {[
              { icon: <Twitter />, name: "Twitter", link: "#" },
              { icon: <MessagesSquare />, name: "Discord", link: "#" },
              { icon: <Github />, name: "GitHub", link: "#" }
            ].map((social, index) => (
              <a
                key={index}
                href={social.link}
                className="p-4 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </motion.section>
      </div>
    </Layout>
  );
};

export default Contact;
