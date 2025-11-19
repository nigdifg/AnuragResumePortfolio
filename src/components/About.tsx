import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="about" className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="bg-slate-800 rounded-lg p-8 shadow-xl"
            >
              <p className="text-lg text-gray-300 mb-6">
                I'm a passionate Full Stack Developer with a love for creating beautiful,
                functional web applications. With expertise in modern technologies like React,
                TypeScript, and Node.js, I bring ideas to life through clean code and intuitive design.
              </p>
              
              <p className="text-lg text-gray-300 mb-6">
                My journey in web development started with a curiosity about how things work on the web,
                and it has evolved into a career focused on building scalable, user-friendly applications
                that make a difference.
              </p>
              
              <p className="text-lg text-gray-300">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source
                projects, or sharing knowledge with the developer community.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
