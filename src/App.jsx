import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "../src/components/header/headerPrincipal.jsx";
import Footer from "../src/components/footer/footer.jsx";
import Menu from "../src/components/menu/menu.jsx";
import Contato from "./pages/Contato.jsx";
import Home from "./pages/Home.jsx";
import { Portfolio } from "./pages/Portfolio.jsx";
import HeaderPrincipal from "../src/components/header/headerPrincipal.jsx";

function App() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      <Header isHome={isHome} />
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
