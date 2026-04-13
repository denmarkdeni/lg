import { useState } from "react";

const DEMOS = [
  { id: "_WtlKB8sqzg", label: "E-Commerce Demo"  },
  { id: "5ehUZptMNL0", label: "Job Portal Demo"   },
  { id: "HY3e-TOnKVc", label: "Dashboard Demo"    },
  { id: "B4RN3Nv57Js", label: "AI Chatbot Demo"   },
];

function DemoCard({ id, label }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="demo-card">
      <div className="demo-frame">
        {!loaded && (
          <div className="vid-skel">
            <div className="play-btn">
              <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
            </div>
          </div>
        )}
        <iframe
          src={`https://www.youtube.com/embed/${id}`}
          loading="lazy"
          allowFullScreen
          title={label}
          onLoad={() => setLoaded(true)}
          style={{ opacity: loaded ? 1 : 0, transition: "opacity 0.3s" }}
        />
      </div>
      <div className="demo-label">{label}</div>
    </div>
  );
}

function Projects({ onCta }) {
  return (
    <section className="section" id="projects">
      <div className="section-head reveal">
        <span className="section-tag">💻 Projects</span>
        <h2>
          Build Real Projects &amp;<br />
          <span className="highlight">Become Job-Ready</span> 💻
        </h2>
        <p>Students build real-time industry projects that go directly into their resume</p>
      </div>

      {/* ── Project Demo Videos ── */}
      <div className="proj-demos-wrap">
        <div className="section-head reveal" style={{ marginBottom: 16 }}>
          <h3 className="proj-demos-title">🎬 Watch Project Demos</h3>
        </div>

        <div className="proj-demos reveal">
          {DEMOS.map((d) => (
            <DemoCard key={d.id} {...d} />
          ))}
        </div>
      </div>

      {/* ── CTA ── */}
      <div className="proj-cta reveal">
        <button
          className="btn-g"
          onClick={() => onCta("Home - Start Building Projects")}
        >
          🚀 Start Building Projects Today
        </button>
      </div>
    </section>
  );
}

export default Projects;    