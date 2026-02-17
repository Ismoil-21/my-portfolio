import React from "react";

const Footer = () => {
  const socialLinks = [
    { emoji: "💼", href: "#", label: "LinkedIn" },
    { emoji: "🐙", href: "#", label: "GitHub" },
    { emoji: "✈️", href: "#", label: "Telegram" },
  ];

  return (
    <footer className="py-12 border-t border-dark-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="font-display font-bold text-2xl mb-4">
            <span className="text-accent-cyan">Ismoil Tohirov</span>
          </div>
          <p className="font-mono text-gray-500 mb-6">
            Junior Frontend Developer | UI to Code Specialist
          </p>
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-400 hover:text-accent-cyan transition-colors text-2xl"
                aria-label={link.label}
              >
                <span>{link.emoji}</span>
              </a>
            ))}
          </div>
          <p className="font-mono text-sm text-gray-600">
            © {new Date().getFullYear()} Ismoil Tohirov. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
