import { Briefcase, Calendar, Building2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 bg-slate-950 relative overflow-hidden">
      {/* Animated grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f15_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f15_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      {/* Gradient glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-xl text-cyan-200/80 font-mono">{'// '}Professional journey and achievements</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.02, y: -5 }}
          className="bg-slate-800/50 backdrop-blur-xl rounded-3xl p-8 shadow-2xl hover:shadow-cyan-500/20 transition-all border border-cyan-500/30 relative overflow-hidden group"
        >
          {/* Animated border glow */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative z-10">
          <div className="flex items-start gap-4 mb-6">
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-cyan-500/50"
              >
                <Briefcase className="w-8 h-8 text-white" />
              </motion.div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-cyan-100 mb-2">
                  Data Analytics & Machine Learning Intern
                </h3>
                <div className="flex items-center gap-2 text-cyan-200 mb-3">
                  <Building2 className="w-5 h-5 text-cyan-400" />
                  <span className="font-semibold text-lg">Infosys Springboard</span>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <div className="flex items-center gap-2 text-cyan-300/80 bg-slate-700/50 px-3 py-1.5 rounded-full border border-cyan-500/20">
                    <Calendar className="w-4 h-4" />
                    <span className="font-mono text-sm">July 2025 - December 2025</span>
                  </div>
                  <span className="px-4 py-1.5 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm rounded-full text-sm font-semibold text-cyan-100 border border-cyan-400/30 shadow-sm shadow-cyan-500/30">
                    6 Months
                  </span>
                </div>
              </div>
            </div>
          </div>

          <ul className="space-y-4 text-cyan-100/90">
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.4 }}
              whileHover={{ x: 10 }}
              className="flex items-start gap-3 p-3 rounded-xl hover:bg-cyan-500/10 transition-colors border border-transparent hover:border-cyan-500/30"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 mt-2 flex-shrink-0 shadow-sm shadow-cyan-500/50"></span>
              <span>Implemented Decision Tree models achieving <span className="font-bold text-cyan-400">90% accuracy</span> for classification tasks</span>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.4 }}
              whileHover={{ x: 10 }}
              className="flex items-start gap-3 p-3 rounded-xl hover:bg-purple-500/10 transition-colors border border-transparent hover:border-purple-500/30"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mt-2 flex-shrink-0 shadow-sm shadow-purple-500/50"></span>
              <span>Analyzed datasets containing <span className="font-bold text-purple-400">10,000+ records</span> using Python (Pandas, NumPy) and SQL</span>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.4 }}
              whileHover={{ x: 10 }}
              className="flex items-start gap-3 p-3 rounded-xl hover:bg-pink-500/10 transition-colors border border-transparent hover:border-pink-500/30"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 mt-2 flex-shrink-0 shadow-sm shadow-pink-500/50"></span>
              <span>Built <span className="font-bold text-pink-400">3+ Power BI dashboards</span> for KPI tracking and performance monitoring</span>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.4 }}
              whileHover={{ x: 10 }}
              className="flex items-start gap-3 p-3 rounded-xl hover:bg-cyan-500/10 transition-colors border border-transparent hover:border-cyan-500/30"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 mt-2 flex-shrink-0 shadow-sm shadow-cyan-500/50"></span>
              <span>Delivered actionable insights to support data-driven business decisions</span>
            </motion.li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
