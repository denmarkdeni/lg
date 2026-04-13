const REELS = [
    { id: "DNhf3H-Juum",  label: "Kavitha – Java Batch"       },
    { id: "DNcpfa2xUrx",  label: "Arjun – Python Batch"       },
    { id: "DR6L8oiiRxt",  label: "Meena – Data Analytics"     },
    { id: "DWanlWZifGF",  label: "Karthik – Full Stack"       },
    { id: "DWQWQu_icYC",  label: "Divya – Power BI Batch"     },
    { id: "DWYy3hUCVYi",  label: "Suresh – SQL Batch"         },
  ];
  
  function Feedback() {
    return (
      <section className="section" id="feedback">
        <div className="section-head reveal">
          <span className="section-tag">Student Love</span>
          <h2>What Our Students Say ❤️</h2>
          <p>Unscripted, raw feedback from our alumni</p>
        </div>
  
        <div className="reels-grid reveal">
          {REELS.map((reel) => (
            <div className="reel-card" key={reel.id}>
              <div className="reel-frame">
                <iframe
                  src={`https://www.instagram.com/reel/${reel.id}/embed/`}
                  loading="lazy"
                  allowFullScreen
                  allowTransparency
                  scrolling="no"
                  title={reel.label}
                />
              </div>
              <div className="reel-label">{reel.label}</div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default Feedback;