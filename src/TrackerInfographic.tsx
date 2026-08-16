import {
  Bluetooth,
  Smartphone,
  MapPin,
  Cloud,
  User,
  Radio,
  Zap,
  ScanLine,
  Wifi,
  ShieldCheck,
  Globe2,
} from 'lucide-react';

const TrackerInfographic = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 p-4 md:p-8 font-sans selection:bg-blue-500/30">
      <div className="max-w-4xl mx-auto space-y-12">

        {/* Header Section */}
        <header className="text-center space-y-4 py-8">
          <div className="inline-flex items-center justify-center p-3 bg-blue-500/10 rounded-2xl mb-4">
            <MapPin className="w-10 h-10 text-blue-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
            Beyond GPS
          </h1>
          <p className="text-xl md:text-2xl font-medium text-slate-300">
            How Trackers Find Your Stuff Without Satellites
          </p>
          <p className="max-w-2xl mx-auto text-slate-400 text-sm md:text-base leading-relaxed">
            Devices like Apple AirTags, Tile, and Samsung SmartTags don't have built-in GPS or
            cellular internet. Instead, they use a clever mix of short-range signals and a massive,
            crowdsourced network of everyday smartphones.
          </p>
        </header>

        {/* The 5-Step Journey */}
        <section className="bg-slate-900/50 border border-slate-800 rounded-3xl p-6 md:p-10 shadow-2xl">
          <h2 className="text-2xl font-bold mb-8 text-center flex items-center justify-center gap-3">
            <Globe2 className="text-emerald-400" />
            The "Find My" Journey
          </h2>

          <div className="relative border-l-2 border-slate-700/50 ml-4 md:ml-8 space-y-12 pb-4">

            {/* Step 1 */}
            <div className="relative pl-8 md:pl-12">
              <div className="absolute -left-[17px] top-1 w-8 h-8 bg-slate-900 border-2 border-blue-500 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                <Bluetooth className="w-4 h-4 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-blue-400 mb-2">1. The Silent Beacon</h3>
              <p className="text-slate-400 leading-relaxed">
                Your lost tracker emits a continuous, secure{' '}
                <strong>Bluetooth Low Energy (BLE)</strong> ping. It doesn't know where it is;
                it's simply shouting its unique, rotating ID number into the void, waiting for
                someone to listen.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative pl-8 md:pl-12">
              <div className="absolute -left-[17px] top-1 w-8 h-8 bg-slate-900 border-2 border-indigo-500 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(99,102,241,0.5)]">
                <Smartphone className="w-4 h-4 text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold text-indigo-400 mb-2">2. The Passing Stranger</h3>
              <p className="text-slate-400 leading-relaxed">
                A stranger walks by with a smartphone (part of the Apple or Google network). Their
                phone's Bluetooth detects the tracker's ping in the background, completely
                invisibly to the stranger.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative pl-8 md:pl-12">
              <div className="absolute -left-[17px] top-1 w-8 h-8 bg-slate-900 border-2 border-rose-500 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(244,63,94,0.5)]">
                <MapPin className="w-4 h-4 text-rose-400" />
              </div>
              <h3 className="text-xl font-semibold text-rose-400 mb-2">3. The Location Match</h3>
              <p className="text-slate-400 leading-relaxed">
                The stranger's phone checks <em>its own</em> location using its internal{' '}
                <strong>GPS and Wi-Fi positioning</strong>. It essentially says, "I heard Tracker
                ID #1234, and I am currently at these coordinates."
              </p>
            </div>

            {/* Step 4 */}
            <div className="relative pl-8 md:pl-12">
              <div className="absolute -left-[17px] top-1 w-8 h-8 bg-slate-900 border-2 border-cyan-500 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.5)]">
                <Cloud className="w-4 h-4 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-cyan-400 mb-2">4. Encrypted Upload</h3>
              <p className="text-slate-400 leading-relaxed">
                The stranger's phone heavily encrypts this paired data (Tracker ID + Location) and
                uploads it to the cloud via their Cellular or Wi-Fi connection. Apple/Google cannot
                read this data; it acts merely as a courier.
              </p>
            </div>

            {/* Step 5 */}
            <div className="relative pl-8 md:pl-12">
              <div className="absolute -left-[17px] top-1 w-8 h-8 bg-slate-900 border-2 border-emerald-500 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.5)]">
                <User className="w-4 h-4 text-emerald-400" />
              </div>
              <h3 className="text-xl font-semibold text-emerald-400 mb-2">5. The Reunion</h3>
              <p className="text-slate-400 leading-relaxed">
                You open your tracking app. Your phone queries the cloud for your tracker's ID,
                downloads the encrypted package, decrypts it locally, and drops a pin on your map.
              </p>
            </div>

          </div>
        </section>

        {/* The Technology Breakdown Grid */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-center">The Technology Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">

            {/* BLE Card */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/50 p-6 rounded-2xl hover:border-blue-500/50 transition-colors">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                <Radio className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-blue-100 mb-2">Bluetooth Low Energy (BLE)</h3>
              <p className="text-sm text-slate-400">
                The backbone. It requires so little power that a coin-cell battery can last a year.
                It's used to broadcast the tracker's presence to any compatible device within a 30
                to 300-foot radius.
              </p>
            </div>

            {/* UWB Card */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/50 p-6 rounded-2xl hover:border-purple-500/50 transition-colors">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-lg font-bold text-purple-100 mb-2">Ultra-Wideband (UWB)</h3>
              <p className="text-sm text-slate-400">
                The "Precision Finding" tech. When you are very close (within ~30 feet), UWB sends
                millions of radio pulses and measures their "Time of Flight" to calculate exact
                distance and direction (e.g., pointing an arrow on your screen).
              </p>
            </div>

            {/* NFC Card */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/50 p-6 rounded-2xl hover:border-yellow-500/50 transition-colors">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center mb-4">
                <ScanLine className="w-6 h-6 text-yellow-400" />
              </div>
              <h3 className="text-lg font-bold text-yellow-100 mb-2">
                Near Field Communication (NFC)
              </h3>
              <p className="text-sm text-slate-400">
                The "Lost Mode" tech. If someone physically finds your keys, they can tap their
                smartphone (iOS or Android) against the tracker. The NFC chip transmits a tiny web
                link displaying your contact info.
              </p>
            </div>

            {/* Wi-Fi Card */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/50 p-6 rounded-2xl hover:border-green-500/50 transition-colors">
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                <Wifi className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-lg font-bold text-green-100 mb-2">Wi-Fi & Cell Triangulation</h3>
              <p className="text-sm text-slate-400">
                Used strictly by the <em>helper</em> device. If a passing phone is indoors and
                can't get a GPS satellite lock, it looks at nearby Wi-Fi router MAC addresses to
                pinpoint its location before reporting your tracker.
              </p>
            </div>

          </div>
        </section>

        {/* Security Banner */}
        <section className="bg-indigo-950/40 border border-indigo-900/50 rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6">
          <div className="bg-indigo-500/20 p-4 rounded-full flex-shrink-0">
            <ShieldCheck className="w-8 h-8 text-indigo-400" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-indigo-100 mb-2">Privacy is Built-In</h3>
            <p className="text-sm text-indigo-200/80 leading-relaxed">
              To prevent stalking, trackers frequently rotate their Bluetooth identifiers.
              Furthermore, the entire crowdsourced location process is end-to-end encrypted. The
              stranger helping you find your item never knows they helped, and the tech companies
              hosting the network cannot see your item's location.
            </p>
          </div>
        </section>

        <footer className="text-center text-slate-600 text-xs py-8">
          Data transmission illustration • Concepts apply to modern tracking ecosystems (Apple Find
          My, Google Find My Device, etc.)
        </footer>

      </div>
    </div>
  );
};

export default TrackerInfographic;
