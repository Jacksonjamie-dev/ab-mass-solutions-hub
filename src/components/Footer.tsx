const Footer = () => {
  const footerLinks = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Sitemap", href: "#" }
  ];

  return (
    <footer className="bg-corporate-gray text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-full"></div>
              <span className="font-bold text-xl">AB MASS COMPANY LIMITED</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Empowering progress through innovation and service across Information Technology, 
              Construction, Environmental Management, Medical Supply, and Business Consultancy.
            </p>
            <p className="text-gray-400 text-sm">
              Tema, Greater Accra Region, Ghana
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-white transition-smooth">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-smooth">About Us</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-smooth">Our Services</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-smooth">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-300">Information Technology</li>
              <li className="text-gray-300">Civil Construction</li>
              <li className="text-gray-300">Environmental Management</li>
              <li className="text-gray-300">Medical Supply</li>
              <li className="text-gray-300">Business Management</li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-600 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 AB MASS COMPANY LIMITED. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {footerLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href} 
                  className="text-gray-400 text-sm hover:text-white transition-smooth"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;