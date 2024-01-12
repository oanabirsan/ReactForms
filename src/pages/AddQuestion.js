import React, { useEffect, useState } from 'react';
import ManageInput from '../components/manageInput';


export default function AddQuestion() {
  /* question: {
      title: string;
      id: string;
      responseType: radio/checkbox/text
      answerList: [
        {
          name: string;
          id: string;
          isCorrectAnswer: boolean;
        }]}*/
  const [questions, setQuestion] = useState([])

  function setupQuestion() {    // useEffect
    const questionList = localStorage.getItem("questionList")
    if (questionList && questions.length === 0) {
      setQuestion(JSON.parse(questionList))
    }
  }
  useEffect(setupQuestion, [])      //useEffect

  function handleSubmitQuestion(newQuestionTitle) {
    setQuestion(currentQuestions => {
      return [
        ...currentQuestions,
        {
          id: crypto.randomUUID(),
          title: newQuestionTitle,
          responseType: "text",
          answerList: []
        },]
    }
    )     //useEffect

    localStorage.setItem("questionList", JSON.stringify([...questions,
    {
      id: crypto.randomUUID(),
      title: newQuestionTitle,
      completed: false
    }]))
    //useeffect
  }
  function handleSubmitAnswer(questionId) {
    return function (newAnswerTitle) {
      const newQuestions = questions.map((question) => {
        if (question.id === questionId) {
          return {
            ...question,
            answerList: [
              ...question.answerList,
              {
                name: newAnswerTitle,
                id: crypto.randomUUID(),
                isCorrectAnswer: false
              }
            ]
          }
        }
        return question;
      })
      setQuestion(newQuestions)
      localStorage.setItem("questionList", JSON.stringify(newQuestions))
    }

  }

  function deleteQuestion(id) {
    const currentQuestions = questions.filter(question => question.id !== id)
    setQuestion(currentQuestions)
    localStorage.setItem("questionList", JSON.stringify(currentQuestions))
  }


  function deleteAnswer(id) {
    const newQuestions = questions.map((question) => {
        const currentAnswers = question?.answerList?.filter(answer => answer.id !== id)
        question.answerList=currentAnswers;
        return question;
    } )
    
    setQuestion(newQuestions)
    localStorage.setItem("questionList", JSON.stringify(newQuestions))
  }

  const optionSelectType = [
    { label: 'text' },
    { label: 'checkbox' },
    { label: 'radio' }
  ]
  function handleSelectType(questionId) {
    return (e) => {
      const newQuestions = [];

      for (let i = 0; i < questions.length; i++) {
        newQuestions[i] = questions[i]
        if (newQuestions[i].id === questionId) {
          newQuestions[i].responseType = e.target.value
        }
      }
      setQuestion(newQuestions)
      localStorage.setItem("questionList", JSON.stringify([...newQuestions]))
    }
  }















  return (
    <div>
      <ManageInput
        handleSubmit={handleSubmitQuestion}
        buttonName='add question'
      />
      <ol>
        {questions.map(question => {
          return (
            <li className='list'>
              <label>
                {question.title}
              </label>
              <button onClick={() => deleteQuestion(question.id)}>sterge</button>
              <div>
                <div className="choose">
                  <p htmlFor='item'>Add a request! Choose a style:</p>
                  <select className="treeOption" onChange={handleSelectType(question.id)}>
                    {optionSelectType.map(optionSelectType =>
                      <option value={optionSelectType.label} selected={question.responseType === optionSelectType.label}>{optionSelectType.label}</option>
                    )}
                  </select>
                </div>
                {
                  question.responseType !== 'text' &&
                  < ManageInput
                    handleSubmit={handleSubmitAnswer(question.id)}
                    buttonName={'add answer'}
                  />}
                {question.responseType !== 'text' &&
                  question?.answerList?.map((answer) => {
                    return (
                      <div>
                        <div>
                          <ul className='listStyle'><li className='inputANDbutton'><label>
                            <input className='input' type={question.responseType} name={question.id} />{answer.name}</label>
                            <button className="deleteButton" onClick={() => deleteAnswer(answer.id)}>sterge</button>
                          </li></ul>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </li>
          )
        })
        }
      </ol>
    </div>
  )
}