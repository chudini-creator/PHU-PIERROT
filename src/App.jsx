import '@fontsource/lato/300.css';
import '@fontsource/lato/400.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect } from 'react';
import Home from "./pages/Home";
import Sklepy from "./pages/Sklepy";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Pierogarnia from "./pages/Pierogarnia";
import Grupy from "./pages/Grupy";
import Pokoje from "./pages/Pokoje";
import Apartamenty from "./pages/Apartamenty";
import StrefaRelaksu from "./pages/StrefaRelaksu";
import Wspolpraca from "./pages/Wspolpraca";
import Breakfest from "./pages/Breakfest";
import Weekendy from "./pages/Weekendy";
import WinnicaZamojska from './pages/WinnicaZamojska';
import PoleNamiotowe from './pages/PoleNamiotowe'
function App() {
  // Efekt do animacji przy przewijaniu
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 }); // 10% widoczne, to animacja

    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
    elementsToAnimate.forEach(el => observer.observe(el));

    // wyczyszczenie
    return () => elementsToAnimate.forEach(el => observer.unobserve(el));
  }, []);
  return(
  <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sklepy" element={<Sklepy />} />
        <Route path="/pierogarnia" element={<Pierogarnia />} />
        <Route path="/grupy-zorganizowane" element={<Grupy />} />
        <Route path="/pokoje" element={<Pokoje />} />
        <Route path="/apartamenty" element={<Apartamenty />} />
        <Route path="/strefa-relaksu" element={<StrefaRelaksu />} />
        <Route path="/współpraca" element={<Wspolpraca />} />
        <Route path="/śniadania" element={<Breakfest />} />
        <Route path="/weekendy-tematyczne" element={<Weekendy />} />
        <Route path="/winnica-zamojska" element={<WinnicaZamojska />} />
        <Route path="/pole-namiotowe" element={<PoleNamiotowe />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;

