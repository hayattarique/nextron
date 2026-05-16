'use client';

import { Mail, Phone, MapPin, Linkedin, Facebook } from 'lucide-react';
import { navLinks, services } from '@/lib/data';
import { motion } from 'framer-motion';
import { easings, durations } from '@/lib/motion';
import Logo from '@/components/ui/Logo';
import { scrollToSection } from '@/lib/utils';
import { siteConfig } from '@/lib/config';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-industrial-navy border-t border-industrial-steel/30">
      <div className="section-container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="-mb-3">
              <Logo variant="full" size="lg" />
            </div>
            <p className="text-gray-400 text-sm">
              Delivering electrical and instrumentation excellence for critical
              industrial operations across oil & gas, petrochemical, and power
              sectors.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="#"
                className="w-9 h-9 bg-industrial-slate rounded-lg flex items-center justify-center hover:bg-industrial-blue transition-colors duration-300"
                aria-label="LinkedIn"
                whileHover={{ 
                  y: -3,
                  scale: 1.05,
                  backgroundColor: 'rgba(37, 99, 235, 1)',
                  transition: { duration: durations.fast, ease: easings.mechanical },
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin size={18} />
              </motion.a>
              <motion.a
                href="#"
                className="w-9 h-9 bg-industrial-slate rounded-lg flex items-center justify-center hover:bg-industrial-blue transition-colors duration-300"
                aria-label="Facebook"
                whileHover={{ 
                  y: -3,
                  scale: 1.05,
                  backgroundColor: 'rgba(37, 99, 235, 1)',
                  transition: { duration: durations.fast, ease: easings.mechanical },
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Facebook size={18} />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <motion.button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-industrial-blue transition-colors duration-300 text-sm"
                    whileHover={{ 
                      x: 4,
                      transition: { duration: durations.fast, ease: easings.mechanical },
                    }}
                  >
                    {link.label}
                  </motion.button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              {services.map((s) => (
                <li key={s.id}>{s.title}</li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm text-gray-400">
                <Mail size={18} className="mt-0.5 flex-shrink-0 text-industrial-blue" />
                <motion.a 
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-industrial-blue transition-colors"
                  whileHover={{ 
                    x: 2,
                    transition: { duration: durations.fast },
                  }}
                >
                  {siteConfig.contact.email}
                </motion.a>
              </li>
              <li className="flex items-start space-x-3 text-sm text-gray-400">
                <Phone size={18} className="mt-0.5 flex-shrink-0 text-industrial-blue" />
                <motion.a 
                  href={`tel:${siteConfig.contact.phone}`}
                  className="hover:text-industrial-blue transition-colors"
                  whileHover={{ 
                    x: 2,
                    transition: { duration: durations.fast },
                  }}
                >
                  {siteConfig.contact.phone}
                </motion.a>
              </li>
              <li className="flex items-start space-x-3 text-sm text-gray-400">
                <MapPin size={18} className="mt-0.5 flex-shrink-0 text-industrial-blue" />
                <span>Omar Bin Abdulaziz Road, 3679<br />Al Balad, Yanbu 46424<br />Saudi Arabia</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-industrial-steel/30">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Nextron Electrical & Instrumentation. All rights
              reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <motion.a 
                href="#" 
                className="hover:text-industrial-blue transition-colors"
                whileHover={{ 
                  y: -2,
                  transition: { duration: durations.fast },
                }}
              >
                Privacy Policy
              </motion.a>
              <motion.a 
                href="#" 
                className="hover:text-industrial-blue transition-colors"
                whileHover={{ 
                  y: -2,
                  transition: { duration: durations.fast },
                }}
              >
                Terms of Service
              </motion.a>
            </div>
          </div>
          
          {/* Developer Credit */}
          <div className="mt-6 text-center">
            <p className="text-gray-500 text-sm">
              Designed & Developed by{' '}
              <motion.a
                href="https://tariqhayat.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-industrial-blue transition-colors duration-300 font-medium"
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: durations.fast, ease: easings.mechanical },
                }}
              >
                Tarique Hayat
              </motion.a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
