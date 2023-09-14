import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
export default function RootLayout() {
  return (
    <>
      <div className='container absolute left-2/4 z-10 mx-auto -translate-x-2/4 p-4'>
        <Navbar />
      </div>
      <section className="relative block h-[50vh]">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('proceso-del-reciclaje.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
      </section>
      <Outlet />
      <Footer />
    </>
  )
}