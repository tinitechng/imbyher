import React from "react";
import {
  FiClock,
  FiMessageSquare,
  FiSave,
  FiEdit,
  FiCheckCircle,
  FiSettings,
  FiLock,
} from "react-icons/fi";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="bg-[#f7fafd] p-3 rounded-full inline-block mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <FiClock size={24} className="text-[#c6cb9d]" />,
      title: "Schedule Messages, Beautifully",
      description:
        "Pick your words, choose your time, and I.M will send them with quiet care.",
    },
    {
      icon: <FiSave size={24} className="text-[#c6cb9d]" />,
      title: "Save the Things That Matter",
      description:
        "Whether it's a memory, a promise, or a note to self—let I.M keep it safe and close.",
    },
    {
      icon: <FiEdit size={24} className="text-[#c6cb9d]" />,
      title: "Phrase It Just Right",
      description:
        "Not sure how to say it? I.M can shape your message with warmth, clarity, and ease.",
    },
    {
      icon: <FiCheckCircle size={24} className="text-[#c6cb9d]" />,
      title: "No Reminders, Just Action",
      description:
        "Once you've set it, I.M takes care of the rest—softly, quietly, in the background.",
    },
    {
      icon: <FiSettings size={24} className="text-[#c6cb9d]" />,
      title: "Stay in Control",
      description:
        "Edit, reschedule, or let go whenever it feels right. It's your message, your moment.",
    },
    {
      icon: <FiLock size={24} className="text-[#c6cb9d]" />,
      title: "Private, Always",
      description:
        "Your messages live on your device—not I.M's. Safe, secure, and just between you and them.",
    },
  ];

  return (
    <section className="w-full">
      <h2 className="text-4xl font-light text-gray-600 mb-2 text-center">
        What You Can Do on I.M by her
      </h2>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8 text-center">
        Every feature is designed to feel like a soft nudge, a quiet reminder,
        or a gentle helping hand.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-black/80">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Features;
