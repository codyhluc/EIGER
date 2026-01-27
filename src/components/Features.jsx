import { useEffect, useRef, useState } from 'react';

const features = [
    {
        stage: '01',
        title: 'Discover',
        description: 'Find your next adventure. We\'ve curated the best peaks, trails, and resorts — so you can spend less time planning and more time packing.',
        icon: (
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        ),
    },
    {
        stage: '02',
        title: 'Prepare',
        description: 'No more second-guessing your gear list. We analyze weather, altitude, and trail conditions to tell you exactly what to wear and bring.',
        icon: (
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
        ),
    },
    {
        stage: '03',
        title: 'Conquer',
        description: 'Real-time updates when conditions change. Because the mountain doesn\'t care about your plans — but we\'ll help you adapt.',
        icon: (
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
        ),
    },
];

const FeatureCard = ({ feature, index, mousePosition }) => {
    const [isVisible, setIsVisible] = useState(false);
    const cardRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => setIsVisible(true), index * 200);
                }
            },
            { threshold: 0.2 }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => observer.disconnect();
    }, [index]);

    // Subtle card tilt based on mouse position
    const tiltX = mousePosition.y * 5;
    const tiltY = mousePosition.x * -5;

    return (
        <div
            ref={cardRef}
            className={`group relative p-10 rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 
        hover:border-white/20 hover:from-white/[0.12] hover:to-white/[0.04] 
        transition-all duration-700 ease-out cursor-pointer
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
            style={{
                transform: isVisible ? `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)` : 'translateY(64px)',
            }}
        >
            {/* Stage Number */}
            <div className="absolute -top-5 left-8">
                <span className="inline-flex items-center justify-center w-10 h-10 bg-white text-black text-sm font-bold rounded-full shadow-lg">
                    {feature.stage}
                </span>
            </div>

            {/* Icon */}
            <div className="mb-8 text-white/60 group-hover:text-white group-hover:scale-110 transition-all duration-500">
                {feature.icon}
            </div>

            {/* Title */}
            <h3 className="text-3xl font-bold mb-4 text-white group-hover:text-white transition-colors">
                {feature.title}
            </h3>

            {/* Description */}
            <p className="text-lg text-white/50 leading-relaxed group-hover:text-white/70 transition-colors duration-300">
                {feature.description}
            </p>

            {/* Hover Glow Effect */}
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                    background: 'radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.06), transparent 40%)'
                }}
            />
        </div>
    );
};

const Features = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        const handleMouseMove = (e) => {
            if (sectionRef.current) {
                const rect = sectionRef.current.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width - 0.5;
                const y = (e.clientY - rect.top) / rect.height - 0.5;
                setMousePosition({ x, y });
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            observer.disconnect();
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <section ref={sectionRef} className="relative py-32 lg:py-40 px-6 lg:px-12">
            {/* Background Glow - Interactive */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div
                    className="absolute top-1/3 -left-40 w-[500px] h-[500px] bg-white/[0.03] rounded-full blur-[100px] transition-transform duration-700 ease-out"
                    style={{
                        transform: `translate(${mousePosition.x * 40}px, ${mousePosition.y * 20}px)`,
                    }}
                />
                <div
                    className="absolute bottom-1/3 -right-40 w-[400px] h-[400px] bg-white/[0.02] rounded-full blur-[100px] transition-transform duration-700 ease-out"
                    style={{
                        transform: `translate(${mousePosition.x * -30}px, ${mousePosition.y * -15}px)`,
                    }}
                />
            </div>

            <div className="relative max-w-7xl mx-auto">
                {/* Section Header */}
                <div className={`text-center mb-24 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <span className="inline-block px-4 py-2 rounded-full border border-white/10 text-xs tracking-[0.3em] uppercase text-white/50 mb-8">
                        How It Works
                    </span>
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-white">
                        The Journey to the{' '}
                        <span className="bg-gradient-to-r from-white to-white/50 bg-clip-text text-transparent">Summit</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-white/40 max-w-2xl mx-auto leading-relaxed">
                        Less prep stress, more trail time.
                    </p>
                </div>

                {/* Feature Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                    {features.map((feature, index) => (
                        <FeatureCard key={feature.stage} feature={feature} index={index} mousePosition={mousePosition} />
                    ))}
                </div>

                {/* Human touch - testimonial style */}
                <div className={`text-center mt-20 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    <p className="text-white/30 text-lg italic max-w-xl mx-auto">
                        "We've spent hundreds of hours on trails, and too many of them figuring out what to wear. Now we just check the app."
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Features;
