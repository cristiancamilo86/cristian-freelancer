import { motion } from "framer-motion";
import img1 from "..//src/assets/1.png";
import img2 from "../src/assets/2.png";
import img3 from "../src/assets/3.jpg";
import img4 from "../src/assets/4.webp";
import img5 from "../src/assets/5.webp";
import img6 from "../src/assets/6.webp";
const proyectos = [
  { id: 1, nombre: "Proyecto 1", imagen: img1 },
  { id: 2, nombre: "Proyecto 2", imagen: img2 },
  { id: 3, nombre: "Proyecto 3", imagen: img3 },
  { id: 4, nombre: "Proyecto 4", imagen: img4 },
 { id: 5, nombre: "Proyecto 5", imagen: img5 },
 { id: 6, nombre: "Proyecto 6", imagen: img6 }
];

export default function Proyectos() {
  return (
    <div className="p-10">
      <h2 className="text-5xl font-bold text-center text-orange-700 md-8">
        <br/>
        Proyectos
        <b/>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {proyectos.map((proyecto) => (
          <motion.div
            key={proyecto.id}
            className="bg-gray-900 p-4 rounded-3xl shadow-lg overflow-hidden"
            whileHover={{ scale: 1.09 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={proyecto.imagen}
              alt={proyecto.nombre}
              className="w-full h-48 object-cover rounded-xl"
            />
            <h3 className="text-xl text-white font-semibold mt-4 text-center">
              {proyecto.nombre}
            </h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

