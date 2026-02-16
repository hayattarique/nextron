'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, Building2 } from 'lucide-react';
import { 
  staggerContainer,
  fadeUp,
  cardHover,
  inputFocus,
  buttonHover,
  buttonPress,
  easings,
  durations,
  viewportConfig,
  useReducedMotion,
} from '@/lib/motion';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, viewportConfig.standard);
  const prefersReducedMotion = useReducedMotion();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry. We will contact you shortly.');

    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      subject: '',
      message: '',
    });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="section-padding bg-industrial-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-industrial-blue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={fadeUp} className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-industrial-blue font-semibold text-sm uppercase tracking-wider">
              Get in Touch
            </span>
            <h2 className="heading-2 text-white">
              Let&apos;s Discuss Your Project
            </h2>
            <p className="body-large">
              Ready to enhance your facility&apos;s electrical and instrumentation
              systems? Contact us for a consultation with our technical experts.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Contact Info Cards */}
            <motion.div variants={fadeUp} className="space-y-6">
              {/* Email Card */}
              <motion.div 
                variants={fadeUp}
                className="card-industrial group"
                whileHover={prefersReducedMotion ? {} : {
                  ...cardHover,
                  borderColor: 'rgba(37, 99, 235, 0.5)',
                }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-industrial-blue/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-industrial-blue/20 transition-colors duration-300">
                    <Mail className="text-industrial-blue" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold mb-2">Email Us</h3>
                    <a
                      href="mailto:info@nextron-ei.com"
                      className="text-gray-400 hover:text-industrial-blue transition-colors text-sm"
                    >
                      info@nextron-ei.com
                    </a>
                    <br />
                    <a
                      href="mailto:projects@nextron-ei.com"
                      className="text-gray-400 hover:text-industrial-blue transition-colors text-sm"
                    >
                      projects@nextron-ei.com
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Phone Card */}
              <motion.div 
                variants={fadeUp}
                className="card-industrial group"
                whileHover={prefersReducedMotion ? {} : {
                  ...cardHover,
                  borderColor: 'rgba(37, 99, 235, 0.5)',
                }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-industrial-blue/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-industrial-blue/20 transition-colors duration-300">
                    <Phone className="text-industrial-blue" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold mb-2">Call Us</h3>
                    <a
                      href="tel:+1234567890"
                      className="text-gray-400 hover:text-industrial-blue transition-colors text-sm block"
                    >
                      +1 (234) 567-8900
                    </a>
                    <a
                      href="tel:+1234567891"
                      className="text-gray-400 hover:text-industrial-blue transition-colors text-sm block"
                    >
                      +1 (234) 567-8901 (Emergency)
                    </a>
                    <p className="text-gray-500 text-xs mt-2">
                      24/7 Emergency Support
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Location Card */}
              <motion.div 
                variants={fadeUp}
                className="card-industrial group"
                whileHover={prefersReducedMotion ? {} : {
                  ...cardHover,
                  borderColor: 'rgba(37, 99, 235, 0.5)',
                }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-industrial-blue/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-industrial-blue/20 transition-colors duration-300">
                    <MapPin className="text-industrial-blue" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold mb-2">Visit Us</h3>
                    <p className="text-gray-400 text-sm">
                      Industrial District<br />
                      Energy Hub Building<br />
                      Suite 500
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Office Hours */}
              <motion.div 
                variants={fadeUp}
                className="card-industrial bg-gradient-to-br from-industrial-blue/10 to-blue-600/5 border-industrial-blue/30"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-industrial-blue/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Building2 className="text-industrial-blue" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold mb-2">Office Hours</h3>
                    <p className="text-gray-300 text-sm">
                      Monday - Friday: 8:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 2:00 PM<br />
                      <span className="text-industrial-blue font-medium">
                        Emergency Services: 24/7
                      </span>
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={fadeUp} className="lg:col-span-2">
              <div className="card-industrial">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Email Row */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-white font-medium mb-2 text-sm"
                      >
                        Full Name *
                      </label>
                      <motion.input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-industrial-slate/50 border border-industrial-steel/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-industrial-blue transition-colors"
                        placeholder="John Smith"
                        whileFocus={prefersReducedMotion ? {} : inputFocus}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-white font-medium mb-2 text-sm"
                      >
                        Email Address *
                      </label>
                      <motion.input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-industrial-slate/50 border border-industrial-steel/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-industrial-blue transition-colors"
                        placeholder="john@company.com"
                        whileFocus={prefersReducedMotion ? {} : inputFocus}
                      />
                    </div>
                  </div>

                  {/* Company and Phone Row */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-white font-medium mb-2 text-sm"
                      >
                        Company Name *
                      </label>
                      <motion.input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-industrial-slate/50 border border-industrial-steel/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-industrial-blue transition-colors"
                        placeholder="Your Company"
                        whileFocus={prefersReducedMotion ? {} : inputFocus}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-white font-medium mb-2 text-sm"
                      >
                        Phone Number
                      </label>
                      <motion.input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-industrial-slate/50 border border-industrial-steel/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-industrial-blue transition-colors"
                        placeholder="+1 (234) 567-8900"
                        whileFocus={prefersReducedMotion ? {} : inputFocus}
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-white font-medium mb-2 text-sm"
                    >
                      Subject *
                    </label>
                    <motion.select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-industrial-slate/50 border border-industrial-steel/30 rounded-lg text-white focus:outline-none focus:border-industrial-blue transition-colors"
                      whileFocus={prefersReducedMotion ? {} : inputFocus}
                    >
                      <option value="">Select a subject</option>
                      <option value="project">New Project Inquiry</option>
                      <option value="electrical">Electrical Services</option>
                      <option value="instrumentation">Instrumentation Services</option>
                      <option value="commissioning">Commissioning & Startup</option>
                      <option value="maintenance">Maintenance Support</option>
                      <option value="emergency">Emergency Service</option>
                      <option value="other">Other</option>
                    </motion.select>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-white font-medium mb-2 text-sm"
                    >
                      Project Details *
                    </label>
                    <motion.textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-industrial-slate/50 border border-industrial-steel/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-industrial-blue transition-colors resize-none"
                      placeholder="Please provide details about your project, timeline, and any specific requirements..."
                      whileFocus={prefersReducedMotion ? {} : inputFocus}
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="flex items-center justify-between pt-2">
                    <p className="text-gray-400 text-sm">
                      * Required fields
                    </p>
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                      whileHover={!isSubmitting && !prefersReducedMotion ? { 
                        ...buttonHover,
                        boxShadow: '0 10px 30px rgba(37, 99, 235, 0.3)',
                      } : {}}
                      whileTap={!isSubmitting && !prefersReducedMotion ? buttonPress : {}}
                    >
                      <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                      <Send size={18} />
                    </motion.button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>

          {/* Bottom CTA */}
          <motion.div variants={fadeUp} className="text-center">
            <p className="text-gray-400 text-lg">
              For urgent matters or emergency support, call our 24/7 hotline:{' '}
              <a
                href="tel:+1234567891"
                className="text-industrial-blue font-semibold hover:text-blue-400 transition-colors"
              >
                +1 (234) 567-8901
              </a>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
