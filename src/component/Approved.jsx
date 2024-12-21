import { useRef } from 'react';
import Lottie from 'lottie-react';
import { motion, useInView } from 'framer-motion';
import approved from '../assets/approved.json';

const FADE_IN_VARIANTS = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const SLIDE_VARIANTS = {
  hidden: (direction) => ({ opacity: 0, x: direction === 'left' ? -50 : 50 }),
  visible: { opacity: 1, x: 0 }
};

const Approved = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section 
      ref={ref} 
      className="bg-gradient-to-r from-[#0E1629] to-[#000000] py-10 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0 lg:space-x-12">
          <motion.div 
            className="lg:w-1/2"
            variants={SLIDE_VARIANTS}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.5, delay: 0.2 }}
            custom="left"
          >
            <Lottie
              animationData={approved}
              loop={false}
              className="w-full h-auto max-w-md mx-auto"
            />
          </motion.div>

          <motion.div 
            className="lg:w-1/2"
            variants={SLIDE_VARIANTS}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.5, delay: 0.4 }}
            custom="right"
          >
            <div className="rounded-2xl p-8 shadow-2xl border border-purple-500 border-opacity-20 mb-10">
              <h3 className="mb-5 text-4xl text-[#FFbF00]">
                Get approved
              </h3>
              <h4 className="mb-5 text-xl">
              Only the best are worthy of the finest
              </h4>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Our process involves comprehensive background checks, and membership is extended only to individuals who meet our strict and non-negotiable criteria.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Approved;
