import "./Contact.css";

// credits to this guy: <a href="https://www.flaticon.com/free-stickers/hacker" title="hacker stickers">Hacker stickers created by stickerfolio - Flaticon</a>

export default function Contact() {
  return (
    <main className="contact">
      <section className="contact-information">
        <img className="hacker-fox" src="hacker-fox.png" />
        <h2>Contact Us</h2>
        <p>
          Email us at{" "}
          <a href="mailto:infosliitmcss@gmail.com">
            infosliitmcss@gmail.com
          </a>
        </p>
        <p>
          For general inquiries, please visit our{" "}
          <a
            href="https://www.sliitmozilla.org/contact/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Main Contact Page
          </a>
        </p>
        <p>
          Explore all our links here:{" "}
          <a
            href="https://links.sliitmozilila.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            links.sliitmozilila.org
          </a>
        </p>
      </section>
    </main>
  );
}
