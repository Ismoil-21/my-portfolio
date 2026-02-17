import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Telegram Bot konfiguratsiyasi
  // .env faylida sozlang yoki to'g'ridan-to'g'ri bu yerga yozing
  const TELEGRAM_BOT_TOKEN =
    import.meta.env.REACT_APP_TELEGRAM_BOT_TOKEN ||
    "8541997843:AAFUmvI2jnzFgEH1UTPazDDhe7m1eoSCtnQ";
  const TELEGRAM_CHAT_ID =
    import.meta.env.REACT_APP_TELEGRAM_CHAT_ID || "5520835955";

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendToTelegram = async (data) => {
    const message = `
🔔 Yangi Portfolio Xabari!

👤 Ism: ${data.name}
📧 Email: ${data.email}

💬 Xabar:
${data.message}

⏰ Vaqt: ${new Date().toLocaleString("uz-UZ")}
    `.trim();

    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: "HTML",
      }),
    });

    if (!response.ok) {
      throw new Error("Telegram API error");
    }

    return response.json();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await sendToTelegram(formData);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });

      // 3 soniyadan keyin success message yo'qoladi
      setTimeout(() => setSubmitStatus(null), 3000);
    } catch (error) {
      console.error("Error sending message:", error);
      setSubmitStatus("error");

      // 5 soniyadan keyin error message yo'qoladi
      setTimeout(() => setSubmitStatus(null), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  // function App() {
  //   const handle
  // }

  return (
    <section id="contact" className="py-20 sm:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glow-line mb-12 text-center">
          <h2 className="font-display font-bold text-4xl sm:text-5xl mb-4">
            <span className="text-accent-cyan">05.</span> Get In Touch
          </h2>
          <p className="text-gray-400 text-lg">
            Loyiha bo'yicha savol yoki taklifingiz bormi? Bog'laning!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <a
            href="toxirovi82@gmail.com"
            className="bg-dark-800 border-2 border-dark-600 rounded-xl p-6 hover:border-accent-cyan transition-all duration-300 group"
          >
            <div className="text-4xl mb-3">📧</div>
            <h3 className="font-display font-bold text-xl mb-2 group-hover:text-accent-cyan transition-colors">
              Email
            </h3>
            <p className="font-mono text-gray-400">toxirovi82@gmail.com</p>
          </a>

          <a
            href="https://t.me/tox1roff_16"
            className="bg-dark-800 border-2 border-dark-600 rounded-xl p-6 hover:border-accent-cyan transition-all duration-300 group"
          >
            <div className="text-4xl mb-3">✈️</div>
            <h3 className="font-display font-bold text-xl mb-2 group-hover:text-accent-cyan transition-colors">
              Telegram
            </h3>
            <p className="font-mono text-gray-400">@tox1roff_16</p>
          </a>
        </div>

        <div className="bg-dark-800 border border-dark-600 rounded-xl p-8">
          <h3 className="font-display font-bold text-2xl mb-6">
            Send a Message
          </h3>

          {/* Success Message */}
          {submitStatus === "success" && (
            <div className="mb-6 p-4 bg-accent-green/20 border border-accent-green rounded-lg">
              <p className="text-accent-green font-semibold flex items-center">
                <span className="mr-2">✅</span>
                Xabar muvaffaqiyatli yuborildi! Tez orada javob beraman.
              </p>
            </div>
          )}

          {/* Error Message */}
          {submitStatus === "error" && (
            <div className="mb-6 p-4 bg-red-500/20 border border-red-500 rounded-lg">
              <p className="text-red-400 font-semibold flex items-center">
                <span className="mr-2">❌</span>
                Xatolik yuz berdi. Iltimos, qaytadan urinib ko'ring yoki
                to'g'ridan-to'g'ri bog'laning.
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block font-mono text-sm text-gray-400 mb-2">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg focus:outline-none focus:border-accent-cyan transition-colors text-white"
                placeholder="John Doe"
                required
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label className="block font-mono text-sm text-gray-400 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg focus:outline-none focus:border-accent-cyan transition-colors text-white"
                placeholder="john@example.com"
                required
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label className="block font-mono text-sm text-gray-400 mb-2">
                Message
              </label>
              <textarea
                rows="5"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg focus:outline-none focus:border-accent-cyan transition-colors text-white resize-none"
                placeholder="Sizning xabaringiz..."
                required
                disabled={isSubmitting}
              />
            </div>

            <button
              type="submit"
              className="btn-glow w-full px-8 py-4 bg-accent-cyan text-dark-900 font-display cursor-pointer font-bold text-lg rounded-lg hover:bg-white hover:text-black border transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-dark-900"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Yuborilmoqda...
                </span>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
