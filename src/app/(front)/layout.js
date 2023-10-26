import Footer from '@/components/Layouts/Front/Footer'
import Header from '@/components/Layouts/Front/Header'

export default function AuthLayout({ children }) {
    
  return (
    <>
        <Header />
        {children}
        <Footer/>
    </>
  )
}
