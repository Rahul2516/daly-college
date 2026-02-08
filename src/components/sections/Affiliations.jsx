import React from "react";

const Affiliations = () => {
  const partners = [
    { name: "IBSC", color: "bg-blue-100" },
    { name: "Round Square", color: "bg-red-100" },
    { name: "Cambridge", color: "bg-orange-100" },
    { name: "AFS", color: "bg-blue-200" },
    { name: "IPSC", color: "bg-purple-100" },
    { name: "Boarding Schools", color: "bg-green-100" },
  ];

  return (
    <section className="py-12 bg-white border-b border-dc-border">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h3 className="text-2xl font-serif font-medium text-dc-text-main">
            Affiliations
          </h3>
        </div>

        {/* Logos Grid - Uses Flexbox for centering and wrapping */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="h-16 w-32 flex items-center justify-center p-2 hover:scale-110 transition-transform"
              title={partner.name}
            >
              <div
                className={`w-full h-full ${partner.color} rounded flex items-center justify-center text-xs font-bold text-gray-500`}
              >
                {partner.name} Logo
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Affiliations;
