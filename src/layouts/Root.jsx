import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


export default function RootLayout() {
  return (
    <div className="font-display">
      <Navbar />
      <main className="min-h-[60vh]">
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
}