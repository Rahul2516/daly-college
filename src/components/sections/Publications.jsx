import React, { memo } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { HiOutlineBookOpen } from "react-icons/hi";

const Publications = () => {
  return (
    <section
      className="relative w-full py-24 bg-[#0a0a0a] overflow-hidden"
      aria-labelledby="pubs-heading"
    >
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2
            id="pubs-heading"
            className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 tracking-wide"
          >
            Read. Discover. Connect.
          </h2>
          <p className="text-gray-400 text-lg font-light tracking-wide">
            Experience Daly College Through Our Publications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <PublicationCard
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRACAogQIcFGhki5qQwJ3k-Rcwb4Kxg38fuqg&s"
            title="Read Our"
            subtitle="Newsletter"
            subtext="The Daly College Newsletter"
            icon={
              <HiOutlineBookOpen
                className="text-4xl text-white mb-2"
                aria-hidden="true"
              />
            }
          />

          <PublicationCard
            image="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop"
            title="Download"
            subtitle="Brochure"
            icon={
              <BsArrowUpRight
                className="text-5xl text-white font-thin"
                aria-hidden="true"
              />
            }
            isCenter={true}
          />

          <PublicationCard
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCdImgqU8FKYbJBXxIzU4zt1pe-XNrW0XYFg&s"
            title="Explore DC"
            subtitle="Magazine"
            subtext="2023-24 Edition"
            icon={
              <HiOutlineBookOpen
                className="text-4xl text-white mb-2"
                aria-hidden="true"
              />
            }
          />
        </div>
      </div>
    </section>
  );
};

const PublicationCard = ({
  image,
  title,
  subtitle,
  icon,
  subtext,
  isCenter,
}) => {
  return (
    <article className="group relative w-full aspect-[3/4] rounded-lg overflow-hidden cursor-pointer shadow-2xl border border-white/5">
      <img
        src={image}
        loading="lazy"
        alt={`${title} ${subtitle} Cover`}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        width="400"
        height="533"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-colors duration-500 group-hover:from-dc-red/90 group-hover:via-dc-red/60"></div>

      <div
        className={`absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform group-hover:scale-110 ${isCenter ? "opacity-80" : ""}`}
        aria-hidden="true"
      >
        {isCenter && <BsArrowUpRight className="text-6xl text-white/80" />}
      </div>

      <div className="absolute bottom-0 left-0 w-full p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
        {subtext && (
          <p className="text-white/70 text-xs font-bold uppercase tracking-widest mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
            {subtext}
          </p>
        )}

        <h3 className="text-white text-3xl font-serif font-bold leading-none">
          <span className="block font-light text-2xl mb-1 opacity-90">
            {title}
          </span>
          {subtitle}
        </h3>

        <div
          className="w-12 h-1 bg-white mt-4 group-hover:w-full transition-all duration-500 ease-out"
          aria-hidden="true"
        ></div>
      </div>
    </article>
  );
};

export default memo(Publications);
