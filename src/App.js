import './css/App.css';
import Content from './component/Content';
import LoginForm from './component/LoginForm';
import Result from './component/Result';
import Examination from './component/Examination';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RouteProtect from './component/RouteProtect';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={
            <RouteProtect>
              <LoginForm />
            </RouteProtect>
          } />

          <Route path="/login" element={
            <RouteProtect>
              <LoginForm />
            </RouteProtect>
          } />

          <Route path="/examination" element={
            <RouteProtect>
              <Examination />
            </RouteProtect>
          } />

          <Route path="/question" element={
            <RouteProtect>
              <Content />
            </RouteProtect>
          } />

          <Route path="/result" element={
            <RouteProtect>
              <Result />
            </RouteProtect>
          } />
        </Routes>
      </Router>
    </>
  );
}

export default App;
