import Navbar from "../components/sections/Navbar";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Footer from "../components/sections/Footer";
import Members from "../components/sections/Members";
import Events from "../components/sections/Events";

const Index = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Events></Events>
      <Members></Members>
      <Footer></Footer>
    </div>
  );
};

export default Index;
