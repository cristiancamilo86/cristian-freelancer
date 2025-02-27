
import { motion } from "framer-motion";
import delodeveloper from "..//src/assets/developer.png";

export default function Cercademi() {
  return (
    <motion.div 
      className="cerca minimalista"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div 
        className="desarrollador"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
      >
        <h2 className="titulo">Sobre Mí</h2>
        <p className="descripcion">Christian Freelancer Desarrollador Web y de Aplicaciones Móviles (React & React Native)

¡Hola! Soy Christian, un freelancer apasionado y comprometido con la creación de soluciones digitales innovadoras. Con amplia experiencia en el desarrollo web y móvil, me especializo en la utilización de tecnologías modernas como React y React Native para transformar ideas en aplicaciones intuitivas, responsivas y de alto rendimiento.

Mi enfoque se centra en:

Desarrollo Web: Creación de sitios y aplicaciones web con interfaces limpias y funcionales.
Aplicaciones Móviles: Desarrollo de apps nativas e híbridas para Android e iOS, optimizadas para una excelente experiencia de usuario.
Calidad y Eficiencia: Entrego código limpio, bien documentado y adaptable a las necesidades de cada cliente, siempre cumpliendo con los plazos establecidos..</p>
      </motion.div>

      <motion.div 
        className="yo"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <motion.img 
          src={delodeveloper} 
          alt="delodeveloper"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
}
