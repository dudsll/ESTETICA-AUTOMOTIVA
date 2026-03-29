import "./App.css";
import Header from "../src/components/header/header.jsx";
import Main from "../src/components/main/main.jsx";
import Footer from "../src/components/footer/footer.jsx";
import Menu from "../src/components/menu/menu.jsx";

function Home() {
  return (
    <>
      <Header />
      <Menu />
      <Main />
      <Footer />
    </>
  );
}

export default Home;
