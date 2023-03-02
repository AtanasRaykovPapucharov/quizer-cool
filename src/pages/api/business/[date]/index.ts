import { NextApiRequest, NextApiResponse } from 'next'
import nc from 'next-connect'
import client from '../../../../utils/sanity-client'
import { DataType } from '../../../../types/DataType'

const handler = nc()

handler.get(async (req: NextApiRequest, res: NextApiResponse<DataType>, next) => {
  const business = await client.fetch(`*[_type == "business" && date == "${req.query.date}"]`)
  
  res.send(business)
  next()
})

export default handler
