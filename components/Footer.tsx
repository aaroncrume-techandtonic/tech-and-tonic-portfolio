// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] mt-8 bg-[var(--surface)]">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-[#201c18]">Tech & Tonic</h3>
          <p className="text-[#4a433b] text-sm mt-1">Built with Next.js and Tailwind CSS.</p>
        </div>

        <div className="flex gap-6">
          <a href="https://github.com/aaroncrume-techandtonic" className="text-[#4a433b] hover:text-[var(--accent)] font-medium">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/aaron-crume-b0150a46/" className="text-[#4a433b] hover:text-[var(--accent)] font-medium">
            LinkedIn
          </a>
          <a href="mailto:aaroncrume@gmail.com" className="text-[#4a433b] hover:text-[var(--accent)] font-medium">
            Email Me
          </a>
        </div>
        
      </div>
    </footer>
  );
}