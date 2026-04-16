// AboutPage.jsx
// Uses existing index.css classes — no inline styles needed.

import Branches from "../sections/branches";

export default function AboutPage() {
    const whyPoints = [
      { icon: "🚀", title: "Real-Time Project-Based Training", desc: "Learn by doing. Work on live projects that companies use, building a real portfolio." },
      { icon: "🤖", title: "AI-Integrated Learning Approach", desc: "We use AI tools to personalize your learning journey and track your progress in real-time." },
      { icon: "🎯", title: "Placement-Focused Curriculum", desc: "Every course is designed with placement outcomes in mind, not just theoretical knowledge." },
      { icon: "🤝", title: "Dedicated Placement Support", desc: "Resume writing, mock interviews, HR training, and direct company connections – we handle it all." },
      { icon: "💰", title: "Affordable Fees with High ROI", desc: "Quality training doesn't have to be expensive. Your job salary will recover your investment in 2–3 months." },
      { icon: "🕐", title: "Flexible Learning Options", desc: "Choose between offline classes, online batches, or hybrid learning based on your schedule." },
      { icon: "👥", title: "Small Batch Sizes", desc: "We maintain small batches to ensure personalised attention and better learning outcomes." },
      { icon: "🏆", title: "Industry Expert Trainers", desc: "Learn from professionals with 8–15+ years of industry experience, not just academics." },
      { icon: "✅", title: "Job Guarantee Focus", desc: "Our success is measured by your success – your placement is our priority." },
    ];
  
    const trainingSteps = [
      { n: 1, title: "Foundation Building", desc: "Start with core concepts and fundamentals to build a strong foundation in your chosen technology." },
      { n: 2, title: "Hands-On Projects", desc: "Work on real-world projects assigned by our industry partners. Build applications that solve actual business problems." },
      { n: 3, title: "AI-Powered Learning", desc: "Use AI tools to get instant feedback, identify knowledge gaps, and optimise your learning path for faster progress." },
      { n: 4, title: "Portfolio Building", desc: "Create a professional portfolio with 4–5 industry-ready projects that impress recruiters and hiring managers." },
      { n: 5, title: "Mock Interviews", desc: "Practice with real interview scenarios, technical questions, and HR rounds to build confidence and communication skills." },
      { n: 6, title: "Job Placement", desc: "Get connected with hiring companies, apply for real positions, and secure your first IT job with our placement team's support." },
    ];
  
    const placementTimeline = [
      { title: "Resume & LinkedIn Optimisation", desc: "Our experts review and refine your resume to highlight your skills and projects. We optimise your LinkedIn profile to attract recruiters." },
      { title: "Technical Interview Prep", desc: "Practice coding questions, system design, and technical discussions. Our team conducts multiple mock interviews to build your confidence." },
      { title: "HR & Soft Skills Training", desc: "Learn how to communicate effectively, handle tough HR questions, and present yourself professionally in interviews." },
      { title: "Company Connections", desc: "Get direct access to our network of 100+ hiring companies looking for fresh talent. Attend exclusive company recruitment drives." },
      { title: "Job Application & Interview Support", desc: "We help you apply for the right positions and prepare specifically for each company's interview process." },
      { title: "Offer Negotiation Guidance", desc: "Once you get an offer, we guide you through salary negotiation and help you understand the terms and benefits." },
    ];
  
    const highlights = [
      { number: "5000+", label: "Students Trained" },
      { number: "94%",   label: "Placement Rate" },
      { number: "3.2 LPA", label: "Average Starting Salary" },
      { number: "100+",  label: "Hiring Companies" },
    ];
  
    const stories = [
      { name: "Arun Kumar", location: "Chennai", course: "Java Full Stack Development", duration: "3 months", role: "Junior Developer", company: "TCS", salary: "₹3.5 LPA" },
      { name: "Priya Sharma", location: "Coimbatore", course: "Python Full Stack", switch: true, role: "Software Developer", company: "Infosys", salary: "₹3 LPA" },
      { name: "Rohan Sinha", location: "Kochi", course: "Data Analytics", role: "Data Analyst", company: "a multinational company", salary: "₹2.8 LPA" },
    ];
  
    const courses = [
      { title: "Java Full Stack Development", desc: "Master Java, Spring Boot, and web development. Build end-to-end applications with real-time projects. Perfect for enterprise-level application work." },
      { title: "Python Full Stack Development", desc: "Learn Python, Django, and modern web technologies. Ideal for freshers who want to enter the IT industry quickly with versatile, in-demand skills." },
      { title: "Data Analytics", desc: "Understand data, databases, and business intelligence tools. Transform into a data analyst and work on real-world data problems." },
      { title: "Digital Marketing", desc: "Master SEO, SEM, social media marketing, and content strategy. Build a career in the fastest-growing field with hands-on campaign management." },
    ];
  
    return (
      <>
        {/* ── WHO WE ARE ── */}
        <section className="section">
          <div className="container">
            <span className="section-label">About Us</span>
            <h2 className="section-title">Who We Are</h2>
            <p className="section-sub" style={{ maxWidth: 760 }}>
              Login360 is a career-focused <strong>IT training institute</strong> founded with a simple
              mission: to bridge the gap between what students learn in college and what the job market
              demands. We understand the challenges young professionals face – the lack of practical
              experience, the pressure to secure a good job, and the confusion about which skills to learn.
            </p>
            <p className="section-sub" style={{ maxWidth: 760, marginTop: 16 }}>
              That's why we created Login360. We're not just another training centre; we're your{" "}
              <strong>career transformation partner</strong>. Since our inception, we've trained thousands
              of students from colleges across Tamil Nadu and South India, helping them secure lucrative IT
              jobs at top companies.
            </p>
            <p className="section-sub" style={{ maxWidth: 760, marginTop: 16 }}>
              With centres in <strong>Chennai (Main), Coimbatore, and Kochi</strong>, we're building a
              community of skilled professionals who are ready to excel in the IT industry.
            </p>
          </div>
        </section>
  
        {/* ── MISSION & VISION ── */}
        <section className="section section--alt">
          <div className="container">
            <div className="text-center" style={{ marginBottom: 48 }}>
              <span className="section-label">Purpose</span>
              <h2 className="section-title">Our Mission &amp; Vision</h2>
            </div>
            <div className="features-grid" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))" }}>
              <div className="feature-card">
                <div className="feature-icon">🎯</div>
                <h3>Our Mission</h3>
                <p>
                  To empower college students and freshers with industry-ready IT skills and provide them
                  with genuine placement opportunities that lead to sustainable, well-paying careers.
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🌟</div>
                <h3>Our Vision</h3>
                <p>
                  To become the most trusted and recognised{" "}
                  <strong>job-oriented training institute in South India</strong>, known for our commitment
                  to student success and placement outcomes.
                </p>
              </div>
            </div>
          </div>
        </section>
  
        {/* ── WHAT WE OFFER ── */}
        <section className="section">
          <div className="container">
            <div className="text-center" style={{ marginBottom: 48 }}>
              <span className="section-label">Courses</span>
              <h2 className="section-title">What We Offer</h2>
              <p className="section-sub">
                We specialise in industry-demand courses that guarantee real job opportunities. Our{" "}
                <strong>full stack developer courses with placement</strong> are designed by industry
                experts and updated regularly based on market trends.
              </p>
            </div>
            <div className="features-grid">
              {courses.map((c) => (
                <div className="feature-card" key={c.title}>
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
  
        {/* ── WHY CHOOSE US ── */}
        <section className="section section--alt">
          <div className="container">
            <div className="text-center" style={{ marginBottom: 48 }}>
              <span className="section-label">Why Login360</span>
              <h2 className="section-title">Why Choose Login360?</h2>
              <p className="section-sub">
                We're not just another training institute. Here's what sets us apart in the competitive
                training landscape:
              </p>
            </div>
            <div className="features-grid">
              {whyPoints.map((p) => (
                <div className="feature-card" key={p.title}>
                  <div className="feature-icon">{p.icon}</div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
  
        {/* ── TRAINING APPROACH ── */}
        <section className="section">
          <div className="container">
            <div className="text-center" style={{ marginBottom: 48 }}>
              <span className="section-label">How We Teach</span>
              <h2 className="section-title">Our Unique Training Approach</h2>
              <p className="section-sub">
                We believe learning IT is not about memorising concepts — it's about building real skills
                through practical experience.
              </p>
            </div>
            <div className="placement-steps">
              {trainingSteps.map((s) => (
                <div className="placement-step" key={s.n}>
                  <div className="step-number">{s.n}</div>
                  <div>
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
  
        {/* ── PLACEMENT SUPPORT ── */}
        <section className="section section--alt">
          <div className="container">
            <div className="text-center" style={{ marginBottom: 48 }}>
              <span className="section-label">Placement</span>
              <h2 className="section-title">Comprehensive Placement Support</h2>
              <p className="section-sub">
                Placement is not an afterthought at Login360 — it's the core of everything we do. Our
                dedicated placement team works with you step-by-step to ensure you land the right job.
              </p>
            </div>
            <div className="placement-steps">
              {placementTimeline.map((item, i) => (
                <div className="placement-step" key={item.title}>
                  <div className="step-number">{i + 1}</div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
  
        {/* ── STUDENT SUCCESS ── */}
        <section className="section">
          <div className="container">
            <div className="text-center" style={{ marginBottom: 48 }}>
              <span className="section-label">Outcomes</span>
              <h2 className="section-title">Student Success Stories</h2>
              <p className="section-sub">Our students are our biggest achievement.</p>
            </div>
  
            {/* Stats */}
            <div className="trust-grid" style={{ maxWidth: "100%", marginBottom: 56 }}>
              {highlights.map((h) => (
                <div className="trust-card c-blue" key={h.label}>
                  <span className="tn">{h.number}</span>
                  <span className="tl">{h.label}</span>
                </div>
              ))}
            </div>
  
            {/* Story cards */}
            <h3 style={{ marginBottom: 24, textAlign: "center" }}>Real Student Outcomes</h3>
            <div className="features-grid">
              {stories.map((s) => (
                <div className="feature-card" key={s.name}>
                  <div className="feature-icon">🎓</div>
                  <h3>{s.name}</h3>
                  <p style={{ marginBottom: 6 }}>
                    <strong>{s.location}</strong> —{" "}
                    {s.switch
                      ? `Switched careers from a non-IT background with our ${s.course} course.`
                      : `Completed ${s.course}${s.duration ? ` in ${s.duration}` : ""}.`}
                  </p>
                  <p>
                    Now working as a <strong>{s.role}</strong> at {s.company} earning{" "}
                    <strong style={{ color: "var(--clr-primary)" }}>{s.salary}</strong>.
                  </p>
                </div>
              ))}
            </div>
  
            <p className="section-sub text-center" style={{ marginTop: 32 }}>
              These aren't exceptional cases — they're typical outcomes for our committed students. Join
              our community of successful professionals.
            </p>
  
            {/* CTA */}
            <div className="cta-duo" style={{ marginTop: 40 }}>
              <button className="btn-p">🚀 Start Your Journey</button>
              <button className="btn-s">📞 Talk to a Counsellor</button>
            </div>
          </div>
        </section>
        <Branches /> 
      </>
    );
  }