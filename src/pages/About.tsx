
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin } from 'lucide-react';

const About = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-center mb-12">About &amp; Contact</h1>
        <div className="grid md:grid-cols-5 gap-12 items-center mb-16">
          <div className="md:col-span-2">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=60"
              alt="John Doe"
              className="rounded-lg shadow-xl w-full"
            />
          </div>
          <div className="md:col-span-3">
            <h2 className="text-3xl font-bold mb-4">Hey, I&apos;m Emms</h2>
            <p className="text-lg text-foreground/80 leading-relaxed mb-4">
              I am a passionate and results-driven designer and developer with a knack for creating engaging and user-friendly digital experiences. With over 5 years in the industry, I have honed my skills in UI/UX design, front-end development, and branding.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed mb-4">
              My philosophy is to bridge the gap between aesthetics and functionality. I believe that great design is not just about looking good, but also about solving problems and creating intuitive interactions for the user. I thrive on collaboration and am always eager to learn new technologies to push the boundaries of what's possible.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              When I'm not designing or coding, you can find me exploring nature, trying out new coffee shops, or getting lost in a good book.
            </p>
          </div>
        </div>

        <div className="border-t border-border pt-16">
          <h2 className="text-4xl font-bold text-center mb-4">Contact</h2>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            I'm currently available for freelance work. If you have a project in mind or just want to say hi, feel free to reach out.
          </p>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your Name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your.email@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Your message..." rows={5} />
                </div>
                <Button type="submit" size="lg">Send Message</Button>
              </form>
            </div>
            <div className="space-y-8">
              <h3 className="text-2xl font-bold">Contact Information</h3>
              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-primary" />
                <span className="text-lg text-foreground/80">hello@johndoe.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-primary" />
                <span className="text-lg text-foreground/80">(123) 456-7890</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="h-6 w-6 text-primary" />
                <span className="text-lg text-foreground/80">San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;

