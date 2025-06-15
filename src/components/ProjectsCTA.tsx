
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const ProjectsCTA = () => {
  return (
    <div className="w-full text-center py-12 relative">
      {/* Triangle decorations */}
      <div className="triangle-bg triangle-purple w-16 h-16 top-4 left-1/4"></div>
      <div className="triangle-bg triangle-lime w-12 h-12 top-8 right-1/3"></div>
      
      <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
        Take a look at the range of work and outcomes I've been responsible for
      </p>
      <Link to="/projects">
        <Button 
          variant="outline" 
          size="lg" 
          className="bg-white text-primary border-primary hover:bg-primary/5 font-bold"
        >
          View all projects
        </Button>
      </Link>
    </div>
  );
};

export default ProjectsCTA;
