import { useEffect } from "react";
import Carousel from "../../components/Carousel";
import Hero from "../../components/Hero";

import "./Index.css"

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
      <section className="tickets">
        <h2 className="ticket-header">Get your ticket now</h2>
        <p>
          Share your ticket on social media and let everyone know you’re here!
        </p>
        <img src="/ticket-placeholder.png" width={500} height={300} />
        <div className="ticket-placer-section">
          <input type="text" placeholder="Enter your name" />
          <button>Grab it!</button>
        </div>
      </section>
    </main>
  )
}