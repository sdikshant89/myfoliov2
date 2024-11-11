// HoverCard.tsx
import { motion } from 'framer-motion';
import React, { useState } from 'react';

const HoverCard: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative flex items-center justify-center w-64 h-40 bg-blue-500 text-white rounded-lg overflow-hidden z-30"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }} // Scale effect on hover
    >
      {/* Default Content */}
      {!isHovered && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-xl font-bold">Default Content</p>
        </motion.div>
      )}

      {/* Hover Content */}
      {isHovered && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center bg-blue-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-xl font-bold">Hover Content</p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default HoverCard;

// import { motion } from 'framer-motion';
// import React from 'react';

// export const Card = ({
//   title,
//   icon,
//   children,
// }: {
//   title: string;
//   icon: React.ReactNode;
//   children?: React.ReactNode;
// }) => {
//   const [hovered, setHovered] = React.useState(false);
//   return (
//     <div
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       className="border  group/canvas-card flex items-center justify-center border-white/[0.2]  max-w-lg w-full mx-auto p-4 relative h-[25rem] bg-black"
//     >
//       <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
//       <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
//       <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
//       <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

//       {hovered && (
//         <motion.div className="h-full w-full absolute inset-0">
//           {children}
//         </motion.div>
//       )}
//       <div className="relative z-20">
//         <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
//           {icon}
//         </div>
//         <div className="dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
//           sdnk sdfnhs sd fsdhjcb bjsdfj sdjjs djf sdas cka dk adsd
//         </div>
//       </div>
//     </div>
//   );
// };

// const Icon = ({ className, ...rest }: any) => {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       fill="none"
//       viewBox="0 0 24 24"
//       strokeWidth="1.5"
//       stroke="currentColor"
//       className={className}
//       {...rest}
//     >
//       <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
//     </svg>
//   );
// };
