import { UserProvider } from '@/context/UserContext'
import './globals.css'
import "primereact/resources/themes/lara-light-indigo/theme.css";
import localFont  from 'next/font/local'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
// import lato from '@/assets/fonts/local/fonts/Lato-Black.ttf'
import Script from "next/script";

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
  title: {
    template: '%s | Vendor Guide',
    default: 'Vendor Guide'
  },
}

export default function RootLayout({ children,props }) {

  return (
      <UserProvider>
      <html lang="en" >
        {/* style={myFont.style} */}
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests"/>
        <Script type="application/ld+json">
          {`
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Vendor Guide USA",
            "alternateName": "Vendor Guide",
            "url": "/",
            "logo": "${process.env.BASE_LARAVEL_URL}/image/1700727849.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "952-460-1916",
              "contactType": "customer service",
              "areaServed": "US",
              "availableLanguage": "en"
            },
            "sameAs": [
              "https://www.facebook.com/vendorguideusa/",
              "https://twitter.com/vendorguide1",
              "https://www.linkedin.com/company/mf-vendor-guide/"
            ]
          `}
        </Script>
        <body className={myFont.className}>
          {children}
          <ToastContainer />
        </body>
      </html>
      </UserProvider>
  )
}
