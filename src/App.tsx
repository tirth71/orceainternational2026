
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import { FloatingActions } from "./components/FloatingActions";

// Pages
import Home from "./pages/index";
import About from "./pages/about";
import Contact from "./pages/contact";
import Divisions from "./pages/divisions";
import Academy from "./pages/academy";
import TradeIntel from "./pages/trade-intelligence";
import Consulting from "./pages/consulting";
import Digital from "./pages/digital";
import Logistics from "./pages/logistics";
import Exports from "./pages/exports";
import ScrollToTop from './components/ScrollToTop';
import TradeIntelligence from "./pages/TradeIntelligence";

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/divisions" element={<Divisions />} />

        <Route path="/academy" element={<Academy />} />
       
        <Route path="/consulting" element={<Consulting />} />
        <Route path="/digital" element={<Digital />} />
        <Route path="/logistics" element={<Logistics />} />
        <Route path="/exports" element={<Exports />} />
        <Route path="/trade-intelligence" element={<TradeIntelligence />} />
      </Routes>

      <Footer />
      <FloatingActions />
    </BrowserRouter>
  );
}

export default App;
