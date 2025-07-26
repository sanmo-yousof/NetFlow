import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b py-24 px-6 lg:px-0 lg:py-32 from-[#061212] to-[#0E2E2E]">
      <div className="max-w-[1240px] lg:flex mx-auto container">
        <div className="lg:w-[35%] lg:mb-0 mb-16">
          <img className="lg:w-40 w-31" src="/footerlogo.png" alt="logo" />
        </div>
        <div className="text-[#ECFCFD] lg:w-[65%] grid grid-cols-2 lg:grid-cols-4 justify-between">
          <div className="mb-16 lg:mb-0">
            <h3 className="font-semibold text-lg lg:text-xl mb-8 ">Home</h3>
            <ul className="lg:text-lg text-base font-light space-y-4">
              <li>
                <Link>FAQ</Link>
              </li>
              <li>
                <Link>Features</Link>
              </li>
              <li>
                <Link>Companies</Link>
              </li>
              <li>
                <Link>Testimonials</Link>
              </li>
            </ul>
          </div>
          <div className="mb-16 lg:mb-0">
            <h3 className="font-semibold text-lg lg:text-xl mb-8 ">Pricing</h3>
            <ul className="lg:text-lg text-base font-light space-y-4">
              <li>
                <Link>Plans</Link>
              </li>
              <li>
                <Link>Billing</Link>
              </li>
              <li>
                <Link>Free Trial</Link>
              </li>
              <li>
                <Link>Refunds</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg lg:text-xl mb-8 ">About</h3>
            <ul className="lg:text-lg text-base font-light space-y-4">
              <li>
                <Link>Careers</Link>
              </li>
              <li>
                <Link>Our Story</Link>
              </li>
              <li>
                <Link>Contact</Link>
              </li>
              <li>
                <Link>Policy</Link>
              </li>
            </ul>
          </div>
          <div className="">
            <h3 className="font-semibold text-lg lg:text-xl mb-8 ">Community</h3>
            <ul className="lg:text-lg text-base font-light space-y-4">
              <li>
                <Link>Forum</Link>
              </li>
              <li>
                <Link>Stories</Link>
              </li>
              <li>
                <Link>Blog</Link>
              </li>
              <li>
                <Link>Support</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
