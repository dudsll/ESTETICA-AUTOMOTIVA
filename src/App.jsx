import "./App.css";
import { Route, Routes } from "react-router-dom";
import HeaderPrincipal from "../src/components/header/headerPrincipal.jsx";
import Footer from "../src/components/footer/footer.jsx";
import Menu from "../src/components/menu/menu.jsx";
import Contato from "./pages/Contato.jsx";
import Home from "./pages/Home.jsx";
import { Portfolio } from "./pages/Portfolio.jsx";

function App() {
  return (
    <>
      <HeaderPrincipal />
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
