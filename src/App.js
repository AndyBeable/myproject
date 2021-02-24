import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero';
import Body from './components/Body';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Hero />
      </header>
      <Body />
    </div>
  );
}

export default App;
