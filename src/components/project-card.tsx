import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from './ui/badge';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import { ArrowUpRight } from 'lucide-react';

type Project = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  imageHint: string;
  link: string;
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="flex flex-col bg-card/80 border-border hover:border-primary/50 transition-all duration-300 rounded-2xl shadow-lg hover:shadow-primary/20 overflow-hidden group">
      <CardHeader>
        <div className="relative h-48 w-full overflow-hidden rounded-lg">
           <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            data-ai-hint={project.imageHint}
          />
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardTitle className="text-xl font-bold text-foreground mb-2">{project.title}</CardTitle>
        <CardDescription className="text-muted-foreground mb-4 h-20 overflow-hidden">
          {project.description}
        </CardDescription>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="bg-secondary/20 text-secondary border-secondary/20">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full bg-primary/10 text-primary hover:bg-primary/20">
          <Link href={project.link} target="_blank">
            View Project
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
