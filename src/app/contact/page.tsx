import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function Contact() {
  return (
    <>
      <Navbar />
      <div className="contact-container min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#00246B] to-[#CADCFC] text-white p-10">
        <h1 className="text-5xl font-bold mb-6">Get in Touch</h1>
        <p className="text-lg leading-relaxed max-w-2xl text-center mb-8">
          Have a project in mind? Or just want to say hello? We'd love to hear from you! Fill out the form below or drop us an email, and we’ll get back to you as soon as possible.
        </p>
        <form className="w-full max-w-lg bg-white text-gray-800 rounded-lg p-6 shadow-lg">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Your Name
            </label>
            <input className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#00246B]" id="name" type="text" placeholder="Enter your name" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email Address
            </label>
            <input className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#00246B]" id="email" type="email" placeholder="Enter your email" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#00246B]" id="message" rows={4} placeholder="Write your message"></textarea>
          </div>
          <button type="submit" className="px-8 py-3 bg-[#00246B] text-white rounded-full text-lg font-semibold hover:bg-[#2655a7] transition">
            Send Message
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}
