const BatchDetails = () => {
    return(
      <section className="section section--alt" id="batches">
        <div className="container text-center">
          <span className="section-label">Batch Details</span>
          <h2 className="section-title">Choose a Batch That Fits You</h2>
          <p className="section-sub">
            Multiple timing options so you can study without disrupting your daily life.
          </p>
          <div className="batch-grid">
            {[
              { icon: '🗓️', title: 'Weekday Batch', desc: 'Mon–Fri: 9 AM – 12 PM or 3 PM – 6 PM. Best for full-time learners &amp; job seekers.' },
              { icon: '🏖️', title: 'Weekend Batch', desc: 'Sat &amp; Sun: 10 AM – 1 PM. Best for final year students &amp; working professionals.' },
              { icon: '💻', title: 'Online Batch', desc: 'Live online classes via Zoom/Meet. Learn from anywhere in Tamil Nadu or India.' },
              { icon: '📍', title: 'Our Locations', desc: 'Velachery (Chennai) · Coimbatore · Kochi — visit us for offline classroom training.' },
            ].map((b) => (
              <div className="batch-card" key={b.title}>
                <div className="batch-icon">{b.icon}</div>
                <h3>{b.title}</h3>
                <p dangerouslySetInnerHTML={{ __html: b.desc }} />
              </div>
            ))}
          </div>
          <div style={{ marginTop: 40 }}>
            <a
              href="https://wa.me/918754687537?text=Hi%20I%20want%20to%20know%20the%20next%20batch%20start%20date"
              className="btn btn-primary"
            >
              💬 Ask About Next Batch Start Date
            </a>
          </div>
        </div>
      </section>
    )
}

export default BatchDetails;