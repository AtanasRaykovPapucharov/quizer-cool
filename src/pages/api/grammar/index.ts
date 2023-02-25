import { NextApiRequest, NextApiResponse } from 'next'
import nc from 'next-connect'
import client from '../../../utils/sanity-client'
import { DataType } from '../../../types/DataType'

const handler = nc()

handler.get(async (req: NextApiRequest, res: NextApiResponse<DataType>) => {
  const grammar = await client.fetch(`*[ _type == 'grammarQuiz' ]`)
  res.send(grammar)
})

export default handler
