import type { NextComponentType } from 'next'
import router from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import { useAppSelector } from '../../redux/hooks/useAppSelector'
import { useAppDispatch } from '../../redux/hooks/useAppDispatch'
import { action } from '../../redux/action'
import { ActionType } from '../../redux/action/type'

import JsonTree from '../JsonTree'
import MainMenu from '../../data/main-menu.json'
import MenuItems from '../../data/menu-items.json'
import { 
  LoginCss,
  LogoutCss,
  MenuCss,
} from './styles'

const profileLoader = () => {
  return `https://res.cloudinary.com/hapiherb/image/upload/v1673433497/profile_m8anuw.png`
}

const loginLoader = () => {
  return `https://res.cloudinary.com/hapiherb/image/upload/v1673728408/login_kkqllf.png`
}

const logoutLoader = () => {
  return `https://res.cloudinary.com/hapiherb/image/upload/v1673728408/logout_rk1odm.png`
}

const linkz = [
  {
    href: '/about',
    name: 'За нас'
  },
  {
    href: '/contacts',
    name: 'Контакти'
  },
  {
    href: '/calendar',
    name: 'Календар'
  }
]
 
const Menu = () =>  {
  const menuClosed = useAppSelector(state => state.isMenuClosed)
  // const dispatch = useAppDispatch()
  // const [isAdmin, setIsAdmin] = useState(false)

  // useEffect(() => {
  //   dispatch(action(ActionType.IS_MENU_CLOSED))
    
  //   // if(window.localStorage.getItem('zita-user')) {
  //   //   // const user = JSON.parse(window.localStorage.getItem('zita-user') || 'User')
  //   //   // setIsAdmin(user.isAdmin)
  //   //   setIsAdmin(true)
  //   // }
  // }, [])

  return (
    <>
      {
        !menuClosed ? 
        <div className="menu-wrapper" style={MenuCss}>
          <h3 className='shadowed'>Избери: </h3>

          {
            // !isAdmin ?
            <div className='for-admins'>
              {JsonTree(MainMenu)}
              {/* <hr />
              {JsonTree(MenuItems)} */}
              {/* {
                linkz.map((link: any) => {
                  return <article key={link.name}>
                    <Link 
                      href={link.href}
                      onMouseEnter={(e: any) => { e.target.style.textDecoration = 'underline' }}
                      onMouseLeave={(e: any) => { e.target.style.textDecoration = 'none' }}
                      onClick={() => dispatch(action(ActionType.IS_MENU_CLOSED))}
                    >{link.name}</Link>
                  </article>
                })
              }
              <hr /> */}
            </div>
            // : <div className='for-admins'>
            //   {JsonTree(MainMenu)}
            //   <hr />
            //   {JsonTree(MenuItems)}
            // </div>
          }
          
          {/* <Link href='/user/profile' onClick={() => dispatch(action(ActionType.IS_MENU_CLOSED))}>
            <Image 
              className='profile' 
              src='profile.png' 
              alt='profile' 
              width={26}  
              height={26}
              loader={profileLoader}
              priority
            />
            <span>&nbsp;&nbsp;</span>
            <span
              onMouseEnter={(e: any) => { e.target.style.textDecoration = 'underline' }}
              onMouseLeave={(e: any) => { e.target.style.textDecoration = 'none' }}
            >Профил с резултати</span>
          </Link>   */}
          {/* <br />
          {
          !window.localStorage.getItem('zita-user') ? 
          <Link href='/user/login' 
            style={LoginCss} 
            onClick={() => { 
              dispatch(action(ActionType.IS_MENU_CLOSED))}
            }
            onMouseEnter={(e: any) => { e.target.style.textDecoration = 'underline' }}
            onMouseLeave={(e: any) => { e.target.style.textDecoration = 'none' }}
          >
            <Image 
              className='login' 
              src='login.png' 
              alt='login' 
              width={36}  
              height={30}
              loader={loginLoader}
              priority
            />
            <span>&nbsp;</span>
            <span>Влез</span>
          </Link>  :
          <Link href='/home' 
            style={LogoutCss} 
            onMouseEnter={(e: any) => { e.target.style.textDecoration = 'underline' }}
            onMouseLeave={(e: any) => { e.target.style.textDecoration = 'none' }}
            onClick={() => { 
              dispatch(action(ActionType.IS_MENU_CLOSED))
              window.localStorage.removeItem('zita-user')
              router.reload()
            }}
          >
            <Image 
              className='logout' 
              src='logout.png' 
              alt='logout' 
              width={36}  
              height={30}
              loader={logoutLoader}
              priority
            />
            <span>&nbsp;&nbsp;</span>
            <span>Излез</span>
          </Link> 
          } */}
        </div> 
        : null
      }
    </>
  )
}

export default Menu
