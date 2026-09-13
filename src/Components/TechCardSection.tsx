function TechCardSection({ data }) {
  const isEmpty = true;

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

        <h3 className="text-xl font-bold text-slate-900 mb-2">{data.name}</h3>

        <p className="text-slate-400 text-sm leading-relaxed mb-6">
          {data.description}
        </p>
      </div>

      <div>
        <div className="flex items-center justify-between text-xs text-slate-500 mb-4 min-h-[28px]">
          <span className="bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md font-medium">
            {data.category}
          </span>

          <span className="font-medium text-slate-500">{data.difficulty}</span>

          <div className="flex items-center space-x-1 font-semibold text-slate-700">
            <span className="text-amber-400 text-sm">★</span>
            <span>{data.rating}</span>
          </div>
        </div>

        {/* Action Button */}
        <button
          //   onClick={handleIsEmpty}
          className={`w-full ${isEmpty ? "cursor-pointer" : "cursor-not-allowed"} bg-[#0B0F19] hover:bg-slate-800 text-white font-medium py-3 rounded-xl transition-colors text-sm active:scale-[0.99]`}
        >
          Add to Stack
        </button>
      </div>
    </div>
  );
}

export default TechCardSection;
