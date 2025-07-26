"use client";
import { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import icon1 from "../assets/images/Note.svg"

export default function FaqTabs() {
  const [faqs, setFaqs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("General");
  const [isAccordingOpen, setIsAccordingOpen] = useState(0);

  useEffect(() => {
    fetch("/faq.json")
      .then((res) => res.json())
      .then((data) => setFaqs(data));
  }, []);

  console.log(faqs);

  const categories = [...new Set(faqs.map((faq) => faq.category))];

  const filteredFaqs =
    selectedCategory === "all"
      ? faqs
      : faqs.filter((faq) => faq.category === selectedCategory);

  const handleClick = (index) =>
    setIsAccordingOpen((prevIndex) => (prevIndex === index ? null : index));

  return (
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
        <div className="flex flex-wrap mt-8  lg:justify-center gap-2">
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
        <div className="flex gap-4 lg:gap-12 mt-8 lg:mt-16 flex-col max-w-[826px] mx-auto">
          {filteredFaqs?.map((according, index) => (
            <article
              key={index}
              className=" py-3"
            >
              <div
                className="flex gap-2 cursor-pointer items-center justify-between w-full"
                onClick={() => handleClick(index)}
              >
                <div className="flex items-center gap-3">
                  <img className="border-2 rounded-xl border-[#ECFCFD] p-2" src={icon1} alt="" />
                  <h2 className="text-[#ECFCFD] font-medium text-base lg:text-xl">
                  {according.question}
                </h2>
                
                </div>
                
                <p>
                  <FaChevronDown
                    className={`lg:text-xl text-base  !text-[#ECFCFD]  transition-all duration-300 ${
                      isAccordingOpen === index &&
                      "rotate-[180deg] !text-[#ECFCFD]"
                    }`}
                  />
                </p>
              </div>
              <div
                className={`grid transition-all lg:mx-6 duration-300 overflow-hidden ease-in-out ${
                  isAccordingOpen === index
                    ? "grid-rows-[1fr] opacity-100 mt-3 lg:mt-6"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <p className="text-[#C7F7F8] lg:ml-8 ml-14 text-sm lg:text-base font-light  overflow-hidden">
                  {according.answer}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
