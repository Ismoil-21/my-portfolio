import React from "react";

const About = () => {
  const highlights = [
    {
      emoji: "⚡",
      title: "Tez Ishlash",
      description: "Optimizatsiya va performance — har doim birinchi o'rinda",
    },
    {
      emoji: "📱",
      title: "100% Responsive",
      description: "Mobile-first yondashuv bilan barcha qurilmalarda mukammal",
    },
    {
      emoji: "✨",
      title: "Silliq Animatsiyalar",
      description: "Zamonaviy transition va micro-interaction'lar",
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-32 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glow-line mb-12">
          <h2 className="font-display font-bold text-4xl sm:text-5xl mb-4">
            <span className="text-accent-cyan">01.</span> About Me
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Men{" "}
              <span className="text-accent-cyan font-semibold">
                Ismoil Tohirov
              </span>
              , 6 oylik tajribaga ega Junior Frontend Developerman. Men
              dizaynerlarning UI/UX loyihalarini to'liq ishlaydigan, responsive
              va zamonaviy web sahifalarga aylantirishga ixtisoslashganman.
            </p>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Mening asosiy yo'nalishim —{" "}
              <span className="text-accent-green font-semibold">
                chiroyli landing page'lar
              </span>{" "}
              va corporate saytlar yaratish. Har bir loyihada pixel-perfect
              kodlash, tez yuklash va silliq animatsiyalarga e'tibor beraman.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Mijozlarga{" "}
              <span className="text-accent-purple font-semibold">
                responsive dizayn
              </span>
              ,{" "}
              <span className="text-accent-purple font-semibold">
                clean kod
              </span>{" "}
              va
              <span className="text-accent-purple font-semibold">
                {" "}
                professional natija
              </span>{" "}
              taqdim etaman.
            </p>
          </div>

          <div className="space-y-4">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-dark-800 border border-dark-600 rounded-lg p-6 hover:border-accent-cyan transition-all duration-300"
              >
                <div className="flex items-center mb-2">
                  <span className="text-3xl mr-3">{item.emoji}</span>
                  <h3 className="font-display font-bold text-xl">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
