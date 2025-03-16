import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const [data, setData] = useState({ title: "", description: "" });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true); // Ensure loading is set before fetching
    fetch("http://127.0.0.1:8000/api/portfolio")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error.message);
        setLoading(false);
      });
  }, []);




  return (
    <header className="relative w-full h-screen bg-gradient-to-r from-[#2F4550] to-[#586F7C] flex flex-col items-center justify-center text-[#F4F4F9] text-center">
      {loading ? (
        <motion.h1
          className="text-5xl md:text-7xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Loading...
        </motion.h1>
      ) : error ? (
        <motion.p
          className="text-xl text-red-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Error: {error}
        </motion.p>
      ) : (
        <>
          <motion.h1
            className="text-5xl md:text-7xl font-bold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {data.title}
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl mt-4 text-[#B8DBD9]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {data.description}
          </motion.p>
          <motion.a
            href="#projects" // Change this to your actual section or page
            className="mt-6 px-6 py-3 bg-[#B8DBD9] text-[#2F4550] font-semibold rounded-lg shadow-lg hover:bg-[#A0C4C3] transition"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            View My Work
          </motion.a>
        </>
      )}
    </header>
  );
}
