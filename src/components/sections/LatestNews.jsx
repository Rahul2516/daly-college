import React, { useRef, memo } from "react";
import { BsArrowRight, BsArrowLeft, BsArrowUpRight } from "react-icons/bs";

const LatestNews = () => {
  const scrollRef = useRef(null);
  return (
    <section
      className="py-16 md:py-24 bg-white font-sans overflow-hidden"
      aria-labelledby="news-heading"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 md:mb-12">
          <div>
            <h2
              id="news-heading"
              className="text-3xl md:text-5xl font-serif font-bold text-black mb-3"
            >
              Latest News
            </h2>
            <p className="text-gray-500 text-base md:text-lg">
              Discover the latest stories from Daly College.
            </p>
          </div>

          <div className="flex gap-4 hidden md:flex"></div>
        </div>

        {/* Scroll Container: Full width on mobile with snap */}
        <div
          ref={scrollRef}
          className="flex gap-4 md:gap-8 overflow-x-auto pb-8 -mx-6 px-6 md:mx-0 md:px-0 no-scrollbar snap-x snap-mandatory"
        >
          <article className="min-w-[85vw] md:min-w-[400px] w-[85vw] md:w-[400px] bg-[#d93036] rounded-xl overflow-hidden shadow-lg snap-center flex flex-col relative cursor-pointer">
            <div
              className="h-40 md:h-48 bg-cover bg-center"
              style={{
                backgroundImage:
                  'url("https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Cornell_University_logo.svg/1200px-Cornell_University_logo.svg.png")',
              }}
            >
              <div className="absolute inset-0 bg-red-600/20"></div>
            </div>
            <div className="mx-auto -mt-12 md:-mt-16 w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-[#d1a055] overflow-hidden bg-white z-10 shadow-md">
              <img
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=300&auto=format&fit=crop"
                loading="lazy"
                className="w-full h-full object-cover"
                alt="Student"
              />
            </div>
            <div className="p-6 md:p-8 text-center text-white">
              <div className="inline-block bg-[#d1a055] text-black text-[10px] font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-widest">
                Aryaman Tekriwala
              </div>
              <h3 className="text-lg md:text-xl font-serif font-bold mb-2">
                Cornell University, USA
              </h3>
              <p className="text-xs md:text-sm text-white font-medium">
                for making it to
              </p>
            </div>
          </article>

          {/* Standard News Cards (Mobile Width: 85vw) */}
          <NewsCard
            image="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=600&auto=format&fit=crop"
            title="Aryaman to Cornell!"
            desc="Secured a coveted place at Cornell University."
            date="25 Jan"
          />
          <NewsCard
            image="https://images.unsplash.com/photo-1534158914592-062992fbe900?q=80&w=600&auto=format&fit=crop"
            title="Podium Perfect!"
            desc="Aarvi Jain struck gold at Junior Olympics."
            date="25 Jan"
          />
        </div>
      </div>
    </section>
  );
};

const NewsCard = ({ image, title, desc, date }) => (
  <article className="min-w-[85vw] md:min-w-[500px] w-[85vw] md:w-[500px] bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm snap-center flex flex-col md:flex-row">
    <div className="w-full md:w-[40%] h-48 md:h-full relative">
      <img
        src={image}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover"
        alt={title}
      />
    </div>
    <div className="w-full md:w-[60%] p-6 md:p-8 flex flex-col justify-between">
      <div>
        <h3 className="text-xl md:text-2xl font-serif font-bold text-dc-text-main mb-3 leading-tight">
          {title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 md:line-clamp-3 mb-4">
          {desc}
        </p>
      </div>
      <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
        <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-md text-[10px] md:text-[11px] font-bold uppercase">
          {date}
        </span>
        <BsArrowUpRight className="text-lg text-gray-400" />
      </div>
    </div>
  </article>
);

export default memo(LatestNews);
