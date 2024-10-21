import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function About() {
  return (
    <>
      <Navbar />
      <div className="about-container min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#00246B] to-[#CADCFC] text-white p-10">
        <h1 className="text-5xl font-bold mb-6">About Us</h1>
        <p className="text-lg leading-relaxed max-w-3xl text-center mb-8">
          We are a team of enthusiastic developers and designers who believe in the power of creativity and technology. Our mission is to build innovative, user-friendly solutions that inspire and transform the way people interact with the digital world. From sleek web design to powerful backend systems, we do it all.
        </p>
        <p className="text-lg leading-relaxed max-w-3xl text-center mb-8">
          With years of experience in various technologies, we pride ourselves on delivering high-quality products and services tailored to meet our clients' unique needs. Let us bring your ideas to life.
        </p>
        <Link href="/contact">
          <button className="px-8 py-3 bg-[#00246B] text-white rounded-full text-lg font-semibold hover:bg-[#2655a7] transition">
            Get in Touch
          </button>
        </Link>
      </div>
      <Footer />
    </>
  );
}
