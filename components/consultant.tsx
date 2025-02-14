import { motion } from "framer-motion";
import Link from "next/link";
import { FC } from "react";

type Service = {
  title: string;
  description: string;
};

type Testimonial = {
  quote: string;
  author: string;
};

const services: Service[] = [
  { title: "AI Strategy Consulting", description: "Tailored AI solutions for your business needs." },
  { title: "Personal AI Coaching", description: "One-on-one coaching sessions to boost your AI skills." },
];

const testimonials: Testimonial[] = [
  { quote: "The best AI consultant I have worked with! Helped me scale my business in no time.", author: "Client Name" },
];

const ConsultantWebsite: FC = () => {
  return (
    <div className="flex flex-col items-center p-8 bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <motion.div
        className="text-center max-w-3xl mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold mb-4">Your AI Consultant & Coach</h1>
        <p className="text-lg text-gray-600">Helping you harness the power of AI to grow your business and skills.</p>
        <Link href="/contact">
          <a className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg">Get a Free Consultation</a>
        </Link>
      </motion.div>

      {/* About Section */}
      <div className="w-full max-w-3xl mb-8 p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold mb-2">About Me</h2>
        <p className="text-gray-700">With years of experience in AI and coaching, I help businesses and individuals integrate AI solutions effectively.</p>
      </div>

      {/* Services Section */}
      <div className="w-full max-w-3xl mb-8">
        <h2 className="text-2xl font-semibold text-center mb-4">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service, index) => (
            <div key={index} className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-medium">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="w-full max-w-3xl mb-8 p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold mb-2 text-center">Testimonials</h2>
        {testimonials.map((testimonial, index) => (
          <p key={index} className="text-gray-700 italic">"{testimonial.quote}" - {testimonial.author}</p>
        ))}
      </div>

      {/* Contact Section */}
      <div className="w-full max-w-3xl p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
        <form>
          <input className="w-full p-2 mb-2 border rounded-lg" type="text" placeholder="Your Name" />
          <input className="w-full p-2 mb-2 border rounded-lg" type="email" placeholder="Your Email" />
          <textarea className="w-full p-2 mb-2 border rounded-lg" placeholder="Your Message"></textarea>
          <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded-lg">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ConsultantWebsite;
