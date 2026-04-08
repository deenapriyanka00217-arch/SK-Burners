/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Flame, 
  ShieldCheck, 
  Zap, 
  Leaf, 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle2,
  TrendingDown,
  Factory,
  Utensils,
  ThermometerSun,
  Wind,
  Menu,
  X,
  ChevronRight,
  Facebook,
  Instagram,
  ArrowUp,
  MessageCircle
} from "lucide-react";
import { useState, useEffect } from "react";

const WhatsApp = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    className={className} 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const COLORS = {
  primary: "#F27D26", // Logo Orange
  secondary: "#D32F2F", // Logo Red
  dark: "#1A1A1A", // Professional Dark
  light: "#F9F9F9", // Clean Light
  accent: "#FFD600", // Logo Yellow
};

const LEADERS = [
  { name: "SK Sivakumar", role: "Founder & CTO", image: "https://picsum.photos/seed/sk-sivakumar/400/500" },
  { name: "Divya Sivakumar", role: "Co-Founder & CFO", image: "https://picsum.photos/seed/divya-sivakumar/400/500" },
  { name: "Varshini Sivakumar", role: "CEO & MD", image: "https://picsum.photos/seed/varshini-sivakumar/400/500" },
  { name: "Tarun Sivakumar", role: "CMO", image: "https://picsum.photos/seed/tarun-sivakumar/400/500" },
];

const FEATURES = [
  { icon: <Wind className="w-6 h-6" />, title: "Forced Draft System", desc: "Advanced forced-draft combustion for maximum thermal efficiency and clean burning." },
  { icon: <Zap className="w-6 h-6" />, title: "Dual Air Control", desc: "Precision primary and secondary air control systems for optimal flame management." },
  { icon: <ThermometerSun className="w-6 h-6" />, title: "High Temperature", desc: "Achieves clean, smokeless flames ranging from 750°C to 1000°C consistently." },
  { icon: <ShieldCheck className="w-6 h-6" />, title: "Industrial Grade", desc: "Constructed with heavy-duty industrial-grade stainless steel for long service life." },
];

const ADVANTAGES = [
  { icon: <TrendingDown />, text: "Saves up to 75% fuel cost compared to LPG" },
  { icon: <Leaf />, text: "Reduces dependence on expensive fossil fuels" },
  { icon: <CheckCircle2 />, text: "Significant reduction in carbon emissions" },
  { icon: <Zap />, text: "Utilizes locally available dry wood sticks" },
];

const APPLICATIONS = [
  { icon: <Factory />, name: "Industrial Boilers" },
  { icon: <Utensils />, name: "Food Processing Units" },
  { icon: <Utensils />, name: "Commercial Kitchens" },
  { icon: <ThermometerSun />, name: "Hot Air Generators" },
  { icon: <Wind />, name: "Dryer Systems" },
];

