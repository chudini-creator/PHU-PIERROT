import '@fontsource/lato/300.css';
import '@fontsource/lato/400.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Suspense, lazy, useEffect } from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";

const Home = lazy(() => import("./pages/Home"));
const Sklepy = lazy(() => import("./pages/Sklepy"));
const Pierogarnia = lazy(() => import("./pages/Pierogarnia"));
const Grupy = lazy(() => import("./pages/Grupy"));
const Pokoje = lazy(() => import("./pages/Pokoje"));
const Apartamenty = lazy(() => import("./pages/Apartamenty"));
const StrefaRelaksu = lazy(() => import("./pages/StrefaRelaksu"));
const Wspolpraca = lazy(() => import("./pages/Wspolpraca"));
const Breakfest = lazy(() => import("./pages/Breakfest"));
const Weekendy = lazy(() => import("./pages/Weekendy"));
const WinnicaZamojska = lazy(() => import("./pages/WinnicaZamojska"));
const PoleNamiotowe = lazy(() => import("./pages/PoleNamiotowe"));
const NotFound = lazy(() => import("./pages/NotFound"));
function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
    elementsToAnimate.forEach(el => observer.observe(el));

    return () => elementsToAnimate.forEach(el => observer.unobserve(el));
  }, []);
  return(
  <BrowserRouter>
      <Header />
      <Suspense
        fallback={
          <LoadingScreen
            title="Ładowanie strony"
            description="Przy słabszym internecie może to potrwać chwilę."
          />
        }
      >
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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
