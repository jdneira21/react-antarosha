import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logo2.png'
import { Typography, Navbar as MTNavbar, Button, IconButton, Collapse, MobileNav } from '@material-tailwind/react'
import { useEffect, useState } from 'react'
import { TbHome, TbRecycle, TbTruckDelivery, TbMessage2 } from 'react-icons/tb'
import { FaCircleXmark, FaBars } from 'react-icons/fa6'
import { FaFacebookSquare, FaTiktok, FaYoutube, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaRegImages } from 'react-icons/fa6'


const links = [
  {
    title: 'Inicio',
    to: '/',
    icon: <TbHome />
  },
  {
    title: 'Servicios',
    to: '/servicios',
    icon: <TbRecycle />
  },
  {
    title: 'Galería',
    to: '/galeria',
    icon: <FaRegImages />
  },
  {
    title: 'Operaciones',
    to: '/operaciones',
    icon: <TbTruckDelivery />
  },
  {
    title: 'Conócenos',
    to: '/conocenos',
    icon: <TbMessage2 />
  }
]

export default function Navbar() {
  const [openNav, setOpenNav] = useState(false)

  const navLinks = <ul className='ulNav'>
    {links.map(({ title, to, icon }, i) => (
      <Typography key={i} as='li' variant='small' color='inherit' className='capitalize'>
        <NavLink to={to} className='whitespace-nowrap'>
          {icon}
          {title}
        </NavLink>
      </Typography>
    ))}
  </ul>

  useEffect(() => window.addEventListener('resize', () => window.innerWidth >= 960 && setOpenNav(false)), [])

  return (
    <div className='container absolute left-2/4 z-10 mx-auto -translate-x-2/4 p-4'>

      <MTNavbar color='transparent' className='p-2'>
        <div className='container mx-auto flex items-center justify-around text-white'>
          <NavLink to='/'>
            <Typography className='mr-4 ml-2 cursor-pointer py-1.5 font-bold'>
              <img src={logo} className='w-60' />
            </Typography>
          </NavLink>
          <div className='hidden lg:block'>{navLinks}</div>
          <div className='hidden px-2 gap-2 lg:flex'>
            <a href='https://www.facebook.com/amandasantosnba' target='_blank'>
              <FaFacebookSquare />
            </a>
            <a href='https://www.tiktok.com/@antarosha' target='_blank'>
              <FaTiktok />
            </a>
            <a href='https://www.instagram.com/antarosha' target='_blank'>
              <FaInstagram />
            </a>
            <a href='https://www.linkedin.com/company/antarosha/   ' target='_blank'>
              <FaLinkedin />
            </a>
            <a href='https://www.facebook.com/amandasantosnba' target='_blank'>
              <FaYoutube />
            </a>
          </div>
          <IconButton variant='text' size='sm' color='white'
            className='ml-auto text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden'
            onClick={() => setOpenNav(!openNav)}>
            {openNav ? (
              <FaCircleXmark strokeWidth={2} className='h-6 w-6' />
            ) : (
              <FaBars strokeWidth={2} className='h-6 w-6' />
            )}
          </IconButton>

        </div>

        <Collapse open={openNav}>
          <div className='collapseNav'>
            {navLinks}
          </div>
        </Collapse>

      </MTNavbar>
    </div>
  )
}
