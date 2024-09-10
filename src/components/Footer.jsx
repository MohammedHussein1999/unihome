import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer  bg-neutral  text-neutral-content p-10">
      <nav>
        <h6 className="footer-title">Company</h6>
        <Link to="" className="link link-hover">
          Contact
        </Link>
        <Link to="" className="link link-hover">
          Portfolio
        </Link>
        <Link to="" className="link link-hover">
          Blog
        </Link>
        <Link to="" className="link link-hover">
          Our team
        </Link>
        <Link to="" className="link link-hover">
          Get in Touch
        </Link>
        <Link to="" className="link link-hover">
          FAQ
        </Link>
        <Link to="" className="link link-hover">
          Latest news
        </Link>
      </nav>
      <nav>
        <h6 className="footer-title">Platform</h6>
        <Link to="" className="link link-hover">
          Shop
        </Link>
        <Link to="" className="link link-hover">
          Pricing
        </Link>
        <Link to="" className="link link-hover">
          Landing
        </Link>
      </nav>
      <nav>
        <h6 className="footer-title">Subscribe</h6>
        <Link to="" className="link link-hover">
          About us
        </Link>
        <Link to="" className="link link-hover">
          Contact
        </Link>
        <Link to="" className="link link-hover">
          Reviews
        </Link>
        <Link to="" className="link link-hover">
          Services
        </Link>
      </nav>
    </footer>
  );
}
