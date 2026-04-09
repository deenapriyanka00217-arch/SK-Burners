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
  MessageCircle,
  Play,
  Pause
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

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
  { 
    name: "SK Sivakumar", 
    role: "Founder & CTO", 
    image: "https://raw.githubusercontent.com/deenapriyanka00217-arch/SK-Burners/main/Team%20Images/SK%20Sivakumar%20Founder%20&%20CTO.png" 
  },
  { 
    name: "Divya Sivakumar", 
    role: "Co-Founder & CFO", 
    image: "https://raw.githubusercontent.com/deenapriyanka00217-arch/SK-Burners/main/Team%20Images/Divya%20Sivakumar%20Co-Founder%20&%20CFO%20(2).png" 
  },
  { 
    name: "Varshini Sivakumar", 
    role: "CEO & MD", 
    image: "https://raw.githubusercontent.com/deenapriyanka00217-arch/SK-Burners/main/Team%20Images/Varshini%20Sivakumar%20CEO%20&%20MD.png" 
  },
  { 
    name: "Tarun Sivakumar", 
    role: "CMO", 
    image: "https://raw.githubusercontent.com/deenapriyanka00217-arch/SK-Burners/main/Team%20Images/Tarun%20Sivakumar%20CMO.png" 
  },
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

const POSITIVE_WORDS = ["Clean Energy", "Sustainable", "Eco-Friendly", "Innovative"];

