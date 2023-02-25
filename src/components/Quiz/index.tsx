import axios from 'axios'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { confirmAlert } from 'react-confirm-alert'


import { QuizType } from '../../types/QuizType'
import { QuestionType } from '../../types/QuestionType'
import { AnswerType } from '../../types/AnswerType'
import Counter from '../Counter'
import SanityImage from '../SanityImage'
import { Colors, BTN, BTN_QUESTION, BTN_ANSWER, BTN_TEXT, TEXT, QUIZ} from './styles'
import { ResultType } from '../../types/ResultType'
import { randomStringGenerator } from '../../helper/random'
import ArrowRight from '../../assets/right-arrow.png'
import ArrowLeft from '../../assets/left-arrow.png'

const randomString = randomStringGenerator(12)

const answersList = [
  {
    en: 'a',
    bg: 'а'
  },
  {
    en: 'b',
    bg: 'б'
  },
  {
    en: 'c',
    bg: 'в'
  },
  {
    en: 'd',
    bg: 'г'
  },
  {
    en: 'e',
    bg: 'д'
  },
  {
    en: 'f',
    bg: 'е'
  }
]

const Quiz: React.FC<QuizType> = ({
  _id,
  title,
  titleBg,
  image,
  grade,
  minutes,
  description,
  overview,
  overviewTitle,
  questions
}) => {
  const questionsCount: number = minutes/3
  
  const router = useRouter()
  const [isTestStarted, setIsTestStarted ] = useState<boolean>(false)
  const [isTextVisible, setIsTextVisible ] = useState<boolean>(false)
  const [questionNumber, setQuestionNumber] = useState(1)
  const [answers, setAnswers] = useState(Array(questionsCount))

  // Q & A
  const questionBtnClicked = (clickEvent: any) => {
    const currentQuestion = clickEvent.target.value

    setQuestionNumber(currentQuestion)
    selectAnswer(answers[currentQuestion - 1])
  }

  const answerBtnClicked = (clickEvent: any) => {
    const target = clickEvent.target
    const currentAnswer = +target.id.split('-')[1]
    const newAnswers = answers
    
    newAnswers[questionNumber - 1] = currentAnswer
    setAnswers(newAnswers)
    selectAnswer(currentAnswer)
  }

  function selectAnswer(answ: number) {
    for (let a = 0; a < questions[0].answers.length; a++) {
      const color = answ === a ? Colors.MainDark : Colors.BtnAnswer
      const select = document.getElementById(`btn-${a}`)
      if(select) select.style.backgroundColor = color
    }
  }

  // on/off
  const quizFinished = () => {
    setIsTestStarted(false)

    const userResult: ResultType = {
      _id: randomString.next().value,
      title: titleBg,
      grade,
      description,
      date: new Date(),
      correctAnswersCount: getCorrectAnswersCount(),
      percents: getCorrectAnswersCount()*100/questionsCount
    }

    // if(window.localStorage.getItem('zita-user')) {
      const userResultsString: string | null = window.localStorage.getItem('zita-user-results')
      let userResultsArray: ResultType[] = []

      if(userResultsString) userResultsArray = JSON.parse(userResultsString)

      // sending result ...
      
      userResultsArray.push(userResult)

      window.localStorage.setItem('zita-user-results', JSON.stringify(userResultsArray))
    router.push('/user/profile')
    // }

    // window.sessionStorage.setItem('result', JSON.stringify(userResult))

    // router.push('/user/result')
  } 

  function getCorrectAnswersCount(): number {
    let correctAnswersCount = 0

    for (let i = 0; i < questions.length; i++) {
      const correctAnswer = questions[i].answers.findIndex(ans => ans.isCorrect == true)
      if(answers[i] == correctAnswer) correctAnswersCount++
    }

    return correctAnswersCount
  }

  const onQuizStarted = (clickEvent: any) => {
    setIsTestStarted(true)
  }

  const onQuizFinished = (clickEvent: any) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        const finish = () => {
          quizFinished() 
          onClose()
        }
        return (
          <div className='center' style={{width: '350px'}}>
            <h1>Завърши теста</h1>
            <p>Виж резултатите</p>
            <button onClick={finish} style={{...BTN, backgroundColor: Colors.BtnStart}}>Да</button>
            <span>&nbsp;</span>
            <button onClick={onClose} style={{...BTN, backgroundColor: Colors.BtnFinish}}>Не</button>
          </div>
        )
      }
    })
  }

  // Arrows
  const leftArrowClicked = () => {
    let value = +questionNumber - 1
    if(value < 1) value = questionsCount

    selectAnswer(answers[value - 1])
    setQuestionNumber(value)
  }
  const rightArrowClicked = () => { 
    let value = +questionNumber + 1
    if(value > questionsCount) value = 1

    selectAnswer(answers[value - 1])
    setQuestionNumber(value)
  }

  // counter
  const counterProps = {
    minutes: minutes | 0, 
    onFinished: () => quizFinished, 
    width: 180, 
    mainColor: Colors.MainDark, 
    traceColor: Colors.MainLight
  }

  // hooks
  useEffect(() => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }, [isTextVisible])

  return (
    <div className='quiz-wrapper container-resp-col'>
      <aside className='flex-item-2' style={QUIZ}>
        <div>
          <h2>{titleBg} - {grade} клас</h2>
          <h2>ТЕСТ</h2>
          <h2>{description}</h2>
          <div className='container-flex-row'>
            <div className='flex-item-1'></div>
            { isTestStarted ? 
            <div className='flex-item-2' style={{color: Colors.BtnFinish}}> 
              <Counter isStarted={isTestStarted} {...counterProps} />
            </div>
            : null }
            <div className='flex-item-2'>
            {
              !isTestStarted ? 
                <button 
                    onClick={onQuizStarted}
                    onMouseEnter={(e: any) => { e.target.style.opacity = 0.8 }}
                    onMouseLeave={(e: any) => { e.target.style.opacity = 1 }}  
                    style={{...BTN, backgroundColor: Colors.BtnStart}}>
                    НАЧАЛО
                </button> : 
                <button 
                    onClick={onQuizFinished}
                    onMouseEnter={(e: any) => { e.target.style.opacity = 0.8 }}
                    onMouseLeave={(e: any) => { e.target.style.opacity = 1 }}
                    style={{...BTN, backgroundColor: Colors.BtnFinish}}>
                    КРАЙ
                </button>
            }
            </div>
            <div className='flex-item-1'></div>
          </div>
          <br />
        </div>
      </aside>

      { isTestStarted ? 
      <div className='quiz flex-item-3' style={QUIZ}>
          <div className='quiz-questions' style={{marginTop: '-13px'}}> 
            <br />
            <br />
            { 
              overviewTitle ? 
              <div>
                <button 
                  onClick={() => setIsTextVisible(!isTextVisible)}
                  onMouseEnter={(e: any) => { e.target.style.opacity = 0.8 }}
                  onMouseLeave={(e: any) => { e.target.style.opacity = 1 }}
                  style={BTN_TEXT}
                >
                  {overviewTitle}
                </button>
                <br />

                <div 
                  className='overview center' 
                  style={isTextVisible ? {...TEXT, display: 'inherit'} : {...TEXT, display: 'none' }}
                >
                  <h2 className='center'>{overviewTitle}</h2>
                  {
                    overview ? 
                    <div className='animate__animated animate__fadeInDown'>
                      {
                        overview.map((ov: any) => {
                          return <div key={ov._key}>
                            {
                              ov.children.map((child: any) => {
                                return <div key={child._key}>
                                  {child.text}
                                  <br />
                                </div>
                              })
                            }
                            <br />
                          </div>
                        })
                      }
                    </div>: 
                    null
                  }

                  <div className='center'>
                    <br />
                    <button 
                      onClick={() => setIsTextVisible(false)} 
                      style={{...BTN_TEXT, backgroundColor: Colors.BtnFinish}}
                      onMouseEnter={(e: any) => { e.target.style.opacity = 0.8 }}
                      onMouseLeave={(e: any) => { e.target.style.opacity = 1 }}
                    >
                      Затвори текста
                    </button>
                  </div>
                  <br />
                </div>
                <br />
              </div> : 
              null 
            }

            {
              minutes && minutes <= 30 ?

              [...Array(questionsCount)].map((v, i) => <button 
              key={i}
              style={
                i+1 != questionNumber ?
                BTN_QUESTION :
                { ...BTN_QUESTION, backgroundColor: Colors.Border }
              } 
              onClick={questionBtnClicked} 
              onMouseEnter={(e: any) => { e.target.style.opacity = 0.8 }}
              onMouseLeave={(e: any) => { e.target.style.opacity = 1 }}
              value={i+1}>{i+1}</button>) :

              <div>
                { [...Array(10)].map((v, i) => <button 
                key={i} 
                style={
                  i+1 != questionNumber ?
                  BTN_QUESTION :
                  { ...BTN_QUESTION, backgroundColor: Colors.Border }
                } 
                onClick={questionBtnClicked}
                onMouseEnter={(e: any) => { e.target.style.opacity = 0.8 }}
                onMouseLeave={(e: any) => { e.target.style.opacity = 1 }}
                value={i+1}>{i+1}</button>) } 
                <br />
                { [...Array(questionsCount - 10)].map((v, i) => <button 
                key={i}
                style={
                  i+11 != questionNumber ?
                  BTN_QUESTION :
                  { ...BTN_QUESTION, backgroundColor: Colors.Border }
                } 
                onClick={questionBtnClicked} 
                onMouseEnter={(e: any) => { e.target.style.opacity = 0.8 }}
                onMouseLeave={(e: any) => { e.target.style.opacity = 1 }}
                value={i+11}>{i+11}</button>) } 
              </div>
            }

            {
             questions[questionNumber - 1] && <div className='current-question'>
                {
                  <h3>
                    {questionNumber}.&nbsp; 
                    {questions[questionNumber - 1].text}
                  </h3>
                }

                {
                questions[questionNumber - 1].image ?
                <SanityImage 
                  image={questions[questionNumber - 1].image} 
                  alt="QuestionImage" 
                  width={
                    questions[questionNumber - 1].imageWidth ? 
                    questions[questionNumber - 1].imageWidth : 
                    200
                  } 
                  height={
                    questions[questionNumber - 1].imageHeight ? 
                    questions[questionNumber - 1].imageHeight : 
                    70
                  } 
                /> :
                null 
                }
                <br /><br />
                {
                  questions[questionNumber - 1].answers.map((a: AnswerType, i: number) => {
                    return <div key={i} className='container-flex-row'>
                      <div className='flex-item-2'>
                        {
                          i === 1 ? <Image 
                            src={ArrowLeft} 
                            alt='arrow' 
                            width={60} 
                            style={{float: 'right'}}
                            onClick={leftArrowClicked} 
                          /> : null
                        }
                      </div>
                      <div className='flex-item-3 center'>
                        <button 
                          key={i} 
                          id={'btn-' + i} 
                          onClick={answerBtnClicked}  
                          style={{ ...BTN_ANSWER }}
                          onMouseEnter={(e: any) => { e.target.style.opacity = 0.8 }}
                          onMouseLeave={(e: any) => { e.target.style.opacity = 1 }}
                        >

                          {answersList[i].bg}

                        </button>
                      </div>

                      <div className='flex-item-3 center'>
                        { 
                          a.value ? <div  style={{ paddingTop: '7px', color: 'rgb(47,107,172)' }}>
                            <span>{a.value}</span>
                          </div> : 
                          a.image ? 
                          <SanityImage 
                            image={a.image} 
                            alt="Answer" 
                            width={170} 
                            height={30} 
                          /> : 
                          null
                        }
                      </div>
                      <div className='flex-item-2'>
                        {
                          i === 1 ? <Image 
                            src={ArrowRight} 
                            alt='arrow' 
                            width={60} 
                            style={{float: 'left'}}
                            onClick={rightArrowClicked}
                          /> : null
                        }
                      </div>
                      <br />
                    </div>
                  })
                }
                <br />
              </div>
            }
          </div> 
      </div>
      : null }

    </div>
  )
}

export default Quiz
