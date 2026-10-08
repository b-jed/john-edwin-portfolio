import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import TechStack from './sections/TechStack';
import Projects from './sections/Projects';

function App() {
  return (
    <main className="min-h-screen bg-black text-white bg-cover bg-center bg-no-repeat">
      <Navbar />
      <Hero />
      <TechStack />
      <Projects />

    </main>
  );
}

export default App;