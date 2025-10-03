import Navbar from "../components/sections/Navbar";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Highlights from "../components/sections/Highlights";
import Members from "../components/sections/Members";
import Footer from "../components/sections/Footer";

const Index = () => {
  return (
    <div>
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="highlights">
          <Highlights />
        </section>
        <section id="members">
          <Members />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
