import { UserProvider } from '@/context/UserContext'
import './globals.css'
import "primereact/resources/themes/lara-light-indigo/theme.css";
import localFont  from 'next/font/local'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
// import lato from '@/assets/fonts/local/fonts/Lato-Black.ttf'


const myFont = localFont({
  src: [
    {
      path: '../assets/lato/Lato-Black.ttf',
      style: 'normal',
    },
    {
      path: '../assets/lato/Lato-Bold.ttf',
      style: 'normal',
    },
    {
      path: '../assets/lato/Lato-Light.ttf',
      style: 'normal',
    },
    {
      path: '../assets/lato/Lato-Regular.ttf',
      style: 'normal',
    },

  ],
})


export const metadata = {
  title: 'Vendor Guide | Home'
}
// font-lato
export default function RootLayout({ children }) {
  return (
      <UserProvider>
      <html lang="en" style={myFont.style} >
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests"/>
        <link href='https://fonts.googleapis.com/css?family=Lato:400,700' rel='stylesheet' type='text/css' precedence="default" />
        <body >
          {children}
          <ToastContainer />
        </body>
      </html>
      </UserProvider>
  )
}
