import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/container";
import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { MarqueImg } from "@/components/marquee-img";
import Marquee from "react-fast-marquee";

const features = [
  {
    title: "AI-Powered Interview Coaching",
    description:
      "Personalized feedback and practice questions tailored to your skills.",
    icon: CheckCircle2,
  },
  {
    title: "Real-time Mock Interviews",
    description:
      "Engage with an AI interviewer to sharpen your communication skills.",
    icon: CheckCircle2,
  },
  {
    title: "Progress Tracking",
    description:
      "Monitor your growth and get actionable insights to improve.",
    icon: CheckCircle2,
  },
];

const testimonials = [
  {
    name: "Rajesh Kumar Sahu",
    role: "Sr. System Engineer@Infosys",
    quote:
      "This platform transformed my interview preparation. I landed my dream job thanks to the AI coaching!",
  },
  {
    name: "Krishna Bajpayee",
    role: "Software Engineer@Quotient",
    quote:
      "The mock interviews are incredibly realistic. Highly recommend for anyone looking to boost their confidence.",
  },
];

const stats = [
  { label: "Offers Received", value: "250k+" },
  { label: "Interviews Aced", value: "1.2M+" },
  { label: "Success Rate", value: "98%" },
];

const listVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const cardHover = {
  scale: 1.05,
  boxShadow: "0 10px 20px rgba(0,0,0,0.12)",
};

const HomePage: React.FC = () => {
  return (
    <div className="bg-white text-black min-h-screen font-sans">
      <Container className="py-24 md:py-32 space-y-20">
        {/* Hero */}
        <motion.section
          className="max-w-4xl mx-auto text-center space-y-6"
          initial="hidden"
          animate="visible"
          variants={listVariant}
        >
          <motion.h1
            className="text-5xl font-extrabold tracking-tight"
            variants={itemVariant}
          >
            Ace Your Next Interview with <br />
            <span className="text-gray-800">AI-Powered Coaching</span>
          </motion.h1>
          <motion.p
            className="text-lg text-gray-600 max-w-xl mx-auto"
            variants={itemVariant}
          >
            Unlock your full potential with tailored practice, instant feedback,
            and in-depth insights designed to get you hired faster.
          </motion.p>
          <motion.div
            className="flex justify-center gap-6 mt-8"
            variants={itemVariant}
          >
            <Link to="/generate">
              <Button size="lg" className="px-10 py-3">
                Get Started
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" size="lg" className="px-10 py-3">
                Learn More
              </Button>
            </Link>
          </motion.div>
        </motion.section>

            {/* marquee section */}
      <div className=" w-full my-12">
        <Marquee pauseOnHover>
          <MarqueImg img="/assets/img/logo/firebase.png" />
          <MarqueImg img="/assets/img/logo/meet.png" />
          <MarqueImg img="/assets/img/logo/zoom.png" />
          <MarqueImg img="/assets/img/logo/firebase.png" />
          <MarqueImg img="/assets/img/logo/microsoft.png" />
          <MarqueImg img="/assets/img/logo/meet.png" />
          <MarqueImg img="/assets/img/logo/tailwindcss.png" />
          <MarqueImg img="/assets/img/logo/microsoft.png" />
        </Marquee>
      </div>

        {/* Stats */}
        <motion.section
          className="flex justify-center gap-16 text-center max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={listVariant}
        >
          {stats.map(({ label, value }) => (
            <motion.div
              key={label}
              className="space-y-2"
              variants={itemVariant}
              whileHover={{ scale: 1.1, color: "#111827" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <p className="text-4xl font-extrabold">{value}</p>
              <p className="text-gray-600">{label}</p>
            </motion.div>
          ))}
        </motion.section>

        {/* Features */}
        <motion.section
          className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={listVariant}
        >
          {features.map(({ title, description, icon: Icon }) => (
            <motion.div
              key={title}
              className="border rounded-lg p-8 flex flex-col items-center text-center space-y-4 shadow-md cursor-pointer bg-white"
              variants={itemVariant}
              whileHover={cardHover}
              transition={{ type: "spring", stiffness: 250 }}
            >
              <Icon className="w-10 h-10 text-gray-800" />
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="text-gray-600">{description}</p>
            </motion.div>
          ))}
        </motion.section>

        {/* Testimonials */}
        <motion.section
          className="max-w-5xl mx-auto space-y-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={listVariant}
        >
          <motion.h2
            className="text-3xl font-extrabold text-center"
            variants={itemVariant}
          >
            What Our Users Say
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12">
            {testimonials.map(({ name, role, quote }) => (
              <motion.div
                key={name}
                className="border rounded-lg p-6 bg-gray-50 shadow"
                variants={itemVariant}
                whileHover={cardHover}
                transition={{ type: "spring", stiffness: 250 }}
              >
                <p className="italic text-gray-800">"{quote}"</p>
                <div className="mt-4">
                  <p className="font-semibold">{name}</p>
                  <p className="text-sm text-gray-600">{role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Banner with subtle background animation */}
        <motion.section
          className="relative bg-black text-white rounded-lg p-16 text-center max-w-4xl mx-auto overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 rounded-full opacity-30 filter blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 45, 0],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -bottom-20 -right-20 w-96 h-96 bg-gradient-to-r from-pink-600 via-red-600 to-yellow-400 rounded-full opacity-30 filter blur-3xl"
            animate={{
              scale: [1, 1.15, 1],
              rotate: [0, -45, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 7, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
          />

          <h2 className="relative text-4xl font-extrabold mb-4">
            Ready to start your journey?
          </h2>
          <p className="relative mb-8 text-gray-300 max-w-xl mx-auto">
            Join thousands of successful candidates who trust our AI to guide them.
          </p>
          <Button size="lg" asChild className="relative z-10">
            <Link to="/generate">Get Started</Link>
          </Button>
        </motion.section>
      </Container>
    </div>
  );
};

export default HomePage;
