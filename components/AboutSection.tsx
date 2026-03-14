// src/components/AboutSection.jsx
export default function AboutSection() {
  return (
    <section id="about" className="bg-white py-16 border-y border-gray-200">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 border-b pb-4">About Me</h2>
        
        <div className="flex flex-col md:flex-row gap-10">
          <div className="flex-1 space-y-4 text-lg text-gray-600 leading-relaxed">
            <p>
              I am a web developer who builds clean, functional, and high-performing digital solutions. With an A.S. in Computer Information Systems from the College of the Redwoods, my technical foundation is paired with a deep understanding of practical business needs.
            </p>
            <p>
              Before focusing entirely on software and e-commerce, I spent over two decades navigating high-volume, fast-paced environments, including overseeing multi-faceted property operations as a Resident General Manager. 
            </p>
            <p>
              That background gave me a unique perspective on web development. I don&apos;t just look at the code; I look at the operational efficiency, the user experience, and how an application actually serves the business. Whether I am building a custom storefront for Tech & Tonic or an interactive educational tool, my goal is to deliver software that solves real problems without the clutter.
            </p>
          </div>
          
          <div className="flex-1 bg-gray-50 p-8 rounded-lg border border-gray-100 shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Core Focus</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-2">
                <span className="text-blue-600 font-bold">✓</span> Next.js & React Ecosystems
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-600 font-bold">✓</span> E-Commerce Architecture
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-600 font-bold">✓</span> API Integration & Routing
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-600 font-bold">✓</span> UI/UX Design Implementation
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}