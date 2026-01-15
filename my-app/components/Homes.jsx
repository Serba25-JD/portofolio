'use client';
import { useEffect, useState } from "react";

export default function Homes() {
    const [bgIndex, setBgIndex] = useState(0);
    const backgrounds = [
        '/assets/image/main/profile-two.webp',
        '/assets/image/main/profile-three.webp',
        '/assets/image/main/profile-four.webp',
        '/assets/image/main/profile-five.webp'
    ];
    useEffect(() => {
        const interval = setInterval(() => {
            setBgIndex(prev => (prev + 1) % backgrounds.length);
        }, 60 * 1000);
        return () => clearInterval(interval);
    }, []);
    return (
        <section id="home" className="container" style={{backgroundImage: `url(${backgrounds[bgIndex]})`}}>
            <h1> Portofolio - Junior Programmer </h1>
            <a href="#" className="download-cv"> Download CV </a>
        </section>
    )
};