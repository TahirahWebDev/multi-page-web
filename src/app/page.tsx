import Navbar from './components/Navbar';
import Home from './Home/page';
import Footer from './components/Footer';

export default function Main() {
  return (
    <div className="home-container min-h-screen flex flex-col">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}
