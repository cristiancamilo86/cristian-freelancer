import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { JSX } from "react/jsx-runtime";

interface Skill {
  name: string;
  icon: JSX.Element;
}

const skills: Skill[] = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
  { name: "Typescript", icon: <SiTypescript className="text-blue-500" /> },
  { name: "React", icon: <FaReact className="text-blue-400" /> },
];

const Habilidades: React.FC = () => {
  return (
    <div className="flex justify-center items-center p-10 w-full">
      <motion.div
        className="bg-gray-900 text-white p-8 rounded-[30px] border-4 border-blue-400 shadow-xl w-full max-w-6xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1.08 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold text-center mb-6">Habilidades</h2>
        <div className="flex flex-wrap justify-around">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center gap-2 m-4"
              whileHover={{ scale: 1.5}}
              transition={{ duration: 0.7 }}
            >
              <div className="text-4xl">{skill.icon}</div>
              <p className="text-lg">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Habilidades;
