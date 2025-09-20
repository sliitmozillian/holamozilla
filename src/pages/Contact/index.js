import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Contact.css";
import { faArrowRight, faAt, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  return (
    <main className="contact">
      <h2>Contact us</h2>
      <section className="contact-section">
        <div className="contact-link">
          <a
            href="https://www.sliitmozilla.org//"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGlobe} />
            <div>Our website</div></a>
        </div>
        <div className="contact-link">
          <a
            href="mailto:info@sliitmozilla.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faAt} />
            <div>Contact email</div></a>
        </div>
        <div className="contact-link">
          <a
            href="https://facebook.com/sliitmozilla"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} />
            <div>Facebook</div></a>
        </div>
        <div className="contact-link">
          <a
            href="https://instagram.com/sliitmozilla"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
            <div>Instagram</div></a>
        </div>
        <div className="contact-link">
          <a
            href="https://links.sliitmozilla.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faArrowRight} />
            <div>Explore all our links</div></a>
        </div>
        <p>For general inquiries, please visit our <a
          href="https://www.sliitmozilla.org/contact/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Main Contact Page
        </a></p>
      </section>
    </main>
  );
}
