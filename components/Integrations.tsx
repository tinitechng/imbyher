import React from "react";
import { FiMessageCircle, FiMessageSquare } from "react-icons/fi";
import Image from "next/image";

const Integrations: React.FC = () => {
  return (
    <section className="w-full">
      <h2 className="text-4xl font-light text-gray-600 mb-2 text-center">
        Send Your Messages Anywhere
      </h2>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8 text-center">
        I.M by her integrates seamlessly with the platforms you already use,
        making communication effortless.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 text-black/80">
        {/* WhatsApp Integration */}
        <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center">
          <div className="bg-[#25D366] p-4 rounded-full mb-6 text-black/80">
            <FiMessageCircle size={40} className="text-white" />
          </div>
          <h3 className="text-2xl font-medium mb-4">WhatsApp Integration</h3>
          <p className="text-gray-600 text-center mb-6">
            Send your scheduled messages directly through WhatsApp. Perfect for
            staying in touch with friends and family across the globe.
          </p>
          <div className="bg-[#f7fafd] p-6 rounded-lg w-full">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-[#25D366] rounded-full flex items-center justify-center text-white">
                W
              </div>
              <div className="bg-white p-3 rounded-lg shadow-sm">
                <p className="text-sm">
                  Your message will be delivered via WhatsApp at exactly the
                  right moment.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SMS Integration */}
        <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center">
          <div className="bg-[#3498db] p-4 rounded-full mb-6">
            <FiMessageSquare size={40} className="text-white" />
          </div>
          <h3 className="text-2xl font-medium mb-4">SMS Integration</h3>
          <p className="text-gray-600 text-center mb-6">
            Traditional but reliable. Schedule text messages to any mobile
            number and ensure your message is always received.
          </p>
          <div className="bg-[#f7fafd] p-6 rounded-lg w-full">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-[#3498db] rounded-full flex items-center justify-center text-white">
                S
              </div>
              <div className="bg-white p-3 rounded-lg shadow-sm">
                <p className="text-sm">
                  SMS works everywhere, even when internet isn't available to
                  the recipient.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
