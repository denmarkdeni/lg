
const Pricing = ({page , openPopup}) => {
      
    return(
      <section className="section" id="offer">
        <div className="container text-center">
          <span className="section-label">Limited Time Offer</span>
          <h2 className="section-title">Enroll This Week &amp; Save ₹2,000!</h2>
          <p className="section-sub" style={{ marginInline: 'auto', marginBottom: 40 }}>
            ⚡ Only 12 Seats Left in Next Batch! Offer Ends This Sunday at Midnight.
          </p>
          <div className="pricing-card">
            <span className="pricing-tag">SAVE ₹2,000 — Limited Seats</span>
            <div className="pricing-price">
              <span className="old-price">₹20,000</span>
              <span className="new-price">₹18,000</span>
            </div>
            <p className="pricing-save">You save ₹2,000 when you enroll this week</p>
            <ul className="pricing-features">
              {[
                'Full Course Access (Excel, SQL, Python, Power BI)',
                '5+ Real-Time Industry Projects',
                'Resume Building + Mock Interview Sessions',
                '100% Placement Assistance',
                'Course Completion Certificate',
                'Free Recorded Sessions for Revision',
                'Lifetime Alumni Community Access',
              ].map((f) => <li key={f}>{f}</li>)}
            </ul>
            <a 
            className="btn btn-accent btn-lg" 
            style={{ width: '100%', justifyContent: 'center' }} 
            onClick={() => openPopup({ heading: `Enroll for Future`, btnText: "Book My Seat", formType: `${page} enroll` })}
            >
              Enroll Now
            </a>
            <p className="pricing-note">EMI options available. No hidden fees.</p>
          </div>
        </div>
              
      </section>
    )
}

export default Pricing;