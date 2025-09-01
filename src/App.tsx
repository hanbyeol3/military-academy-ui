import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import HomePage from './components/HomePage/HomePage';
import Instructors from './components/Instructors/Instructors';
import OnlineLecture from './components/OnlineLecture/OnlineLecture';
import OfflineLecture from './components/OfflineLecture/OfflineLecture';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/instructors" element={<Instructors />} />
            <Route path="/online-lecture" element={<OnlineLecture />} />
            <Route path="/offline-lecture" element={<OfflineLecture />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App
