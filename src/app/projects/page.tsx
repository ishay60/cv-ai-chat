'use server';

import { getProjects } from '@/ai/flows/project-showcase';
import { ProjectCard } from '@/components/project-card';

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div className="bg-background min-h-[calc(100vh-4rem)]">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-2">
            Project Showcase
          </h1>
          <p className="text-lg text-muted-foreground">
            A collection of my full-stack development work.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
