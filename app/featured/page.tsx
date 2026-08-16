import Link from 'next/link';

export default function FeaturedPage() {
  return (
    <main className="min-h-screen text-[#201c18]">
      <section className="max-w-5xl mx-auto px-6 pt-16 pb-10">
        <div className="section-shell rounded-2xl p-6 md:p-10 border border-[#b7ad9f]">
          <p className="eyebrow mb-3">Featured Web App</p>
          <h1 className="text-4xl md:text-5xl font-semibold mb-4">Tech &amp; Tonic Soundscape</h1>
          <p className="text-[#4a433b] text-lg max-w-3xl mb-8">
            A generative audio web experience designed around user intent. The app includes onboarding, trial-style conversion flow, and adaptive sound modes for focus, relaxation, sleep, and movement.
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            <Link
              href="https://featured.techandtonic.tech"
              className="inline-flex items-center rounded-lg px-5 py-3 bg-[#201c18] text-[#ece7de] hover:bg-[#000]"
            >
              Open Live App
            </Link>
            <Link
              href="/"
              className="inline-flex items-center rounded-lg px-5 py-3 border border-[#201c18] text-[#201c18] hover:bg-[#e5ddcf]"
            >
              Back to Portfolio
            </Link>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[#2f2a24]">
            <li className="rounded-xl border border-[#b7ad9f] bg-[#f6f2ea] p-4">
              Four modes: Focus, Relax, Sleep, Move with smooth volume transitions.
            </li>
            <li className="rounded-xl border border-[#b7ad9f] bg-[#f6f2ea] p-4">
              Guided onboarding and trial-style paywall flow for conversion testing.
            </li>
            <li className="rounded-xl border border-[#b7ad9f] bg-[#f6f2ea] p-4">
              Built with Expo React Native and published as a featured web experience.
            </li>
            <li className="rounded-xl border border-[#b7ad9f] bg-[#f6f2ea] p-4">
              Designed for future context signals like weather, time-of-day, and biometrics.
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
