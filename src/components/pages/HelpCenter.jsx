import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import {
  FaSearch,
  FaQuestionCircle,
  FaPhone,
  FaEnvelope,
  FaCalendarAlt,
  FaUserMd,
  FaFileAlt,
  FaLock,
} from "react-icons/fa";
import Banner from "../common/Banner";

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("general");
  const navigate = useNavigate();

  // Function to handle navigation with scroll to top
  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // FAQ data organized by categories
  const faqs = {
    general: [
      {
        question: "How do I create an account?",
        answer:
          'To create an account, click on the "Sign Up" button in the top right corner. Fill in your details including name, email, and password. Once submitted, you\'ll receive a confirmation email to verify your account.',
      },
      {
        question: "How do I book an appointment?",
        answer:
          'To book an appointment, first log in to your account. Then, go to the "Doctors" page, select your preferred doctor, choose an available time slot, and confirm your appointment. You\'ll receive a confirmation email with the details.',
      },
      {
        question: "Can I reschedule my appointment?",
        answer:
          'Yes, you can reschedule your appointment. Go to the "Appointments" page, find your upcoming appointment, and click the "Reschedule" button. Select a new date and time that works for you.',
      },
    ],
    technical: [
      {
        question: "I forgot my password. How do I reset it?",
        answer:
          'Click on the "Forgot Password" link on the login page. Enter your email address, and we\'ll send you a link to reset your password. Follow the instructions in the email to create a new password.',
      },
      {
        question: "The website is not loading properly. What should I do?",
        answer:
          "Try clearing your browser cache and cookies, then refresh the page. If the issue persists, try using a different browser. If you're still experiencing problems, contact our technical support team.",
      },
      {
        question: "How do I update my profile information?",
        answer:
          'Log in to your account and go to your profile page. Click the "Edit Profile" button to update your information. Don\'t forget to save your changes before leaving the page.',
      },
    ],
    billing: [
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept all major credit cards (Visa, MasterCard, American Express), debit cards, and online payment methods like PayPal. Some insurance plans are also accepted.",
      },
      {
        question: "How do I view my billing history?",
        answer:
          'Log in to your account and go to the "Billing" section. Here you can view your payment history, download invoices, and manage your payment methods.',
      },
      {
        question: "Can I get a refund for a cancelled appointment?",
        answer:
          "Refunds are processed according to our cancellation policy. If you cancel within 24 hours of your appointment, a cancellation fee may apply. Contact our billing department for specific refund inquiries.",
      },
    ],
  };

  // Quick links for common tasks
  const quickLinks = [
    {
      title: "Book Appointment",
      icon: <FaCalendarAlt className="text-4xl text-primary" />,
      description: "Schedule a new appointment with our doctors",
      link: "/doctors",
    },
    {
      title: "Find Doctor",
      icon: <FaUserMd className="text-4xl text-primary" />,
      description: "Browse our network of healthcare professionals",
      link: "/doctors",
    },
    {
      title: "View Records",
      icon: <FaFileAlt className="text-4xl text-primary" />,
      description: "Access your medical records and history",
      link: "/records",
    },
    {
      title: "Account Settings",
      icon: <FaLock className="text-4xl text-primary" />,
      description: "Manage your account preferences and security",
      link: "/settings",
    },
  ];

  const filteredFaqs = Object.entries(faqs).reduce((acc, [category, items]) => {
    acc[category] = items.filter(
      (item) =>
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-gray-50">
      <Banner
        title="Help Center"
        subtitle="Find answers to your questions and get support"
      />
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Search Section */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for help..."
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-primary focus:border-primary"
            />
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {quickLinks.map((link, index) => (
            <button
              key={index}
              onClick={() => handleNavigation(link.link)}
              className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-200"
            >
              <div className="mb-4">{link.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {link.title}
              </h3>
              <p className="text-gray-600">{link.description}</p>
            </button>
          ))}
        </div>

        {/* FAQ Categories */}
        <div className="mb-8">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8" aria-label="Categories">
              {Object.keys(faqs).map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`${
                    activeCategory === category
                      ? "border-primary text-primary"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm capitalize`}
                >
                  {category}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* FAQs */}
        <div className="space-y-6">
          {filteredFaqs[activeCategory].map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200"
            >
              <div className="flex items-start">
                <FaQuestionCircle className="text-primary mt-1 mr-4 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}

          {filteredFaqs[activeCategory].length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No results found for "{searchQuery}" in {activeCategory}{" "}
                category.
              </p>
            </div>
          )}
        </div>

        {/* Contact Support */}
        <div className="mt-12 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Still Need Help?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <FaPhone className="text-primary text-4xl mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Call Us
              </h3>
              <p className="text-gray-600">(123) 456-7890</p>
              <p className="text-gray-600">Available 24/7</p>
            </div>
            <div className="text-center">
              <FaEnvelope className="text-primary text-4xl mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Email Us
              </h3>
              <p className="text-gray-600">support@healthcare.com</p>
              <p className="text-gray-600">Response within 24 hours</p>
            </div>
            <div className="text-center">
              <p className="mt-2 text-gray-600 py-4">Fill out our contact form</p>
              <button
                onClick={() => handleNavigation("/contact")}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-secondary hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                Contact Form
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
