import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-pattern"
    >
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent-cyan rounded-full filter blur-3xl opacity-20 float"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent-purple rounded-full filter blur-3xl opacity-20 float"
          style={{ animationDelay: "-3s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="fade-in delay-100">
          <p className="font-mono text-accent-cyan text-sm sm:text-base mb-4 tracking-widest">
            &lt;Hello World /&gt;
          </p>
        </div>

        <h1 className="font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-6 slide-up delay-200">
          Ismoil <span className="text-accent-cyan">Tohirov</span>
        </h1>

        <div className="slide-up delay-300 mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-semibold text-gray-300 mb-4">
            Junior Frontend Developer
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 font-mono max-w-2xl mx-auto">
            UI dizayndan kodga aylantirish → Landing page'lar yaratish
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center slide-up delay-400 mt-12">
          <a
            href="#projects"
            className="btn-glow px-8 py-4 border bg-accent-cyan text-dark-900 font-display font-bold text-lg rounded-lg hover:bg-white hover:text-black transition-all duration-300 w-full sm:w-auto"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="btn-glow px-8 py-4 border border-accent-cyan text-accent-cyan font-display font-bold text-lg rounded-lg hover:bg-white hover:text-black transition-all duration-300 w-full sm:w-auto"
          >
            Contact Me
          </a>
        </div>

        <div className="mt-16 slide-up delay-500">
          <p className="font-mono text-sm text-gray-500">
            Scroll down to explore
          </p>
          <div className="mt-4 flex justify-center">
            <div className="w-6 h-10 border-2 border-accent-cyan rounded-full flex justify-center">
              <div className="bg-white w-0.5 h-1.5 mt-2 rounded-full animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
