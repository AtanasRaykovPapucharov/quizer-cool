import { useEffect } from 'react'
import io from 'Socket.IO-client'
let socket

const Competiotin = () => {
  useEffect(() => {
    socketInitializer()
  }, [])

  const socketInitializer: Function = async () => {
    await fetch('/api/competition')
    socket = io()

    socket.on('connect', () => {
      console.log('connected')
    })
  }

  return null
}

export default Competiotin;