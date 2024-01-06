import Footer from '@/components/Layouts/Front/Footer'
import Header from '@/components/Layouts/Front/Header'

export default function AuthLayout({ children }) {
    
  return (
    <>
        <Header />
        <section className='sm:relative pt-24 z-40'>
          {children}
        </section>
        <Footer/>
    </>
  )
}
