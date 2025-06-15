
import { useParams, Link } from 'react-router-dom';
import { projects } from '@/data/projects';
import NotFound from './NotFound';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return <NotFound />;
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <div className="mb-8">
          <Link to="/projects">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Button>
          </Link>
        </div>

        <h1 className="text-5xl font-bold mb-2">{project.title}</h1>
        <h3 className="text-2xl mb-8">{project.subtitle}</h3>

        <img src={project.imageUrl} alt={project.title} className="w-full rounded-lg shadow-lg mb-12" />

        <div className="grid grid-cols-12 gap-x-8 gap-y-12">
          <div className="col-span-12 md:col-span-8">
            <h2 className="text-4xl font-bold mb-4">About the Project</h2>
            <div className="prose prose-lg max-w-none text-foreground/80 leading-relaxed">
              <p>{project.description}</p>
            </div>
          </div>
          <div className="col-span-12 md:col-span-4">
            <div className="sticky top-24">
              <h3 className="text-2xl mb-4">Details</h3>
              <ul className="space-y-2 text-lg">
                <li><strong>Client:</strong> {project.details.client}</li>
                <li><strong>Role:</strong> {project.details.role}</li>
                <li><strong>Year:</strong> {project.details.year}</li>
              </ul>

              <h3 className="text-2xl mt-8 mb-4">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.details.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">{tech}</Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {project.details.gallery && project.details.gallery.length > 1 && (
            <div className="mt-16">
                <h2 className="text-4xl font-bold mb-8 text-center">Gallery</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {project.details.gallery.map((image, index) => (
                        <motion.div key={index} whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                            <img src={image} alt={`${project.title} gallery image ${index + 1}`} className="w-full h-auto rounded-lg shadow-md" />
                        </motion.div>
                    ))}
                </div>
            </div>
        )}
      </motion.div>
    </div>
  );
};

export default ProjectDetail;
