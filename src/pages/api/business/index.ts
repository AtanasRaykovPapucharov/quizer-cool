import { NextApiRequest, NextApiResponse } from 'next'
import nc from 'next-connect'
import client, { config } from '../../../utils/sanity-client'
import { DataType } from '../../../types/DataType'
import axios from 'axios'

const handler = nc()

handler.get(async (req: NextApiRequest, res: NextApiResponse<DataType>, next) => {
  const business = await client.fetch(`*[_type == "business"]`)
  
  res.send(business)
  next()
})

handler.post(async (req: NextApiRequest, res: NextApiResponse<DataType>) => {
  const ip = req.headers['x-real-ip'] || req.socket.remoteAddress
  const obj = req.body

  console.log(obj)

  const projectId = config.projectId;
  const dataset = config.dataset;
  const tokenWithWriteAccess = process.env.SANITY_AUTH_TOKEN;
  const createMutations = [
    {
      create: {
        _type: 'business',
        ...obj
      },
    },
  ]
  
  const { data } = await axios.post(
    `https://${projectId}.api.sanity.io/v1/data/mutate/${dataset}?returnIds=true`,
    { mutations: createMutations },
    {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${tokenWithWriteAccess}`,
      }
    }
  )

  console.log(`IP: ${ip}`)
  console.log(data)
  
  res.status(200).send('Успешно се регистрирахте.')
})

export default handler
