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
    <div className="border border-[var(--border)] rounded-sm p-5 bg-[var(--surface)] shadow-[0_8px_20px_rgba(32,28,24,0.06)] hover:shadow-[0_10px_22px_rgba(32,28,24,0.12)] transition-shadow">
      <p className="mb-2 text-[11px] uppercase tracking-[0.2em] text-[var(--accent)]">Project</p>
      <h3 className="text-xl font-semibold mb-2 text-[#201c18]">{project.title}</h3>
      <p className="text-[#4a433b] mb-4">{project.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-5">
        {project.techStack.map((tech, index) => (
          <span key={index} className="px-2.5 py-1 bg-[#ded5c8] text-xs uppercase tracking-wide rounded-sm text-[#3f3830] border border-[#c2b7a8]">
            {tech}
          </span>
        ))}
      </div>
      
      <div className="flex gap-4">
        <Link href={project.link} target="_blank" className="text-[var(--accent)] hover:text-[var(--accent-strong)] font-medium">
          Live App &rarr;
        </Link>
        <Link href={project.github} target="_blank" className="text-[#4a433b] hover:text-[#201c18] font-medium">
          GitHub Code
        </Link>
      </div>
    </div>
  );
}