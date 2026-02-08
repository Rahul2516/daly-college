import React, { memo } from "react";
import img1 from "../../assets/logo images/download.webp";
import img2 from "../../assets/logo images/download (1).webp";
import img3 from "../../assets/logo images/download (2).webp";
import img4 from "../../assets/logo images/images.webp";
import img5 from "../../assets/logo images/images (1).webp";
import img6 from "../../assets/logo images/images (2).webp";

const AboutGrid = () => {
  const logos = [
    { src: img1, height: "h-16" },
    { src: img2, height: "h-16" },
    { src: img3, height: "h-16" },
    { src: img4, height: "h-16" },
    { src: img5, height: "h-16" },
    { src: img6, height: "h-16" },
  ];

  return (
    <section className="bg-white" aria-labelledby="about-heading">
      {/* --- Affiliations Section --- */}
      <div className="py-4 bg-white overflow-hidden">
        <div className="container mx-auto px-4 mb-10 text-center">
          <h2 className="text-3xl font-normal text-dc-text-main font-sans tracking-wide">
            Affiliations
          </h2>
        </div>

        <div
          className="relative w-full overflow-hidden py-4"
          role="region"
          aria-label="Affiliated Organizations"
        >
          <div className="flex w-max animate-scroll items-center gap-24">
            {[...logos, ...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center"
                aria-hidden={index >= logos.length ? "true" : "false"}
              >
                <img
                  src={logo.src}
                  loading="lazy"
                  alt={index < logos.length ? "Affiliation Logo" : ""}
                  className={`object-contain ${logo.height} w-auto rounded-full`}
                  width="150"
                  height="64"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- 3-Column Grid --- */}
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          <article className="bg-[#fdfcf0] rounded-xl p-8 lg:p-10 flex flex-col items-center text-center shadow-sm border border-[#f0eee0]">
            <div className="mb-8 w-48 h-48 rounded-lg overflow-hidden shrink-0 shadow-md">
              <img
                src="https://media.istockphoto.com/id/948400550/photo/students-in-balliol-college-oxford-england.jpg?s=612x612&w=0&k=20&c=HTHAY0WjnlJeYOM2ii60JRrMlZr50k--wpVqq3yYGrU="
                loading="lazy"
                alt="Daly College Main Building historic view"
                className="w-full h-full object-cover"
                width="192"
                height="192"
              />
            </div>

            <h3
              id="about-heading"
              className="text-3xl font-serif font-bold text-gray-900 mb-4"
            >
              About Daly College
            </h3>

            <p className="text-gray-600 leading-relaxed text-[15px] font-sans">
              The new building was inaugurated on November 14, 1885 by the
              Viceroy, Lord Dufferin. By 1891 the Holkars of Indore and the
              Scindias of Gwalior donated the two student houses.
              <br />
              <br />
              In 1905 Sir Henry's Son, Sir Hugh Daly, was appointed Agent at
              Indore, to the position previously occupied by his father. He took
              great interest in Daly College which flourished as a Chiefs
              College.
            </p>
          </article>

          <article className="bg-[#E6E3D4] rounded-xl flex flex-col shadow-sm border border-[#D8D5C5] overflow-hidden text-center">
            <div className="flex-1 flex flex-col items-center justify-center py-8 px-4 border-b border-[#D2CFAE]">
              <span className="text-gray-700 text-[11px] font-bold uppercase tracking-[0.2em] mb-2 font-sans">
                Founded in
              </span>
              <span className="text-6xl font-serif font-bold text-gray-900">
                1870
              </span>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center py-8 px-4 border-b border-[#D2CFAE]">
              <span className="text-gray-700 text-[11px] font-bold uppercase tracking-[0.2em] mb-2 font-sans">
                Campus Size
              </span>
              <span className="text-5xl font-serif font-bold text-gray-900">
                119 Acres
              </span>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center py-8 px-4 border-b border-[#D2CFAE]">
              <span className="text-gray-700 text-[11px] font-bold uppercase tracking-[0.2em] mb-2 font-sans">
                Student Strength
              </span>
              <span className="text-5xl font-serif font-bold text-gray-900">
                2,000+
              </span>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center py-8 px-4">
              <span className="text-gray-700 text-[11px] font-bold mb-2 tracking-[0.2em] font-sans">
                student&ndash;teacher ratio
              </span>
              <span className="text-5xl font-serif font-bold text-gray-900">
                30 : 1
              </span>
            </div>
          </article>

          <article className="bg-[#fdfcf0] rounded-xl p-8 lg:p-10 flex flex-col items-center text-center shadow-sm border border-[#f0eee0]">
            <div className="mb-8 w-40 h-48 rounded-lg overflow-hidden shrink-0 shadow-md">
              <img
                src="https://www.dalycollege.org/images/founder.jpg"
                loading="lazy"
                alt="Portrait of Sir Henry Dermot Daly"
                className="w-full h-full object-cover"
                width="160"
                height="192"
              />
            </div>

            <h3 className="text-3xl font-serif font-bold text-gray-900 mb-4">
              The Founder
            </h3>

            <p className="text-gray-600 leading-relaxed text-[15px] font-sans">
              Sir Henry Dermot Daly was born at Kirkee, near Poona, on 25th
              October 1823. His father, Francis Dermot Daly, was a soldier and
              served in British Indian from 1821 in the 4th Light Dragoons.
              <br />
              <br />
              Sir Daly was a keen student of history and delved into the history
              of the States of Malwa region. His cheerful and pleasant
              disposition won him the friendship and confidence of the Chiefs of
              Malwa States.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default memo(AboutGrid);
