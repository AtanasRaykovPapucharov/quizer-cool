 import { NextApiRequest, NextApiResponse } from 'next'
import nc from 'next-connect'
import client from '../../../../utils/sanity-client'
import { DataType } from '../../../../types/DataType'

const handler = nc()

handler.get(async (req: NextApiRequest, res: NextApiResponse<DataType>) => {
  let blog = await client.fetch(`*[ _type == 'blogPost' && _id == '${req.query.id}'  ]`)

  res.send(blog[0])
})

export default handler
