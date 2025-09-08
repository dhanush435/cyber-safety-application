import React, { useState } from 'react';
import { feedbackAPI } from '../services/api';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    category: 'General Inquiry'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await feedbackAPI.create(formData);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        category: 'General Inquiry'
      });
    } catch (error) {
      console.error('Error submitting feedback:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email Us',
      description: 'Send us an email anytime',
      value: 'support@cybersafety.com'
    },
    {
      icon: '📞',
      title: 'Call Us',
      description: 'Mon-Fri from 9am to 6pm',
      value: '+1 (555) 123-4567'
    },
    {
      icon: '💬',
      title: 'Live Chat',
      description: 'Chat with our support team',
      value: 'Available 24/7'
    },
    {
      icon: '📍',
      title: 'Visit Us',
      description: 'Come say hello at our office',
      value: '123 Security St, Cyber City'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-[35vh] md:h-[40vh]">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-end pb-10">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl max-w-3xl text-gray-200">
              Have questions about cyber safety? Need help with a specific threat? We're here to help you stay secure online.
            </p>
            <div className="height: 200px;"></div>
            <p>.</p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              We're here to help you with any questions about cyber safety, threats, 
              or our platform. Reach out to us through any of the channels below.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-blue-400/10 p-3 rounded-lg">
                    <span className="text-2xl">{info.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{info.title}</h3>
                    <p className="text-gray-300 mb-1">{info.description}</p>
                    <p className="text-blue-400 font-medium">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* FAQ Section */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h3>
              <div className="space-y-4">
                <div className="bg-neutral-900 border border-white/5 p-4 rounded-lg">
                  <h4 className="font-semibold text-white mb-2">How often is the threat database updated?</h4>
                  <p className="text-gray-300">Our threat database is updated daily with the latest information from security researchers and threat intelligence sources.</p>
                </div>
                <div className="bg-neutral-900 border border-white/5 p-4 rounded-lg">
                  <h4 className="font-semibold text-white mb-2">Is the platform free to use?</h4>
                  <p className="text-gray-300">Yes, our basic platform is completely free. We also offer premium features for advanced users and organizations.</p>
                </div>
                <div className="bg-neutral-900 border border-white/5 p-4 rounded-lg">
                  <h4 className="font-semibold text-white mb-2">Can I report a new threat?</h4>
                  <p className="text-gray-300">Absolutely! Use the feedback form to report new threats or security concerns. Our team will review and add them to our database.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Feedback Form */}
          <div className="bg-neutral-900 border border-white/5 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              Send us a Message
            </h2>

            {submitStatus === 'success' && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                Thank you for your message! We'll get back to you within 24 hours.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
                Sorry, there was an error sending your message. Please try again.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-white/10 bg-neutral-800 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-white/10 bg-neutral-800 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-200 mb-2">
                  Category *
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-white/10 bg-neutral-800 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Bug Report">Bug Report</option>
                  <option value="Feature Request">Feature Request</option>
                  <option value="Security Concern">Security Concern</option>
                  <option value="Educational Content">Educational Content</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-200 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-white/10 bg-neutral-800 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Brief description of your inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-2 border border-white/10 bg-neutral-800 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Please provide details about your inquiry..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-white text-black hover:bg-gray-200 disabled:opacity-60 font-bold py-3 px-6 rounded-lg"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
