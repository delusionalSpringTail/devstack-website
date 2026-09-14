import type { Itechnology } from "../../type/techType";

interface TechProps {
  tech: Itechnology;
  handleAddedStack: (tech: Itechnology) => void;
  isAdded: boolean;
}

function Tech({ tech, handleAddedStack, isAdded }: TechProps) {
  return (
    <div
      className={`w-full bg-white border ${
        isAdded ? tech.badgeBorder || "border-slate-300" : "border-slate-100"
      } rounded-2xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-200`}
    >
      <div>
        <div className="flex items-center justify-between mb-5 h-8">
          <div className="w-9 h-9 flex items-center justify-center">
            <img
              src={tech.icon}
              alt={tech.name}
              className="w-full h-full object-contain"
            />
          </div>

          {tech.badge ? (
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium 
                ${tech.bgBadgeColor || "bg-slate-100"} 
                ${tech.badgeColor || "text-slate-700"} 
                ${tech.badgeBorder || "border border-slate-700"}`}
            >
              {tech.badge}
            </span>
          ) : null}
        </div>

        <h3 className="text-xl font-bold text-slate-900 mb-2">{tech.name}</h3>

        <p className="text-slate-400 text-sm leading-relaxed mb-6">
          {tech.description}
        </p>
      </div>

      <div>
        <div className="flex items-center justify-between text-xs text-slate-500 mb-4 min-h-7">
          <span className="bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md font-medium">
            {tech.category}
          </span>

          <span className="font-medium text-slate-500">{tech.difficulty}</span>

          <div className="flex items-center space-x-1 font-semibold text-slate-700">
            <span className="text-amber-400 text-sm">★</span>
            <span>{tech.rating}</span>
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={() => handleAddedStack(tech)}
          disabled={isAdded}
          className={`w-full ${
            isAdded
              ? "bg-slate-700 cursor-not-allowed"
              : "bg-slate-950 hover:bg-slate-800 active:scale-[0.99] cursor-pointer transition-colors"
          } text-white font-medium py-3 rounded-xl text-sm`}
        >
          {isAdded ? "Added to Stack" : "Add to Stack"}
        </button>
      </div>
    </div>
  );
}

export default Tech;