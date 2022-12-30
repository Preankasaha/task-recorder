import Layout from '../Components/Layout/Layout'
import '../styles/globals.css'
import AuthProvider from './authProvider'
import { Toaster } from 'react-hot-toast'

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
        <Toaster />
      </Layout>
    </AuthProvider>
  )
}
