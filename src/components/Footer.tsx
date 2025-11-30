import { Instagram, Facebook, Twitter, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-luxury-black text-luxury-black-foreground py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-6" style={{ color: '#ff9934' }}>About</h3>
            <ul className="space-y-3">
              <li><Link to="#" className="text-sm text-luxury-black-foreground/70 hover:text-[#ff9934] transition-colors">Our Story</Link></li>
              <li><Link to="#" className="text-sm text-luxury-black-foreground/70 hover:text-[#ff9934] transition-colors">Leadership</Link></li>
              <li><Link to="#" className="text-sm text-luxury-black-foreground/70 hover:text-[#ff9934] transition-colors">Sustainability</Link></li>
              <li><Link to="#" className="text-sm text-luxury-black-foreground/70 hover:text-[#ff9934] transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-6" style={{ color: '#ff9934' }}>Customer Service</h3>
            <ul className="space-y-3">
              <li><Link to="#" className="text-sm text-luxury-black-foreground/70 hover:text-[#ff9934] transition-colors">Privacy and Payments</Link></li>
              <li><Link to="#" className="text-sm text-luxury-black-foreground/70 hover:text-[#ff9934] transition-colors">Shipping</Link></li>
              <li><Link to="#" className="text-sm text-luxury-black-foreground/70 hover:text-[#ff9934] transition-colors">Terms of Use</Link></li>
              <li><Link to="#" className="text-sm text-luxury-black-foreground/70 hover:text-[#ff9934] transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-6" style={{ color: '#ff9934' }}>Social Media</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-luxury-black-foreground/70 hover:text-luxury-black-foreground transition-colors flex items-center gap-2">
                  <Instagram size={16} /> Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-luxury-black-foreground/70 hover:text-luxury-black-foreground transition-colors flex items-center gap-2">
                  <Facebook size={16} /> Facebook
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-luxury-black-foreground/70 hover:text-luxury-black-foreground transition-colors flex items-center gap-2">
                  <Twitter size={16} /> Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-luxury-black-foreground/70 hover:text-luxury-black-foreground transition-colors flex items-center gap-2">
                  <Mail size={16} /> LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6" style={{ color: '#ff9934' }}>Contact Us</h3>
            <ul className="space-y-3">
              <li className="text-sm text-luxury-black-foreground/70">Hyderabad, Telangana</li>
              <li className="text-sm text-luxury-black-foreground/70">Open · Closes 10 pm</li>
              <li>
                <a href="tel:09247208546" className="text-sm text-luxury-black-foreground/70 hover:text-luxury-black-foreground transition-colors">
                  092472 08546
                </a>
              </li>
              <li className="text-sm text-luxury-black-foreground/70">On-site services</li>
              <li className="text-sm text-luxury-black-foreground/70">Online estimates</li>
            </ul>
          </div>
        </div>

        {/* Logo and Copyright */}
        <div className="border-t border-luxury-black-foreground/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <img 
                src="/images/WhatsApp Image 2025-11-30 at 22.59.53_630792f0.jpg" 
                alt="Dezyn IQ Logo" 
                className="h-16 w-auto object-contain"
              />
              <div>
                <div className="text-sm text-luxury-black-foreground/50 mt-2">⭐ 4.9 (17) · Interior designer</div>
              </div>
            </div>
            <div className="text-sm text-luxury-black-foreground/50">
              © 2025 Dezyn IQ. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
