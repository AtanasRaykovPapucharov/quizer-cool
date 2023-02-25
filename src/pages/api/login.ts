import { NextApiRequest, NextApiResponse } from 'next'
import nc from 'next-connect'
import client from '../../utils/sanity-client'
import { DataType } from '../../types/DataType'

const handler = nc()

handler.post(async (req: NextApiRequest, res: NextApiResponse<DataType>) => {
    const ip = req.headers['x-real-ip'] || req.socket.remoteAddress
    const user = await client.fetch(`*[_type == "user" && username == $username && password == $password][0]`, {
        username: req.body.username,
        password: req.body.password
    })

    console.log(`IP: ${ip}`)
    console.log(user)
    
    res.send({ 
        isLogged: true,
        isAdmin: user.isAdmin,
        username: user.username ,
        image: user.image
    })
})

export default handler
