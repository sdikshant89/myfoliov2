import AWS1 from '@/icons/skills/aws_practitioner.png';
import { motion } from 'framer-motion';
import Image from 'next/image';

function Certifications() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: 'easeInOut',
        }}
        id="skillSection"
        className="relative max-h-[70rem] w-full rounded-md flex flex-col item-center justify-center mx-auto pt-20 bg-[rgb(24,24,27)]"
      >
        <div>
          <h3 className="text-center text-gray-400 text-lg md:text-xl font-bold">
            Certifications
          </h3>
          <h1 className="pt-2 text-center text-white text-4xl md:text-6xl font-bold">
            My Certified Receipts
          </h1>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex flex-col justify-center items-center my-12 group">
            <div className="relative preserve-3d group-hover:my-rotate-y-180  duration-1000 w-52 h-52">
              <div className="absolute backface-hidden w-full h-full">
                <Image
                  src={AWS1}
                  alt="AWS Cloud Prac 1"
                  className="w-full cursor-pointer"
                />
              </div>
              <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-transparent overflow-hidden flex flex-col justify-center items-center gap-y-4">
                <button className="bg-indigo-500 rounded-lg p-3 font-medium hover:bg-indigo-700 transition-all duration-300">
                  View Certificate
                </button>
                <button className="bg-white rounded-lg p-3 font-medium hover:bg-slate-300 transition-all duration-300 text-black">
                  Download Notes
                </button>
              </div>
            </div>
            <h1 className="text-center text-lg mt-5">AWS CLF-C02</h1>
            <h1 className="text-center text-xl text-blue-500 font-semibold mt-1">
              Febraury 2025
            </h1>
          </div>
          {/* other certifications here */}
        </div>
      </motion.div>
    </div>
  );
}

export default Certifications;
