import "./App.css";
import Banner from "./Components/Banner";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <section className="lg:container mx-auto px-4 sm:px-6 lg:px-1 border my-20">
        {/* section text */}
        <div className="mb-6 sm:mb-8 text-center sm:text-left">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Explore the{" "}
              <span className="bg-linear-to-r from-[#FF6333] via-[#DE1B76] to-[#9333EA] bg-clip-text text-transparent">Technologies</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Pick one technology per category to build your ideal stack.
            </p>
        </div>
        
        {/* card */}


        {/* tech stack */}
        
      </section>
      <Footer></Footer>
    </>
  );
}

export default App;
