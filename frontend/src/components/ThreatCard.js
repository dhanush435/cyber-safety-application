import React from 'react';

const ThreatCard = ({ threat }) => {
  return (
    <div className="relative group w-48 sm:w-56 md:w-60 lg:w-64 flex-shrink-0 cursor-pointer">
      <div className="aspect-[16/9] rounded-md overflow-hidden bg-gradient-to-br from-slate-700 to-slate-900">
        <div className="w-full h-full flex items-center justify-center text-5xl select-none">
          🛡️
        </div>
      </div>
      <div className="mt-2">
        <p className="text-sm md:text-base text-gray-200 line-clamp-1">{threat.name}</p>
      </div>
      <div className="absolute inset-0 rounded-md ring-1 ring-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <div className="absolute inset-x-0 -bottom-1 px-2 py-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="text-xs text-gray-300 flex items-center justify-between">
          <span className="truncate">{threat.category}</span>
          <span className="px-2 py-0.5 rounded-full bg-white/10 text-gray-100">
            {threat.severity}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ThreatCard;


