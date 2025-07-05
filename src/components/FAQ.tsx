import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What programming languages does MobileCoder support?",
      answer: "MobileCoder supports over 20 programming languages including Python, JavaScript, Java, C++, C#, PHP, Ruby, Go, Swift, Kotlin, HTML/CSS, and many more. We're constantly adding support for new languages based on user feedback."
    },
    {
      question: "Can I run my code directly on the mobile device?",
      answer: "Yes! MobileCoder includes a built-in runtime environment that allows you to execute your code directly on your mobile device. You can run Python scripts, JavaScript code, and many other languages without needing an external server."
    },
    {
      question: "Is there a free version available?",
      answer: "MobileCoder is free to use."
    },
    {
      question: "Does MobileCoder work offline?",
      answer: "Yes, MobileCoder works offline for most coding tasks. You can write, edit, and run code without an internet connection. The Daily Coding Challenge is available when you're back online."
    },
    {
      question: "How secure is my code?",
      answer: "Security is our top priority. Everything is stored locally on your phone, with no outside communication."
    },
    {
      question: "Is any data collected?",
      answer: "Rest assured, no personal data is collected."
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Get answers to common questions about MobileCoder
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;