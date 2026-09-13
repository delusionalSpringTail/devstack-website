import bannerImg from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <section className="w-full overflow-hidden py-12 lg:py-20">
      <div className="lg:container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 lg:gap-8">
          {/* left part */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left max-w-2xl mx-auto lg:mx-0 lg:max-w-xl">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Build Your Ideal <br />
              {/* gradient */}
              <span className="bg-linear-to-r from-[#FF6333] via-[#DE1B76] to-[#9333EA] bg-clip-text text-transparent">
                Development Stack
              </span>
            </h1>

            <p className="mt-4 sm:mt-6 text-slate-500 text-sm sm:text-base lg:text-lg leading-relaxed max-w-md sm:max-w-xl">
              Explore frontend, backend, database, and tooling options, compare
              them side by side, and put together the stack that fits your next
              project.
            </p>

            <div className="mt-8 flex flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 w-full sm:w-auto">
              <a
                href="#explore"
                className="px-5 sm:px-6 py-3 rounded-xl font-medium text-xs sm:text-sm text-white bg-linear-to-r from-[#FF6333] to-[#DE1B76] hover:opacity-95 transition-all shadow-sm hover:shadow-md active:scale-95 text-center"
              >
                Explore Technologies
              </a>

              <a
                href="#learn-more"
                className="px-5 sm:px-6 py-3 rounded-xl font-medium text-xs sm:text-sm text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 transition-all active:scale-95 text-center"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* right image */}
          <div className="flex justify-center items-center w-full lg:w-1/2">
            <div className="relative max-w-md sm:max-w-lg lg:max-w-xl w-full">
              <img
                src={bannerImg}
                alt="Development Stack 3D Illustration"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
