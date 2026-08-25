import { Header } from "./sections/Header";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Stats } from "./sections/Stats";
import { VirtualTour } from "./sections/VirtualTour";
import { Differentials } from "./sections/Differentials";
// Methodology: ocultada a pedido de la dirección — el componente sigue en
// src/sections/Methodology.tsx por si se reactiva más adelante.
// import { Methodology } from "./sections/Methodology";
import { CoordinatorVideo } from "./sections/CoordinatorVideo";
import { Modules } from "./sections/Modules";
import { Faculty } from "./sections/Faculty";
import { Quote } from "./sections/Quote";
import { Testimonials } from "./sections/Testimonials";
import { Facility } from "./sections/Facility";
import { FAQ } from "./sections/FAQ";
import { FinalCTA } from "./sections/FinalCTA";
import { Footer } from "./sections/Footer";
import { FormModalProvider } from "./components/ui/FormModalContext";
import { RespondiFormModal } from "./components/ui/RespondiFormModal";

function App() {
  return (
    <FormModalProvider>
      <Header />
      <main>
        <Hero />
        <Differentials />
        <About />
        <Stats />
        <VirtualTour />
        <CoordinatorVideo />
        <Modules />
        <Faculty />
        <Quote />
        <Testimonials />
        <Facility />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <RespondiFormModal />
    </FormModalProvider>
  );
}

export default App;
