import { NextApiRequest, NextApiResponse } from 'next'
import nc from 'next-connect'
import client from '../../../utils/sanity-client'
import { DataType } from '../../../types/DataType'

const handler = nc()

handler.get(async (req: NextApiRequest, res: NextApiResponse<DataType>, next) => {
  const categories = await client.fetch(`*[_type == "category"]`)
  
  res.send(categories)
  next()
})

export default handler
