import { useState, useEffect } from "react";
import "./App.css";
import Banner from "./Components/Banner";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import type { Itechnology } from "./type/techType";

const techFetch = async (): Promise<Itechnology[]> => {
  const res = await fetch("/data.json");
  const tech: Itechnology[] = await res.json();
  return tech;
};

function App() {
  const [datas, setDatas] = useState<Itechnology[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    techFetch()
      .then((result) => {
        setDatas(result);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const isEmpty = true;

  return (
    <>
      <Navbar />
      <Banner />
      <section className="lg:container mx-auto px-4 sm:px-6 lg:px-1 border my-20">
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

        {/* main part */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
          {/* tech part */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
            {datas.map((data) => {
              return (
                <div
                  key={data.id}
                  className="w-full bg-white border border-slate-100 rounded-2xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5 h-8">
                      <div className="w-9 h-9 flex items-center justify-center">
                        <img
                          src={data.icon}
                          alt={data.name}
                          className="w-full h-full object-contain"
                        />
                      </div>

                      {data.badge ? (
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            data.bgBadgeColor || "bg-slate-100"
                          } ${data.badgeColor || "text-slate-700"}`}
                        >
                          {data.badge}
                        </span>
                      ) : null}
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {data.name}
                    </h3>

                    <p className="text-slate-400 text-sm leading-relaxed mb-6">
                      {data.description}
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-4 min-h-[28px]">
                      <span className="bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md font-medium">
                        {data.category}
                      </span>

                      <span className="font-medium text-slate-500">
                        {data.difficulty}
                      </span>

                      <div className="flex items-center space-x-1 font-semibold text-slate-700">
                        <span className="text-amber-400 text-sm">★</span>
                        <span>{data.rating}</span>
                      </div>
                    </div>

                    {/* Action Button */}
                    <button className="w-full cursor-pointer bg-[#0B0F19] hover:bg-slate-800 text-white font-medium py-3 rounded-xl transition-colors text-sm active:scale-[0.99]">
                      Add to Stack
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* stack part */}
          <div className="w-full lg:w-80 shrink-0">
            <div className="bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-sm lg:sticky lg:top-20">
              <div>
                <h3 className="text-lg font-bold text-slate-900">Your Stack</h3>
                <p className="text-xs text-slate-500 mt-1">
                  {isEmpty
                    ? "No technologies selected yet."
                    : `${stack.length} ${stack.length === 1 ? "Technology" : "Technologies"} Selected`}
                </p>
              </div>

              {isEmpty ? (
                <div className="border border-dashed border-slate-200 rounded-xl py-5 sm:py-6 px-4 flex items-center justify-center mt-4">
                  <span className="text-slate-400 text-xs">
                    Your stack is empty.
                  </span>
                </div>
              ) : (
                <div className="mt-5">
                  <div className="flex flex-col gap-2.5 max-h-96 sm:max-h-120 lg:max-h-140 overflow-y-auto pr-1">
                    {/* {stack.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center justify-between p-3 rounded-xl border border-slate-200 bg-white shadow-xs transition-all duration-200 ease-out hover:border-slate-300"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <img
                            src={item.icon}
                            alt={item.name}
                            className="w-7 h-7 object-contain shrink-0"
                          />
                          <div className="min-w-0">
                            <p className="text-xs font-bold text-slate-900 truncate">
                              {item.name}
                            </p>
                            <span className="text-xs text-slate-400">
                              {item.category}
                            </span>
                          </div>
                        </div>
                        <button
                          type="button"
                          aria-label={`Remove ${item.name}`}
                          // onClick={() => onRemove(item.id)}
                          className="shrink-0 ml-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg text-sm p-1 leading-none transition-colors cursor-pointer"
                        >
                          ✕
                        </button>
                      </div>
                    ))} */}
                  </div>

                  <button
                    type="button"
                    // onClick={onRemoveAll}
                    className="w-full mt-5 py-2 rounded-xl border border-violet-200 text-violet-600 hover:bg-violet-50 font-semibold text-xs transition-colors cursor-pointer"
                  >
                    Remove All
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default App;
