import "./faq.css";
import React, { useState } from "react";

const Faq = () => {
  const faqData = [
    {
      question: " How can I book a car service with Carbay?",
      answer:
        " Booking a car service with Carbay is easy! You can visit our website or contact our service center to schedule your appointment.",
    },
    {
      question:
        " What are the available payment options for car services with Carbay?",
      answer:
        "  Carbay offers various payment options, making it convenient for our customers. You can choose the method that suits you best.",
    },
    {
      question: "Can I track the progress of my car service with Carbay?",
      answer:
        "Absolutely! Carbay provides a tracking feature, allowing you to stay informed about the progress of your car service.",
    },
    {
      question: " How can I contact Carbays customer service?",
      answer:
        " You can get in touch with Carbays customer service team by calling [Customer Service Number] or emailing [Customer Service Email].",
    },
    {
      question: " How frequently does car service need to be done with Carbay?",
      answer:
        " For optimal vehicle performance, we recommend scheduling a car service with Carbay as per the manufacturers guidelines.",
    },
    {
      question: "  What kinds of car services does Carbay provide?",
      answer:
        " Carbay provides a wide range of car services, including regular maintenance, repairs, and [additional services you offer].",
    },
    {
      question: " Can I claim insurance on car repair at Carbay?",
      answer: "To get started, follow these steps: ...",
    },
    {
      question: "  What are the charges for service with Carbay?",
      answer:
        "    Our service charges are transparent and competitive. You can find detailed pricing information on our website or by contacting our service center.",
    },
    {
      question: "   Does Carbay provide a warranty on its services?",
      answer:
        "  Yes, Carbay stands by the quality of our services and offers warranties to provide our customers with peace of mind.",
    },
    // Add more FAQ items as needed
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <h1 className="head-faq">FAQ (Frequently asked questions)</h1>
      <div className="faq-container">
        {faqData.map((item, index) => (
          <div key={index} className="faq-item">
            <div
              className={`question ${activeIndex === index ? "active" : ""}`}
              onClick={() => toggleAnswer(index)}
            >
              {item.question}
            </div>
            {activeIndex === index && (
              <div className="answer">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Faq;
