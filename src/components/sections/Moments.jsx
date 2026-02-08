import React, {
  useRef,
  useState,
  useEffect,
  useLayoutEffect,
  memo,
} from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { useSearchParams } from "react-router-dom";
import gsap from "gsap";

const Moments = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeFilter = searchParams.get("gallery") || "All";

  const scrollRef = useRef(null);
  const containerRef = useRef(null);
  const [scrollPos, setScrollPos] = useState(0);

  const moments = [
    // --- PHOTOS ---
    {
      id: 1,
      category: "Photo",
      src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=800&auto=format&fit=crop",
      title: "Alumni Meet 2024",
    },
    {
      id: 3,
      category: "Photo",
      src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=800&auto=format&fit=crop",
      title: "Gardens by the Bay",
    },
    {
      id: 6,
      category: "Photo",
      src: "https://images.unsplash.com/photo-1518544806308-c8f48e91854f?q=80&w=1000&auto=format&fit=crop",
      title: "Campus Life",
    },
    {
      id: 7,
      category: "Photo",
      src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop",
      title: "Classroom Learning",
    },
    {
      id: 8,
      category: "Photo",
      src: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?q=80&w=800&auto=format&fit=crop",
      title: "Art Exhibition",
    },

    // --- VIDEOS ---
    {
      id: 2,
      category: "Video",
      src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop",
      title: "Award Ceremony",
    },
    {
      id: 4,
      category: "Video",
      src: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=1000&auto=format&fit=crop",
      title: "Sports Day Highlights",
    },
    {
      id: 9,
      category: "Video",
      src: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=800&auto=format&fit=crop",
      title: "Annual Concert",
    },
    {
      id: 10,
      category: "Video",
      src: "https://images.unsplash.com/photo-1515523110800-9415d13b84a8?q=80&w=800&auto=format&fit=crop",
      title: "Karate Championship",
    },
    {
      id: 11,
      category: "Video",
      src: "https://images.unsplash.com/photo-1526976668912-1a811878dd37?q=80&w=800&auto=format&fit=crop",
      title: "Founders Day Parade",
    },

    // --- PRINT  ---
    {
      id: 5,
      category: "Print",
      src: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=1000&auto=format&fit=crop",
      title: "Cultural Fest Coverage",
    },
    {
      id: 12,
      category: "Print",
      src: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=800&auto=format&fit=crop",
      title: "The Daly Prophet",
    },
    {
      id: 13,
      category: "Print",
      src: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?q=80&w=800&auto=format&fit=crop",
      title: "Times of India Feature",
    },
    {
      id: 14,
      category: "Print",
      src: "https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=800&auto=format&fit=crop",
      title: "Education World Ranking",
    },
    {
      id: 15,
      category: "Print",
      src: "https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?q=80&w=800&auto=format&fit=crop",
      title: "Student Gazette 2025",
    },
  ];

  const filters = ["All", "Photo", "Video", "Print"];

  // --- Filter Logic ---
  const filteredMoments =
    activeFilter === "All"
      ? moments
      : moments.filter((item) => item.category === activeFilter);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        ".moment-card",
        { opacity: 0, scale: 0.9, y: 20 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
        },
      );
    }, containerRef);
    return () => ctx.revert();
  }, [activeFilter]);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) setScrollPos(scrollRef.current.scrollLeft);
    };
    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", handleScroll, { passive: true });
      if (window.innerWidth < 768) el.scrollLeft = 0;
      else el.scrollLeft = 600;
      return () => el.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 450;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleFilterClick = (filter) => {
    setSearchParams({ gallery: filter });

    if (scrollRef.current) scrollRef.current.scrollLeft = 0;
  };

  return (
    <section
      className="py-12 bg-white font-sans overflow-hidden"
      aria-labelledby="moments-heading"
      ref={containerRef}
    >
      <div className="mx-auto px-4">
        <div className="text-center mb-8 md:mb-16">
          <h2
            id="moments-heading"
            className="text-3xl md:text-5xl font-serif font-bold text-black mb-4"
          >
            Moments @ Daly
          </h2>
          <p className="text-gray-500 text-base md:text-lg mb-8 font-light tracking-wide">
            Explore events, achievements, and everyday moments that define us.
          </p>

          {/* --- Filter Buttons --- */}
          <div
            className="flex flex-wrap justify-center gap-3 md:gap-4"
            role="tablist"
          >
            {filters.map((filter) => (
              <button
                key={filter}
                role="tab"
                aria-selected={activeFilter === filter}
                onClick={() => handleFilterClick(filter)}
                className={`px-6 py-2.5 md:px-8 md:py-3 rounded-full text-xs font-bold uppercase tracking-wider border transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-black text-white border-black scale-105 shadow-md"
                    : "bg-white text-gray-500 border-gray-200 hover:border-gray-400 hover:text-gray-800"
                }`}
              >
                {filter === "All" ? "All Gallery" : `${filter} Gallery`}
              </button>
            ))}
          </div>
        </div>

        <div className="relative w-full h-[350px] md:h-[450px] flex items-center justify-center">
          <button
            onClick={() => scroll("left")}
            aria-label="Scroll Gallery Left"
            className="hidden md:flex absolute left-4 md:left-10 top-1/2 -translate-y-1/2 z-30 w-16 h-16 bg-white rounded-full shadow-2xl items-center justify-center text-black hover:scale-105 transition-transform cursor-pointer border border-gray-100"
          >
            <BsArrowLeft className="text-2xl opacity-75" aria-hidden="true" />
          </button>

          <button
            onClick={() => scroll("right")}
            aria-label="Scroll Gallery Right"
            className="hidden md:flex absolute right-4 md:right-10 top-1/2 -translate-y-1/2 z-30 w-16 h-16 bg-white rounded-full shadow-2xl items-center justify-center text-black hover:scale-105 transition-transform cursor-pointer border border-gray-100"
          >
            <BsArrowRight className="text-2xl opacity-75" aria-hidden="true" />
          </button>

          {/* Scroll Container */}
          <div
            ref={scrollRef}
            className="flex w-full h-full overflow-x-auto items-center no-scrollbar px-6 md:px-[50%] snap-x snap-mandatory"
            style={{
              perspective: "1500px",
              perspectiveOrigin: "center center",
              transformStyle: "preserve-3d",
            }}
          >
            <style>{`.no-scrollbar::-webkit-scrollbar { display: none; }`}</style>

            {filteredMoments.length > 0 ? (
              filteredMoments.map((item, index) => (
                <ConcaveCard
                  key={item.id}
                  item={item}
                  index={index}
                  scrollPos={scrollPos}
                />
              ))
            ) : (
              <div className="w-full text-center text-gray-400 italic">
                No items found in this gallery.
              </div>
            )}
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-dc-red text-white px-10 py-4 rounded-[4px] hover:bg-red-700 transition-colors font-bold uppercase text-xs tracking-widest shadow-xl">
            Explore Full Gallery
          </button>
        </div>
      </div>
    </section>
  );
};

