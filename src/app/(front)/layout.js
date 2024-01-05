import Footer from '@/components/Layouts/Front/Footer'
import Header from '@/components/Layouts/Front/Header'

export default function AuthLayout({ children }) {
    
  return (
    <>
        <Header />
        <div className='sm:relative pt-24 z-40'>
          {children}
        </div>
        <Footer/>
    </>
  )
}
