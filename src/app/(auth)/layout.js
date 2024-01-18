import NewRegionalHeader  from '@/components/Layouts/Front/NewRegionalHeader'
import Footer from '@/components/Layouts/Front/Footer'
import Header from '@/components/Layouts/Front/Header'
import { getCategories, getMagazines } from '@/app/lib/server-api';

export default async function AuthLayout({ children }) {
  const categories = await getCategories();
  const magazines = await getMagazines();

  return (
    <>
        <Header categories={categories} magazines={magazines} />
        <section className='sm:relative md:pt-24 z-40'>
          {children}
        </section>
        <Footer/>
    </>
  )
}
