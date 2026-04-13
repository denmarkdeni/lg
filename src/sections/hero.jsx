import LeadForm from "../components/lead_form";

const Hero = () => {
    return(
        <section className="hero">
        <div className="container">
          <div className="hero-content">
            <span className="hero-badge">#1 Data Analytics Institute in Chennai</span>
            <h1>
              Get a High-Paying IT Job in{' '}
              <span>90 Days</span> — No Coding Background Needed
            </h1>
            <p className="hero-desc">
              Join Login360's Data Analytics Course and transform your career with real skills,
              real projects, and real placement support.
            </p>
            <ul className="hero-bullets">
              <li>Industry-relevant curriculum: Excel, SQL, Python &amp; Power BI</li>
              <li>100% Placement Assistance until you get placed</li>
              <li>Trained by IT professionals with 10+ years experience</li>
              <li>Batch starts soon — Weekend &amp; Weekday options available</li>
              <li>Offline classes in Chennai + Online option available</li>
            </ul>
            <div className="btn-group">
              <a href="#enroll" className="btn btn-accent btn-lg">🎓 Enroll Now</a>
              <a href="https://wa.me/918056477261?text=Hi%20Login360%2C%20I%20want%20to%20know%20about%20Data%20Analytics%20Course" className="btn btn-ghost btn-lg">
                💬 WhatsApp Us
              </a>
              <a href="tel:+918056477261" className="btn btn-ghost btn-lg">📞 Call Now</a>
            </div>

            <div className="hero-stats">
              {[
                { value: '3000+', label: 'Students Placed' },
                { value: '4.9 / 5', label: 'Rating' },
                { value: '10+', label: 'Years Experience' },
                { value: '3', label: 'Locations' },
              ].map((s) => (
                <div className="hero-stat-item" key={s.label}>
                  <span className="hero-stat-value">{s.value}</span>
                  <span className="hero-stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
 
          <LeadForm />
        </div>
      </section>
    )
}

export default Hero;