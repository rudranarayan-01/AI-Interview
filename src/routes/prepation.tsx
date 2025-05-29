import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Clock, MessageSquare, CheckCircle, Users } from 'lucide-react';

const PrepCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({
  icon,
  title,
  description,
}) => (
  <motion.div
    className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center gap-4 text-center border hover:shadow-xl transition cursor-pointer"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    whileHover={{ scale: 1.05 }}
  >
    <div className="text-blue-600">{icon}</div>
    <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </motion.div>
);

const PrepIllustration: React.FC = () => (
  <motion.div
    className="flex justify-center items-center my-16"
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.7, ease: 'easeInOut', yoyo: Infinity }}
    viewport={{ once: false, amount: 0.8 }}
  >
    <motion.img
      src="https://img.freepik.com/free-vector/job-interview-concept-illustration_114360-5109.jpg"
      alt="Interview Preparation Illustration"
      className="rounded-2xl shadow-lg max-w-xl w-full"
      whileHover={{ scale: 1.1, rotate: 2 }}
      transition={{ type: 'spring', stiffness: 300 }}
    />
  </motion.div>
);

const InterviewPreparationPage: React.FC = () => {
  return (
    <div className="min-h-[150vh] bg-gradient-to-br from-blue-50 to-white py-20 px-6 lg:px-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-5xl font-bold text-gray-900 text-center mb-4">Interview Preparation</h1>
        <p className="text-center text-gray-600 text-lg mb-12 max-w-3xl mx-auto">
          Get ready to ace your interviews with our AI-powered platform that helps you practice, learn, and grow your skills effectively.
        </p>

        <div className="grid lg:grid-cols-3 gap-12">
          <PrepCard
            icon={<BookOpen className="w-12 h-12" />}
            title="Study Common Questions"
            description="Explore frequently asked questions tailored to your skills and experience to boost your confidence."
          />
          <PrepCard
            icon={<Clock className="w-12 h-12" />}
            title="Practice Timed Sessions"
            description="Simulate real interview conditions with time-limited questions and improve your quick-thinking skills."
          />
          <PrepCard
            icon={<MessageSquare className="w-12 h-12" />}
            title="Get AI Feedback"
            description="Receive instant, detailed feedback on your answers from our AI interviewer to help you improve."
          />
          <PrepCard
            icon={<CheckCircle className="w-12 h-12" />}
            title="Track Your Progress"
            description="Monitor your improvements over time and identify areas where you need more practice."
          />
          <PrepCard
            icon={<Users className="w-12 h-12" />}
            title="Mock Interviews"
            description="Engage in full mock interviews to get used to the flow and build your confidence."
          />
          <PrepCard
            icon={<BookOpen className="w-12 h-12" />}
            title="Resource Library"
            description="Access a curated library of articles, videos, and tips to help you prepare comprehensively."
          />
        </div>

        <PrepIllustration />

        <motion.div
          className="text-center text-gray-500 text-sm mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Start your preparation journey now — practice smarter, perform better!
        </motion.div>
      </motion.div>
    </div>
  );
};

export default InterviewPreparationPage;
