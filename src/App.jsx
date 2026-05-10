import '@fontsource/lato/300.css';
import '@fontsource/lato/400.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import React, { Suspense, lazy, useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
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
const DofProj = lazy(() => import("./pages/DofProj"));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
function AnimationObserver() {
  const { pathname } = useLocation();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Raz pokazany element nie musi być już obserwowany
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    const observeElements = () => {
      const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
      elementsToAnimate.forEach(el => {
        // Jeśli element jest już widoczny, nie obserwuj go
        if (!el.classList.contains('visible')) {
          observer.observe(el);
        }
      });
    };

    // Obserwuj natychmiast i po krótkim czasie dla lazy loading
    observeElements();
    const timeoutId = setTimeout(observeElements, 500);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <AnimationObserver />
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
            <Route path="/wspolpraca" element={<Wspolpraca />} />
            <Route path="/sniadania" element={<Breakfest />} />
            <Route path="/weekendy-tematyczne" element={<Weekendy />} />
            <Route path="/winnica-zamojska" element={<WinnicaZamojska />} />
            <Route path="/pole-namiotowe" element={<PoleNamiotowe />} />
            <Route path="/dofinansowania-projekty" element={<DofProj />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </HelmetProvider>
  )
}

export default App;
