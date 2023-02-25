 import { NextApiRequest, NextApiResponse } from 'next'
import nc from 'next-connect'
import fs from 'fs'
import client from '../../../utils/sanity-client'
import { DataType } from '../../../types/DataType'
import { QuestionType } from '../../../types/QuestionType'
import { randomIntGenerator } from '../../../helper/random'
// import { createJson } from '../../../helper/jsonFile'

const handler = nc()

handler.get(async (req: NextApiRequest, res: NextApiResponse<DataType>) => {
  let quiz = await client.fetch(`*[ _type == 'quiz' && _id == '${req.query.id}' ]`)

  quiz = quiz[0]

  // fs.writeFileSync('./data/math-7-60.json', JSON.stringify(quiz))

  quiz.questions = orderedQuestions(quiz.questions)

  res.send(quiz)
})

function orderedQuestions(questions: QuestionType[]): QuestionType[] {
  const questionArray: QuestionType[] = []

  for (let ind = 0; ind < questions.length; ind++) {
    const currentArray: QuestionType[] = questions?.filter((q: QuestionType) => +q.order == ind + 1) 

    if(currentArray?.length == 1) questionArray.push(currentArray[0])
    else if(currentArray?.length > 1) questionArray.push(randomQuestion(currentArray))
    else continue
  }

  return questionArray
}

function randomQuestion(questionList: QuestionType[]): QuestionType {
  const rand = randomIntGenerator(0, questionList.length - 1)
  const randQuestion = questionList[rand.next().value]
  randQuestion.answers = shuffle(randQuestion.answers)

  return randQuestion
}

function shuffle([...arr]) {
  let m = arr.length
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]]
  }
  return arr
}

export default handler
