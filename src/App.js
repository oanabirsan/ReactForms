import { Route, Routes } from 'react-router-dom';
import './App.css';
import { StudentPage } from './pages/StudentPage';
import { ProfesorPage } from './pages/ProfesorPage';
import { Home } from './pages/Home';
import NavigationBar from './components/NavigationBar';


function App() {
 
  return (
    <div className='all'>
     < NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profesor" element={<ProfesorPage />} />
        <Route path="/student" element={<StudentPage />} />

      </Routes>

    </div>
  );
}

export default App;
