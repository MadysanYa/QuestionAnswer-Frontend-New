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
          <Route path="/page/login" element={<LoginForm />} />
          <Route path="/page/question" element={<Content/>} />
          <Route path="/page/result" element={<Result/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
