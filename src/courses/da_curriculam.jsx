const DACurriculam = () => {
    return(
        <section className="section section--alt" id="curriculum">
        <div className="container text-center">
          <span className="section-label">Course Curriculum</span>
          <h2 className="section-title">What You Will Learn</h2>
          <p className="section-sub">
            A complete, job-ready Data Analytics course designed for freshers with no prior experience.
          </p>
          <div className="curriculum-grid">
            {[
              { img: 'https://login360.org/images/excel.png', title: 'Microsoft Excel', desc: 'Data cleaning, pivot tables, VLOOKUP, dashboards and automation', badge: 'Beginner Friendly', badgeClass: 'badge-green' },
              { img: 'https://login360.org/images/database.png', title: 'SQL', desc: 'Database queries, joins, stored procedures and real-world database handling', badge: 'Most In-Demand', badgeClass: 'badge-blue' },
              { img: 'https://login360.org/images/python.png', title: 'Python', desc: 'Data manipulation with Pandas, NumPy, and data visualisation with Matplotlib', badge: 'High Salary', badgeClass: 'badge-orange' },
              { img: 'https://login360.org/images/power-bi.png', title: 'Power BI', desc: 'Build stunning dashboards, reports, and data stories for business insights', badge: 'Top Tool 2024', badgeClass: 'badge-purple' },
              { img: 'https://login360.org/images/project.png', title: 'Real-Time Projects', desc: 'Work on live projects from real industries — e-commerce, finance, healthcare and more', badge: 'Portfolio Ready', badgeClass: 'badge-teal' },
            ].map((c) => (
              <div className="curriculum-card" key={c.title}>
                <span className={`curriculum-badge ${c.badgeClass}`}>{c.badge}</span>
                <img src={c.img} alt={c.title} />
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 40 }}>
            <a href="#modules" className="btn btn-outline">Download Full Syllabus →</a>
          </div>
        </div>
      </section>
    )
}

export default DACurriculam;