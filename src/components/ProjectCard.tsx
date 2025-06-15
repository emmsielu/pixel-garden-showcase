import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

type ProjectCardProps = {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  description?: string;
  showReadMore?: boolean;
  className?: string;
};

const ProjectCard = ({
  id,
  title,
  subtitle,
  imageUrl,
  description,
  showReadMore,
  className = "",
}: ProjectCardProps) => (
  <Card className={`overflow-hidden h-full flex flex-col group transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${className}`}>
    <div className="overflow-hidden">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
      />
    </div>
    <CardHeader>
      <CardTitle>
        <h3 className="font-sans text-xl font-normal" style={{ color: "hsl(220, 10%, 30%)" }}>{title}</h3>
      </CardTitle>
    </CardHeader>
    <CardContent className="flex-grow flex flex-col">
      <div className="text-muted-foreground mb-2">{subtitle}</div>
      {description && <p className="mb-4 flex-1">{description}</p>}
      {showReadMore && (
        <Link
          to={`/projects/${id}`}
          className="mt-auto text-primary font-medium inline-flex items-center gap-1 hover:underline underline-offset-2 group-hover:text-primary font-bold"
        >
          Read more
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      )}
    </CardContent>
  </Card>
);

export default ProjectCard;
