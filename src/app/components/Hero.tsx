import { Mail, Phone, Github, Linkedin, Sparkles, ChevronDown, Terminal, Code2 } from 'lucide-react';
import { motion } from 'motion/react';
import ParticleBackground from './ParticleBackground';
import TypingEffect from './TypingEffect';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f15_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f15_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      {/* Particle background */}
      <ParticleBackground />

      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            x: [0, -50, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"
        ></motion.div>
      </div>

      <div className="max-w-6xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-md rounded-full border border-cyan-400/30 mb-6 shadow-lg shadow-cyan-500/20"
          >
            <Terminal className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-cyan-100 font-mono">~/portfolio_2026</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-2xl"
          >
            Nishtha Arora
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-2xl md:text-3xl mb-4 text-cyan-100 font-mono h-12"
          >
            <Code2 className="inline-block w-6 h-6 mr-2 text-cyan-400" />
            <TypingEffect
              texts={[
                'Data Analyst',
                'AI/ML Engineer',
                'Python Developer',
                'SQL Expert',
                'ML Enthusiast'
              ]}
              className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="max-w-3xl mx-auto mb-8"
          >
            <div className="bg-slate-800/50 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-6 shadow-2xl shadow-cyan-500/10">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-xs text-slate-400 font-mono ml-2">about.py</span>
              </div>
              <p className="text-slate-300 leading-relaxed font-mono text-sm">
                <span className="text-purple-400">class</span>{' '}
                <span className="text-cyan-400">DataScientist</span>:
                <br />
                <span className="ml-4 text-slate-400"># B.Tech CS (AI/ML) Student</span>
                <br />
                <span className="ml-4 text-slate-400"># Turning data into insights</span>
                <br />
                <span className="ml-4 text-pink-400">skills</span> = [
                <span className="text-green-400">'Python'</span>,{' '}
                <span className="text-green-400">'SQL'</span>,{' '}
                <span className="text-green-400">'ML'</span>,{' '}
                <span className="text-green-400">'Data Viz'</span>]
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-wrap gap-4 justify-center items-center"
          >
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:anishtha33@gmail.com"
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full hover:from-cyan-400 hover:to-purple-400 transition-all shadow-lg shadow-cyan-500/50 font-medium"
            >
              <Mail className="w-5 h-5" />
              <span>anishtha33@gmail.com</span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="tel:+918283050747"
              className="flex items-center gap-2 px-6 py-3 bg-slate-800/50 backdrop-blur-xl text-cyan-100 rounded-full hover:bg-slate-800/70 transition-colors border border-cyan-500/30 shadow-lg shadow-cyan-500/20"
            >
              <Phone className="w-5 h-5" />
              <span>+91 8283050747</span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="https://linkedin.com/in/nishtha-arora-22aab626b"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-slate-800/50 backdrop-blur-xl text-cyan-100 rounded-full hover:bg-slate-800/70 transition-colors border border-cyan-500/30 shadow-lg shadow-cyan-500/20"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/Nishtha-Arora1977"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-slate-800/50 backdrop-blur-xl text-cyan-100 rounded-full hover:bg-slate-800/70 transition-colors border border-cyan-500/30 shadow-lg shadow-cyan-500/20"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-cyan-400 font-mono">scroll down</span>
          <ChevronDown className="w-6 h-6 text-cyan-400" />
        </div>
      </motion.div>
    </section>
  );
}
