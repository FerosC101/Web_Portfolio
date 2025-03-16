import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const [data, setData] = useState({ title: "", description: "" });

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/portfolio")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <header className="relative w-full h-screen bg-gradient-to-r from-[#2F4550] to-[#586F7C] flex items-center justify-center text-[#F4F4F9]">
      <div className="text-center">
        <motion.h1
          className="text-5xl md:text-7xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {data.title || "Loading..."}
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl mt-4 text-[#B8DBD9]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {data.description || "Fetching data..."}
        </motion.p>
      </div>
    </header>
  );
}
