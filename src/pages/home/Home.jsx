import { FaArrowRight } from "react-icons/fa6";
import user1 from "../../assets/images/img1.png";
import user2 from "../../assets/images/img2.png";
import user3 from "../../assets/images/img3.png";
import user4 from "../../assets/images/img4.png";
import user5 from "../../assets/images/img5.png";

import image2 from "../../assets/images/image2.png";
import image3 from "../../assets/images/image3.png";
import FaqTabs from "../../components/Faq";

import company1 from "../../assets/images/Amazon.svg"
import company2 from "../../assets/images/Chase.svg"
import company3 from "../../assets/images/Exxon.svg"
import company4 from "../../assets/images/Microsoft.svg"
import company5 from "../../assets/images/Netflix.svg"
import company6 from "../../assets/images/Vice.svg"
import company7 from "../../assets/images/VISA.svg"
import company8 from "../../assets/images/Walmart.svg"



export default function Home() {
  const avatars = [
    {
      id: 1,
      fallback: "JD",
      img: user1,
    },
    {
      id: 2,
      fallback: "AS",
      img: user2,
    },
    {
      id: 3,
      fallback: "MK",
      img: user3,
    },
    {
      id: 4,
      fallback: "LR",
      img: user4,
    },
    {
      id: 5,
      fallback: "FR",
      img: user5,
    },
  ];
  return (
    <>
      <section className="lg:h-[100vh] -mt-30 md:pt-24 pt-16 lg:pt-0 lg:-mt-[112px] flex flex-col justify-center items-center  lg:px-0 px-6 bg-gradient-to-b from-[#061212] to-[#0E2E2E]">
        <div className="grow flex justify-center items-center">
          <div
            className="max-w-[1240px]
   mx-auto lg:flex items-center justify-between pt-16 container"
          >
            {/* text content */}
            <div className="lg:max-w-[700px]">
              <h2 className="font-semibold text-[#ECFCFD] mb-6 md:text-4xl sm:text-3xl text-[26px] lg:text-6xl leading-lg:leading-[72px] ">
                AI-Powered Notes. Organize and Summarize in Seconds
              </h2>
              <p className="lg:text-xl text-base font-light text-[#C7F7F8]">
                Let AI organize & summarize your notes,
              </p>
              <p className="lg:text-xl text-base font-light mb-6 text-[#C7F7F8]">
                saving you time and boosting productivity
              </p>
              <button className="rounded-full flex cursor-pointer gap-4 items-center shadow-[0_0_25px_#44E5E74D] text-[#0E2E2E] font-light text-base lg:text-lg bg-[#44E5E7] px-6 lg:px-8 py-3 lg:py-4">
                Get Started <FaArrowRight className="hidden lg:block" />
              </button>
            </div>

            {/* image content */}
            <div className="lg:mt-0  lg:block flex justify-center  lg:max-w-[530px] mt-10">
              <img
                className="max-w-full"
                src="/right-column.png"
                alt="column"
              />
            </div>
          </div>
        </div>

        <div className="max-w-[1240px] lg:mt-0 mt-8 mx-auto container">
          <div className="inline-flex flex-col md:flex-row  gap-4">
            {/* Avatar Stack */}
            <div className="flex  -space-x-2">
              {avatars.map((avatar) => (
                <div key={avatar.id} className="w-10 h-10  ">
                  <img src={avatar.img} alt={`User ${avatar.id}`} />
                </div>
              ))}
            </div>

            {/* Trust Text */}
            <div className="text-white">
              <span className="lg:text-xl text-base font-light">
                Trusted by{" "}
                <span className="text-teal-400 font-semibold">12,653+</span>{" "}
                productivity junkies
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-[#0E2E2E] to-[#061212]">
        <div className="max-w-[1240px]  px-4 lg:px-0 py-24 lg:py-28 mx-auto container">
          <p className="text-base text-[#ECFCFD] text-center lg:text-xl font-light">
            Organizations powered by <span className="font-bold">NoteFlow</span>
          </p>
          <div className="grid grid-cols-2 lg:gap-14   mt-12 gap-10 lg:mt-16 lg:grid-cols-4">
            <div className=" flex justify-center items-center">
              <img src={company1} alt="" />
            </div>
            <div className=" flex justify-center items-center">
              <img src={company2} alt="" />
            </div>
            <div className=" flex justify-center items-center">
              <img src={company3} alt="" />
            </div>
            <div className=" flex justify-center items-center">
              <img src={company4} alt="" />
            </div>
            <div className=" flex justify-center items-center">
              <img src={company5} alt="" />
            </div>
            <div className=" flex justify-center items-center">
              <img src={company6} alt="" />
            </div>
            <div className=" flex justify-center items-center">
              <img src={company7} alt="" />
            </div>
            <div className="mt-0 flex justify-center items-center">
              <img src={company8} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#061212]">
        <div className="max-w-[1240px]  px-4 lg:px-0 py-24 lg:py-30 mx-auto container">
          <h2 className="lg:text-6xl mx-auto max-w-[1000px] text-center text-[#ECFCFD] md:text-4xl text-3xl font-semibold">
            All The Tools You Need to{" "}
            <span className="text-[#44E5E7]">Supercharge</span> Your Note Taking
          </h2>
          <div className="pt-16">
            <div className="flex lg:gap-0 gap-10 flex-col-reverse lg:flex-row justify-between items-center">
              <div className="">
                <img className="lg:w-[500px]" src={image2} alt="" />
              </div>
              <div className="lg:w-1/2">
                <h2 className="lg:text-5xl text-[#ECFCFD] text-2xl font-semibold mb-4 lg:mb-8">
                  Smart Organization
                </h2>
                <p className="text-base font-light text-[#C7F7F8] lg:text-xl ">
                  Automatically categorize and tag your notes using AI-driven
                  analysis. NoteFlow intelligently identifies key topics and
                  organizes your content, making it easy to find and retrieve
                  your notes when you need them most.
                </p>
              </div>
            </div>
            <div className="flex lg:gap-0 gap-10 mt-16 lg:mt-0 flex-col lg:flex-row justify-between items-center">
              <div className="lg:w-1/2">
                <h2 className="lg:text-5xl text-[#ECFCFD] text-2xl font-semibold mb-4 lg:mb-8">
                  Contextual Reminders
                </h2>
                <p className="text-base font-light text-[#C7F7F8] lg:text-xl ">
                  Stay on top of important tasks with AI-powered reminders that
                  adapt to the context of your notes. NoteFlow recognizes
                  deadlines, follow-ups, and key actions from your notes and
                  sends timely alerts to ensure nothing slips through the
                  cracks.
                </p>
              </div>

              <div className="">
                <img className="lg:w-[500px]" src={image3} alt="" />
              </div>
            </div>
            
          </div>
        </div>
      </section>


      <FaqTabs></FaqTabs>
    </>
  );
}
