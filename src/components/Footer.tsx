import React from 'react';
import { Brain, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center">
              <Brain className="h-8 w-8 text-indigo-400" />
              <span className="ml-2 text-xl font-bold">GBGH</span>
            </div>
            <p className="mt-4 text-gray-400">
              AI-powered customer support, CRM automation & SEO for business growth.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">Solutions</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">AI Customer Support</a></li>
              <li><a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">CRM Automation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">SEO Optimization</a></li>
              <li><a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">Analytics & Reporting</a></li>
              <li><a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">API Integration</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">Company</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">Press</a></li>
              <li><a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">Partners</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">Contact</h3>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-gray-400 mr-2" />
                <a href="mailto:info@gbgh.ai" className="text-gray-400 hover:text-indigo-400 transition-colors">info@gbgh.ai</a>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-gray-400 mr-2" />
                <a href="tel:+1-800-123-4567" className="text-gray-400 hover:text-indigo-400 transition-colors">+1-800-123-4567</a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-gray-400">123 AI Street, San Francisco, CA 94107</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} GBGH AI. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
