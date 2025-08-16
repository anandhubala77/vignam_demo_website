import React from "react";
import { motion } from "framer-motion";

const VideoSection: React.FC = () => {
  return (
    <section className="w-full bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-6"
        >
          Watch How Vignam Text to Simulations Works
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-600 mb-8 text-base md:text-lg"
        >
          Pre-built simulations for a variety of scientific topics, helping you
          visualize and learn better.
        </motion.p>

        {/* Responsive Video Embed */}
        <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-2xl shadow-lg"
            src="https://www.youtube.com/embed/E1czmX6bjFA?start=10"
            title="Vignam Text to Simulations"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
