import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import ProjectCard from "@/components/ProjectCard";
import ProjectsCTA from "@/components/ProjectsCTA";

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
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center min-h-[calc(100vh-13rem)] relative">
      {/* Background triangle decorations */}
      <div className="triangle-bg triangle-purple w-24 h-24 top-20 left-8"></div>
      <div className="triangle-bg triangle-lime w-20 h-20 top-40 right-12"></div>
      <div className="triangle-bg triangle-purple w-16 h-16 bottom-32 left-16"></div>
      <div className="triangle-bg triangle-lime w-28 h-28 bottom-20 right-8"></div>

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
          <Button size="lg" className="group font-bold">
            View all projects
          </Button>
        </Link>
      </motion.div>

      {/* Project Highlight Pattern */}
      <div className="w-full pb-24">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Project Highlights</h2>
          <p className="text-lg text-muted-foreground text-center mb-8">
            Dive into a few standout projects from my portfolio.
          </p>
        </div>
        <div className="grid gap-8 grid-cols-12">
          {highlightedProjects.map((project) => (
            <div key={project.id} className="col-span-12 sm:col-span-6 lg:col-span-4">
                <ProjectCard
                id={project.id}
                title={project.title}
                subtitle={project.subtitle}
                imageUrl={project.imageUrl}
                description={project.description}
                showReadMore
                />
            </div>
          ))}
        </div>
        
        {/* New CTA section */}
        <ProjectsCTA />
      </div>
    </div>
  );
};

export default Home;
