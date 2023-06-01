import { Link } from "react-router-dom";
import "../../../index.css";
const Footer = () => {
  return (
    <div className="bg-black" style={{ fontFamily: "Roboto Slab" }}>
      <footer className="footer p-10 container mx-auto text-white">
        <div>
          <p>
            <a className="text-3xl font-bold italic text-yellow-500">CUCINIO</a>
            <br />
            Providing reliable Food since 1992
          </p>
        </div>
        <div>
          <span className="footer-title">Service</span>
          <a className="link link-hover">Qualityfull Food</a>
          <a className="link link-hover">Healthy Food</a>
          <a className="link link-hover">Fastest Delivery</a>
        </div>
        <div>
          <span className="footer-title">Menubar</span>
          <Link to="/" className="link link-hover">
            Home
          </Link>
          <Link to="/about" className="link link-hover">
            About us
          </Link>
          <Link to="/service" className="link link-hover">
            Service
          </Link>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
