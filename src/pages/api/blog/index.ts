import { NextApiRequest, NextApiResponse } from 'next'
import nc from 'next-connect'
import client from '../../../utils/sanity-client'
import { DataType } from '../../../types/DataType'

const handler = nc()

handler.get(async (req: NextApiRequest, res: NextApiResponse<DataType>) => {
  const blog = await client.fetch(`*[ _type == 'blogPost' ]`)
  res.send(blog)
})

export default handler
