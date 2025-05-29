import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ResumeBuildingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-100 to-purple-200 py-20 px-6 lg:px-24">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-800 mb-4">Resume Builder</h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Create standout resumes with expert templates, smart suggestions, and live previews. Our intuitive tools make building your professional profile effortless.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <motion.div
          className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Template" className="w-24 h-24 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-center mb-2">Modern Templates</h3>
          <p className="text-gray-600 text-center text-sm">Choose from beautifully crafted resume templates that suit your profession.</p>
        </motion.div>

        <motion.div
          className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png" alt="AI Suggestions" className="w-24 h-24 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-center mb-2">AI Suggestions</h3>
          <p className="text-gray-600 text-center text-sm">Get real-time AI-powered tips to improve your content and highlight your strengths.</p>
        </motion.div>

        <motion.div
          className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <img src="https://cdn-icons-png.flaticon.com/512/942/942748.png" alt="Download" className="w-24 h-24 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-center mb-2">Download Easily</h3>
          <p className="text-gray-600 text-center text-sm">Export your resume in PDF or DOC format with just one click, ready to share.</p>
        </motion.div>
      </div>

      <motion.div
        className="mt-20 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <Link to={"/services/resume-building/build"}><button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg transition ">
          Start Building Now
        </button></Link>
      </motion.div>
    </div>
  );
};

export default ResumeBuildingPage;
