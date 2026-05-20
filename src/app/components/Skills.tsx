import { Code, Database, BarChart3, Brain, Terminal, Wrench } from 'lucide-react';
import { motion } from 'motion/react';

const skillCategories = [
  {
    icon: Code,
    title: 'Programming',
    skills: ['Python', 'SQL', 'C++'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Database,
    title: 'Data Analytics',
    skills: ['Pandas', 'NumPy', 'Excel', 'Google Sheets'],
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: BarChart3,
    title: 'Visualization',
    skills: ['Tableau', 'Dashboards', 'Data Visualization'],
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Brain,
    title: 'Machine Learning',
    skills: ['Scikit-learn', 'Decision Trees', 'Recommendation Systems'],
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: Terminal,
    title: 'Tools',
    skills: ['GitHub', 'Jupyter Notebook', 'VSCode'],
    color: 'from-indigo-500 to-purple-500'
  },
  {
    icon: Wrench,
    title: 'Coursework',
    skills: ['DBMS', 'Data Structures', 'Machine Learning', 'Artificial Intelligence'],
    color: 'from-teal-500 to-cyan-500'
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-slate-900 relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f15_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f15_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      {/* Gradient overlays */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl text-cyan-200/80 font-mono">{'<'} Technologies and tools I work with {'/>'}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-slate-800/50 backdrop-blur-xl rounded-2xl p-6 hover:shadow-2xl transition-all border border-cyan-500/20 group hover:border-cyan-500/40 shadow-lg shadow-cyan-500/5 relative overflow-hidden"
              >
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/10 group-hover:to-purple-500/10 transition-all duration-500"></div>

                <motion.div
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 shadow-lg shadow-cyan-500/30 group-hover:shadow-xl group-hover:shadow-cyan-500/50 relative z-10`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold mb-4 text-cyan-100 relative z-10">{category.title}</h3>
                <div className="flex flex-wrap gap-2 relative z-10">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + skillIndex * 0.05, duration: 0.3 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="px-3 py-1.5 bg-slate-700/50 backdrop-blur-sm border border-cyan-500/30 rounded-full text-sm text-cyan-100 shadow-sm hover:shadow-md hover:shadow-cyan-500/30 transition-all cursor-default hover:border-cyan-400/50"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
