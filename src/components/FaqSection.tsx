import { useState } from "react";

const faqItems = [
  {
    question: "What is DeskLinq?",
    answer:
      "DeskLinq is an innovative platform that offers instant access to meeting rooms and day desks for individuals and businesses. The DeskLinq platform simplifies the process of finding and booking workspace, providing users with a hassle-free solution for their workspace needs.",
  },
  {
    question: "How Does DeskLinq Works?",
    answer:
      "You can browse available workspaces, book in real time, and access your reserved space seamlessly.",
  },
  {
    question: "Is there a membership fees?",
    answer:
      "No membership is required. You pay as you go or subscribe if you want additional benefits.",
  },
  {
    question: "What are the benefits of using DeskLinq?",
    answer:
      "Flexible booking, affordable pricing, seamless user experience, and access to premium workspaces.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-16 mt-[2rem]">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#222222]">
        Frequently Asked Questions
      </h2>
      <p className="text-center text-gray-500 mb-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
      </p>

      <div className="space-y-4 mt-[5rem]">
        {faqItems.map((item, index) => (
          <div
            key={index}
            className="border-b pb-4"
          >
            <button
              onClick={() => toggleItem(index)}
              className="flex justify-between items-center w-full text-left"
              style={{
                background: 'linear-gradient(to right, #FFFFFF45 27%, #FFFFFF87 53%)'
              }}
            >
              <span className="text-lg font-medium">
                {item.question}
              </span>
              {openIndex === index ? (
                <p className="w-5 h-5 text-gray-500">x</p>
              ) : (
                <p className="w-5 h-5 text-gray-500">+</p>
              )}
            </button>
            {openIndex === index && (
              <p className="mt-2 text-gray-500 text-sm transition-all duration-300">
                {item.answer}
              </p>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center items-center text-gray-400 text-sm cursor-pointer hover:text-gray-600 transition-colors duration-200">
        Load more <p className="w-5 h-5 text-gray-500">+</p>
      </div>
    </div>
  );
}
