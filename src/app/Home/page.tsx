import Link from 'next/link';

const Home = () => {
  return (
    <main className="flex-grow pb-2 flex flex-col items-center justify-center bg-gradient-to-br from-[#00246B] to-[#CADCFC] text-white">
      <header className="text-center mb-10">
        <h1 className="text-5xl font-extrabold mb-5 mt-5 animate-pulse">Welcome to Our Creative Hub!</h1>
        <p className="text-xl max-w-3xl mx-auto">
          We’re passionate developers and designers creating innovative solutions to elevate your business.
          Explore our services and see how we can help you thrive in the digital world.
        </p>
      </header>

      <section className="flex flex-col md:flex-row gap-8 justify-around w-full max-w-5xl mb-16">
        {/* Web Development Card */}
        <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow transform hover:scale-105">
          <h2 className="text-3xl font-bold mb-4 text-[#00246B]">Web Development</h2>
          <p className="text-lg mb-4">
            Crafting responsive, high-performance websites tailored to your business needs. 
            Let us help you create a strong online presence!
          </p>
          <Link href="/about">
            <button className="px-4 py-2 bg-[#00246B] text-white rounded-lg hover:bg-[#2655a7] transition">
              Learn More
            </button>
          </Link>
        </div>

        {/* UI/UX Design Card */}
        <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow transform hover:scale-105">
          <h2 className="text-3xl font-bold mb-4 text-[#00246B]">UI/UX Design</h2>
          <p className="text-lg mb-4">
            We create intuitive and visually stunning designs that enhance user experience 
            and engagement across all platforms.
          </p>
          <Link href="/about">
            <button className="px-4 py-2 bg-[#00246B] text-white rounded-lg hover:bg-[#2655a7] transition">
              Learn More
            </button>
          </Link>
        </div>

        {/* Backend Services Card */}
        <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow transform hover:scale-105">
          <h2 className="text-3xl font-bold mb-4 text-[#00246B]">Backend Services</h2>
          <p className="text-lg mb-4">
            Our backend solutions are designed for scalability and performance, ensuring that 
            your applications run smoothly and efficiently.
          </p>
          <Link href="/about">
            <button className="px-4 py-2 bg-[#00246B] text-white rounded-lg hover:bg-[#2655a7] transition">
              Learn More
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Home;
