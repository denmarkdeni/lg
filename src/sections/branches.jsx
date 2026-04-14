const BRANCHES = [
    {
      id: "chennai",
      mapSrc: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1314.528469298865!2d80.220272663018!3d12.974866172539683!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d3154bf18fb%3A0x706bf6b0e2157ca9!2sLogin360!5e0!3m2!1sen!2sus!4v1775545097135!5m2!1sen!2sus",
      badgeType: "hq",
      badgeLabel: "🏢 Head Office",
      name: "Login360 Chennai",
      address: <>Login360 Software Training Institute,<br />Chennai, Tamil Nadu – 600042<br />📞 +91 80564 77261</>,
      directionsUrl: "https://maps.google.com?q=Login360+Software+Training+Chennai",
    },
    {
      id: "coimbatore",
      mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12570.333875015453!2d76.95090015401206!3d11.001846954575461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859ebf844910f%3A0x64b495983cdb5896!2sLogin360!5e0!3m2!1sen!2sus!4v1775545300276!5m2!1sen!2sus",
      badgeType: "ps",
      badgeLabel: "💼 Placement Support",
      name: "Login360 Coimbatore",
      address: <>Login360 Software Training Institute,<br />Coimbatore, Tamil Nadu – 641002<br />📞 +91 84386 31211</>,
      directionsUrl: "https://maps.google.com?q=Login360+Software+Training+Coimbatore",
    },
    {
      id: "kerala",
      mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7857.849595405104!2d76.33526245528829!3d10.023064610522106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080da4e3a475c5%3A0xc197bda646fe609d!2sLogin360!5e0!3m2!1sen!2sus!4v1775545479360!5m2!1sen!2sus",
      badgeType: "nb",
      badgeLabel: "🌟 New Branch",
      name: "Login360 Kerala",
      address: <>Login360 Software Training Institute,<br />Kerala – 682030<br />📞 +91 80564 77261</>,
      directionsUrl: "https://maps.google.com?q=Login360+Software+Training+Kerala",
    },
  ];
  
  function BranchCard({ branch }) {
    return (
      <div className="branch-card reveal shown">
        <div className="branch-map">
          <iframe
            src={branch.mapSrc}
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`Map for ${branch.name}`}
          />
        </div>
        <div className="branch-info">
          <div className={`branch-type ${branch.badgeType}`}>{branch.badgeLabel}</div>
          <div className="branch-name">{branch.name}</div>
          <div className="branch-addr">{branch.address}</div>
          <a href={branch.directionsUrl} target="_blank" rel="noreferrer" className="btn-dir">
            Get Directions
          </a>
        </div>
      </div>
    );
  }
  
  function Branches() {
    return (
      <section className="section" id="branches">
        <div className="section-head reveal shown">
          <span className="section-tag"> Locations</span>
          <h2>
            Visit Our Branches <span className="highlight">Near You</span> 
          </h2>
          <p>Walk in anytime for a free counselling session and demo class</p>
        </div>
        <div className="branch-grid">
          {BRANCHES.map((branch) => (
            <BranchCard key={branch.id} branch={branch} />
          ))}
        </div>
      </section>
    );
  }
  
  export default Branches;