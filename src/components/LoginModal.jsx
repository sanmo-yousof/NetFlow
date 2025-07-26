import { RxCross1 } from "react-icons/rx";

export default function LoginModal({ isOpen, onClose }) {
  return (
    <div
      className={`${
        isOpen ? "visible" : "invisible"
      } w-full h-screen fixed top-0 left-0 z-[200000000] bg-black/40 backdrop-blur-xs transition-all duration-300 flex items-center justify-center`}
    >
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-300 ${
          isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
        }`}
      >
        <div className="rounded-lg shadow-lg  lg:w-[820px] h-auto flex justify-center overflow-hidden">
          {/* Left Section */}
          <div className="lg:w-1/2 hidden px-6 bg-[#0e2d2d] text-center p-10 lg:flex flex-col justify-center">
            <h2 className="text-5xl text-[#ECFCFD] font-bold mb-4">Let's Get You Signed Up</h2>
            <p className="text-lg w-[80%] mx-auto text-[#C7F7F8] font-light">
              No charges, no fees. Get note taking in minutes!
            </p>
          </div>

          {/* Right Section */}
          <div className="lg:w-1/2 w-[345px] relative bg-[#071616] px-6 py-8">
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 cursor-pointer text-white p-2 rounded-full"
            >
              <img src="/close.png" alt="" />
            </button>

            {/* Form Content */}
            <form className="mt-16 flex flex-col gap-5">
              <div>
                <label
                  htmlFor="email"
                  className="text-[#ECFCFD] text-lg font-light mb-2 block"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="janedoe@gmail.com"
                  className="w-full bg-[#133333] text-white rounded-full py-[14px] px-6 placeholder:text-slate-300 focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="text-[#ECFCFD] text-lg font-light mb-2 block"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="••••••••"
                  className="w-full bg-[#133333] text-white rounded-full py-[14px] px-6 placeholder:text-slate-300 focus:outline-none"
                />
              </div>

              <div className="flex items-center  justify-center mt-8 gap-2 text-[#C7F7F8] text-sm">
                <input type="checkbox" id="terms" />
                <label htmlFor="terms">I agree to all terms</label>
              </div>

              <button
                type="submit"
                className="w-full bg-[#44E5E7] text-[#0E2E2E] text-base  font-light py-[14px] rounded-full hover:bg-[#27cdb0] transition"
              >
Sign Up              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
