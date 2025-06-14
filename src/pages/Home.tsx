import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

// Temporary highlighted projects data
const highlightedProjects = [
  {
    id: 'project-1',
    title: 'Stellar Visions',
    subtitle: 'Web Design & Development',
    imageUrl: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=600&auto=format&fit=crop&q=60', // Cat placeholder
    description: "A modern redesign for a leading tech startup, focusing on user experience.",
  },
  {
    id: 'project-4',
    title: 'DataDash',
    subtitle: 'Dashboard UI Kit',
    imageUrl: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=601&auto=format&fit=crop&q=60', // Cat placeholder
    description: "A comprehensive UI kit for data dashboards—scalable, beautiful, functional.",
  },
  {
    id: 'project-6',
    title: 'MindWell',
    subtitle: 'Wellness App Branding',
    imageUrl: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=602&auto=format&fit=crop&q=60', // Cat placeholder
    description: "Branding for a new wellness app focused on calm, trust, and approachability.",
  },
];

const Home = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center min-h-[calc(100vh-13rem)]">
      {/* Header Pattern */}
      <motion.div
        className="text-center pt-8 pb-12 w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-foreground">
          Creative Designer & Developer
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
          Crafting beautiful and functional digital experiences. I turn complex problems into elegant solutions.
        </p>
        <Link to="/projects">
          <Button size="lg" className="group">
            View My Work
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </motion.div>

      {/* Project Highlight Pattern */}
      <motion.div
        className="w-full pb-24"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Project Highlights</h2>
          <p className="text-lg text-muted-foreground text-center mb-8">
            Dive into a few standout projects from my portfolio.
          </p>
        </div>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {highlightedProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.04 }}
              className="bg-card rounded-xl shadow transition-all duration-300 flex flex-col h-full border group"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-52 object-cover rounded-t-xl transition-transform group-hover:scale-105"
              />
              <div className="flex flex-col flex-1 p-6">
                <h3 className="font-serif text-2xl font-bold mb-1 text-foreground">{project.title}</h3>
                <div className="text-muted-foreground mb-2">{project.subtitle}</div>
                <p className="text-foreground/80 mb-4 flex-1">{project.description}</p>
                <Link to={`/projects/${project.id}`} className="mt-auto text-primary font-medium inline-flex items-center gap-1 hover:underline underline-offset-2 group-hover:text-primary">
                  Read more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
