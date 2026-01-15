'use client';
import { useEffect, useState } from 'react';

export default function Works() {
  const [activeTab, setActiveTab] = useState('instagram');
  const [data, setData] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [expanded, setExpanded] = useState(false);
  useEffect(() => {
    fetch('/assets/js/result.json')
      .then(res => res.json())
      .then(json => setData(json));
  }, []);
  if (!data) return null;
  const instagramData = data[0].instagram;
  const puzzleData = data[1].puzzle;
  return (
    <section id="works" className="container">
      <h2> Pekerjaan Saya </h2>
      <nav id="works-nav">
        <ul>
          <li>
            <a
              href="#"
              className={`works-nav ${activeTab === 'instagram' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                setActiveTab('instagram');
                setCurrentSlide(0);
                setExpanded(false);
              }}
            >
              Instagram Design
            </a>
          </li>

          <li>
            <a
              href="#"
              className={`works-nav ${activeTab === 'puzzle' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                setActiveTab('puzzle');
              }}
            >
              Puzzle Design
            </a>
          </li>

          <li>
            <a
              href="#"
              className={`works-nav ${activeTab === 'website' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                setActiveTab('website');
              }}
            >
              Website
            </a>
          </li>
        </ul>
      </nav>

      <div id="works-nav-content">
        {activeTab === 'instagram' && (
          <>
            {instagramData
              .slice(0, currentSlide + 1)
              .map((slide, index) => (
                <div key={index} className="slide slide-ig fade-in">
                  {slide.image.map((img, i) => (
                    <img
                      key={i}
                      src={img.src}
                      width={img.width}
                      height={img.height}
                      loading="lazy"
                      alt="project-gallery"
                    />
                  ))}
                </div>
              ))}

            <button
              id="load-more"
              onClick={() => {
                if (!expanded && currentSlide < instagramData.length - 1) {
                  setCurrentSlide(currentSlide + 1);
                  if (currentSlide + 1 === instagramData.length - 1) {
                    setExpanded(true);
                  }
                } else {
                  setCurrentSlide(0);
                  setExpanded(false);
                }
              }}
            >
              {expanded ? 'Tutup Lebih Sedikit' : 'Buka Lebih Banyak'}
            </button>
          </>
        )}

        {activeTab === 'puzzle' && (
          <>
            {puzzleData.map((item, index) => (
              <div key={index} className="slide fade-in works-nav-content-puzzle">
                {item.image.map((img, i) => (
                  <img
                    key={i}
                    src={img.src}
                    width={img.width}
                    height={img.height}
                    loading="lazy"
                    alt="project-gallery"
                  />
                ))}
              </div>
            ))}
          </>
        )}

        {activeTab === 'website' && (
          <div className="slide fade-in works-nav-content-website">
            {[
              'https://susuetawa.id',
              'https://revou-fundamental-course.github.io/17-mar-25-Serba25-JD/'
            ].map((url, i) => (
              <iframe
                key={i}
                src={`${url}?nocache=${Date.now()}`}
                width="100%"
                height="500"
                style={{ border: 'none' }}
                loading="lazy"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}