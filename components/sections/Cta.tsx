'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Cta = () => {
  return (
    <section id="book" className="py-16 px-4 md:px-12 lg:px-20 max-w-7xl mx-auto">
      <div className=" mx-auto  container">
        <div className="bg-primary overflow-hidden">
          <div className="px-10 py-12 md:p-20 flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-2/3 mb-8 md:mb-0 md:pr-10">
              <motion.h2 
                className="text-3xl md:text-4xl font-semibold text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Ready to Accelerate Your Career?
              </motion.h2>
              <motion.p 
                className="mt-4 text-lg text-white/80 max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Book a complimentary 15-minute discovery call to discuss your career goals and how we can help you achieve them.
              </motion.p>
              <motion.ul 
                className="mt-6 space-y-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <li className="flex items-center text-white/80">
                  <div className="w-1.5 h-1.5 bg-white mr-2"></div>
                  <span>Personalized guidance from industry experts</span>
                </li>
                <li className="flex items-center text-white/80">
                  <div className="w-1.5 h-1.5 bg-white mr-2"></div>
                  <span>Actionable strategies tailored to your goals</span>
                </li>
                <li className="flex items-center text-white/80">
                  <div className="w-1.5 h-1.5 bg-white mr-2"></div>
                  <span>Ongoing support throughout your journey</span>
                </li>
              </motion.ul>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="md:w-auto"
            >
              <Link 
                href="https://cal.com/konnectup/collegekit"
                className="inline-flex items-center justify-center px-10 py-3 text-shadow border border-transparent text-base font-medium text-primary bg-white hover:bg-gray-100 transition-colors duration-200 shadow-lg"
              >
                Book 1:1 Today
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;

