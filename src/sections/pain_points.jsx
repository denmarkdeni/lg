const PainPoints = () => {
    return(
        <section className="section section--alt" id="pain-points">
            <div className="container text-center">
                <span className="section-label">Sound Familiar?</span>
                <h2 className="section-title">Are You Stuck in This Situation?</h2>
                <p className="section-sub">
                    You are not alone. Thousands of graduates in Tamil Nadu are facing the same problems every day.
                </p>
                <div className="pain-grid">
                    {[
                    { icon: '😔', title: 'No Job After Graduation?', desc: 'Months of applying but no interview calls. Your degree feels useless without real skills.' },
                    { icon: '😕', title: 'Confused About IT Career?', desc: 'Too many courses, too many options — you don\'t know where to start or what to learn.' },
                    { icon: '😰', title: 'No Coding Background?', desc: 'You think IT jobs are only for coders. But data analytics is different — anyone can learn it.' },
                    { icon: '💸', title: 'Wasted Money on Useless Courses?', desc: 'Paid for online videos or institutes that gave no real practice and zero placement support.' },
                    ].map((c) => (
                    <div className="pain-card" key={c.title}>
                        <div className="pain-icon">{c.icon}</div>
                        <h3>{c.title}</h3>
                        <p>{c.desc}</p>
                    </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default PainPoints;