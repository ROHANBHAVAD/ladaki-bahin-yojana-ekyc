import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/layout/ScrollToTop";
import Home from "./pages/Home";
import LadkiBahin from "./pages/LadkiBahin";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Disclaimer from "./pages/Disclaimer";
import NotFound from "./pages/NotFound";
import SearchResults from "./pages/SearchResults"; // New import

function App() {
  return (
    <>
      <ScrollToTop />
      
      <Navbar />
      
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ladki-bahin" element={<LadkiBahin />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/search" element={<SearchResults />} /> // New route
          <Route path="*" element={<NotFound />} />
        </Routes>
        
        <Footer />
      </main>
    </>
  );
}

export default App;