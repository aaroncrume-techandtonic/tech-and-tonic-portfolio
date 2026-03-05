// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-20">
      <div className="max-w-5xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-center md:text-left">
          <h3 className="text-lg font-bold text-gray-900">Tech & Tonic</h3>
          <p className="text-gray-600 text-sm mt-1">Built with Next.js and Tailwind CSS.</p>
        </div>

        <div className="flex gap-6">
          {/* Replace the '#' with your actual URLs */}
          <a href="https://github.com/aaroncrume-techandtonic" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/aaron-crume-b0150a46/" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
            LinkedIn
          </a>
          <a href="mailto:aaroncrume@gmail.com" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
            Email Me
          </a>
        </div>
        
      </div>
    </footer>
  );
}