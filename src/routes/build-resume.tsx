import React from 'react';
import { motion } from 'framer-motion';

const ResumeBuilder: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-20 px-6 lg:px-32 relative overflow-hidden">
      {/* Background bubbles for animation */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-10 left-10 w-40 h-40 bg-blue-200 rounded-full opacity-30 animate-pulse" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-200 rounded-full opacity-30 animate-ping" />
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-pink-200 rounded-full opacity-30 animate-bounce" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-10 grid lg:grid-cols-2 gap-10 items-center"
      >
        {/* Illustration */}
        <motion.img
          src="https://static.vecteezy.com/system/resources/previews/006/731/542/non_2x/curriculum-vitae-resume-illustration-flat-design-suitable-for-many-purposes-vector.jpg"
          alt="Resume Illustration"
          className="w-full rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        />

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Build Your Resume</h2>

          <div>
            <label className="block text-gray-700 mb-2 font-medium">Full Name</label>
            <input
              type="text"
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2 font-medium">Email</label>
            <input
              type="email"
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2 font-medium">Skills</label>
            <input
              type="text"
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="JavaScript, Python, React"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2 font-medium">Experience</label>
            <textarea
              className="w-full border rounded-lg p-3 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Describe your experience..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition shadow-lg w-full"
          >
            Generate Resume
          </button>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default ResumeBuilder;
