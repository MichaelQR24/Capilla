/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import About from './components/About';
import Activities from './components/Activities';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Hero from './components/Hero';
import Location from './components/Location';
import Navbar from './components/Navbar';
import News from './components/News';
import Sacraments from './components/Sacraments';
import Schedule from './components/Schedule';
import DailyGospel from './components/DailyGospel';
import Donations from './components/Donations';
import Events from './components/Events';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen bg-chapel-beige font-sans text-chapel-text selection:bg-chapel-gold/30">
      <Navbar />
      <main>
        <Hero />
        <DailyGospel />
        <About />
        <Schedule />
        <Activities />
        <Events />
        <Sacraments />
        <Gallery />
        <Donations />
        <News />
        <Location />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
