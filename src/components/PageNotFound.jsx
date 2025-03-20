import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-white">
      <h1 className="text-8xl font-bold mb-4 animate-bounce">404</h1>
      <p className="text-2xl font-semibold">Oops! Looks like you're lost in the void. 🚀</p>
      <p className="mt-2 text-lg">Maybe try turning your device upside down? No? Okay, let's get you back.</p>

      <motion.div
        animate={{ rotate: [0, 5, -5, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="mt-6"
      >
        <Link
          to="/"
          className="bg-white text-purple-600 font-bold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
        >
          Take Me Home 🏠
        </Link>
      </motion.div>

      <p className="mt-8 text-sm">Or just stay here and stare into the abyss... 👀</p>
    </div>
  );
};

export default PageNotFound;
