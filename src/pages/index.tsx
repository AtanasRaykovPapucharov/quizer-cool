import axios from 'axios'
import { useEffect, useState } from 'react'
import Loading from '../components/Loading'
import QuizCard from '../components/QuizCard'
import { sortByAlphabet, sortByDate } from '../helper/sort'

export default function Home() {
  const [subjects, setSubjects] = useState<any[]>([])
  const [quizList, setQuizList] = useState<any[]>([])
  const [currentQuizList, setCurrentQuizList] = useState<any[]>([])
  const [quizSubject, setQuizSubject] = useState<string>("All")
  const [quizGrade, setQuizGrade] = useState<string>("All")
  const [quizTime, setQuizTime] = useState<string>("All")

  useEffect(() => {
    axios
      .get(`/api/quiz`)
      .then((resp: any) => { 
        setQuizList(sortByDate(resp.data))
        setCurrentQuizList(sortByDate(resp.data))

        return axios.get(`/api/categories`)
      })
      .then((resp: any) => {
        setSubjects(sortByAlphabet(resp.data))
      })
      .catch((err) => console.log(err))
  }, [])

  useEffect(() => {
    filter()
  }, [quizSubject, quizGrade, quizTime])

  function filter() {
    let filtered = quizList

    if(quizSubject != "All") filtered = filtered.filter((obj: any) => obj.title.split('-')[0] == quizSubject)
    if(quizGrade != "All") filtered = filtered.filter((obj: any) => obj.grade == quizGrade)
    if(quizTime != "All") filtered = filtered.filter((obj: any) => obj.minutes == quizTime)

    setCurrentQuizList(filtered)
  }

  return (
  <>
    {
    quizList.length == 0 ? <Loading /> :
    <main>
      <h2 className='center'>Тестове и задачи</h2>
      <div className='container-resp-col'>
        <div className='flex-item-1 drop'>
          <label>Предмет: </label>
          <select onChange={(e: any) => setQuizSubject(e.target.value) }>
            <option value="All">Всички</option>
            {
              subjects.map((sub: any) => {
                return <option key={sub.title} value={sub.title}>{sub.titleBg}</option>
              })
            }
          </select>
        </div>
        <div className='flex-item-1 drop'>
          <label>Клас: </label>
          <select onChange={(e: any) => setQuizGrade(e.target.value) }>
            <option value="All">Всички</option>
            {
              [...Array(12)].map((el: any, i: number) => {
                return <option key={i} value={`${i+1}`}>{i+1} клас</option>
              })
            }
          </select>
        </div>
        <div className='flex-item-1 drop'>
          <label>Времетраене: </label>
          <select onChange={(e: any) => setQuizTime(e.target.value) }>
            <option value="All">Всички</option>
            <option value="9">9 мин.</option>
            {
              [...Array(4)].map((el: any, i: number) => {
                return <option key={i} value={`${(i+1)*15}`}>{(i+1)*15} мин.</option>
              })
            }
          </select>
        </div>
      </div>
      <br />
      <main>
        { 
          currentQuizList.length > 0 ? 
          currentQuizList.map((q: any) => {
            return <QuizCard key={q._id} quiz={q}/>
          }) :
          <h2 className='center'>Няма намерени резултати</h2>
        }
      </main>
    </main>
    }
  </>
  )
}
