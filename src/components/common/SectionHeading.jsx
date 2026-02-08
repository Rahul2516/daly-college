import React from 'react';

const SectionHeading = ({ title, subtitle, align = "left", dark = false }) => {
  return (
    <div className={`mb-10 ${align === "center" ? "text-center" : "text-left"}`}>
      <h2 className={`text-4xl md:text-5xl font-serif font-bold mb-4 ${dark ? "text-white" : "text-dc-text-main"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg ${dark ? "text-gray-300" : "text-dc-text-muted"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;