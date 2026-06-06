import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import EigerLogo from '../assets/EigerLogo.png';

const pillars = [
  {
    title: 'Climb Smarter',
    body: 'Topographic route planning, gear that matches the objective, and a single brief that turns ambition into a clear, repeatable plan.',
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
  },
  {
    title: 'Climb Safer',
    body: 'Mountain-specific weather, avalanche awareness, and route intel so you can read the mountain before you ever leave the trailhead.',
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Climb Together',
    body: 'A community of climbers sharing beta, logging ascents, and pushing each other higher from first summit to fiftieth.',
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-1.13a4 4 0 100-8 4 4 0 000 8z" />
      </svg>
    ),
  },
];

const highlights = [
  {
    tag: 'Coverage',
    value: 'Global',
    body: 'From the Alps to the Himalaya, every massif on one topographic map.',
  },
  {
    tag: 'The 8000ers',
    value: '14',
    body: 'All fourteen eight-thousanders, mapped line by line, route by route.',
  },
  {
    tag: 'Conditions',
    value: 'Real-time',
    body: 'Weather, snowpack and avalanche risk, refreshed by the hour.',
  },
];

// Fixed background layer — mirrors the main page: pure #0A0A0A, soft white glow orbs,
// a faint topographic grid, and the site's signature layered mountain silhouettes.
const MissionBackground = () => (
  <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
    {/* Pure black base + faint summit glow */}
    <div className="absolute inset-0 bg-[#0A0A0A]" />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_40%_at_50%_28%,rgba(255,255,255,0.045),transparent_70%)]" />

    {/* Drifting glow orbs */}
    <div className="about-glow-drift absolute -top-32 left-1/4 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-white/[0.04] blur-[130px]" />
    <div className="about-glow-drift-reverse absolute right-0 top-1/3 h-96 w-96 rounded-full bg-white/[0.03] blur-[130px]" />

    {/* Faint topographic grid */}
    <div
      className="about-grid-drift absolute inset-0 opacity-[0.04]"
      style={{
        backgroundImage:
          'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
        backgroundSize: '72px 72px',
      }}
    />

    {/* Layered mountain silhouettes (the main page's signature motif) */}
    <svg
      viewBox="0 0 1440 400"
      className="absolute inset-x-0 bottom-0 h-[45vh] w-full opacity-[0.04]"
      preserveAspectRatio="xMidYMax slice"
    >
      <polygon points="0,400 200,150 400,250 650,80 850,200 1050,120 1250,180 1440,100 1440,400" fill="white" />
    </svg>
    <svg
      viewBox="0 0 1440 300"
      className="absolute inset-x-0 bottom-0 h-[36vh] w-full opacity-[0.05]"
      preserveAspectRatio="xMidYMax slice"
    >
      <polygon points="0,300 300,120 500,200 750,80 950,180 1150,100 1350,160 1440,140 1440,300" fill="white" />
    </svg>
    <svg
      viewBox="0 0 1440 500"
      className="absolute inset-x-0 bottom-0 h-[52vh] w-full opacity-[0.06]"
      preserveAspectRatio="xMidYMax slice"
    >
      <polygon points="0,500 150,200 300,320 500,100 700,250 900,80 1100,200 1300,150 1440,250 1440,500" fill="white" />
    </svg>

    {/* Edge vignette + bottom blend into the page */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_85%_85%_at_50%_45%,transparent_55%,rgba(0,0,0,0.55)_100%)]" />
    <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
  </div>
);

const MissionPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#0A0A0A] text-white">
      <MissionBackground />

      <main className="relative z-10">
        {/* Top wordmark (links home) */}
        <div className="mx-auto flex max-w-7xl items-center px-6 pt-8 lg:px-8">
          <Link to="/" className="flex items-center gap-3 transition-opacity duration-300 hover:opacity-80">
            <img src={EigerLogo} alt="EIGER" className="h-12 w-auto object-contain" />
          </Link>
        </div>

        {/* Hero */}
        <section className="mx-auto max-w-4xl px-6 pb-16 pt-24 text-center sm:pt-28 lg:px-8">
          <span className="inline-block rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/50">
            Our Mission
          </span>

          <h1 className="mx-auto mt-8 max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
            The mountains belong to everyone{' '}
            <span className="bg-gradient-to-r from-white to-white/40 bg-clip-text text-transparent">
              willing to climb them.
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-white/50 md:text-xl">
            EIGER puts a mountaineering expedition team in your pocket where so the next summit is decided
            by your drive, not by the gear, guesswork, or scattered tools standing in the way.
          </p>
        </section>

        {/* Story */}
        <section className="mx-auto max-w-3xl px-6 pb-24 lg:px-8">
          <div className="space-y-6 border-l-2 border-white/10 pl-6 text-lg leading-relaxed text-white/60 md:pl-8">
            <p>
              EIGER started as a passion project between climbers who were tired of stitching together
              paper maps, scattered weather apps, and half-remembered trip reports the night before an
              alpine start.
            </p>
            <p>
              We believe the hardest part of any climb should be the climb itself, not the planning.
              So we&apos;re building one place to map your route, read the conditions, pack the right
              gear, and learn from the people who&apos;ve already stood on the summit.
            </p>
            <p className="font-medium text-white">
              Whether it&apos;s your first peak or your fiftieth, EIGER is here to help you climb
              smarter, safer, and higher.
            </p>
          </div>
        </section>

        {/* Pillars */}
        <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {pillars.map((pillar) => (
              <article
                key={pillar.title}
                className="group rounded-2xl border border-white/10 bg-white/[0.05] p-8 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.08]"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-white/70 transition-colors duration-300 group-hover:text-white">
                  {pillar.icon}
                </div>
                <h3 className="mt-6 text-xl font-bold text-white">{pillar.title}</h3>
                <p className="mt-3 leading-relaxed text-white/50">{pillar.body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Capability band */}
        <section className="mx-auto max-w-5xl px-6 pb-24 lg:px-8">
          <div className="mb-10 text-center">
            <span className="inline-block rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/50">
              What&apos;s on the map
            </span>
            <h2 className="mx-auto mt-6 max-w-2xl text-3xl font-bold leading-tight md:text-4xl">
              One app for{' '}
              <span className="bg-gradient-to-r from-white to-white/40 bg-clip-text text-transparent">
                every objective.
              </span>
            </h2>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02]">
            {/* Ridge-line accent — ties the band to the mountaineering theme */}
            <svg
              viewBox="0 0 1440 120"
              preserveAspectRatio="none"
              className="pointer-events-none absolute inset-x-0 top-0 h-24 w-full opacity-[0.08]"
              aria-hidden="true"
            >
              <polyline
                points="0,96 160,58 320,80 480,26 640,68 800,18 960,60 1120,30 1280,66 1440,38"
                fill="none"
                stroke="white"
                strokeWidth="2"
              />
            </svg>

            <div className="relative grid grid-cols-1 divide-y divide-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              {highlights.map((item, index) => (
                <div key={item.value} className="px-8 py-12 text-center">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/40">
                    <span className="text-white/25">0{index + 1}</span>
                    <span className="mx-2 text-white/15">/</span>
                    {item.tag}
                  </p>
                  <p className="mt-5 bg-gradient-to-r from-white to-white/50 bg-clip-text text-4xl font-bold leading-none text-transparent md:text-5xl">
                    {item.value}
                  </p>
                  <p className="mx-auto mt-4 max-w-[15rem] text-sm leading-relaxed text-white/50">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="mx-auto max-w-3xl px-6 pb-32 text-center lg:px-8">
          <h2 className="text-4xl font-bold md:text-5xl">
            Join the{' '}
            <span className="bg-gradient-to-r from-white to-white/40 bg-clip-text text-transparent">
              first ascent.
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-white/50">
            EIGER is in development now. Be on the rope team from day one, no spam, just summit updates.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/?section=waitlist"
              className="w-full rounded-full bg-white px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-black transition-all duration-300 hover:scale-[1.02] hover:bg-white/90 sm:w-auto"
            >
              Join the Waitlist
            </Link>
            <Link
              to="/about"
              className="w-full rounded-full border border-white/10 bg-white/[0.05] px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:border-white/20 hover:bg-white/[0.08] sm:w-auto"
            >
              About EIGER
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MissionPage;
