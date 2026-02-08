import React, { useState, memo } from "react";
import { BsArrowUpRight, BsArrowLeft, BsArrowRight } from "react-icons/bs";

const items = [
  {
    id: 1,
    title: "Hospital",
    img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80",
    description: "24/7 medical assistance with qualified doctors.",
  },
  {
    id: 2,
    title: "Mess",
    img: "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&q=80",
    description: "Nutritious and balanced food for students.",
  },
  {
    id: 3,
    title: "Sports",
    img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80",
    description: "World class sports facilities and cricket grounds.",
  },
  {
    id: 4,
    title: "Labs",
    img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80",
    description: "Full fledged laboratories for sciences and tech.",
  },
  {
    id: 5,
    title: "Design",
    img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80",
    description: "Hub for creativity and design thinking.",
  },
];

const InfraItem = ({ title, description, isActive, onHover, img }) => {
  return (
    <article
      onClick={onHover}
      onMouseEnter={onHover}
      onFocus={onHover}
      tabIndex="0"
      aria-expanded={isActive}
      className={`relative transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer overflow-hidden rounded-2xl outline-none focus:ring-2 focus:ring-dc-red
        ${isActive ? "h-[300px] md:h-[600px] flex-[10] md:flex-[3]" : "h-[60px] md:h-[600px] flex-[2] md:flex-[0.5]"} 
      `}
    >
      <div className="absolute inset-0">
        <img
          src={img}
          alt={title}
          loading="lazy"
          className={`w-full h-full object-cover transition-transform duration-700 ${isActive ? "scale-100" : "scale-110"}`}
        />
      </div>

      <div
        className={`absolute inset-0 bg-black transition-opacity duration-500 ${isActive ? "opacity-0" : "opacity-50 hover:opacity-30"}`}
      ></div>
      <div
        className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-500 ${isActive ? "opacity-100" : "opacity-0"}`}
      ></div>

      <div className="absolute inset-0 p-6 text-white flex flex-col">
        <div
          className={`mt-auto transition-all duration-500 transform ${isActive ? "opacity-100 translate-y-0 delay-200" : "opacity-0 translate-y-10 absolute bottom-0"}`}
        >
          {isActive && (
            <div className="bg-black/30 backdrop-blur-sm p-4 md:p-6 rounded-xl border border-white/10">
              <h3 className="text-2xl md:text-3xl font-serif font-bold mb-2 md:mb-3 tracking-wide">
                {title}
              </h3>
              <div className="flex items-end justify-between gap-4">
                <p className="text-sm md:text-base text-gray-200 leading-relaxed max-w-md line-clamp-3">
                  {description}
                </p>
                <BsArrowUpRight
                  className="text-2xl md:text-3xl text-white shrink-0 mb-1"
                  aria-hidden="true"
                />
              </div>
            </div>
          )}
        </div>

        <div
          className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${isActive ? "opacity-0 pointer-events-none" : "opacity-100"}`}
        >
          <div className="hidden md:flex rotate-[-90deg] items-center gap-3 whitespace-nowrap">
            <h3 className="text-2xl font-medium tracking-wider uppercase">
              {title}
            </h3>
            <BsArrowUpRight className="text-xl rotate-90" aria-hidden="true" />
          </div>
          <div className="flex md:hidden items-center justify-between w-full px-2">
            <h3 className="text-lg font-bold tracking-wider uppercase drop-shadow-md">
              {title}
            </h3>
            <BsArrowRight
              className="text-xl drop-shadow-md"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </article>
  );
};

const CampusInfra = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // --- Handlers for Buttons ---
  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  };

  return (
    <section
      className="py-12 md:py-24 bg-white overflow-hidden"
      aria-labelledby="infra-heading"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-10 gap-4 md:gap-6">
          <div>
            <h2
              id="infra-heading"
              className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-2 md:mb-4"
            >
              Our Campus & Infrastructure
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl">
              Explore our state-of-the-art academic, residential, and sports
              facilities.
            </p>
          </div>

          <div className="hidden md:flex gap-4">
            <button
              onClick={handlePrev}
              aria-label="Previous Facility"
              className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <BsArrowLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next Facility"
              className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <BsArrowRight size={20} />
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-3 min-h-[500px] md:min-h-[600px]">
          {items.map((item, index) => (
            <InfraItem
              key={item.id}
              {...item}
              isActive={activeIndex === index}
              onHover={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(CampusInfra);