const YouTubeShortsPlayer = ({ videoId }: { videoId: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          iframeRef.current?.contentWindow?.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
          setIsPlaying(true);
        } else {
          iframeRef.current?.contentWindow?.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
          setIsPlaying(false);
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const togglePlay = () => {
    if (isPlaying) {
      iframeRef.current?.contentWindow?.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
    } else {
      iframeRef.current?.contentWindow?.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div ref={containerRef} className="relative w-full aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-2xl group">
      <div className="absolute inset-0 -z-10">
        <img 
          src="https://images.unsplash.com/photo-1520114878144-6123749968dd?auto=format&fit=crop&q=80&w=800" 
          alt="" 
          className="w-full h-full object-cover blur-xl opacity-40 scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>
      <iframe
        ref={iframeRef}
        src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1&autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}&modestbranding=1&rel=0`}
        className="w-full h-full pointer-events-none scale-[1.01] bg-transparent"
        allow="autoplay; encrypted-media"
      />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button 
          onClick={togglePlay}
          className="w-20 h-20 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center text-white border border-white/30 hover:bg-white/40 transition-all hover:scale-110"
        >
          {isPlaying ? <Pause className="w-10 h-10 fill-current" /> : <Play className="w-10 h-10 fill-current ml-1" />}
        </button>
      </div>
      <div className="absolute bottom-6 right-6 px-3 py-1 bg-black/40 backdrop-blur-md rounded-full text-[10px] font-bold text-white uppercase tracking-widest border border-white/10">
        Muted
      </div>
    </div>
  );
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "Product Inquiry",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          message: `Inquiry Type: ${formData.inquiryType}\n\n${formData.message}`
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: "Your inquiry has been sent successfully!" });
        setFormData({
          name: "",
          email: "",
          phone: "",
          inquiryType: "Product Inquiry",
          message: ""
        });
      } else {
        setSubmitStatus({ type: 'error', message: data.error || "Failed to send inquiry. Please try again." });
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: "An error occurred. Please check your connection and try again." });
    } finally {
      setIsSubmitting(false);
    }
  };


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
      {/* Floating Action Group */}
      <div className="fixed bottom-6 right-4 sm:right-6 z-50 flex flex-col items-center gap-3">
        {showScrollTop && (
          <>
            <motion.a 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              href="#" 
              className="w-12 h-12 bg-white shadow-xl rounded-full flex items-center justify-center text-[#1877F2] hover:scale-110 transition-all border border-gray-100"
            >
              <Facebook className="w-5 h-5 fill-current" />
            </motion.a>
            <motion.a 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              href="#" 
              className="w-12 h-12 bg-white shadow-xl rounded-full flex items-center justify-center text-[#E4405F] hover:scale-110 transition-all border border-gray-100"
            >
              <Instagram className="w-5 h-5" />
            </motion.a>
            <motion.button 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              onClick={scrollToTop}
              className="w-12 h-12 bg-[#F27D26] text-white rounded-full shadow-xl flex items-center justify-center hover:bg-[#D32F2F] transition-all hover:-translate-y-1"
            >
              <ArrowUp className="w-6 h-6" />
            </motion.button>
          </>
        )}
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 backdrop-blur-lg border-b transition-colors duration-500 ${isDarkMode ? 'bg-[#0A0A0A]/90 border-white/10' : 'bg-white/90 border-gray-100'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 sm:h-24 items-center">
            <div className="flex items-center gap-4">
              <div className="w-32 h-24 flex items-center justify-center">
                <img 
                  src="https://raw.githubusercontent.com/deenapriyanka00217-arch/SK-Burners/main/assets/Logo.png" 
                  alt="SK Burners Logo" 
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
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
      <section className={`relative pt-20 pb-12 lg:pt-32 lg:pb-20 overflow-hidden transition-colors duration-500 ${isDarkMode ? 'bg-[#0A0A0A]' : 'bg-white'}`}>
        {/* Background Image Alignment Fix */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <img 
            src="https://raw.githubusercontent.com/deenapriyanka00217-arch/SK-Burners/refs/heads/main/Prodcut%20Images/product.png" 
            alt="" 
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 text-[#F27D26] text-xs font-black uppercase tracking-widest mb-8 border border-orange-100 whitespace-nowrap mt-8 sm:mt-0">
                <Zap className="w-3.5 h-3.5" />
                Next-Gen Combustion Technology
              </div>
              <h1 className={`font-black tracking-tighter mb-6 sm:mb-8 ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>
                <span className="block text-4xl sm:text-6xl lg:text-7xl leading-none">Powering</span>
                <div className="py-3 sm:py-5">
                  <motion.span 
                    key={wordIndex}
                    initial={{ opacity: 0, y: 20, rotateX: -90 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    exit={{ opacity: 0, y: -20, rotateX: 90 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="text-5xl sm:text-7xl lg:text-8xl inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#F27D26] to-[#D32F2F] leading-none"
                    style={{ 
                      textShadow: isDarkMode 
                        ? "1px 1px 0px #F27D26, 2px 2px 10px rgba(242, 125, 38, 0.3)" 
                        : "1px 1px 0px #F27D26, 2px 2px 10px rgba(242, 125, 38, 0.1)",
                      perspective: "1000px"
                    }}
                  >
                    {POSITIVE_WORDS[wordIndex]}
                  </motion.span>
                </div>
                <span className="block text-4xl sm:text-6xl lg:text-7xl leading-none">Solutions.</span>
              </h1>
              <p className={`text-base sm:text-lg mb-6 sm:mb-10 max-w-lg leading-relaxed font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Our forced-draft wood burner systems deliver unmatched thermal efficiency while reducing fuel costs by up to 75%. Engineered for the future of industrial heating.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
                <a href="#contact" className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-[#F27D26] text-white rounded-full font-black uppercase tracking-wider hover:bg-[#D32F2F] transition-all shadow-2xl shadow-orange-200 flex items-center justify-center gap-3 group">
                  Get Started
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="https://wa.me/917305333484" 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-[#25D366] text-white rounded-full font-black uppercase tracking-wider hover:bg-[#128C7E] transition-all shadow-2xl shadow-green-200 flex items-center justify-center gap-3"
                >
                  WhatsApp Us
                  <WhatsApp className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative mt-12 lg:mt-0"
            >
              <div className="relative z-10">
                <div className="rounded-[2rem] overflow-hidden shadow-2xl border border-white/10">
                  <img 
                    src="https://raw.githubusercontent.com/deenapriyanka00217-arch/SK-Burners/refs/heads/main/Prodcut%20Images/product.png" 
                    alt="SK Burner System" 
                    className="w-full aspect-square object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                {/* Separated Text Box */}
                <div className="mt-8 lg:absolute lg:-bottom-10 lg:-left-10 lg:w-80 p-8 bg-[#1A1A1A] rounded-3xl border border-white/10 text-white shadow-2xl z-20">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#F27D26] flex items-center justify-center">
                      <ThermometerSun className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs font-black uppercase tracking-widest text-white/80">Thermal Output</p>
                      <p className="text-xl font-bold text-white">750°C – 1000°C</p>
                    </div>
                  </div>
                  <p className="text-sm font-medium leading-relaxed text-white">
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
      <section className={`py-8 sm:py-12 border-y transition-colors duration-500 ${isDarkMode ? 'bg-[#0A0A0A] border-white/10' : 'bg-white border-gray-100'}`}>
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
      <section id="features" className={`py-12 sm:py-16 transition-colors duration-500 ${isDarkMode ? 'bg-[#111111]' : 'bg-[#F9F9F9]'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-8 sm:mb-12 gap-6 sm:gap-10">
            <div className="max-w-2xl">
              <h2 className="text-[10px] sm:text-xs font-black text-[#F27D26] uppercase tracking-[0.4em] mb-3 sm:mb-4">Technical Excellence</h2>
              <p className={`text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter leading-tight ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>
                Precision Engineered <br className="hidden sm:block" /> for the Toughest Tasks.
              </p>
            </div>
            <p className={`text-sm sm:text-base max-w-sm font-medium leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
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
                className={`group p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] border shadow-sm hover:shadow-2xl transition-all duration-500 ${isDarkMode ? 'bg-[#1A1A1A] border-white/10 hover:shadow-orange-900/20' : 'bg-white border-gray-100 hover:shadow-orange-100'}`}
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
      <section id="advantages" className={`py-12 sm:py-16 overflow-hidden transition-colors duration-500 ${isDarkMode ? 'bg-[#0A0A0A]' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="relative order-2 lg:order-1 flex items-center justify-center">
              <div className="w-full max-w-md lg:max-w-full">
                <YouTubeShortsPlayer videoId="E0q_2QF0B9A" />
              </div>
              {/* Experience Badge */}
              <div className="absolute -bottom-4 -right-2 sm:-bottom-8 sm:-right-8 z-20 bg-[#F27D26] text-white p-4 sm:p-8 rounded-[1.2rem] sm:rounded-[2rem] shadow-2xl">
                <p className="text-3xl sm:text-5xl font-black mb-1">15+</p>
                <p className="text-[9px] sm:text-xs font-bold uppercase tracking-widest opacity-80">Years of <br /> Excellence</p>
              </div>
              {/* Decorative dots */}
              <div className={`absolute -top-10 -left-10 w-40 h-40 rounded-full -z-10 blur-3xl opacity-60 ${isDarkMode ? 'bg-orange-900/20' : 'bg-orange-50'}`} />
            </div>

            <div className="lg:pl-8 order-1 lg:order-2">
              <h2 className="text-[10px] sm:text-xs font-black text-[#F27D26] uppercase tracking-[0.4em] mb-4 sm:mb-5">About SK Burners</h2>
              <h3 className={`text-3xl sm:text-4xl lg:text-5xl font-black mb-5 sm:mb-6 tracking-tighter leading-tight ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>
                Engineering a <br className="hidden sm:block" />
                <span className="text-[#F27D26]">Sustainable</span> Legacy.
              </h3>
              <p className={`text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Since our inception, SK Burners has been at the forefront of industrial heating innovation. We don't just build burners; we engineer solutions that empower businesses to grow while protecting our environment.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-10">
                {ADVANTAGES.map((adv, idx) => (
                  <div key={idx} className="flex items-start gap-3 sm:gap-4">
                    <div className="mt-1 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-orange-50 flex items-center justify-center text-[#F27D26] flex-shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <p className={`text-sm sm:text-base font-bold leading-tight ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>{adv.text}</p>
                  </div>
                ))}
              </div>

              <div className={`p-5 sm:p-6 rounded-xl sm:rounded-2xl border-l-4 border-[#F27D26] ${isDarkMode ? 'bg-white/5' : 'bg-[#F9F9F9]'}`}>
                <p className={`font-bold italic text-sm sm:text-base leading-relaxed ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>
                  "Our goal is to provide high-efficiency heating solutions that are accessible, reliable, and environmentally responsible."
                </p>
                <p className="mt-3 text-[10px] font-black uppercase tracking-widest text-gray-400">— SK Sivakumar, CTO</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Grid */}
      <section className={`py-12 sm:py-16 transition-colors duration-500 ${isDarkMode ? 'bg-[#111111]' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-[10px] sm:text-xs font-black text-[#F27D26] uppercase tracking-[0.4em] mb-3 sm:mb-4">Versatility</h2>
            <p className={`text-3xl sm:text-4xl font-black tracking-tighter ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>Built for Every Industry.</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
            {APPLICATIONS.map((app, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ y: -10 }}
                className={`p-5 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] text-center border transition-all duration-500 group ${isDarkMode ? 'bg-[#1A1A1A] border-transparent hover:border-[#F27D26] hover:bg-white/5 hover:shadow-2xl hover:shadow-orange-900/20' : 'bg-[#F9F9F9] border-transparent hover:border-[#F27D26] hover:bg-white hover:shadow-2xl hover:shadow-orange-100'}`}
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
      <section id="team" className={`py-12 sm:py-16 transition-colors duration-500 ${isDarkMode ? 'bg-[#0A0A0A]' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-[10px] sm:text-xs font-black text-[#F27D26] uppercase tracking-[0.4em] mb-3 sm:mb-4">Our Leadership</h2>
            <p className={`text-3xl sm:text-4xl font-black tracking-tighter ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>The Minds Behind SK.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {LEADERS.map((leader, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="relative aspect-[4/5] rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden mb-5 sm:mb-6 shadow-xl">
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
      <section id="contact" className="py-12 sm:py-16 bg-[#1A1A1A] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#F27D26]/5 skew-x-12 translate-x-1/2 hidden lg:block" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h2 className="text-xs font-black text-[#F27D26] uppercase tracking-[0.4em] mb-5">Contact Us</h2>
              <h3 className="text-3xl sm:text-5xl font-black tracking-tighter mb-6 leading-tight">
                Let's Build the <br />
                <span className="text-[#F27D26]">Future Together.</span>
              </h3>
              <p className="text-base sm:text-lg text-gray-400 mb-10 leading-relaxed font-medium">
                Ready to optimize your industrial heating? Our team is standing by to provide customized solutions for your business.
              </p>
              
              <div className="space-y-6 sm:space-y-8">
                <div className="flex items-center gap-5 sm:gap-6 group">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white/5 flex items-center justify-center text-[#F27D26] border border-white/10 group-hover:bg-[#F27D26] group-hover:text-white transition-all duration-300 flex-shrink-0">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase font-black tracking-[0.3em] mb-1">Location</p>
                    <p className="text-base sm:text-lg font-bold leading-tight">Atta Company Bus Stop, Mudichur</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-5 sm:gap-6 group">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white/5 flex items-center justify-center text-[#F27D26] border border-white/10 group-hover:bg-[#F27D26] group-hover:text-white transition-all duration-300 flex-shrink-0">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase font-black tracking-[0.3em] mb-1">Direct Lines</p>
                    <p className="text-base sm:text-lg font-bold leading-tight">7358192444 / 7305333484</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-5 sm:gap-6 group">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white/5 flex items-center justify-center text-[#F27D26] border border-white/10 group-hover:bg-[#F27D26] group-hover:text-white transition-all duration-300 flex-shrink-0">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase font-black tracking-[0.3em] mb-1">Email Support</p>
                    <p className="text-base sm:text-lg font-bold leading-tight break-all">divyasivakumar1980@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative group h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#25D366]/20 to-[#F27D26]/20 blur-3xl rounded-[3rem] -z-10 group-hover:scale-110 transition-transform duration-700" />
              
              <div className="bg-white/5 p-6 sm:p-10 rounded-[2.5rem] sm:rounded-[3rem] border border-white/10 backdrop-blur-2xl shadow-2xl text-center relative overflow-hidden h-full flex flex-col justify-center">
                {/* Decorative background icon */}
                <WhatsApp className="absolute -top-10 -right-10 w-32 h-32 sm:w-40 sm:h-40 text-white/5 rotate-12 pointer-events-none" />
                
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#25D366] rounded-2xl flex items-center justify-center text-white mx-auto mb-6 sm:mb-8 shadow-2xl shadow-[#25D366]/40 animate-bounce-slow">
                  <WhatsApp className="w-8 h-8 sm:w-10 sm:h-10" />
                </div>

                <h3 className="text-xl sm:text-3xl font-black mb-3 sm:mb-4 tracking-tight">
                  Instant <span className="text-[#25D366]">WhatsApp</span> Support
                </h3>
                
                <p className="text-gray-400 text-xs sm:text-base mb-6 sm:mb-8 leading-relaxed font-medium px-4">
                  Skip the forms. Connect directly with our technical experts for instant quotes.
                </p>

                <div className="flex flex-wrap justify-center gap-2 mb-8">
                  {["Fast Response", "Expert Advice"].map((word, i) => (
                    <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[8px] sm:text-[9px] font-black uppercase tracking-widest text-[#25D366]">
                      {word}
                    </span>
                  ))}
                </div>

                <a 
                  href="https://wa.me/917305333484?text=Hi%20SK%20Burners,%20I'm%20interested%20in%20your%20clean%20energy%20solutions." 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 sm:gap-3 px-6 py-3 sm:px-8 sm:py-4 bg-[#25D366] text-white rounded-xl font-black uppercase tracking-widest hover:bg-[#128C7E] transition-all hover:scale-105 shadow-2xl shadow-[#25D366]/20 group text-xs sm:text-sm mx-auto"
                >
                  Chat with Expert
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform" />
                </a>

                <p className="mt-6 text-[8px] sm:text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                  Available 24/7
                </p>
              </div>
            </motion.div>
          </div>
          
          <div className={`mt-16 sm:mt-24 pt-12 border-t border-white/10 flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-10 text-center lg:text-left ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            <div className="flex items-center gap-4">
              <div className="w-40 h-24 bg-white rounded-2xl p-2 flex items-center justify-center shadow-xl">
                <img 
                  src="https://raw.githubusercontent.com/deenapriyanka00217-arch/SK-Burners/main/assets/Logo.png" 
                  alt="SK Burners Logo" 
                  className="w-full h-full object-contain scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <p className="font-bold text-xs uppercase tracking-[0.2em]">© 2026 SK Burners. Precision Engineering.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

