import { useEffect } from "react";
import Carousel from "../../components/Carousel";
import Hero from "../../components/Hero";

import "./Index.css"
import TicketPage from "../Ticket";

export default function Index() {

  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();
      const delta = e.deltaY * 0.35;
      window.scrollBy({ top: delta });
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <main>
      <section className="hero-section" id="hero">
        <Hero />
      </section>
      <section className="carousel-section" id="about">
        <h2 className="about">About holamozilla</h2>
        <p className="about-text">
          Open to students of Sri Lanka
          Institute of Information Technology (SLIIT),<br />
          Who are interested in joining
          Mozilla Campus Club of SLIIT.
        </p>
        <Carousel />
      </section>
      <TicketPage />
    </main>
  )
}