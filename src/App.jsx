import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
import Testimonial from "./sections/Testimonial";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

function App() {
  return (
    <div className="container mx-auto max-w-8xl">
      <Navbar />

      <main>
        <section id="home" className="section py-4">
          <Hero />
        </section>
        <section id="about" className="section py-4">
          <About />
        </section>
        <section id="projects" className="section py-4">
          <Projects />
        </section>
        <section id="experiences" className="section py-4">
          <Experiences />
        </section>
        {/* <section id="testimonials" className="section py-4">
          <Testimonial />
        </section> */}
        <section id="contact" className="section py-4">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
