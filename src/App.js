/* ---- PR ---- */

import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero';
import Body from './components/Body';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Hero />
      </header>
      <Body />
      <Footer />
    </div>
  );
}

export default App;
