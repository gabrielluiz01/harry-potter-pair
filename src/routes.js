import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Gryffindor from "./pages/gryffindor";
import Slytherin from "./pages/slytherin";
import Home from "./pages/home";
import Ravenclaw from "./pages/ravenclaw";
import Hufflepuff from "./pages/hufflepuff";

export default function AppRouter() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gryffindor" element={<Gryffindor />} />
        <Route path="/slytherin" element={<Slytherin />} />
        <Route path="/ravenclaw" element={<Ravenclaw />} />
        <Route path="/hufflepuff" element={<Hufflepuff />} />
      </Routes>
    </Router>
  );
}
