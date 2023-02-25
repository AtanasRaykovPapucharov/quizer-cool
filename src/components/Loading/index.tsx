import Image from 'next/image'
import { useEffect, useState } from 'react'

const customLoader = () => {
  return `https://res.cloudinary.com/hapiherb/image/upload/v1670576080/React/job_ikksby.gif`
}

const Loading = () =>  {
  const [w, setW] = useState(360);
  const [h, setH] = useState(50*360/100);

  useEffect(() => {
    let windowWidth = window.innerWidth
    if(windowWidth < 1100) { 
      setW(windowWidth)
      setH(50*windowWidth/100)
    } 
    else {
      setW(1100)
      setH(50*1100/100)
    }
  }, [])

  return (
   <Image 
      src="loader.gif"
      alt='loading...' 
      width={w} 
      height={h} 
      loader={customLoader}
      priority
    />
  )
}

export default Loading
