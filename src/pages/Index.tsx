import Navbar from "../components/sections/Navbar"
import Hero from "../components/sections/Hero"
import About from "../components/sections/About"
import Highlights from "../components/sections/Highlights"
import Footer from "../components/sections/Footer"
import Members from "../components/sections/Members"
import ClickSpark from "@/components/ClickSpark"

const Index = () => {
  return (
    <div>
      <ClickSpark sparkColor='rgb(57, 255, 20)'
  sparkSize={10}
  sparkRadius={15}
  sparkCount={8}
  duration={400}>

      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Highlights></Highlights>
      <Members></Members>
      <Footer></Footer>
  </ClickSpark>
    </div>
  )
}

export default Index