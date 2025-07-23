"use client";
import { useEffect, useState } from "react";

export default function FaqTabs() {
  const [faqs, setFaqs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("General");

  useEffect(() => {
    fetch("/faq.json")
      .then((res) => res.json())
      .then((data) => setFaqs(data));
  }, []);

  console.log(faqs);

  const categories = [...new Set(faqs.map((faq) => faq.category))];

  const filteredFaqs =
    selectedCategory === "General"
      ? faqs
      : faqs.filter((faq) => faq.category === selectedCategory);

  return (
    // <section className="max-w-4xl mx-auto p-4">
    //   <h2 className="text-3xl font-bold text-center mb-6">FAQs</h2>

    //   {/* Tabs */}
    //   <div className="flex flex-wrap justify-center gap-2 mb-8">
    //     {categories.map((cat) => (
    //       <button
    //         key={cat}
    //         onClick={() => setSelectedCategory(cat)}
    //         className={`px-4 py-2 rounded-full border transition ${
    //           selectedCategory === cat
    //             ? "bg-[#44E5E7] text-white"
    //             : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
    //         }`}
    //       >
    //         {cat}
    //       </button>
    //     ))}
    //   </div>

    //   {/* FAQ List */}
    //   <div className="space-y-4">
    //     {filteredFaqs.map((faq) => (
    //       <div
    //         key={faq.id}
    //         className="p-4 border border-gray-200 rounded-lg shadow-sm"
    //       >
    //         <h3 className="font-semibold text-lg text-[#0E2E2E]">
    //           {faq.question}
    //         </h3>
    //         <p className="text-gray-600 mt-2">{faq.answer}</p>
    //       </div>
    //     ))}
    //   </div>
    // </section>
    <section className="bg-gradient-to-b from-[#061212] to-[#0E2E2E]">
      <div className="max-w-[1240px]  px-4 lg:px-0 py-24 lg:py-30 mx-auto container">
        <h2 className="lg:text-6xl mx-auto max-w-[1000px] lg:text-center text-[#ECFCFD] pb-4 lg:pb-8 md:text-4xl text-3xl font-semibold">
          Frequently Asked Questions
        </h2>
        <p className="text-base hidden lg:block text-[#ECFCFD] text-center lg:text-xl font-light">
          The most commonly asked questions about NoteFlow.{" "}
        </p>
        <p className="text-base hidden lg:block text-[#ECFCFD] text-center lg:text-xl font-light">
          Have any other questions? Chat with our expert tech team{" "}
        </p>
        {/* Tabs */}
      <div className="flex flex-wrap  lg:justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-6 cursor-pointer lg:px-8 py-3 lg:py-4 rounded-full border transition ${
              selectedCategory === cat
                ? "bg-[#44E5E7] shadow-[0_0_25px_#44E5E74D] text-[#0E2E2E] "
                : "bg-[#0E2E2E] text-white border-white"
            }`}
          >
            {cat}
          </button>
        ))}
        
      </div>
      {/* faq content  */}
        <div>

        </div>
      
      </div>

      
    </section>
  );
}
