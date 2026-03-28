import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Operations } from './components/Operations';
import { CoreValues } from './components/CoreValues';
import { Map } from './components/Map';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Operations />
        <CoreValues />
        <Map />
        <Footer />
      </main>
    </div>
  );
}
