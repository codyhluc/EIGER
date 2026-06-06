import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import EigerLogo from '../assets/EigerLogo.png';

const research = [
  {
    title: 'The right gear',
    body: 'What to carry for the objective, dialed in before you pack instead of guessed at the trailhead.',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    title: 'The weather window',
    body: 'Mountain-specific forecasts so you know exactly when to go, and when to wait it out.',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 1.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
  {
    title: 'The trail conditions',
    body: 'Current route intel from people who were just up there, not a trip report from three seasons ago.',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

// Fixed background layer: pure #0A0A0A, soft drifting glow orbs, a faint topographic
// grid, and the site's signature layered mountain silhouettes (matches the Mission page).
const AboutBackground = () => (
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

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#0A0A0A] text-white">
      <AboutBackground />

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
            Our Story
          </span>

          <h1 className="mx-auto mt-8 max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
            It started on{' '}
            <span className="bg-gradient-to-r from-white to-white/40 bg-clip-text text-transparent">
              Mt. Elbert.
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-white/50 md:text-xl">
            Planning one climb meant hours of scattered research. We were sure there had to be a
            better way, so we set out to build it.
          </p>
        </section>

        {/* Origin story */}
        <section className="mx-auto max-w-3xl px-6 pb-20 lg:px-8">
          <div className="space-y-6 border-l-2 border-white/10 pl-6 text-lg leading-relaxed text-white/60 md:pl-8">
            <p>
              A while back, we set our sights on Mt. Elbert, the highest peak in Colorado. We were
              fit, we were motivated, and we were ready to go. Then we actually started planning.
            </p>
            <p>
              Getting up it safely meant piecing everything together ourselves: the right gear to
              carry, how the weather would move across the peak, and what the trail conditions
              looked like that week. The information was out there, but it was buried across a dozen
              forums, blog posts, and out-of-date trip reports.
            </p>
            <p>
              Then we planned the next hike. And the one after that. Every single time, the same
              scramble, hours of research before we ever laced up our boots.
            </p>
          </div>
        </section>

        {/* The spark — pull quote */}
        <section className="mx-auto max-w-4xl px-6 pb-20 text-center lg:px-8">
          <p className="mx-auto max-w-3xl text-3xl font-bold leading-tight md:text-5xl">
            So we kept asking the same question:{' '}
            <span className="bg-gradient-to-r from-white to-white/40 bg-clip-text text-transparent">
              why isn&apos;t there an app for this?
            </span>
          </p>
        </section>

        {/* The answer */}
        <section className="mx-auto max-w-3xl px-6 pb-24 lg:px-8">
          <div className="space-y-6 border-l-2 border-white/10 pl-6 text-lg leading-relaxed text-white/60 md:pl-8">
            <p>
              We couldn&apos;t find a good answer. So we decided to build one ourselves.
            </p>
            <p className="font-medium text-white">
              That is EIGER: every route, gear list, weather window, and trail condition in one
              place, so planning takes minutes and your focus goes back where it belongs, on the
              climb.
            </p>
          </div>
        </section>

        {/* What we had to dig for, now in one app */}
        <section className="mx-auto max-w-6xl px-6 pb-24 lg:px-8">
          <div className="mb-12 text-center">
            <span className="inline-block rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/50">
              Why EIGER
            </span>
            <h2 className="mx-auto mt-6 max-w-2xl text-3xl font-bold leading-tight md:text-4xl">
              Everything we had to dig for,{' '}
              <span className="bg-gradient-to-r from-white to-white/40 bg-clip-text text-transparent">
                now in one app.
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {research.map((item) => (
              <article
                key={item.title}
                className="group rounded-2xl border border-white/10 bg-white/[0.05] p-8 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.08]"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-white/70 transition-colors duration-300 group-hover:text-white">
                  {item.icon}
                </div>
                <h3 className="mt-6 text-xl font-bold text-white">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-white/50">{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-3xl px-6 pb-32 text-center lg:px-8">
          <h2 className="text-4xl font-bold md:text-5xl">
            Climb{' '}
            <span className="bg-gradient-to-r from-white to-white/40 bg-clip-text text-transparent">with us.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-white/50">
            We are building EIGER for the days that matter most. Join the waitlist and help shape the
            app from the first pitch up.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/?section=waitlist"
              className="w-full rounded-full bg-white px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-black transition-all duration-300 hover:scale-[1.02] hover:bg-white/90 sm:w-auto"
            >
              Join the Waitlist
            </Link>
            <Link
              to="/mission"
              className="w-full rounded-full border border-white/10 bg-white/[0.05] px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:border-white/20 hover:bg-white/[0.08] sm:w-auto"
            >
              Our Mission
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
