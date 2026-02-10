import React from "react";

const SkillCard = ({ title, skills }) => {
  return (
    <div className="rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 shadow-2xl w-full bg-gradient-to-br from-[#2a2a2a]/70 to-[#1a1a1a]/70 backdrop-blur-sm border border-gray-700/50">
      <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-4 sm:mb-5 text-left text-yellow-400">{title}</h3>
      <div className="space-y-3 sm:space-y-3.5 lg:space-y-4">
        {skills.map((skill, index) => (
          <div className="flex items-center gap-2 sm:gap-3" key={index}>
            <div className="flex items-center gap-1.5 sm:gap-2 w-32 sm:w-36 lg:w-40 min-w-0">
              {skill.icon && <span className="text-lg sm:text-xl lg:text-2xl text-yellow-400 flex-shrink-0">{skill.icon}</span>}
              <span className="text-xs sm:text-sm lg:text-base font-medium text-left truncate">{skill.name}</span>
            </div>

            <div className="flex-grow bg-gray-700/50 rounded-full h-2 sm:h-2.5 lg:h-3 overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-1000 ease-out"
                style={{
                  width: `${skill.level}%`,
                  backgroundImage: "linear-gradient(to right, #facc15, #eab308)"
                }}
              ></div>
            </div>

            <span className="text-xs sm:text-sm lg:text-base font-bold text-yellow-400 w-9 sm:w-10 lg:w-12 text-right">{skill.level}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
