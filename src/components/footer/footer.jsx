import "./footer.css";
import Logo from "/src/assets/logogit.jpeg";

function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="conteudo-footer">
          <p>
            &copy; 2026 Eduardo Garage Estética Automotiva. Todos os direitos
            reservados.
          </p>
        </div>
        <div className="github-link">
          <a
            href="https://github.com/dudsll"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={Logo}
              alt="GitHub logo, click to visit Eduardo Garage portfolio on GitHub"
              className="github-icon"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
