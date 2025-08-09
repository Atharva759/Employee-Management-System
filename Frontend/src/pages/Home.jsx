
import bg from "../assets/bg.jpg";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white flex items-center">
      <section className="flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-10 gap-12 w-full">
        
        {/* Left Text Section */}
        <div className="md:w-1/2 mt-10 md:mt-24">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Welcome to <span className="text-blue-400">EMS</span>
          </h1>
          <p className="text-lg text-gray-300 mb-6">
            Manage your employees with ease. Track records, analyze insights, and streamline operations — all in one place.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src={bg}
            alt="Hero"
            className="w-[320px] md:w-[450px] rounded-md shadow-2xl object-cover"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
