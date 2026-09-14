import type { Itechnology } from "../../type/techType";

interface TotalStackProps{
    addedStack: Itechnology[]
    handleRemove: (id: string) => void;
    handleRemoveAll: () => void;
}


function TotalStack({addedStack,handleRemove,handleRemoveAll}:TotalStackProps) {
  const isEmpty = addedStack.length === 0;

  return (
    <div className="w-full lg:w-80 shrink-0 sticky top-25">
      <div className="bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-sm lg:sticky lg:top-20">
        <div>
          <h3 className="text-lg font-bold text-slate-900">Your Stack</h3>
          <p className="text-xs text-slate-500 mt-1">
            {isEmpty
                    ? "No technologies selected yet."
                    : `${addedStack.length} ${addedStack.length === 1 ? "Technology" : "Technologies"} Selected`}
          </p>
        </div>

        {isEmpty ? (
          <div className="border border-dashed border-slate-200 rounded-xl py-5 sm:py-6 px-4 flex items-center justify-center mt-4">
            <span className="text-slate-400 text-xs">Your stack is empty.</span>
          </div>
        ) : (
          <div className="mt-5">
                          <div className="flex flex-col gap-2.5 max-h-96 sm:max-h-120 lg:max-h-140 overflow-y-auto pr-1">
                              

                              {/* start from here */}
              {addedStack.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center justify-between p-2 rounded-xl border border-slate-300 bg-white shadow-xs transition-all duration-200 ease-out hover:border-slate-300 select-none"
                      >
                        <div className="flex items-center gap-3 min-w-0 justify-center cursor-pointer ">
                          <img
                            src={item.icon}
                            alt={item.name}
                            className="w-7 h-7 object-contain shrink-0"
                          />
                          <div className="grid justify-center">
                            <p className="text-[14px] font-bold text-slate-900 truncate">
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
                          onClick={() => handleRemove(item.id)}
                          className="shrink-0 font-bold ml-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg text-sm p-1 leading-none transition-colors cursor-pointer"
                        >
                          ✕
                        </button>
                      </div>
                    ))}
                              

                              {/* close here */}
            </div>

            <button
              type="button"
              onClick={handleRemoveAll}
              className="w-full mt-5 py-2 rounded-xl border border-red-200 text-red-600 hover:bg-red-50 font-semibold text-xs transition-colors cursor-pointer"
            >
              Remove All
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default TotalStack;
