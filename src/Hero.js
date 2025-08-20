
import React, { useState, useEffect } from "react";
import "./Hero.css";
import { carouselImages } from "./carouselData";


function Hero() {
    const [current, setCurrent] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % carouselImages.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    // Show 3 images: previous, current, next (looped)
    const getDisplayImages = () => {
        const total = carouselImages.length;
        if (total < 3) return carouselImages;
        const prev = (current - 1 + total) % total;
        const next = (current + 1) % total;
        return [carouselImages[prev], carouselImages[current], carouselImages[next]];
    };

    return (
        <section className="hero-container">
            <div className="hero-content">
                <h1 className="hero-title">Hola Mozilla</h1>

                <div className="coming-next-section">
                    {/* <h2 className="coming-next-title">Stay tuned</h2> */}
                    <p className="hero-subtitle"> Orientation program for the
                        Mozilla Campus Club of SLIIT</p>
                </div>
                <div className="carousel carousel-multi">
                    {getDisplayImages().map((img, idx) => (
                        <img
                            key={idx}
                            src={img}
                            alt={`carousel-img-${idx}`}
                            className={
                                "carousel-img" + (idx === 1 ? " carousel-img-active" : "")
                            }
                            style={{ zIndex: idx === 1 ? 2 : 1, opacity: idx === 1 ? 1 : 0.7, transform: idx === 1 ? 'scale(1.08)' : 'scale(0.92)' }}
                        />
                    ))}
                </div>
                <div className="carousel-status carousel-status-dots">
                    {carouselImages.map((_, idx) => (
                        <span
                            key={idx}
                            className={"carousel-status-dot" + (idx === current ? " active" : "")}
                        />
                    ))}
                </div>
            </div>
            <div className="hero-bg-shape"></div>
        </section>
    );
}

export default Hero;
