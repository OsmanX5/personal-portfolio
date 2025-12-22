import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import Aurora from "./components/Aurora";
import { ResumeProvider, useResume } from "./context/ResumeContext";
import Loader from "./components/Loader";

function MainBG() {
  console.log("Rendering MainBG");
  return (
    <div className="z-[-1] fixed inset-0 bg-[#060010]">
      <Aurora
        colorStops={["#1E1B4B", "#3730A3", "#6366F1"]}
        blend={0.5}
        amplitude={2.0}
        speed={1}
      />
    </div>
  );
}

function AppContent() {
  const { loading, error } = useResume();

  if (loading) {
    return (
      <>
        <MainBG />
        <div className="flex items-center justify-center h-screen">
          <Loader />
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <MainBG />
        <div className="flex items-center justify-center h-screen">
          <div className="text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Error Loading Data</h2>
            <p>{error}</p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <MainBG />
      <div className="z-0">
        <div>
          <Navbar />
          <Hero />
        </div>
        <About />

        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </>
  );
}

function App() {
  return (
    <ResumeProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </ResumeProvider>
  );
}

export default App;
