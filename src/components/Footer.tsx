import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-eden-light/10 backdrop-blur-sm border-t border-white/5 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold gradient-text">Eden</h3>
          <p className="text-sm text-white/60">
            Revolutionizing the future of event ticketing with blockchain technology.
          </p>
          <div className="flex space-x-4">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
               className="text-white/60 hover:text-white transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
               className="text-white/60 hover:text-white transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
               className="text-white/60 hover:text-white transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="mailto:contact@eden.com"
               className="text-white/60 hover:text-white transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-white">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/faq" className="text-white/60 hover:text-white transition-colors">
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/help" className="text-white/60 hover:text-white transition-colors">
                Help Center
              </Link>
            </li>
            <li>
              <Link to="/blog" className="text-white/60 hover:text-white transition-colors">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-white">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/privacy" className="text-white/60 hover:text-white transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="text-white/60 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link to="/cookies" className="text-white/60 hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-white">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="mailto:support@eden.com" className="text-white/60 hover:text-white transition-colors">
                support@eden.com
              </a>
            </li>
            <li>
              <a href="tel:+1234567890" className="text-white/60 hover:text-white transition-colors">
                +1 (234) 567-890
              </a>
            </li>
            <li className="text-white/60">
              123 Blockchain Street<br />
              San Francisco, CA 94105
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 py-4 text-center text-sm text-white/40">
          © {new Date().getFullYear()} Eden. All rights reserved.
        </div>
      </div>
    </footer>
  );
};