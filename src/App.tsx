import { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Globe, Menu, X, ArrowRight, CheckCircle, Zap, Users, Award, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { name: "Mobile App Development", icon: "📱", desc: "Native & cross-platform apps" },
    { name: "Web Development", icon: "🌐", desc: "Responsive & scalable websites" },
    { name: "UI/UX Design", icon: "🎨", desc: "Beautiful user experiences" },
    { name: "Digital Marketing", icon: "📈", desc: "SEO, SEM & social media" },
    { name: "Custom Software", icon: "⚙️", desc: "Tailored solutions" },
    { name: "IT Staffing", icon: "👥", desc: "Top tech talent" }
  ];

  const features = [
    { icon: <Zap className="w-8 h-8" />, title: "Fast Delivery", desc: "Quick turnaround times" },
    { icon: <Users className="w-8 h-8" />, title: "Expert Team", desc: "Seasoned professionals" },
    { icon: <Award className="w-8 h-8" />, title: "Quality First", desc: "Premium solutions" },
    { icon: <Clock className="w-8 h-8" />, title: "24/7 Support", desc: "Always here for you" }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="bg-white">
      {/* Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2"
            >
              <div className="w-10 h-10 rounded-lg flex items-center justify-center text-2xl" style={{ background: 'linear-gradient(135deg, #0C9BEA 0%, #002D3F 100%)' }}>
                <span className="text-white font-bold">N</span>
              </div>
              <span className="text-2xl font-bold" style={{ color: '#002D3F' }}>
                Nexora<span style={{ color: '#0C9BEA' }}>.</span>
              </span>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {['Home', 'Services', 'Why Us', 'Contact'].map((link) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase().replace(' ', '')}`}
                  whileHover={{ scale: 1.1 }}
                  className="text-base font-medium transition-colors"
                  style={{ color: scrolled ? '#002D3F' : '#002D3F' }}
                  onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = '#0C9BEA'}
                  onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = '#002D3F'}
                >
                  {link}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 rounded-full text-white font-semibold"
                style={{ backgroundColor: '#0C9BEA' }}
              >
                Let's Talk
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden"
              style={{ color: '#002D3F' }}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            {['Home', 'Services', 'Why Us', 'Contact'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(' ', '')}`}
                className="block py-4 px-6 font-medium"
                style={{ color: '#002D3F' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link}
              </a>
            ))}
          </motion.div>
        )}
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 rounded-full" style={{ backgroundColor: '#0C9BEA' }}></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full" style={{ backgroundColor: '#002D3F' }}></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-block px-4 py-2 rounded-full mb-6"
              style={{ backgroundColor: '#0C9BEA20', color: '#0C9BEA' }}
            >
              <span className="font-semibold">🚀 Innovation Meets Excellence</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6" style={{ color: '#002D3F' }}>
              Build The Future
              <br />
              <span style={{ color: '#0C9BEA' }}>With Nexora</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-10">
              We craft digital experiences that transform businesses and delight users worldwide
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(12, 155, 234, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full text-white font-bold text-lg flex items-center gap-2"
                style={{ backgroundColor: '#0C9BEA' }}
              >
                Start Your Project <ArrowRight className="w-5 h-5" />
              </motion.a>

              <motion.a
                href="#services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full font-bold text-lg border-2"
                style={{ color: '#002D3F', borderColor: '#002D3F' }}
              >
                Explore Services
              </motion.a>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
          >
            {[
              { num: "10+", label: "Years" },
              { num: "200+", label: "Clients" },
              { num: "500+", label: "Projects" },
              { num: "98%", label: "Satisfaction" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="text-center p-6 rounded-2xl bg-white shadow-lg"
              >
                <h3 className="text-4xl md:text-5xl font-bold mb-2" style={{ color: '#0C9BEA' }}>
                  {stat.num}
                </h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6" style={{ backgroundColor: '#f8fafc' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4" style={{ color: '#002D3F' }}>
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions tailored to your business needs
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((service, i) => (
              <motion.div
                key={i}
                variants={item}
                whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0, 45, 63, 0.15)" }}
                className="bg-white p-8 rounded-3xl shadow-lg cursor-pointer group"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2" style={{ color: '#002D3F' }}>
                  {service.name}
                </h3>
                <p className="text-gray-600">{service.desc}</p>
                <motion.div
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  className="h-1 mt-4 rounded-full"
                  style={{ backgroundColor: '#0C9BEA' }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="whyus" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4" style={{ color: '#002D3F' }}>
              Why Choose <span style={{ color: '#0C9BEA' }}>Nexora?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We bring experience, expertise, and excellence to every project
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center p-8 rounded-2xl"
                style={{ backgroundColor: '#f8fafc' }}
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center text-white"
                  style={{ backgroundColor: '#0C9BEA' }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#002D3F' }}>
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA Banner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 p-12 rounded-3xl text-center text-white relative overflow-hidden"
            style={{ background: `linear-gradient(135deg, #0C9BEA 0%, #002D3F 100%)` }}
          >
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full"></div>
              <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full"></div>
            </div>
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-xl mb-8 opacity-90">
                Let's discuss how we can help you achieve your goals
              </p>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-8 py-4 bg-white rounded-full font-bold text-lg"
                style={{ color: '#0C9BEA' }}
              >
                Get Free Consultation
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Footer */}
      <footer id="contact" className="py-16 px-6 text-white" style={{ backgroundColor: '#002D3F' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center text-2xl" style={{ backgroundColor: '#0C9BEA' }}>
                  <span className="font-bold">N</span>
                </div>
                <span className="text-2xl font-bold">
                  Nexora<span style={{ color: '#0C9BEA' }}>.</span>
                </span>
              </div>
              <p className="text-gray-400 mb-6">
                Innovative IT solutions that drive your business forward.
              </p>
              <div className="flex gap-4">
                {['f', 't', 'in', 'ig'].map((social) => (
                  <motion.a
                    key={social}
                    href="#"
                    whileHover={{ scale: 1.2, backgroundColor: '#0C9BEA' }}
                    className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center"
                  >
                    {social}
                  </motion.a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#0C9BEA' }}>Hire Developers</h3>
              <ul className="space-y-2">
                {[
                  "Hire Flutter Developer",
                  "Hire React Native Developer",
                  "Hire .NET Developer",
                  "Hire React JS Developer",
                  "Hire Node.js Developer",
                  "Hire Angular Developer",
                  "Hire Vue.js Developer",
                  "Hire UI/UX Designer",
                  "Hire Digital Marketer"
                ].map((item) => (
                  <li key={item}>
                    <a href="#contact" className="text-gray-400 hover:text-white transition">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#0C9BEA' }}>Services</h3>
              <ul className="space-y-2">
                {["Mobile Apps", "Web Dev", "UI/UX Design", "Marketing", "IT Staffing"].map((item) => (
                  <li key={item}>
                    <a href="#services" className="text-gray-400 hover:text-white transition flex items-center gap-2">
                      <CheckCircle size={16} style={{ color: '#0C9BEA' }} /> {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#0C9BEA' }}>Company</h3>
              <ul className="space-y-2">
                {["About Us", "Portfolio", "Careers", "Blog", "Privacy"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-white transition">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#0C9BEA' }}>Contact</h3>
              <div className="space-y-3 text-gray-400">
                <p className="flex items-center gap-3">
                  <Mail size={18} style={{ color: '#0C9BEA' }} />
                  info@nexorasolution.com
                </p>
                <p className="flex items-center gap-3">
                  <Phone size={18} style={{ color: '#0C9BEA' }} />
                  +91 98765 43210
                </p>
                <p className="flex items-center gap-3">
                  <MapPin size={18} style={{ color: '#0C9BEA' }} />
                  Ahmedabad, Gujarat
                </p>
                <p className="flex items-center gap-3">
                  <Globe size={18} style={{ color: '#0C9BEA' }} />
                  nexorasolution.com
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>© 2025 Nexora Solution. All rights reserved. Crafted with ❤️ in India</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;