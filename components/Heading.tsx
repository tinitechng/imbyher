import React from "react";

interface HeadingProps {
  title: string;
  subtitle: string;
  description?: string;
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({
  title,
  subtitle,
  description,
  className = "",
}) => {
  return (
    <div className={`px-12 pt-12 pb-6 space-y-4 ${className}`}>
      <div>
        <h1 className="text-5xl font-light text-[#c6cb9d]">{title}</h1>
        <h2 className="text-5xl font-light text-[#c6cb9d] mt-1">
          <span className="inline-block skew-x-[10deg]">{subtitle}</span>
        </h2>
      </div>

      {description && (
        <p className="text-lg text-gray-600 max-w-md">{description}</p>
      )}
    </div>
  );
};

export default Heading;
