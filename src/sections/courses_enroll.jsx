import { useRef, useEffect } from "react";
import { FaJava, FaPython, FaChartBar, FaBrain } from "react-icons/fa"; 

const COURSES = [
  {
    id: "java",
    icon: <FaJava size={48} color="#f89820" />,
    name: "Java Full Stack",
    duration: "3–4 Months",
    tools: ["Java", "Spring Boot", "React", "MySQL", "Hibernate", "Git"],
  },
  {
    id: "python",
    icon: <FaPython size={48} color="#3776ab" />,
    name: "Python Full Stack",
    duration: "3–4 Months",
    tools: ["Python", "Django", "React", "PostgreSQL", "REST API", "AWS"],
  },
  {
    id: "da",
    icon: <FaChartBar size={48} color="#217346" />,
    name: "Data Analytics",
    duration: "3 Months",
    tools: ["Excel", "SQL", "Python", "Power BI", "Tableau", "Statistics"],
  },
  {
    id: "ds",
    icon: <FaBrain size={48} color="#a855f7" />,
    name: "Data Science",
    duration: "4 Months",
    tools: ["Python", "ML", "Pandas", "Scikit-learn", "Deep Learning", "NLP"],
  },
];

function CourseCard({ course, openPopup , page}) {
  return (
    <div className="course-card reveal">
      <div className="cc-icon">{course.icon}</div>
      <div className="cc-name">{course.name}</div>
      <div className="cc-dur">⏱ {course.duration}</div>
      <div className="cc-tools">
        {course.tools.map((tool) => (
          <span key={tool} className="tool">{tool}</span>
        ))}
      </div>
      <div className="cc-placed">✅ 100% Placement Support</div>
      <a
        className="btn btn-accent btn-lg"
        onClick={() =>
          openPopup({
            heading: "Book Free Demo Class",
            btnText: "Book Now",
            formType: `${page} - ${course.name} Demo`,
          })
        }
      >
        Enroll Now →
      </a>
    </div>
  );
}
  
function Courses({ openPopup, page }) {
    const wrapRef = useRef(null);
    const dotRefs = useRef([]);
    const current = useRef(0);
  
    useEffect(() => {
      const wrap = wrapRef.current;
      if (!wrap) return;
  
      // auto-scroll only on mobile (carousel mode)
      const isCarousel = () => window.innerWidth < 900;
  
      const next = () => {
        if (!isCarousel()) return;
        const cardWidth = wrap.querySelector(".course-card")?.offsetWidth + 24; // gap
        current.current = (current.current + 1) % COURSES.length;
        wrap.scrollTo({ left: current.current * cardWidth, behavior: "smooth" });
  
        dotRefs.current.forEach((d, i) => {
          if (!d) return;
          d.classList.toggle("on", i === current.current);
        });
      };
  
      // sync dot on manual swipe
      const onScroll = () => {
        if (!isCarousel()) return;
        const cardWidth = wrap.querySelector(".course-card")?.offsetWidth + 24;
        const idx = Math.round(wrap.scrollLeft / cardWidth);
        current.current = idx;
        dotRefs.current.forEach((d, i) => d?.classList.toggle("on", i === idx));
      };
  
      const timer = setInterval(next, 2500);
      wrap.addEventListener("scroll", onScroll, { passive: true });
  
      return () => {
        clearInterval(timer);
        wrap.removeEventListener("scroll", onScroll);
      };
    }, []);
  
    return (
      <section className="section" id="courses">
        <div className="section-head reveal">
          <span className="section-tag">📚 Courses</span>
          <h2>Choose Your <span className="highlight">Career Path</span></h2>
          <p>Industry-aligned programs with real-world projects &amp; dedicated placement support</p>
        </div>
  
        <div className="courses-wrap" id="cCarousel" ref={wrapRef}>
          {COURSES.map((course) => (
            <CourseCard key={course.id} course={course} openPopup={openPopup} page={page} />
          ))}
        </div>
  
        <p className="swipe-hint">👈 Swipe to explore all courses</p>
        <div className="scroll-dots">
          {COURSES.map((_, i) => (
            <div
              key={i}
              className={`dot${i === 0 ? " on" : ""}`}
              ref={(el) => (dotRefs.current[i] = el)}
            />
          ))}
        </div>
      </section>
    );
  }
  
  export default Courses;