const POSITIVE_WORDS = ["Clean Energy", "Sustainable", "Eco-Friendly", "High Efficiency", "Innovative"];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % POSITIVE_WORDS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={`min-h-screen font-sans selection:bg-orange-100 transition-colors duration-500 ${isDarkMode ? 'bg-[#0A0A0A] text-white' : 'bg-white text-[#1A1A1A]'}`}>
      {/* Floating Social Icons */}
      <div className="fixed right-4 sm:right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3 sm:gap-4">
        <a href="#" className="w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center text-[#1877F2] hover:scale-110 transition-all border border-gray-100">
          <Facebook className="w-5 h-5 fill-current" />
        </a>
        <a href="#" className="w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center text-[#E4405F] hover:scale-110 transition-all border border-gray-100">
          <Instagram className="w-5 h-5" />
        </a>
        <a href="https://wa.me/917358192444" target="_blank" rel="noreferrer" className="w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center text-[#25D366] hover:scale-110 transition-all border border-gray-100">
          <WhatsApp className="w-6 h-6" />
        </a>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-6 right-4 sm:right-6 z-50 w-12 h-12 bg-[#F27D26] text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-[#D32F2F] transition-all hover:-translate-y-1"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 backdrop-blur-lg border-b transition-colors duration-500 ${isDarkMode ? 'bg-[#0A0A0A]/90 border-white/10' : 'bg-white/90 border-gray-100'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-[#F27D26] to-[#D32F2F] rounded-xl flex items-center justify-center text-white shadow-lg shadow-orange-200">
                <Flame className="w-7 h-7 fill-current" />
              </div>
              <div className="flex flex-col">
                <span className={`text-2xl font-black tracking-tighter leading-none ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>
                   SK <span className="text-[#F27D26]">BURNERS</span>
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 mt-1">
                  Clean Innovative Solutions
                </span>
              </div>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-wider text-gray-500">
              <a href="#" className="hover:text-[#F27D26] transition-colors">Home</a>
              <a href="#features" className="hover:text-[#F27D26] transition-colors">Service</a>
              <a href="#advantages" className="hover:text-[#F27D26] transition-colors">About</a>
              <a href="#contact" className="hover:text-[#F27D26] transition-colors">Contact</a>
              
              <div className="h-6 w-px bg-gray-200 mx-2" />
              
              <a href="tel:7358192444" className={`flex items-center gap-2 hover:text-[#F27D26] transition-colors ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>
                <Phone className="w-4 h-4 text-[#F27D26]" />
                <span>7358192444</span>
              </a>

              <button 
                onClick={toggleDarkMode}
                className={`p-2 rounded-full transition-colors ${isDarkMode ? 'bg-white/10 text-yellow-400' : 'bg-gray-100 text-gray-600'}`}
              >
                {isDarkMode ? <ThermometerSun className="w-5 h-5" /> : <Wind className="w-5 h-5" />}
              </button>

              <a href="#contact" className="px-6 py-3 bg-[#F27D26] text-white rounded-full hover:bg-[#D32F2F] transition-all duration-300 shadow-xl hover:shadow-orange-200">
                Inquiry
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex items-center gap-4 md:hidden">
              <button 
                onClick={toggleDarkMode}
                className={`p-2 rounded-full transition-colors ${isDarkMode ? 'bg-white/10 text-yellow-400' : 'bg-gray-100 text-gray-600'}`}
              >
                {isDarkMode ? <ThermometerSun className="w-5 h-5" /> : <Wind className="w-5 h-5" />}
              </button>
              <button className={`p-2 ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`md:hidden border-b p-4 space-y-4 ${isDarkMode ? 'bg-[#0A0A0A] border-white/10' : 'bg-white border-gray-100'}`}
          >
            <a href="#" onClick={() => setIsMenuOpen(false)} className="block font-bold py-2">Home</a>
            <a href="#features" onClick={() => setIsMenuOpen(false)} className="block font-bold py-2">Service</a>
            <a href="#advantages" onClick={() => setIsMenuOpen(false)} className="block font-bold py-2">About</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block font-bold py-2">Contact</a>
            <a href="tel:7358192444" className="flex items-center gap-2 font-bold py-2 text-[#F27D26]">
              <Phone className="w-4 h-4" />
              <span>7358192444</span>
            </a>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className={`relative pt-24 pb-16 lg:pt-40 lg:pb-24 overflow-hidden transition-colors duration-500 ${isDarkMode ? 'bg-[#0A0A0A]' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 text-[#F27D26] text-xs font-black uppercase tracking-widest mb-8 border border-orange-100">
                <Zap className="w-3.5 h-3.5" />
                Next-Gen Combustion Technology
              </div>
              <h1 className={`text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter mb-8 sm:mb-10 leading-[0.9] sm:leading-[0.85] ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>
                Powering <br />
                <motion.span 
                  key={wordIndex}
                  initial={{ opacity: 0, y: 20, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  exit={{ opacity: 0, y: -20, rotateX: 90 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#F27D26] to-[#D32F2F]"
                  style={{ 
                    textShadow: isDarkMode 
                      ? "1px 1px 0px #F27D26, 2px 2px 0px #D32F2F, 4px 4px 15px rgba(242, 125, 38, 0.4)" 
                      : "1px 1px 0px #F27D26, 2px 2px 0px #D32F2F, 4px 4px 15px rgba(242, 125, 38, 0.15)",
                    perspective: "1000px"
                  }}
                >
                  {POSITIVE_WORDS[wordIndex]}
                </motion.span> <br />
                Solutions.
              </h1>
              <p className={`text-lg sm:text-xl mb-8 sm:mb-12 max-w-lg leading-relaxed font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Our forced-draft wood burner systems deliver unmatched thermal efficiency while reducing fuel costs by up to 75%. Engineered for the future of industrial heating.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
                <a href="#contact" className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-[#F27D26] text-white rounded-full font-black uppercase tracking-wider hover:bg-[#D32F2F] transition-all shadow-2xl shadow-orange-200 flex items-center justify-center gap-3 group">
                  Get Started
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#features" className={`w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 border-2 rounded-full font-black uppercase tracking-wider transition-all text-center ${isDarkMode ? 'bg-white/5 border-white/10 text-white hover:border-[#F27D26] hover:text-[#F27D26]' : 'bg-white border-gray-100 text-[#1A1A1A] hover:border-[#F27D26] hover:text-[#F27D26]'}`}>
                  Explore Tech
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.15)]">
                <img 
                  src="https://picsum.photos/seed/sk-burner-hero/1000/1000" 
                  alt="SK Burner System" 
                  className="w-full aspect-square object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/60 via-transparent to-transparent" />
                <div className="absolute bottom-10 left-10 right-10 p-8 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 text-white">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#F27D26] flex items-center justify-center">
                      <ThermometerSun className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs font-black uppercase tracking-widest opacity-70">Thermal Output</p>
                      <p className="text-xl font-bold">750°C – 1000°C</p>
                    </div>
                  </div>
                  <p className="text-sm font-medium leading-relaxed opacity-90">
                    Proprietary smokeless flame technology ensures zero visible emissions and maximum heat transfer.
                  </p>
                </div>
              </div>
              
              {/* Abstract shapes */}
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-orange-100 rounded-full blur-[100px] opacity-60" />
              <div className="absolute -bottom-12 -left-12 w-80 h-80 bg-red-50 rounded-full blur-[120px] opacity-40" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats / Highlights */}
      <section className={`py-12 sm:py-16 border-y transition-colors duration-500 ${isDarkMode ? 'bg-[#0A0A0A] border-white/10' : 'bg-white border-gray-100'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <p className={`text-4xl sm:text-5xl font-black mb-2 ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>75%</p>
              <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-gray-400">Fuel Savings</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <p className="text-4xl sm:text-5xl font-black text-[#F27D26] mb-2">1000°</p>
              <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-gray-400">Max Temp (C)</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <p className={`text-4xl sm:text-5xl font-black mb-2 ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>0.25</p>
              <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-gray-400">Units/Hour Power</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
              <p className="text-4xl sm:text-5xl font-black text-[#D32F2F] mb-2">200kg</p>
              <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-gray-400">Max Capacity</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className={`py-16 sm:py-20 transition-colors duration-500 ${isDarkMode ? 'bg-[#111111]' : 'bg-[#F9F9F9]'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 sm:mb-16 gap-6 sm:gap-10">
            <div className="max-w-2xl">
              <h2 className="text-[10px] sm:text-xs font-black text-[#F27D26] uppercase tracking-[0.4em] mb-3 sm:mb-4">Technical Excellence</h2>
              <p className={`text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter leading-tight ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>
                Precision Engineered <br className="hidden sm:block" /> for the Toughest Tasks.
              </p>
            </div>
            <p className={`text-base sm:text-lg max-w-sm font-medium leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              Every component is designed to withstand extreme temperatures while maintaining peak performance.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {FEATURES.map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`group p-8 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] border shadow-sm hover:shadow-2xl transition-all duration-500 ${isDarkMode ? 'bg-[#1A1A1A] border-white/10 hover:shadow-orange-900/20' : 'bg-white border-gray-100 hover:shadow-orange-100'}`}
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-orange-50 rounded-2xl flex items-center justify-center text-[#F27D26] mb-6 sm:mb-8 group-hover:scale-110 group-hover:bg-[#F27D26] group-hover:text-white transition-all duration-500">
                  {feature.icon}
                </div>
                <h3 className={`text-xl sm:text-2xl font-bold mb-3 sm:mb-4 tracking-tight ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>{feature.title}</h3>
                <p className={`text-sm sm:text-base leading-relaxed font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - New Design */}
      <section id="advantages" className={`py-16 sm:py-24 overflow-hidden transition-colors duration-500 ${isDarkMode ? 'bg-[#0A0A0A]' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative z-10 rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://picsum.photos/seed/sk-about-new/800/1000" 
                  alt="Our Mission" 
                  className="w-full object-cover aspect-[4/5] sm:aspect-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Experience Badge */}
              <div className="absolute -bottom-6 -right-4 sm:-bottom-10 sm:-right-10 z-20 bg-[#F27D26] text-white p-6 sm:p-10 rounded-[1.5rem] sm:rounded-[2.5rem] shadow-2xl">
                <p className="text-4xl sm:text-6xl font-black mb-1">15+</p>
                <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest opacity-80">Years of <br /> Excellence</p>
              </div>
              {/* Decorative dots */}
              <div className={`absolute -top-10 -left-10 w-40 h-40 rounded-full -z-10 blur-3xl opacity-60 ${isDarkMode ? 'bg-orange-900/20' : 'bg-orange-50'}`} />
            </div>

            <div className="lg:pl-10 order-1 lg:order-2">
              <h2 className="text-[10px] sm:text-xs font-black text-[#F27D26] uppercase tracking-[0.4em] mb-4 sm:mb-6">About SK Burners</h2>
              <h3 className={`text-4xl sm:text-5xl lg:text-6xl font-black mb-6 sm:mb-8 tracking-tighter leading-tight ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>
                Engineering a <br className="hidden sm:block" />
                <span className="text-[#F27D26]">Sustainable</span> Legacy.
              </h3>
              <p className={`text-lg sm:text-xl mb-8 sm:mb-10 leading-relaxed font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Since our inception, SK Burners has been at the forefront of industrial heating innovation. We don't just build burners; we engineer solutions that empower businesses to grow while protecting our environment.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-12">
                {ADVANTAGES.map((adv, idx) => (
                  <div key={idx} className="flex items-start gap-3 sm:gap-4">
                    <div className="mt-1 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-orange-50 flex items-center justify-center text-[#F27D26] flex-shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <p className={`text-sm sm:text-base font-bold leading-tight ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>{adv.text}</p>
                  </div>
                ))}
              </div>

              <div className={`p-6 sm:p-8 rounded-2xl sm:rounded-3xl border-l-4 border-[#F27D26] ${isDarkMode ? 'bg-white/5' : 'bg-[#F9F9F9]'}`}>
                <p className={`font-bold italic text-base sm:text-lg leading-relaxed ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>
                  "Our goal is to provide high-efficiency heating solutions that are accessible, reliable, and environmentally responsible."
                </p>
                <p className="mt-4 text-[10px] font-black uppercase tracking-widest text-gray-400">— SK Sivakumar, CTO</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Grid */}
      <section className={`py-16 sm:py-20 transition-colors duration-500 ${isDarkMode ? 'bg-[#111111]' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-[10px] sm:text-xs font-black text-[#F27D26] uppercase tracking-[0.4em] mb-3 sm:mb-4">Versatility</h2>
            <p className={`text-4xl sm:text-5xl font-black tracking-tighter ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>Built for Every Industry.</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
            {APPLICATIONS.map((app, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ y: -10 }}
                className={`p-6 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] text-center border transition-all duration-500 group ${isDarkMode ? 'bg-[#1A1A1A] border-transparent hover:border-[#F27D26] hover:bg-white/5 hover:shadow-2xl hover:shadow-orange-900/20' : 'bg-[#F9F9F9] border-transparent hover:border-[#F27D26] hover:bg-white hover:shadow-2xl hover:shadow-orange-100'}`}
              >
                <div className={`w-12 h-12 sm:w-16 sm:h-16 mx-auto rounded-2xl flex items-center justify-center transition-colors mb-4 sm:mb-6 shadow-sm ${isDarkMode ? 'bg-white/5 text-gray-500 group-hover:text-[#F27D26]' : 'bg-white text-gray-300 group-hover:text-[#F27D26]'}`}>
                  {app.icon}
                </div>
                <p className={`text-base sm:text-lg font-black tracking-tight ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>{app.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section id="team" className={`py-16 sm:py-20 transition-colors duration-500 ${isDarkMode ? 'bg-[#0A0A0A]' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-[10px] sm:text-xs font-black text-[#F27D26] uppercase tracking-[0.4em] mb-3 sm:mb-4">Our Leadership</h2>
            <p className={`text-4xl sm:text-5xl font-black tracking-tighter ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>The Minds Behind SK.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
            {LEADERS.map((leader, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="relative aspect-[4/5] rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden mb-6 sm:mb-8 shadow-xl">
                  <img 
                    src={leader.image} 
                    alt={leader.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="text-white text-[10px] font-black uppercase tracking-widest mb-1">Expertise</p>
                    <p className="text-orange-400 text-xs font-bold">Innovation & Strategy</p>
                  </div>
                </div>
                <h3 className={`text-xl sm:text-2xl font-black mb-1 tracking-tight ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>{leader.name}</h3>
                <p className="text-[#F27D26] font-black uppercase text-[10px] tracking-[0.2em]">{leader.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-24 bg-[#1A1A1A] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#F27D26]/5 skew-x-12 translate-x-1/2 hidden lg:block" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <h2 className="text-xs font-black text-[#F27D26] uppercase tracking-[0.4em] mb-6">Contact Us</h2>
              <h3 className="text-4xl sm:text-6xl font-black tracking-tighter mb-8 leading-tight">
                Let's Build the <br />
                <span className="text-[#F27D26]">Future Together.</span>
              </h3>
              <p className="text-lg sm:text-xl text-gray-400 mb-12 leading-relaxed font-medium">
                Ready to optimize your industrial heating? Our team is standing by to provide customized solutions for your business.
              </p>
              
              <div className="space-y-8 sm:space-y-10">
                <div className="flex items-center gap-6 sm:gap-8 group">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/5 flex items-center justify-center text-[#F27D26] border border-white/10 group-hover:bg-[#F27D26] group-hover:text-white transition-all duration-300 flex-shrink-0">
                    <MapPin className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase font-black tracking-[0.3em] mb-1 sm:2">Location</p>
                    <p className="text-lg sm:text-xl font-bold leading-tight">Atta Company Bus Stop, Mudichur</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-6 sm:gap-8 group">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/5 flex items-center justify-center text-[#F27D26] border border-white/10 group-hover:bg-[#F27D26] group-hover:text-white transition-all duration-300 flex-shrink-0">
                    <Phone className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase font-black tracking-[0.3em] mb-1 sm:2">Direct Lines</p>
                    <p className="text-lg sm:text-xl font-bold leading-tight">7358192444 / 7305333484</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-6 sm:gap-8 group">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/5 flex items-center justify-center text-[#F27D26] border border-white/10 group-hover:bg-[#F27D26] group-hover:text-white transition-all duration-300 flex-shrink-0">
                    <Mail className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase font-black tracking-[0.3em] mb-1 sm:2">Email Support</p>
                    <p className="text-lg sm:text-xl font-bold leading-tight break-all">divyasivakumar1980@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white/5 p-8 sm:p-10 rounded-[2.5rem] sm:rounded-[3rem] border border-white/10 backdrop-blur-xl shadow-2xl"
            >
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">Full Name</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#F27D26] transition-colors font-bold text-sm sm:text-base" placeholder="Your Name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">Email Address</label>
                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#F27D26] transition-colors font-bold text-sm sm:text-base" placeholder="email@company.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">Inquiry Type</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#F27D26] transition-colors font-bold appearance-none text-sm sm:text-base">
                    <option className="bg-[#1A1A1A]">Product Inquiry</option>
                    <option className="bg-[#1A1A1A]">Custom Solution</option>
                    <option className="bg-[#1A1A1A]">Bulk Order</option>
                    <option className="bg-[#1A1A1A]">Technical Support</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">Message</label>
                  <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#F27D26] transition-colors font-bold resize-none text-sm sm:text-base" placeholder="Describe your requirements..." />
                </div>
                <button className="w-full py-5 bg-[#F27D26] text-white rounded-2xl font-black uppercase tracking-widest hover:bg-[#D32F2F] transition-all shadow-2xl shadow-orange-900/40 text-sm sm:text-base">
                  Send Inquiry
                </button>
              </form>
            </motion.div>
          </div>
          
          <div className={`mt-16 sm:mt-24 pt-12 border-t border-white/10 flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-10 text-center lg:text-left ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-[#F27D26] rounded-lg flex items-center justify-center text-white">
                <Flame className="w-6 h-6 fill-current" />
              </div>
              <span className="font-black text-white tracking-tighter text-xl">SK BURNERS</span>
            </div>
            <p className="font-bold text-xs uppercase tracking-[0.2em]">© 2026 SK Burners. Precision Engineering.</p>
            <div className="flex flex-col sm:flex-row gap-6 items-center">
              <div className="flex gap-6 items-center">
                <a href="#" className="text-[#1877F2] hover:scale-110 transition-all">
                  <Facebook className="w-5 h-5 fill-current" />
                </a>
                <a href="#" className="text-[#E4405F] hover:scale-110 transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://wa.me/917358192444" target="_blank" rel="noreferrer" className="text-[#25D366] hover:scale-110 transition-all">
                  <WhatsApp className="w-6 h-6" />
                </a>
              </div>
              <div className="hidden sm:block h-4 w-px bg-white/10 mx-2" />
              <div className="flex gap-6 font-black uppercase text-[10px] tracking-widest">
                <a href="#" className="hover:text-white transition-colors">Privacy</a>
                <a href="#" className="hover:text-white transition-colors">Terms</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

