import { useState } from "react";

function HeroVideo() {
  const [loaded, setLoaded] = useState(false);

  return (
    <section className="hero-video-section" aria-label="Login360 Success Meet Video">
      <div className="hero-video-wrap">
        {!loaded && (
          <div className="hero-video-overlay">
            <div className="hero-video-spinner" />
          </div>
        )}
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/9bdfTR64aIE?si=TaIHZpy0R9mYCvZe&autoplay=0&start=6"
          title="Login360 Success Meet"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          onLoad={() => setLoaded(true)}
        />
      </div>
    </section>
  );
}

export default HeroVideo;