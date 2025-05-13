import React from "react";

interface AboutUsProps {
  className?: string;
}

const AboutUs: React.FC<AboutUsProps> = ({ className = "" }) => {
  return (
    <section className={`bg-[#f7fafd] px-8 py-16 rounded-lg ${className}`}>
      <h2 className="text-4xl font-light text-gray-600 mb-8">About Us</h2>

      <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
        We help you say the right words at the right time with ease, grace and a
        touch of softness. Schedule messages, speak your heart, and let I.M wrap
        your thoughts in warmth, so nothing meaningful goes unsent.
      </p>
    </section>
  );
};

export default AboutUs;
