// src/app/page.jsx
import AboutSection from '../components/AboutSection';
import AdSenseUnit from '../components/AdSenseUnit';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import { projects } from './data/projects';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 py-24 md:py-32">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 text-gray-900">
          Hi, I'm Aaron.
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-600 mb-8">
          Founder & Lead Developer at <span className="text-blue-600 font-semibold">Tech & Tonic</span>.
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mb-10 leading-relaxed">
          I build clean, high-performance web applications and e-commerce solutions. Welcome to my digital portfolio.
        </p>
        <a 
          href="#projects" 
          className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-sm"
        >
          View My Work
        </a>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-10">
        <AdSenseUnit adSlot="3350521090" className="min-h-[90px]" />
      </section>

      {/* Insert the new About Section right here */}
      <AboutSection />

      {/* Projects Showcase Section */}
      <section id="projects" className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-10 text-gray-900 border-b pb-4">Featured Projects</h2>
        
        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project: (typeof projects)[number]) => (
            <ProjectCard key={project.id} project={project} />
          ))}
   {/* ... your projects grid ends up here */}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-10">
        <AdSenseUnit adSlot="7098194417" className="min-h-[90px]" />
      </section>
      
      <Footer />
    </main>
  );
}
