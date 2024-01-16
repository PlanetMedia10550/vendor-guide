import Footer from '@/components/Layouts/Front/Footer'
import Header from '@/components/Layouts/Front/Header'
import { Fragment} from 'react'
import { getCategories, getMagazines } from '@/app/lib/server-api';

export default async function AuthLayout({ children }) {
  const categories = await getCategories();
  const magazines = await getMagazines();
  
  

  return (
    <Fragment>
        <Header categories={categories} magazines={magazines} />
        <main className='sm:relative'>
          {children}
        </main>
        <Footer  />
    </Fragment>
  )
}
