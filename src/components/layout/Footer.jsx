



import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const FooterColumn = ({ title, links }) => (
  <div className="flex flex-col">
    <h3 className="text-white text-lg font-serif font-semibold mb-6">{title}</h3>
    <ul className="space-y-3">
      {links.map((link) => (
        <li key={link}>
          <a 
            href="#" 
            // ACCESSIBILITY FIX: Changed text-gray-400 to text-gray-300 for higher contrast
            className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-300 text-sm inline-block"
          >
            {link}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  return (
    <footer className="bg-dc-dark text-white pt-20 pb-8 border-t border-gray-800 mt-auto">
      <div className="container mx-auto px-6">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          <FooterColumn 
            title="About" 
            links={['Principal\'s Desk', 'Prefects and Captains', 'Synopsis on DC', 'Alumni / ODA', 'Campus', 'Facilities', 'Location']} 
          />
          <FooterColumn 
            title="History" 
            links={['Evolution', 'Founder of DC', 'Presidents of the Board', 'Original Donors', 'Patrons of the College', 'Principals at DC']} 
          />
          <FooterColumn 
            title="Admission" 
            links={['Admission Procedure', 'E-Brochure', 'Fee Structure', 'Registration']} 
          />
          <FooterColumn 
            title="Academics" 
            links={['Committee', 'Mandatory Disclosure', 'Transfer Certificate']} 
          />
          <FooterColumn 
            title="Career Guidance" 
            links={['Guidance Activities', 'ICS Career Login', 'Placement Records', 'Guidance Calendar']} 
          />
        </div>

        <div className="border-t border-gray-800 mb-8" aria-hidden="true"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-400">
          
          <div className="flex flex-wrap justify-center gap-6">
            <span>© 2025 Daly College Indore</span>
            <nav className="flex gap-6" aria-label="Legal Links">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
              <a href="#" className="hover:text-white transition-colors">Sitemap</a>
            </nav>
          </div>

          <div className="flex gap-4">
            {[
              { icon: FaFacebookF, label: "Facebook" },
              { icon: FaTwitter, label: "Twitter" },
              { icon: FaInstagram, label: "Instagram" },
              { icon: FaYoutube, label: "YouTube" }
            ].map((social, index) => (
              <a 
                key={index} 
                href="#" 
                aria-label={social.label} // This was already good!
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-dc-red hover:text-white transition-all transform hover:-translate-y-1"
              >
                <social.icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;