import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BaofnBanner } from './components/BaofnBanner';
import { Products } from './components/Products';
import { Solutions } from './components/Solutions';
import { Services } from './components/Services';
import { Industries } from './components/Industries';
import { About } from './components/About';
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
        <BaofnBanner />
        <Products />
        <Solutions />
        <Services />
        <Industries />
        <About />
        <Operations />
        <CoreValues />
        <Map />
      </main>
      <Footer />
    </div>
  );
}
