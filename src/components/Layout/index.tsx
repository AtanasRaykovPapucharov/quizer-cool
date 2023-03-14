import React, { useEffect } from 'react'
 import { ToastContainer, toast } from 'react-toastify'
import Head from 'next/head'
import { action } from '../../redux/action'
import { ActionType } from '../../redux/action/type'
import { useAppDispatch } from '../../redux/hooks/useAppDispatch'
import Header from '../Header'
import Menu from '../Menu'
import Calendar from '../Calendar'

const Layout = ({ children }: any): JSX.Element => {
  const dispatch = useAppDispatch()

  return (
  <>
    <Head>
      <meta charSet='UTF-8' />
      <meta httpEquiv='X-UA-Compatible" content="IE=edge' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta name='description' content='Тестове и задачи за ученици' />
      <link rel='icon' type='image/png' href='/icon.ico' />
      <title>QUIZER'S</title>
    </Head>
    
    <div className='wrapper'>
      <Header />

      <main className='main' onClick={() => dispatch(action(ActionType.IS_MENU_CLOSED, true))}>
        {children}
      </main>

      <br />
      <footer id="footer-global" 
      // style={{backgroundColor: "rgb(152,205,210)"}}
      >
        <section className='topper center'>Уроци и консултации</section>
        {/* <br /> */}
        <Calendar />
        <br />
        {/* <br /> */}
        <section 
          className='topper center'
          style={{paddingTop: "12px", fontSize: "18px"}}
        >QUIZER'S©2023</section>
      </footer>
      <br />

      <Menu />

      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme="colored"
      />
    </div>
  </>
)}

export default Layout
