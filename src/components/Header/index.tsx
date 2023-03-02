import type { NextComponentType } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { action } from '../../redux/action'
import { ActionType } from '../../redux/action/type'
import { useAppDispatch } from '../../redux/hooks/useAppDispatch'
import MenuBtn from '../MenuBtn'
import { useAppSelector } from '../../redux/hooks/useAppSelector'
import { useEffect, useRef, useState } from 'react'
import axios from 'axios'

const fingerLoader = () => {
  return `https://res.cloudinary.com/hapiherb/image/upload/v1673819506/fing_vuasz0.png`
}

const logoLoaderq = () => {
  return `https://res.cloudinary.com/hapiherb/image/upload/v1677187233/lgo_w7fpg1.png`
}
const logoLoader = () => {
  return `https://res.cloudinary.com/hapiherb/image/upload/v1677578105/logo_q6u5gu.png`
}

const kidsSmallLoader = () => {
  return `https://res.cloudinary.com/hapiherb/image/upload/v1673433497/kidz-s_kpwew1.png`
}

const kidsMidLoader = () => {
  return `https://res.cloudinary.com/hapiherb/image/upload/v1677709530/kidz-m_hjld0d_hh7c49.png`; //`https://res.cloudinary.com/hapiherb/image/upload/v1673433497/kidz-m_hjld0d.png`
}

const kidsBigLoader = () => {
  return `https://res.cloudinary.com/hapiherb/image/upload/v1673433498/kidz_mzmuby.png`
}


const Header: NextComponentType = () => {
  const menuClosed = useAppSelector(state => state.isMenuClosed)
  const dispatch = useAppDispatch()

  // const [counter, setCounter] = useState(9);
  
  // useEffect(() => {
  //   axios
  //     .get(`/api/counter`)
  //     .then((resp: any) => { 
  //       setCounter(+resp.data)
  //     })
  //     .catch((err) => console.log(err))
  // }, []);
  
  return (
    <>
    {/* <section className='counter'>
      <em>Брой посещения: </em> {counter}
    </section> */}
    <section className='topper center'>
      Тестове и задачи за ученици
    </section>

    <header className='header container-flex-row'>
      <div className='aside flex-item-1' onClick={() => dispatch(action(ActionType.IS_MENU_CLOSED, true))}>
        <Link href='/'>
          <Image
            className='logo animate__animated animate__swing' 
            src='logo.png'
            alt="logo" 
            width={240} 
            height={66}
            loader={logoLoader}
            priority
          />
        </Link>
      </div>
      <div className='flex-item-2 center' onClick={() => dispatch(action(ActionType.IS_MENU_CLOSED, true))}>
        <Image 
          className='kids-small animate__animated animate__backInLeft' 
          src='kids.png'
          alt="kids" 
          width={45}  
          height={97}
          loader={kidsSmallLoader}
          priority
        />
        <Image 
          className='kids-middle animate__animated animate__backInLeft' 
          src='kids.png' 
          alt="kids" 
          width={188}  
          height={97}
          loader={kidsMidLoader}
          priority
        />
        <Image 
          className='kids-big animate__animated animate__backInLeft' 
          src='kids.png'
          alt="kids" 
          width={360}   
          height={97}
          loader={kidsBigLoader}
          priority
        />
      </div>
      <div className='aside aside-right flex-item-1'>
        <MenuBtn />
        {
        menuClosed ? 
        <Image 
          className='animate__animated animate__backInDown menu-wrapper' 
          src='finger.png'
          alt="finger" 
          width={33}   
          height={33}
          loader={fingerLoader}
          onClick={() => dispatch(action(ActionType.IS_MENU_CLOSED, false))}
          priority
        /> 
        : null
        }
      </div>
    </header>
    </>
  )
}

export default Header


