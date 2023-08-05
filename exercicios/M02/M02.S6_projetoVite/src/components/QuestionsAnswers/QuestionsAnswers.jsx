import React, { useState } from "react";

const QuestionsAnswers = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionToggle = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const renderQuestions = () => {
    const questions = [
      {
        id: 1,
        question: "Pergunta 1",
        answer: "Resposta 1",
      },
      {
        id: 2,
        question: "Pergunta 2",
        answer: "Resposta 2",
      },
      {
        id: 3,
        question: "Pergunta 3",
        answer: "Resposta 3",
      },
      {
        id: 4,
        question: "Pergunta 4",
        answer: "Resposta 4",
      },
    ];

    return questions.map((q) => (
      <div className="accordion-item" key={q.id}>
        <h2 className="accordion-header" id={`heading${q.id}`}>
          <button
            className="accordion-button"
            type="button"
            onClick={() => handleAccordionToggle(q.id)}
          >
            {q.question}
          </button>
        </h2>
        <div
          id={`collapse${q.id}`}
          className={`accordion-collapse collapse ${
            activeIndex === q.id ? "show" : ""
          }`}
          aria-labelledby={`heading${q.id}`}
        >
          <div className="accordion-body">{q.answer}</div>
        </div>
      </div>
    ));
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Perguntas Frequentes</h2>
      <div className="accordion" id="faqAccordion">
        {renderQuestions()}
      </div>
    </div>
  );
};

export default QuestionsAnswers;
;