import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import bg from "../assets/bg.jpg";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white flex items-center">
      <section className="flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-16 gap-12 w-full">
        {/* Left Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 mt-10 md:mt-24"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Welcome to <span className="text-blue-400">EMS</span>
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-lg">
            Manage your employees with ease. Track records, analyze insights,
            and streamline operations — all in one place.
          </p>

          <div className="flex gap-4">
            <Link
              to="/adminportal"
              className="px-6 py-3 rounded-2xl bg-blue-500 hover:bg-blue-600 transition text-white font-semibold shadow-lg"
            >
              Get Started
            </Link>
            <Link
              to="/about"
              className="px-6 py-3 rounded-2xl border border-gray-400 hover:border-blue-400 hover:text-blue-400 transition font-semibold"
            >
              Learn More
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-1/2 flex justify-center"
        >
          <img
            src={bg}
            alt="Hero"
            className="w-[340px] md:w-[480px] rounded-2xl shadow-2xl object-cover ring-4 ring-blue-500/30"
          />
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
