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
import GlassSurface from "./components/GlassSurface";

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
function App() {
  return (
    <>
      <BrowserRouter>
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
      </BrowserRouter>
    </>
  );
}

export default App;
