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
function App() {
  return (
    <>
      <BrowserRouter>
        <div className="relative z-0 bg-[#01021e]">
          <div className="bg-[url('./assets/herobg-blue.png')] bg-cover bg-no-repeat bg-center mt-0">
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
