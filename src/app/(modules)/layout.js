import '@/app/globals.css'
import Navbar from './Navbar';

export default function ModuleLayout({ children }) {
    
  return (
    <Navbar>{children}</Navbar>
  )
}
