import type { NextComponentType } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { action } from '../../redux/action'
import { ActionType } from '../../redux/action/type'
import { useAppDispatch } from '../../redux/hooks/useAppDispatch'
import MenuBtn from '../MenuBtn'
import { useAppSelector } from '../../redux/hooks/useAppSelector'
import { useEffect, useRef, useState } from 'react'

const fingerLoader = () => {
  return `https://res.cloudinary.com/hapiherb/image/upload/v1673819506/fing_vuasz0.png`
}

const logoLoaderq = () => {
  return `https://res.cloudinary.com/hapiherb/image/upload/v1677187233/lgo_w7fpg1.png`
}
const logoLoader = () => {
  return `https://res.cloudinary.com/hapiherb/image/upload/v1674728696/LOGO_wgyr1w.png`
}

const kidsSmallLoader = () => {
  return `https://res.cloudinary.com/hapiherb/image/upload/v1673433497/kidz-s_kpwew1.png`
}

const kidsMidLoader = () => {
  return `https://res.cloudinary.com/hapiherb/image/upload/v1673433497/kidz-m_hjld0d.png`
}

const kidsBigLoader = () => {
  return `https://res.cloudinary.com/hapiherb/image/upload/v1673433498/kidz_mzmuby.png`
}


const Header: NextComponentType = () => {
  const menuClosed = useAppSelector(state => state.isMenuClosed)
  const dispatch = useAppDispatch()

  const [state, setState] = useState({ num: 0 });
  const counter = useRef(0);
  
  useEffect(() => {
    if (counter.current < 10) {
      counter.current += 1;
      const timer = setTimeout(() => setState({ num: state.num + 1 }), 1000);

      return () => clearTimeout(timer);
    }
  }, [state]);
  
  return (
    <>
    <section className='topper center'>
      {/* Учим и се забавляваме! */}
    </section>

    <header className='header container-flex-row'>
      <div className='aside flex-item-1' onClick={() => dispatch(action(ActionType.IS_MENU_CLOSED, true))}>
        <Link href='/home'>
          <Image
            className='logo animate__animated animate__swing' 
            src='logo.png'
            alt="logo" 
            width={200} 
            height={100}
            loader={logoLoaderq}
            priority
          />
        </Link>
      </div>
      <div className='flex-item-4 center' onClick={() => dispatch(action(ActionType.IS_MENU_CLOSED, true))}>
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


