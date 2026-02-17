import React from "react";

const Strengths = () => {
  const strengths = [
    {
      emoji: "📱",
      title: "Pixel-Perfect Responsive",
      description:
        "Mobile, tablet, desktop — har bir qurilmada mukammal ko'rinish. Mobile-first approach bilan responsive dizayn kafolatlanadi.",
      color: "accent-cyan",
    },
    {
      emoji: "⚡",
      title: "Lightning Fast",
      description:
        "Optimizatsiya, lazy loading, va clean code orqali tezkor yuklash. Google PageSpeed Insights'da yuqori ko'rsatkichlar.",
      color: "accent-purple",
    },
    {
      emoji: "✨",
      title: "Smooth Animations",
      description:
        "Zamonaviy micro-interactions, hover effects va silliq transition'lar. Foydalanuvchi tajribasi — birinchi o'rinda.",
      color: "accent-green",
    },
    {
      emoji: "🎨",
      title: "Clean & Modern UI",
      description:
        "Figma/Adobe XD dizaynlarini 100% aniqlik bilan kodga aylantirish. Typography, spacing, colors — barchasi pixel-perfect.",
      color: "accent-cyan",
    },
  ];

  return (
    <section id="strengths" className="py-20 sm:py-32 bg-dark-800/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glow-line mb-12">
          <h2 className="font-display font-bold text-4xl sm:text-5xl mb-4">
            <span className="text-accent-cyan">04.</span> Why Choose Me?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {strengths.map((strength, index) => (
            <div
              key={index}
              className={`bg-linear-to-br from-dark-800 to-dark-700 border border-dark-600 rounded-xl p-8 hover:border-${strength.color} transition-all duration-300`}
            >
              <div className="text-5xl mb-4">{strength.emoji}</div>
              <h3
                className={`font-display font-bold text-2xl mb-3 text-${strength.color}`}
              >
                {strength.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {strength.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Strengths;
