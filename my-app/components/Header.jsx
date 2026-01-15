'use client';
import { useEffect, useState, useRef } from 'react';
import Image from "next/image";
import { headers, mobiles } from "@/public/assets/js/header";

function HeaderDesktop({href, id, name, isActive, onClick}) {
    return (
        <li>
            <a href={href} id={id} className={`list-nav ${isActive ? 'active' : ''}`} onClick={onClick}> {name} </a>
        </li>
    )
};

function HeaderMobiles({href, image, alt}) {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer">
            <Image src={image} width="24" height="24" alt={alt} priority />
        </a>
    )
};

function HeaderMobile({ onMenuClick }) {
    return (
        <section className="mobile-nav" id="mobile-nav">
            {mobiles.map((item => (
                <HeaderMobiles key={item.alt} href={item.href} image={item.image} alt={item.alt} />
            )))}
            <Image src="assets/image/main/menu.svg" width="24" height="24" alt="menu" id="menu" priority onClick={onMenuClick} />
        </section>
    )
};

export default function Header() {
    const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);
    const [showHeader, setShowHeader] = useState(false);
    const headerRef = useRef(null);
    const [activeSection, setActiveSection] = useState('home');
    // Detect Screen
    useEffect(() => {
    const mobile = window.matchMedia('(max-width: 900px)');
    const handleResize = () => setIsMobileOrTablet(mobile.matches);
    handleResize();
    mobile.addEventListener('change', handleResize);
    return () => mobile.removeEventListener('change', handleResize); }, []);
    // Click Outside
    useEffect(() => {
    function handleClickOutside(e) {
      if (
        isMobileOrTablet &&
        headerRef.current &&
        !headerRef.current.contains(e.target)
      ) {
        setShowHeader(false);
      }
    }
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
    }, [isMobileOrTablet]);
    // Scroll
    useEffect(() => {
        const sections = ['home', 'about', 'skills', 'educations', 'experiences', 'works', 'contact'];
        const handleScroll = () => {
            for (let id of sections) {
                const el = document.getElementById(id);
                if (!el) continue;
                const rect = el.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    setActiveSection(id);
                    break;
                };
            };
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    // Handle Nav
    const handleNavClick = (e, href) => {
        e.preventDefault();
        const id = href.replace('#', '');
        const el = document.getElementById(id);
        if (el) { el.scrollIntoView({ behavior: 'smooth' }); setActiveSection(id); };
        if (isMobileOrTablet) {
            setShowHeader(false);
            setActiveSection(null);
        } else {
            setActiveSection(id);
        };
    };
    return (
        <header id="header-content" className={isMobileOrTablet && showHeader ? "active": undefined } ref={headerRef}>
            <section id="header-container" style={{display: isMobileOrTablet ? showHeader ? "flex": "none" : undefined}}>
                <div>
                    <Image src="/assets/image/main/profile-first.webp" width={651} height={1156} alt="Jeremi Salvatores Sihotang" priority />
                </div>
                <nav>
                    <ul>
                        {headers.map(item => {
                            const sectionId = item.href.replace('#', '');
                            return (
                                <HeaderDesktop key={item.id} href={item.href} id={item.id} name={item.name} isActive={activeSection === sectionId} onClick={(e) => handleNavClick(e, item.href)}/>
                            );
                        })}
                    </ul>
                </nav>
            </section>
            {isMobileOrTablet && (
                <HeaderMobile onMenuClick={() => setShowHeader(prev => !prev)} />
            )}
        </header>
    );
};