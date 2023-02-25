import axios from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'
import nc from 'next-connect'
import { DataType } from '../../../types/DataType'

const handler = nc()
const url = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=05a2364d8cca49e3b6c79579c5ffc4d0'

handler.get(async (req: NextApiRequest, res: NextApiResponse<DataType>) => {
  const { data } = await axios.get(url)
  // `https://newsapi.org/v2/everything?q=tesla&from=2023-01-06&sortBy=publishedAt&apiKey=05a2364d8cca49e3b6c79579c5ffc4d0`
  

  console.log(data.articles[0])

  res.send(data.articles[0])
})

export default handler
