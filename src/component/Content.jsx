import React from 'react'
import Menu from './Menu';
import FinishButton from './FinishButton';
import ExaminationRule from './ExaminationRule';
import QuestionAnswer from './QuestionAnswer';

function Content() {
  return (
    <>
        <Menu />
        <ExaminationRule/>
        <QuestionAnswer />
        <FinishButton />
    </>
  )
}

export default Content