import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import HomePage from './app/page';
import './styles/globals.css';

export default function App() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <HomePage />
      </main>
      <Footer />
    </>
  );
}