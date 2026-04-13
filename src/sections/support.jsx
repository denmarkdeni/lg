const PlacementSupport = () => {
    return(
        <section className="section" id="placement">
            <div className="container text-center">
                <span className="section-label">Placement Support</span>
                <h2 className="section-title">We Are With You Until You Get Placed</h2>
                <p className="section-sub">
                    Our placement team works harder than you do. We won't rest until you have an offer letter in your hand.
                </p>
                <div className="placement-steps">
                    {[
                    { num: '01', title: 'Resume Building', desc: 'Our HR experts will build an ATS-friendly resume that gets you interview calls quickly.' },
                    { num: '02', title: 'Mock Interviews', desc: 'Real interview practice with feedback — so you feel confident on the actual day.' },
                    { num: '03', title: 'HR & Soft Skills', desc: 'Communication, body language, and professional skills training to clear any interview.' },
                    { num: '04', title: 'Job Assistance', desc: 'We share job openings, refer you directly to hiring companies, and follow up on your behalf.' },
                    ].map((s) => (
                    <div className="placement-step" key={s.num}>
                        <div className="step-number">{s.num}</div>
                        <div>
                        <h3>{s.title}</h3>
                        <p>{s.desc}</p>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default PlacementSupport;