const ConcaveCard = ({ item, index, scrollPos }) => {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200,
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth < 768;
  const CARD_WIDTH = isMobile ? windowWidth * 0.85 : 500;
  const GAP = isMobile ? 10 : 20;

  const containerCenter = windowWidth / 2;
  const cardAbsolutePosition = index * (CARD_WIDTH + GAP);
  const cardScreenPosition =
    cardAbsolutePosition - scrollPos + containerCenter - CARD_WIDTH / 2;
  const distFromCenter = cardScreenPosition - containerCenter + CARD_WIDTH / 2;
  const rotateY = distFromCenter * (isMobile ? -0.01 : -0.025);
  const translateZ = Math.abs(distFromCenter) * (isMobile ? 0.1 : 0.2);

  return (
    <div
      className="moment-card relative flex-none w-[85vw] md:w-[500px] h-[250px] md:h-[350px] transition-transform duration-100 ease-linear origin-center cursor-pointer group snap-center"
      style={{
        transform: `translateZ(${translateZ}px) rotateY(${rotateY}deg)`,
        zIndex: 1000 - Math.abs(Math.round(distFromCenter)),
        willChange: "transform",
        marginRight: `${GAP}px`,
      }}
    >
      <div className="w-full h-full overflow-hidden rounded-xl shadow-2xl bg-gray-900 border-l border-r border-white/20">
        <img
          src={item.src}
          loading="lazy"
          width={isMobile ? 350 : 500}
          height={isMobile ? 250 : 350}
          className="w-full h-full object-cover opacity-100 will-change-transform"
          alt={item.title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
        <div className="absolute bottom-8 left-0 w-full text-center px-4">
          <span className="inline-block px-3 py-1 mb-2 text-[10px] font-bold uppercase tracking-widest bg-white/20 backdrop-blur-md text-white rounded-full">
            {item.category}
          </span>
          <h3 className="text-3xl font-serif font-bold text-white drop-shadow-lg tracking-wide">
            {item.title}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default memo(Moments);
