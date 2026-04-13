import {
    FaLaptopCode,
    FaUserTie,
    FaBullseye,
    FaMoneyBillWave,
    FaClock,
    FaMedal,
  } from "react-icons/fa";

const WhyLogin = () => {
    return(
        <section className="section" id="why-us">
            <div className="container text-center">
            <span className="section-label">why Login360 is Different ?</span>
            <h2 className="section-title">Why 5000+ Students Choose Login360</h2>
            <p className="section-sub">
                We don't just teach — we train you to get placed. Here's what makes us different from other institutes.
            </p>
            <div className="features-grid">
                {[
                    { icon: <FaLaptopCode size={22} />,     title: 'Real-Time Project Training',      desc: 'Work on live industry projects, not just theory. Build a strong portfolio that impresses recruiters.' },
                    { icon: <FaUserTie size={22} />,        title: 'Expert Trainers',                 desc: 'Learn from working IT professionals with 10+ years of industry experience — not just teachers.' },
                    { icon: <FaBullseye size={22} />,       title: '100% Placement Support',          desc: "We don't stop until you're placed. Resume help, mock interviews, HR support — all included." },
                    { icon: <FaMoneyBillWave size={22} />,  title: 'Affordable Fees',                 desc: 'Quality training at a price every student can afford. Easy EMI options also available.' },
                    { icon: <FaClock size={22} />,          title: 'Flexible Timings',                desc: 'Morning, evening, weekend batches available. Study without disturbing your current schedule.' },
                    { icon: <FaMedal size={22} />,          title: 'Industry-Recognised Certificate', desc: 'Get a certificate that is recognised by top IT companies across India.' },
                ].map((f) => (
                <div className="feature-card" key={f.title}>
                    <div className="feature-icon">{f.icon}</div>
                    <h3>{f.title}</h3>
                    <p>{f.desc}</p>
                </div>
                ))}
            </div>
            </div>
        </section>
    )
}

export default WhyLogin;