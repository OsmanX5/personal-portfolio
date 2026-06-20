import {
  About,
  Contact,
  Education,
  Experience,
  Footer,
  Hero,
  Navbar,
  Skills,
  Works,
} from "./components";
import Aurora from "./components/Aurora";
import { ResumeProvider, useResume } from "./context/ResumeContext";
import Loader from "./components/Loader";

// Fixed ambient background: soft aurora glow over deep space + dotted grid.
function MainBG() {
  return (
    <div className="fixed inset-0 -z-10 bg-bg">
      <div className="absolute inset-0 opacity-70">
        <Aurora
          colorStops={["#0A2A6B", "#3730A3", "#0A84FF"]}
          blend={0.6}
          amplitude={1.1}
          speed={0.7}
        />
      </div>
      <div className="absolute inset-0 bg-grid opacity-40" />
      {/* Vignette so content stays readable over the glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,transparent_0%,rgba(5,5,16,0.6)_70%)]" />
    </div>
  );
}

function AppContent() {
  const { loading, error } = useResume();

  if (loading) {
    return (
      <>
        <MainBG />
        <div className="flex h-screen items-center justify-center">
          <Loader />
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <MainBG />
        <div className="flex h-screen items-center justify-center px-6">
          <div className="glass max-w-md rounded-2xl p-8 text-center">
            <h2 className="font-display text-2xl font-bold text-ink">
              Couldn't load the resume
            </h2>
            <p className="mt-3 text-muted">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-6 rounded-xl bg-gradient-to-r from-accent to-accent-2 px-6 py-2.5 font-semibold text-white"
            >
              Try again
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <MainBG />
      <Navbar />
      <main className="relative z-0">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Works />
        <Education />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

function App() {
  return (
    <ResumeProvider>
      <AppContent />
    </ResumeProvider>
  );
}

export default App;
