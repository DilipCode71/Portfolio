import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Skills from "./Pages/Skills";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

function App() {
  return (
    <div className="min-h-screen w-full bg-[#000000] text-white font-sans relative">
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "#000000",
          backgroundImage: `
            radial-gradient(circle, rgba(255, 255, 255, 0.2) 1.5px, transparent 1.5px)
          `,
          backgroundSize: "30px 30px",
        }}
      />
      <div className="relative z-10">
        <Navbar />
        <main className="pt-16 space-y-8">
          <Home />
          <Projects/>
          <Skills/>
          <About/>
          <Contact/>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
