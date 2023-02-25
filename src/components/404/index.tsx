import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import errorImage from './assets/404s.gif'

const ERROR_404 = () => {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => router.push('/home'), 5300)
  }, [router])

  return <section className='center'>
    <h2>Страницата не е намерена</h2>
    <h3>Пренасочване...</h3>
    <br />
    <Image src={errorImage} alt='404' width={350}/>
  </section>
}

export default ERROR_404
