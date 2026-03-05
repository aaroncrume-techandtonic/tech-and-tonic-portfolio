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
    <div className="border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow bg-white">
      <h3 className="text-xl font-semibold mb-2 text-gray-900">{project.title}</h3>
      <p className="text-gray-600 mb-4">{project.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {project.techStack.map((tech, index) => (
          <span key={index} className="px-3 py-1 bg-gray-100 text-sm rounded-full text-gray-700">
            {tech}
          </span>
        ))}
      </div>
      
      <div className="flex gap-4">
        <Link href={project.link} target="_blank" className="text-blue-600 hover:text-blue-800 font-medium">
          Live App &rarr;
        </Link>
        <Link href={project.github} target="_blank" className="text-gray-600 hover:text-gray-900 font-medium">
          GitHub Code
        </Link>
      </div>
    </div>
  );
}