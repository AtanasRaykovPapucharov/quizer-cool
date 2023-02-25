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
      <meta name='description' content='School Quiz' />
      <link rel='icon' type='image/png' href='/icon.png' />
      <title>QUIZER'S COOL</title>
    </Head>
    
    <div className='wrapper'>
      <Header />

      <main className='main' onClick={() => dispatch(action(ActionType.IS_MENU_CLOSED, true))}>
        {children}
      </main>

      <br />
      <footer id="footer-global">
        {/* <Calendar /> */}
        {/* <br />
        <Contacts /> */}
      <section className='topper center'>
        {/* Учим и се забавляваме! */}
      </section>
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
