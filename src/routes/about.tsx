import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Users, CheckCircle } from 'lucide-react';

const Section: React.FC<{ icon: React.ReactNode; title: string; description: string; delay: number }> = ({ icon, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay }}
    className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100"
  >
    <h2 className="text-3xl font-semibold flex items-center gap-2 mb-4">
      {icon} <span className="text-gray-800">{title}</span>
    </h2>
    <p className="text-gray-600 text-lg leading-relaxed">{description}</p>
  </motion.div>
);

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white py-20 px-6 lg:px-32">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-5xl font-bold text-gray-900 mb-16 text-center leading-snug">Empowering Your Career with Smart AI Interviews</h1>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <motion.img
            src="https://img.freepik.com/premium-photo/man-ai-robot-waiting-job-interview-office_1004086-664.jpg"
            alt="AI Interview Illustration"
            className="rounded-3xl shadow-2xl w-full object-cover"
            whileHover={{ scale: 1.05 }}
          />

          <div className="space-y-8">
            <Section
              icon={<Users className="w-7 h-7 text-blue-600" />}
              title="Who Are We?"
              description="We are a team of developers, career coaches, and designers committed to revolutionizing interview preparation. Our platform blends cutting-edge AI with practical career insight to offer an unmatched, immersive practice environment."
              delay={0.2}
            />
            <Section
              icon={<Lightbulb className="w-7 h-7 text-purple-600" />}
              title="Why We Created This?"
              description="We noticed many talented individuals struggling with interviews due to lack of guidance or real-world practice. This motivated us to create a supportive, AI-driven solution that mimics actual interviews, provides feedback, and boosts confidence."
              delay={0.4}
            />
            <Section
              icon={<CheckCircle className="w-7 h-7 text-green-600" />}
              title="How This Helps You Get Hired?"
              description="Our platform provides custom questions based on your skills and experience, evaluates your answers with smart algorithms, and delivers actionable feedback—preparing you to ace your next real interview with ease."
              delay={0.6}
            />
          </div>
        </div>

        <motion.div
          className="rounded-2xl p-10 bg-white shadow-xl border border-gray-100 text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Your Success is Our Mission</h2>
          <p className="text-gray-600 text-lg">
            Whether you're a fresh graduate or a seasoned professional switching careers, our AI Interviewer is your go-to tool for honing your responses, discovering your strengths, and building interview confidence—one session at a time.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutPage;
