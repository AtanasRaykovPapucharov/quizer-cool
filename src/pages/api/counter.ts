import { NextApiRequest, NextApiResponse } from 'next'
import nc from 'next-connect'
import client from '../../utils/sanity-client'
import { DataType } from '../../types/DataType'

const handler = nc()

handler.get(async (req: NextApiRequest, res: NextApiResponse<DataType>, next) => {
  // const business = await client.fetch(`*[_type == "business" && date == "01-01-2023"]`)
  // let value = +business[0].tel

  // client
  //   .patch("Py84aai0wtkJxltqCUwJwH") // Document ID to patch
  //   .set({tel: (++value).toString()})
  //   .commit() // Perform patch and return a promise
  //   .then((resp: any) => {
  //     res.send(resp.data[0].tel)
  //   }).catch((err: any) => {
  //     console.log(err)
  //     res.send(value)
  //   })
})

export default handler
