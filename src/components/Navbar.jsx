import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "font-semibold" : "font-light"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/pricing"
          className={({ isActive }) =>
            isActive ? "font-semibold" : "font-light"
          }
        >
          Pricing
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "font-semibold" : "font-light"
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/community"
          className={({ isActive }) =>
            isActive ? "font-semibold" : "font-light"
          }
        >
          Community
        </NavLink>
      </li>
    </>
  );

  return (
    <nav className="fixed top-0 left-0 w-full z-50 ">
      <div className="max-w-[1240px] py-6 px-6 lg:px-0 flex items-center justify-between container mx-auto">
        <div>
          <img className="lg:w-35 w-31" src="/logo.png" alt="logo" />
        </div>
        <div className="hidden lg:block">
          <ul className="flex text-[#ECFCFD] text-lg gap-8">{navLinks}</ul>
        </div>
        <div className="hidden lg:flex gap-3">
          <button className="border-2 text-lg font-light px-8 rounded-full text-[#ECFCFD] border-[#ECFCFD] py-4">
            Login
          </button>
          <button className="rounded-full shadow-[0_0_25px_#44E5E74D] text-[#0E2E2E] font-light text-lg bg-[#44E5E7] px-8  py-4">
            Get Started
          </button>
        </div>
        <div className="lg:hidden ">
          <img
            className="w-7 h-7 cursor-pointer"
            src="/menu.png"
            alt="menu"
            onClick={() => setIsMobileMenuOpen(true)}
          />
        </div>
      </div>

      {/* menu content */}
      {isMobileMenuOpen && (
        <>
          <div
            className={`fixed inset-0 lg:hidden z-40 transition-opacity duration-300 ${
              isMobileMenuOpen
                ? "opacity-100 backdrop-blur-[2px] bg-black/20"
                : "opacity-0 pointer-events-none"
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
          <div
            className={`fixed lg:hidden top-5 right-5 h-[93vh] w-64 bg-[#071717] z-50 py-8 px-6 flex flex-col justify-between rounded-2xl transform transition-transform duration-700 ease-in-out ${
              isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div>
              <div className="mb-16">
                <img
                  className="w-11 h-11 cursor-pointer"
                  src="/close.png"
                  alt="close"
                  onClick={() => setIsMobileMenuOpen(false)}
                />
              </div>
              <ul className="font-light space-y-6 text-lg text-[#ECFCFD]">
                {navLinks}
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <button className="border-2 text-base font-medium px-8 rounded-full text-[#ECFCFD] border-[#ECFCFD] py-[14px]">
                Login
              </button>
              <button className="rounded-full text-[#0E2E2E] font-normal text-base bg-[#44E5E7] px-8 py-4">
                Get Started
              </button>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
