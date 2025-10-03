import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Twitter, Linkedin, ArrowRight, Sparkles } from 'lucide-react';

const ComingSoonPage = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Countdown timer (set to 30 days from now)
  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      if (distance < 0) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      // Here you would normally send the email to your backend
      console.log('Email submitted:', email);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen gradient-bg relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl floating-animation"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-300/10 rounded-full blur-3xl floating-animation" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-blue-300/10 rounded-full blur-2xl floating-animation" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Main content */}
      <motion.div 
        className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo/Brand */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-2xl backdrop-blur-lg border border-white/30 mb-4">
              <Sparkles className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-4">
              Aeron Industries
            </h1>
          </motion.div>

          {/* Main message */}
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-white/90 mb-6 font-light">
              Something amazing is coming soon
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
              We're crafting an extraordinary experience that will revolutionize the way you think about innovation. 
              Get ready for something that will change everything.
            </p>
          </motion.div>

          {/* Countdown Timer */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-md mx-auto">
              {[
                { label: 'Days', value: timeLeft.days },
                { label: 'Hours', value: timeLeft.hours },
                { label: 'Minutes', value: timeLeft.minutes },
                { label: 'Seconds', value: timeLeft.seconds }
              ].map((item, index) => (
                <div key={index} className="glass-morphism rounded-xl p-4">
                  <div className="text-2xl sm:text-3xl font-bold text-white">{item.value}</div>
                  <div className="text-sm text-white/70">{item.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Email signup */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="max-w-md mx-auto">
              <h3 className="text-xl text-white mb-4">Be the first to know</h3>
              {!isSubmitted ? (
                <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-lg bg-white/10 backdrop-blur-lg border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                    required
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-white text-purple-600 rounded-lg font-semibold hover:bg-white/90 transition-all duration-200 flex items-center justify-center gap-2 group"
                  >
                    Notify Me
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              ) : (
                <div className="glass-morphism rounded-lg p-4">
                  <div className="text-white">
                    ✨ Thank you! We'll notify you when we launch.
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          {/* Social links */}
          <motion.div variants={itemVariants} className="mb-8">
            <p className="text-white/70 mb-4">Follow our journey</p>
            <div className="flex justify-center space-x-6">
              {[
                { icon: Twitter, href: '#', label: 'Twitter' },
                { icon: Github, href: '#', label: 'GitHub' },
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:contact@aeronindustries.com', label: 'Email' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-12 h-12 glass-morphism rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-200 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Footer */}
          <motion.div variants={itemVariants}>
            <p className="text-white/50 text-sm">
              © 2024 Aeron Industries. All rights reserved.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ComingSoonPage;