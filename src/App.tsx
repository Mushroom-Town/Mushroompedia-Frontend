import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Home from './pages/Home';
import List from './pages/List';
import AISearch from './pages/AISearch';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <p className="title">MUSHROOMS</p>
      </header> */}
      <Header />
      <div style={{ border: '1px solid whitesmoke', minHeight: '80%' }}>
        <Router>
          <Routes>
            <Route path="/" element={<Navigate replace to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/list" element={<List />} />
            <Route path="/ai-search" element={<AISearch />} />
            <Route path="*" element={<h1>404</h1>} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
