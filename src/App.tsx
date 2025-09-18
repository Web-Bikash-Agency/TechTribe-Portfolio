// import WelcomeScreen from "./components/WelcomeScreen";
import WelcomeScreen from "./components/WelcomeScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Index from "./pages/Index"
import NotFound from "./pages/NotFound"
import { useState } from "react";

const App = () => {
 const [showSplash, setShowSplash] = useState(true);

  return (
   <>
      {showSplash ? (
        <WelcomeScreen onComplete={() => setShowSplash(false)} duration={3000} />
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      )}
    </>
  )
}

export default App