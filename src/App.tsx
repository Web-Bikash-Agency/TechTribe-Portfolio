

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Index from "./pages/Index"
import NotFound from "./pages/NotFound"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
    </Router>
  )
}

export default App