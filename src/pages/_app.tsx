import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import { Provider as ReduxProvider } from 'react-redux'
import store from '../redux/store'
import 'animate.css'
import 'react-toastify/dist/ReactToastify.css'
import 'react-confirm-alert/src/react-confirm-alert.css'
import '../sass/globals.scss'

function App({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ReduxProvider>
  )
}

export default App
