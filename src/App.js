import './css/App.css';
import Content from './component/Content';
import LoginForm from './component/LoginForm';
import Result from './component/Result';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/question" element={<Content/>} />
          <Route path="/result" element={<Result/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
