import './App.scss';
import { Header } from './components/Header.tsx';
import { HeroSection } from './components/HeroSection.tsx';
import { Welcome } from './components/Welcome.tsx';

function App() {
  return (
    <div className="container">
      <Header />
      <div className="content">
        <HeroSection />
        <Welcome />
      </div>
    </div>
  );
}

export default App;
