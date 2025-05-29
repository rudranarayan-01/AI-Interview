import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Link } from 'lucide-react';

const InfoCard: React.FC<{ icon: React.ReactNode; title: string; description: string; link?: string }> = ({
  icon,
  title,
  description,
  link,
}) => (
  <motion.div
    className="bg-white rounded-2xl shadow-md p-6 flex items-start gap-4 border hover:shadow-xl transition"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
  >
    <div className="text-blue-600">{icon}</div>
    <div>
      <h3 className="text-xl font-semibold text-gray-800 mb-1">{title}</h3>
      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 text-sm break-words underline hover:text-blue-600"
        >
          {description}
        </a>
      ) : (
        <p className="text-gray-600 text-sm break-words">{description}</p>
      )}
    </div>
  </motion.div>
);

const ContactIllustration: React.FC = () => (
  <motion.div
    className="flex justify-center items-center"
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1.05 }}
    transition={{ duration: 0.6, ease: 'easeInOut', yoyo: Infinity }}
    viewport={{ once: false, amount: 0.8 }}
  >
    <motion.img
      src="https://img.freepik.com/free-vector/customer-support-flat-design_23-2148889375.jpg"
      alt="Contact Illustration"
      className="rounded-2xl shadow-lg w-4/5 max-w-md"
      whileHover={{ scale: 1.1, rotate: 1 }}
      transition={{ type: 'spring', stiffness: 300 }}
    />
  </motion.div>
);

const ContactForm: React.FC = () => (
  <motion.form
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    className="bg-white p-8 rounded-2xl shadow-xl border space-y-6"
  >
    <div>
      <label className="block text-gray-700 mb-2 font-medium">Name</label>
      <input
        type="text"
        className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Your name"
      />
    </div>

    <div>
      <label className="block text-gray-700 mb-2 font-medium">Email</label>
      <input
        type="email"
        className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="your@email.com"
      />
    </div>

    <div>
      <label className="block text-gray-700 mb-2 font-medium">Message</label>
      <textarea
        className="w-full border rounded-lg p-3 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Your message here..."
      ></textarea>
    </div>

    <button
      type="submit"
      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition shadow"
    >
      <Send className="w-4 h-4" /> Send Message
    </button>
  </motion.form>
);

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-[150vh] bg-gradient-to-br from-blue-50 to-white py-20 px-6 lg:px-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-5xl font-bold text-gray-900 text-center mb-4">Get in Touch</h1>
        <p className="text-center text-gray-600 text-lg mb-8">
          We'd love to hear from you. Reach out to us with your queries, suggestions, or feedback.
        </p>

        <div className="max-w-xl mx-auto mb-12 text-center text-gray-500 italic">
          Your voice matters! Whether you want to learn more about AI interviews or need assistance, we're here to help.
        </div>

        <div className="grid lg:grid-cols-3 gap-16 mb-20">
          <div className="space-y-6 col-span-1">
            <InfoCard icon={<Mail className="w-6 h-6" />} title="Email Us" description="support@aiinterview.com" />
            <InfoCard icon={<Phone className="w-6 h-6" />} title="Call Us" description="+91 6370260339" />
            <InfoCard icon={<MapPin className="w-6 h-6" />} title="Our Office" description="Bhubaneswar, Odisha, India" />
            <InfoCard
              icon={<Link className="w-6 h-6" />}
              title="Our Website"
              description="https://akash0101.pythonanywhere.com/"
              link="https://akash0101.pythonanywhere.com/"
            />
          </div>

          <div className="col-span-1 hidden lg:flex justify-center items-center">
            <ContactIllustration />
          </div>

          <div className="col-span-1">
            <ContactForm />
          </div>
        </div>

        <motion.div
          className="text-center text-gray-500 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          We usually respond within 24 hours.
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ContactPage;
