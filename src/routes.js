import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Gryffindor from "./pages/gryffindor";
import Home from "./pages/home";

export default function AppRouter() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/grifinoria" element={<Gryffindor />} />
      </Routes>
    </Router>
  );
}
