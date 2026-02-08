import React, { useEffect, useRef, memo } from "react";
import gsap from "gsap";
import { BsPencilSquare, BsChatQuote, BsFolder } from "react-icons/bs";
import { FaUniversity, FaUser, FaUsers } from "react-icons/fa";

const Hero = () => {
  const comp = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from("#hero-title", {
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      })
        .from(
          "#hero-subtitle",
          { y: 30, opacity: 0, duration: 1, ease: "power2.out" },
          "-=0.8",
        )
        .from(
          ".hero-btn",
          {
            y: 20,
            opacity: 0,
            stagger: 0.1,
            duration: 0.8,
            ease: "back.out(1.7)",
          },
          "-=0.6",
        )
        .from(
          "#hero-bottom-bar",
          { y: "100%", opacity: 0, duration: 1, ease: "power2.out" },
          "-=1",
        );
    }, comp);

    return () => ctx.revert();
  }, []);

  // Exact Cream Color from Figma
  const creamTextColor = "text-[#fdfcf0]";

  return (
    <section
      ref={comp}
      className="relative w-full bg-dc-dark flex flex-col md:block h-auto md:h-[calc(100vh-80px)] overflow-hidden"
      aria-label="Hero Section"
    >
      <div className="relative w-full h-[60vh] md:absolute md:inset-0 md:h-full z-0">
        <div className="absolute inset-0 bg-black/40 z-10"></div>{" "}
        {/* Overlay */}
        <video
          className="w-full h-full object-cover transform scale-105"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="https://www.dalycollege.org/images/slider/1.jpg"
        >
          <source
            src="https://www.shutterstock.com/shutterstock/videos/3573693983/preview/stock-footage-concordia-university-campus-in-montreal-from-above-wide-shot.webm"
            type="video/webm"
          />
        </video>
        <div
          className={`absolute inset-0 z-20 container mx-auto px-4 flex flex-col items-center justify-center text-center ${creamTextColor}`}
        >
          <h1
            id="hero-title"
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold mb-4 md:mb-6 tracking-wide leading-tight drop-shadow-2xl"
          >
            Live. Learn. Lead.
          </h1>

          <p
            id="hero-subtitle"
            className="text-sm sm:text-xl md:text-2xl font-serif mb-8 md:mb-10 tracking-widest opacity-95 drop-shadow-md"
          >
            Shaping Leaders Since 1882
          </p>

          {/* --- BUTTONS --- */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-8 sm:px-0">
            <button
              aria-label="Explore Admissions"
              className="hero-btn w-full sm:w-auto flex items-center justify-center gap-3 bg-dc-red text-white px-6 py-3 md:px-8 md:py-4 rounded-sm font-bold hover:bg-red-700 transition-all shadow-lg text-xs md:text-sm uppercase tracking-widest"
            >
              <BsPencilSquare className="text-lg" aria-hidden="true" />
              Explore Admissions
            </button>

            <button
              aria-label="Enquire Now"
              className={`hero-btn w-full sm:w-auto flex items-center justify-center gap-3 bg-transparent border-2 border-[#fdfcf0] ${creamTextColor} px-6 py-3 md:px-8 md:py-4 rounded-sm font-bold hover:bg-white hover:text-dc-dark transition-all shadow-lg text-xs md:text-sm uppercase tracking-widest backdrop-blur-sm`}
            >
              <BsChatQuote className="text-lg" aria-hidden="true" />
              Enquire Now
            </button>
          </div>
        </div>
      </div>

      <div
        id="hero-bottom-bar"
        className="relative md:absolute bottom-0 left-0 w-full z-30 bg-dc-dark md:bg-transparent"
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-white/10 md:divide-none border-t border-white/10 md:border-none">
            <QuickLink
              icon={FaUniversity}
              title="Daly College of"
              subtitle="Business Management"
              color={creamTextColor}
            />
            <QuickLink
              icon={FaUser}
              title="Parent's"
              subtitle="Login"
              color={creamTextColor}
            />
            <QuickLink
              icon={FaUsers}
              title="Old Dalian"
              subtitle="Association"
              color={creamTextColor}
            />
            <QuickLink
              icon={BsFolder}
              title="The Daly"
              subtitle="Prophet"
              color={creamTextColor}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const QuickLink = memo(({ icon: Icon, title, subtitle, color }) => (
  <a
    href="#"
    className="relative group h-24 md:h-24 flex items-center justify-center md:justify-start px-4 md:px-6 overflow-hidden border-b md:border-b-0 border-white/5 md:border-none"
  >
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-colors duration-500 group-hover:from-dc-red/90 group-hover:via-dc-red/60 z-0 hidden md:block"></div>

    {/* Content */}
    <div className="relative z-10 flex flex-col md:flex-row items-center gap-3 md:gap-4 text-center md:text-left">
      <Icon
        className={`text-2xl md:text-3xl ${color} opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300`}
        aria-hidden="true"
      />

      <div className={`leading-tight ${color}`}>
        <span className="block text-[10px] md:text-[11px] font-medium uppercase opacity-80 group-hover:opacity-100 transition-opacity mb-0.5">
          {title}
        </span>
        <span className="block text-xs md:text-[15px] font-bold uppercase tracking-wide">
          {subtitle}
        </span>
      </div>
    </div>
  </a>
));

export default memo(Hero);
