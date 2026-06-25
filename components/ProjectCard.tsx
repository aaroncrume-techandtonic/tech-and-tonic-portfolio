import Link from 'next/link';

// 1. Tell TypeScript exactly what a 'Project' looks like
type Project = {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  link: string;
  github: string;
};

// 2. Apply that type to the incoming prop
export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="border border-[var(--border)] rounded-2xl p-5 bg-[var(--surface)] backdrop-blur-md shadow-[0_12px_28px_rgba(0,0,0,0.34)] hover:shadow-[0_18px_36px_rgba(0,0,0,0.45)] transition-shadow">
      <p className="mb-2 text-[11px] uppercase tracking-[0.2em] text-[var(--accent)]">Project</p>
      <h3 className="text-xl font-semibold mb-2 text-[#ecf7ff]">{project.title}</h3>
      <p className="text-[#bdd6f0] mb-4">{project.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-5">
        {project.techStack.map((tech, index) => (
          <span key={index} className="px-2.5 py-1 bg-[#102040] text-xs uppercase tracking-wide rounded-full text-[#bfe4ff] border border-[#3d6a9a]">
            {tech}
          </span>
        ))}
      </div>
      
      <div className="flex gap-4">
        <Link href={project.link} target="_blank" className="text-[var(--accent)] hover:text-[#8adfff] font-medium">
          Live App &rarr;
        </Link>
        <Link href={project.github} target="_blank" className="text-[#b7cff0] hover:text-[#ecf7ff] font-medium">
          GitHub Code
        </Link>
      </div>
    </div>
  );
}