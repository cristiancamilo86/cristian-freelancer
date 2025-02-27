import { motion } from "framer-motion";
import {  FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const socialLinks = [
    { icon: <FaTwitter />, color: "text-sky-400", link: "https://x.com/cristianmarq568" },
    { icon: <FaInstagram />, color: "text-pink-500", link: "https://www.instagram.com/cristan_marquez/" },
    { icon: <FaLinkedin />, color: "text-blue-700", link: "https://www.linkedin.com/in/cristian-marquez-95a31019a/" },
  ];

  const additionalLinks = [
    { label: "Inicio", link: "/" },
    { label: "Acerca de", link: "/acerca" },
    { label: "Habilidades", link: "/Habilidades" },
    { label: "proyectos", link: "/proyectos" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-6 mt-10 text-center relative">
      {/* Redes sociales con efecto ala */}
      <div className="flex justify-center space-x-6 mb-4">
        {socialLinks.map((social, index) => (
          <motion.a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`relative text-xl ${social.color} social-icon`}
            whileHover={{ scale: 1.2, rotate: 10 }}
            transition={{ duration: 0.3 }}
          >
            {social.icon}
          </motion.a>
        ))}
      </div>

      {/* Enlaces adicionales */}
      <div className="flex justify-center space-x-6 text-gray-400 mb-4">
        {additionalLinks.map((item, index) => (
          <motion.a
            key={index}
            href={item.link}
            className="hover:text-white"
            whileHover={{ scale: 1.1, color: "#ffffff" }}
            transition={{ duration: 0.3 }}
          >
            {item.label}
          </motion.a>
        ))}
      </div>

      {/* Copyright */}
      <motion.p
        className="text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        &copy; 2025 cristian Freelancer 2025. Todos los derechos reservados.
      </motion.p>
    </footer>
  );
}
