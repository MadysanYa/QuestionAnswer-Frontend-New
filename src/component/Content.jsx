import React from 'react'
import FinishButton from './FinishButton';
import ExaminationRule from './ExaminationRule';
import QuestionAnswer from './QuestionAnswer';

function Content() {
  return (
    <>
        <ExaminationRule/>
        <QuestionAnswer />
        <FinishButton />
    </>
  )
}

export default Content