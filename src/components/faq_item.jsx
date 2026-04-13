import { useState } from "react";

function FaqItem({ question, answer }) {
    const [open, setOpen] = useState(false);
    return (
      <div className={`faq-item${open ? ' open' : ''}`}>
        <button className="faq-question" onClick={() => setOpen(!open)}>
          {question}
          <span className="faq-arrow">+</span>
        </button>
        <div className="faq-answer">{answer}</div>
      </div>
    );
  }

export default FaqItem;