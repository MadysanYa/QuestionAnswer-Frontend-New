import './css/App.css';
import QuestionAnswer from './component/QuestionAnswer';
import ExaminationRule from './component/ExaminationRule';
import Menu from './component/Menu';
import LoginForm from './component/LoginForm';

function App() {
  return (
    <>
      {/* <LoginForm /> */}
      <Menu />
      <ExaminationRule/>
      <QuestionAnswer />
    </>
  );
}

export default App;
