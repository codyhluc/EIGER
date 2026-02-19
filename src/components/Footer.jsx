const Footer = () => {
    return (
        <footer className="relative py-16 px-6 border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">

                    {/* Logo */}
                    <div className="flex items-center gap-4">
                        <span className="text-3xl font-bold tracking-tight text-white">EIGER<sup className="text-sm align-super opacity-60">™</sup></span>
                        <span className="text-sm text-white/30">© 2026</span>
                    </div>

                    {/* Tagline */}
                    <p className="text-base text-white/30 text-center">
                        Your mountain. Your gear. One app.
                    </p>

                    {/* Social Links */}
                    <div className="flex items-center gap-5">
                        {/* TikTok */}
                        <a href="#" target="https://www.tiktok.com/@eiger_app?_r=1&_t=ZT-942YsOMpxef" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 text-white/40 hover:bg-white/10 hover:text-white transition-all duration-300">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.87a8.16 8.16 0 004.76 1.52v-3.4a4.85 4.85 0 01-1-.3z" />
                            </svg>
                        </a>
                        {/* Instagram */}
                        <a href="#" target="https://www.instagram.com/eiger_app?igsh=MXhkMnU2bmVic2Q0aQ%3D%3D&utm_source=qr" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 text-white/40 hover:bg-white/10 hover:text-white transition-all duration-300">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                        </a>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
