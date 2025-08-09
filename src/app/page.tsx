import Features from '../components/Features';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import KPIs from '../components/KPIs';
import News from '../components/News';
import Sustainability from '../components/Sustainability';

export default function Home() {
  return (
    <div className="font-sans min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <KPIs />
        <Sustainability />
        <Features />
        <News />
      </main>
      <Footer />
    </div>
  );
}
