import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, PenTool, ShieldCheck, Users } from 'lucide-react';

const ServiceCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({
  icon,
  title,
  description,
}) => (
  <motion.div
    className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center gap-4 text-center border hover:shadow-xl transition cursor-pointer"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    whileHover={{ scale: 1.05 }}
  >
    <div className="text-blue-600">{icon}</div>
    <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </motion.div>
);

const ServiceIllustration: React.FC = () => (
  <motion.div
    className="flex justify-center items-center"
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1.05 }}
    transition={{ duration: 0.6, ease: 'easeInOut', yoyo: Infinity }}
    viewport={{ once: false, amount: 0.8 }}
  >
    <motion.img
      src="https://img.freepik.com/free-vector/online-interview-concept-illustration_114360-4844.jpg"
      alt="Service Illustration"
      className="rounded-2xl shadow-lg w-4/5 max-w-lg"
      whileHover={{ scale: 1.1, rotate: 1 }}
      transition={{ type: 'spring', stiffness: 300 }}
    />
  </motion.div>
);

const ServicePage: React.FC = () => {
  return (
    <div className="min-h-[150vh] bg-gradient-to-br from-blue-50 to-white py-20 px-6 lg:px-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-5xl font-bold text-gray-900 text-center mb-4">Our Services</h1>
        <p className="text-center text-gray-600 text-lg mb-12 max-w-3xl mx-auto">
          We provide AI-powered interview solutions designed to help candidates prepare effectively and
          employers find the best talent with ease.
        </p>

        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          <ServiceCard
            icon={<Cpu className="w-12 h-12" />}
            title="AI-Powered Interviews"
            description="Interactive, realistic interview sessions powered by AI to simulate real-world job interviews."
          />
          <ServiceCard
            icon={<PenTool className="w-12 h-12" />}
            title="Personalized Feedback"
            description="Detailed evaluation and constructive feedback based on your answers to improve your skills."
          />
          <ServiceCard
            icon={<ShieldCheck className="w-12 h-12" />}
            title="Secure & Private"
            description="Your data and interview sessions are completely confidential and securely stored."
          />
          <ServiceCard
            icon={<Users className="w-12 h-12" />}
            title="Wide Skill Coverage"
            description="Supports interviews across multiple domains and skill sets with dynamic question generation."
          />
          <ServiceCard
            icon={<Cpu className="w-12 h-12" />}
            title="Real-Time Scoring"
            description="Instant scoring and insights to understand your performance and areas of improvement."
          />
          <ServiceCard
            icon={<PenTool className="w-12 h-12" />}
            title="Easy Scheduling"
            description="Flexible scheduling options for interviews so you can prepare at your convenience."
          />
        </div>

        <div className="flex justify-center">
          <ServiceIllustration />
        </div>

        <motion.div
          className="text-center text-gray-500 text-sm mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Ready to take your interview preparation to the next level? Get started today!
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ServicePage;
