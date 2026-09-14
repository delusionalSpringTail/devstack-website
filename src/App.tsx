import { Suspense } from "react";
import "./App.css";
import Banner from "./Components/Banner";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import type { Itechnology } from "./type/techType";
import AllTech from "./Components/Technology/AllTech";

const techPromise = async (): Promise<Itechnology[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <section className="lg:container mx-auto px-4 sm:px-6 lg:px-1 my-20">
        {/* header text */}
        <div className="mb-6 sm:mb-8 text-center sm:text-left">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Explore the{" "}
            <span className="bg-linear-to-r from-[#FF6333] via-[#DE1B76] to-[#9333EA] bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        <Suspense fallback={<h1>Loading ... </h1>}>
          <AllTech techPromise={techPromise()}></AllTech>
        </Suspense>
      </section>
      <Footer />
    </>
  );
}

export default App;
