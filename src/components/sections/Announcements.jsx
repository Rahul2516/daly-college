import React, { useRef, useLayoutEffect, memo } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { useSearchParams } from "react-router-dom";
import gsap from "gsap";

const Announcements = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeFilter = searchParams.get("category") || "All";

  const scrollRef = useRef(null);
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".announcement-card",
        { y: 20, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.4,
          stagger: 0.05,
          ease: "back.out(1.7)",
        },
      );
    }, containerRef);
    return () => ctx.revert();
  }, [activeFilter]); // Re-run animation when filter changes

  // --- Scroll Logic ---
  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 240;
      if (direction === "left") {
        current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  // --- DATA ---
  const data = [
    {
      id: 1,
      category: "Academic Calendar",
      date: "10",
      month: "Feb",
      text: "CBSE: Annual Examination Syllabus (VII to XI)",
    },
    {
      id: 2,
      category: "Important Notices",
      date: "07",
      month: "Feb",
      text: "CI: Annual Examination Time Table 2024-25",
    },
    {
      id: 3,
      category: "Junior School Byte",
      date: "07",
      month: "Feb",
      text: "Annual Examination Time Table 2024-25 (VII to IX)",
    },
    {
      id: 4,
      category: "Important Notices",
      date: "07",
      month: "Feb",
      text: "Annual Examination Time Table 2024-25 (X and XII)",
    },
    {
      id: 5,
      category: "Academic Calendar",
      date: "06",
      month: "Feb",
      text: "Annual Examination Time Table 2024-25 (X and XII)",
    },
    {
      id: 6,
      category: "Important Notices",
      date: "02",
      month: "Feb",
      text: "Annual Examination Time Table 2024-25 (X and XII)",
    },
    {
      id: 7,
      category: "Junior School Byte",
      date: "30",
      month: "Jan",
      text: "Annual Examination Time Table 2024-25 (X and XII)",
    },
  ];

  const categories = [
    "All",
    "Important Notices",
    "Junior School Byte",
    "Academic Calendar",
  ];

  const filteredData =
    activeFilter === "All"
      ? data
      : data.filter((item) => item.category === activeFilter);

  const handleFilterClick = (cat) => {
    setSearchParams({ category: cat });
  };

  return (
    <section
      className="py-12 bg-white font-sans overflow-hidden"
      aria-labelledby="announcement-heading"
    >
      <div className="container mx-auto px-4" ref={containerRef}>
        {/* --- Header --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10">
          <div className="max-w-2xl">
            <h2
              id="announcement-heading"
              className="text-4xl font-serif font-bold text-black mb-3"
            >
              DC Announcements
            </h2>
            <p className="text-gray-500 text-lg font-light">
              Stay ahead with real-time updates and notices from Daly College
              administration.
            </p>
          </div>

          <div className="flex gap-4 mt-6 md:mt-0">
            <button
              onClick={() => scroll("left")}
              aria-label="Scroll Announcements Left"
              className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:border-dc-red hover:text-dc-red transition-all"
            >
              <BsArrowLeft className="text-xl" aria-hidden="true" />
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Scroll Announcements Right"
              className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:border-dc-red hover:text-dc-red transition-all"
            >
              <BsArrowRight className="text-xl" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* --- Filter Tabs --- */}
        <div
          className="flex gap-3 mb-12 overflow-x-auto pb-2"
          role="tablist"
          style={{ scrollbarWidth: "none" }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={activeFilter === cat}
              onClick={() => handleFilterClick(cat)}
              className={`px-6 py-2.5 rounded-full border text-sm font-bold transition-all whitespace-nowrap ${
                activeFilter === cat
                  ? "bg-black text-white border-black"
                  : "bg-white text-gray-600 border-gray-200 hover:border-gray-400"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* --- Cards Container --- */}
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto pb-12 px-1 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {filteredData.map((item) => (
            <article
              key={item.id}
              className="announcement-card group min-w-[180px] w-[180px] h-[180px] bg-white border border-gray-200 rounded-lg p-6 flex flex-col justify-between cursor-pointer snap-start transition-all duration-300 hover:bg-dc-red hover:border-dc-red hover:shadow-xl hover:-translate-y-1"
            >
              <div className="flex flex-col items-center mt-4">
                <span className="text-gray-500 font-bold text-xs uppercase mb-1 group-hover:text-white/80 transition-colors">
                  {item.month}
                </span>
                <span className="text-5xl font-bold text-dc-red group-hover:text-white transition-colors">
                  {item.date}
                </span>
              </div>

              <div className="mt-4">
                <p className="text-left text-gray-800 font-medium leading-snug text-[13px] group-hover:text-white transition-colors line-clamp-3">
                  {item.text}
                </p>
              </div>
            </article>
          ))}

          {/* Empty state */}
          {filteredData.length === 0 && (
            <div className="w-full text-center text-gray-400 py-10 italic">
              No announcements found in this category.
            </div>
          )}
        </div>

        <div className="flex justify-center mt-2">
          <button className="bg-dc-red text-white px-8 py-3 rounded-[4px] hover:bg-red-700 transition-colors font-bold uppercase text-xs tracking-widest shadow-md">
            View All
          </button>
        </div>
      </div>
    </section>
  );
};

export default memo(Announcements);
