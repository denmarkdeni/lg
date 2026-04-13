import FaqItem from "../components/faq_item";

const FAQ = () => {
    return(
      <section className="section" id="faq">
        <div className="container text-center">
          <span className="section-label">Common Questions</span>
          <h2 className="section-title">Got Doubts? We've Got Answers.</h2>
          <div className="faq-list">
            {[
              {
                question: 'I have no coding background. Can I still do this course?',
                answer: 'Yes, absolutely! Our Data Analytics course is designed for beginners. You do NOT need any prior coding experience. We start from the very basics and take you step by step to job-ready level. Many of our placed students came from arts, commerce, and non-IT backgrounds.',
              },
              {
                question: 'How long is the course and when is the next batch?',
                answer: 'The complete Data Analytics course duration is 3–4 months depending on the batch type. New batches start every month. Contact us on WhatsApp or call to know the exact upcoming batch dates and available seat count.',
              },
              {
                question: 'What is the placement support like? Will I definitely get a job?',
                answer: 'We provide 100% placement assistance — this means resume building, mock interviews, HR guidance, and direct job referrals. We work with you until you get placed. While we cannot guarantee a job (no institute honestly can), our track record of 500+ placements speaks for itself.',
              },
              {
                question: 'Is the fee ₹18,000 all-inclusive? Are there any hidden charges?',
                answer: 'Yes! The ₹18,000 offer price covers everything — full course access, all course materials, real-time project guidance, placement support, and your course certificate. There are zero hidden charges. EMI options are available for ease of payment.',
              },
              {
                question: 'Can I join if I am currently in my final year of college?',
                answer: 'Yes! Many of our students join during their final year and complete the course before graduation. Weekend batches are especially popular among final year students. By the time you graduate, you\'ll already have skills and placement support in place.',
              },
            ].map((f) => (
              <FaqItem key={f.question} question={f.question} answer={f.answer} />
            ))}
          </div>
        </div>
      </section>
    )
}

export default FAQ;