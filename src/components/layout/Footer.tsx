'use client';

import { Mail, Phone, MapPin, Linkedin, Facebook } from 'lucide-react';
import { navLinks } from '@/lib/data';
import { motion } from 'framer-motion';
import { easings, durations } from '@/lib/animations';
import Logo from '@/components/ui/Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="bg-industrial-navy border-t border-industrial-steel/30">
      <div className="section-container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Logo variant="full" size="lg" />
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
              <li>Electrical Services</li>
              <li>Instrumentation Services</li>
              <li>Commissioning & Startup</li>
              <li>Maintenance & Shutdown</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm text-gray-400">
                <Mail size={18} className="mt-0.5 flex-shrink-0 text-industrial-blue" />
                <motion.a 
                  href="mailto:info@nextron-ei.com" 
                  className="hover:text-industrial-blue transition-colors"
                  whileHover={{ 
                    x: 2,
                    transition: { duration: durations.fast },
                  }}
                >
                  info@nextron-ei.com
                </motion.a>
              </li>
              <li className="flex items-start space-x-3 text-sm text-gray-400">
                <Phone size={18} className="mt-0.5 flex-shrink-0 text-industrial-blue" />
                <motion.a 
                  href="tel:+1234567890" 
                  className="hover:text-industrial-blue transition-colors"
                  whileHover={{ 
                    x: 2,
                    transition: { duration: durations.fast },
                  }}
                >
                  +1 (234) 567-8900
                </motion.a>
              </li>
              <li className="flex items-start space-x-3 text-sm text-gray-400">
                <MapPin size={18} className="mt-0.5 flex-shrink-0 text-industrial-blue" />
                <span>Industrial District, Energy Hub</span>
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
