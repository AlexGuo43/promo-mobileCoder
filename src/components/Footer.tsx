import React from 'react';
import { Code, Mail, Twitter, Github, Shield, FileText, Users } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Code className="h-8 w-8 text-blue-400 mr-3" />
              <span className="text-2xl font-bold">MobileCoder</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              The ultimate mobile coding experience. Write, test, and deploy code from anywhere, 
              anytime with our powerful mobile IDE.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Download</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">What's New</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#support" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-wrap items-center gap-6 mb-4 md:mb-0">
              <a 
                href="/privacy-policy" 
                className="text-gray-400 hover:text-white transition-colors flex items-center"
              >
                <Shield className="h-4 w-4 mr-1" />
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">
                <FileText className="h-4 w-4 mr-1" />
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">
                <Users className="h-4 w-4 mr-1" />
                Community Guidelines
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              © 2025 MobileCoder. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;