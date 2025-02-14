"use client";

import React from 'react';
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FC } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type Service = {
  title: string;
  description: string;
  image: string;
};

type Testimonial = {
  quote: string;
  author: string;
  image: string;
};

type BlogPost = {
  title: string;
  excerpt: string;
  image: string;
  link: string;
};

const services: Service[] = [
  { title: "AI Strategy Consulting", description: "Tailored AI solutions for your business needs.", image: "https://images.pexels.com/photos/6153354/pexels-photo-6153354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { title: "Personal AI Coaching", description: "One-on-one coaching sessions to boost your AI skills.", image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600" },
];

const testimonials: Testimonial[] = [
  { quote: "The best AI consultant I have worked with! Helped me scale my business in no time.", author: "John Doe", image: "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { quote: "AI strategies that truly make a difference! Highly recommend.", author: "Michael Smith", image: "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { quote: "An incredible experience working with this AI expert!", author: "Sophia Lee", image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { quote: "Great AI solutions that boosted our efficiency.", author: "David Kim", image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600" }
];

const blogPosts: BlogPost[] = [
  { title: "The Future of AI in Business", excerpt: "AI is transforming industries. Learn how you can leverage AI for growth.", image: "https://images.pexels.com/photos/5473956/pexels-photo-5473956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", link: "https://medium.com/@ozgevurmaz/the-future-of-ai-in-business-a-game-changer-for-every-industry-f2d25e019bae" },
  { title: "5 AI Tools to Boost Productivity", excerpt: "Discover the top AI tools that can streamline your workflow.", image: "https://images.pexels.com/photos/17485679/pexels-photo-17485679/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-depicts-how-ai-could-be-used-in-the-field-of-sustainability-from-biodiversity-to-climate-it-was-created-by-nidia-dias.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", link: "https://medium.com/@ozgevurmaz/5-ai-tools-to-boost-productivity-and-make-your-life-easier-59edd8e83551" },
];

const ConsultantWebsite: FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg border-b border-gray-200 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
            AI Consultant
          </h1>
          <div className="hidden md:flex space-x-8 text-lg">
            <Link href="#" className="text-gray-700 hover:text-blue-500 transition-all">Home</Link>
            <Link href="#services" className="text-gray-700 hover:text-blue-500 transition-all">Services</Link>
            <Link href="#blog" className="text-gray-700 hover:text-blue-500 transition-all">Blog</Link>
            <Link href="#contact" className="text-gray-700 hover:text-blue-500 transition-all">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.div
        className="pt-40 pb-20 px-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          AI-Driven Solutions for Growth
        </h1>
        <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
          Harness the power of AI to scale your business and elevate efficiency.
        </p>
        <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full text-lg shadow-lg transition-all">
          Start Now
        </Button>
      </motion.div>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-white/70 backdrop-blur-md">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Services</h2>
          <div className="grid md:grid-cols-2 gap-10">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow bg-white rounded-lg overflow-hidden">
                <CardContent className="p-6">
                  <div className="aspect-video relative mb-4 rounded-lg overflow-hidden">
                    <Image src={service.image} alt={service.title} fill className="object-cover" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{service.title}</h3>
                  <p className="text-gray-700">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 px-6 bg-white/70 backdrop-blur-md">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Clients</h2>
          <div className="grid md:grid-cols-2 gap-10">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all p-6 flex items-center gap-4"
              >
                <Image src={testimonial.image} alt={testimonial.author} width={80} height={80} className="rounded-full" />
                <div>
                  <p className="text-gray-700 italic">&quot;{testimonial.quote}&quot;</p>
                  <p className="text-sm font-semibold mt-2">- {testimonial.author}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Latest Insights</h2>
          <div className="grid md:grid-cols-2 gap-10">
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all"
              >
                <div className="aspect-video relative">
                  <Image src={post.image} alt={post.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{post.title}</h3>
                  <p className="text-gray-700 mb-4">{post.excerpt}</p>
                  <Link href={post.link} className="text-blue-500 hover:text-blue-600 font-medium">
                    Read More →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="py-20 px-6  backdrop-blur-md">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Get in Touch</h2>
          <Card className="bg-white shadow-lg rounded-lg p-6">
            <CardContent>
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Your Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Your Email</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea
                    rows={5}
                    placeholder="Write your message here..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
                <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg shadow-md transition-all">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default ConsultantWebsite;
