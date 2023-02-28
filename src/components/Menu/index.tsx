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
        <div className="menu-wrapper" style={!menuClosed ? {...MenuCss, visibility: "visible"} : MenuCss}>
          <h3 className='shadowed'>Избери: </h3>
          {JsonTree(MainMenu)}
          <hr />
          {JsonTree(MenuItems)}
        </div>
      }
    </>
  )
}

export default Menu
