import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Personalized Mentorship',
    desc: 'Tailored guidance to unlock your true potential and map your career path.',
    img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Interview Preparation',
    desc: 'Practical mock interviews & feedback to boost your confidence and skills.',
    img: 'https://media.licdn.com/dms/image/v2/C4D12AQFVYWphX49MaQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1610863510116?e=2147483647&v=beta&t=sLBqlJVev9Z3Mwxd4fpQDIVduUcOob5IxEXdoh4jdqE',
  },
  {
    title: 'Skill Development',
    desc: 'Identify and develop essential skills employers seek in today’s market.',
    img: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Resume & LinkedIn Help',
    desc: 'Craft standout resumes and LinkedIn profiles that get you noticed.',
    img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Career Strategy',
    desc: 'Set clear goals and create actionable plans with expert advice.',
    img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Ongoing Support',
    desc: 'Stay motivated with regular check-ins and tailored growth plans.',
    img: 'https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=800&q=80',
  },
];

const Card = ({ title, desc, img, delay }: { title: string; desc: string; img: string; delay: number }) => (
  <motion.div
    className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-[1.05] transition-transform duration-300 flex flex-col z-10"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
  >
    <img src={img} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 mb-3">
        {title}
      </h3>
      <p className="text-gray-700 flex-grow">{desc}</p>
    </div>
  </motion.div>
);

const AnimatedBlobs = () => (
  <>
    <motion.div
      className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-purple-300 rounded-full opacity-30 mix-blend-multiply filter blur-2xl animate-pulse"
      animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
      transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute bottom-[-100px] right-[-80px] w-[250px] h-[250px] bg-pink-300 rounded-full opacity-30 mix-blend-multiply filter blur-2xl animate-pulse"
      animate={{ y: [0, -20, 0], x: [0, -15, 0] }}
      transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute top-[50%] left-[50%] w-[180px] h-[180px] bg-indigo-200 rounded-full opacity-20 mix-blend-multiply filter blur-2xl animate-pulse"
      animate={{ y: [0, 10, 0], x: [0, -10, 0] }}
      transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
    />
  </>
);

const CareerCoachingPage = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-tr from-indigo-100 via-purple-100 to-pink-100 py-24 px-6 lg:px-32 overflow-hidden">
      <AnimatedBlobs />

      <motion.header
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center max-w-3xl mx-auto mb-16 relative z-10"
      >
        <h1 className="text-5xl font-extrabold mb-4 text-gray-900 drop-shadow-md">
          Career Coaching & Preparation
        </h1>
        <p className="text-gray-800 text-lg leading-relaxed">
          Unlock your potential with our dynamic coaching program — tailored to empower you to ace your interviews, grow your skills, and plan a successful career path.
        </p>
      </motion.header>

      <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto relative z-10">
        {services.map((service, i) => (
          <Card key={i} {...service} delay={i * 0.15} />
        ))}
      </motion.div>
    </div>
  );
};

export default CareerCoachingPage;
