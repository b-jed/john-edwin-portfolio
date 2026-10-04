import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import TechStack from './sections/TechStack';

function App() {
  return (
    <main className="min-h-screen bg-black text-white bg-cover bg-center bg-no-repeat">
      <Navbar />
      <Hero />
      <TechStack />
    </main>
  );
}

export default App;