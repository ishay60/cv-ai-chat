'use server';
/**
 * @fileOverview A project showcase AI agent.
 *
 * - getProjects - A function that handles the project showcase process.
 */

import { promises as fs } from 'fs';
import path from 'path';
import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const ProjectSchema = z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    technologies: z.array(z.string()),
    imageUrl: z.string(),
    imageHint: z.string(),
    link: z.string(),
});

const ProjectsOutputSchema = z.array(ProjectSchema);

export async function getProjects(): Promise<z.infer<typeof ProjectsOutputSchema>> {
  return getProjectsFlow();
}

const getProjectsFlow = ai.defineFlow(
  {
    name: 'getProjectsFlow',
    inputSchema: z.void(),
    outputSchema: ProjectsOutputSchema,
  },
  async () => {
    const jsonPath = path.join(process.cwd(), 'src', 'data', 'projects.json');
    const jsonFile = await fs.readFile(jsonPath, 'utf-8');
    const projects = JSON.parse(jsonFile);
    return projects;
  }
);
