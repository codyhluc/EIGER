import Hero from './components/Hero';
import Features from './components/Features';
import Platforms from './components/Platforms';
import Waitlist from './components/Waitlist';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <Hero />
      <Features />
      <Waitlist />
      <Platforms />
      <Footer />
    </div>
  );
}

export default App;
