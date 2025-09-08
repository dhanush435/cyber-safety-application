import React from 'react';
import ThreatCard from './ThreatCard';

const ThreatRow = ({ title, threats = [] }) => {
  const rowId = React.useId();
  const scrollRef = React.useRef(null);

  const scrollByAmount = (delta) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: delta, behavior: 'smooth' });
    }
  };

  return (
    <section className="mb-8">
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <h3 className="text-lg md:text-xl font-semibold text-white">{title}</h3>
        <div className="hidden md:flex gap-2">
          <button aria-label="Scroll left" onClick={() => scrollByAmount(-400)} className="h-8 w-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center">‹</button>
          <button aria-label="Scroll right" onClick={() => scrollByAmount(400)} className="h-8 w-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center">›</button>
        </div>
      </div>

      <div id={rowId} ref={scrollRef} className="mt-3 overflow-x-auto no-scrollbar px-4 sm:px-6 lg:px-8">
        <div className="flex gap-4 md:gap-6">
          {threats.map((t) => (
            <ThreatCard key={t._id} threat={t} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThreatRow;


