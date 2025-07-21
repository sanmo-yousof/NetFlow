import { FaArrowRight } from "react-icons/fa6";

export default function Home() {
  return (
    <section className=" min-h-[100vh] lg:px-0 px-6 bg-gradient-to-b from-[#061212] to-[#0E2E2E]">
  <div className="max-w-[1240px]
   mx-auto h-full lg:flex pb-20  pt-35  items-center justify-between container">

      {/* text content */}
      <div className="max-w-[640px]  ">
        <h2 className="font-semibold text-[#ECFCFD] mb-6 text-3xl lg:text-6xl lg:leading-[72px] ">
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
      <div className="max-w-[500px] lg:mt-0 mt-10">
        <img className="max-w-full" src="/right-column.png" alt="column" />
      </div>
    </div>


</section>

  );
}
