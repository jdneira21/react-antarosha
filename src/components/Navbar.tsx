import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logo2.png'
import { Typography, Navbar as MTNavbar, Button, IconButton, Collapse } from '@material-tailwind/react'
import { useState } from 'react'
import { TbHome, TbRecycle, TbTruckDelivery, TbMessage2 } from 'react-icons/tb'
import { FaCircleXmark, FaBars } from 'react-icons/fa6'
import { FaFacebookSquare } from 'react-icons/fa'

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
    title: 'Operaciones',
    to: '/operaciones',
    icon: <TbTruckDelivery />
  },
  {
    title: 'Quienes Somos',
    to: '/quienes-somos',
    icon: <TbMessage2 />
  }
]

export default function Navbar() {

  const [openNav, setOpenNav] = useState(false)


  const navLinks = <ul className='ulNav'>
    {links.map(({ title, to, icon }, i) => (
      <Typography key={i} as='li' variant='small' color='inherit' className='capitalize'>
        <NavLink to={to}>
          {icon}
          {title}
        </NavLink>


      </Typography>
    ))}
  </ul>


  return (
    <MTNavbar color='transparent' className='p-3'>
      <div className='container mx-auto flex items-center justify-around text-white'>
        <NavLink to='/'>
          <Typography className='mr-4 ml-2 cursor-pointer py-1.5 font-bold'>
            <img src={logo} className='h-[100px]' />
          </Typography>
        </NavLink>
        <div className='hidden lg:block'>{navLinks}</div>
        <div className='hidden gap-2 lg:flex'>
          <a href='https://www.facebook.com/amandasantosnba' target='_blank'>
          <FaFacebookSquare />
            {/* <Button variant='text' size='sm' color='white' fullWidth>
              
            </Button> */}
          </a>
        </div>
        <IconButton
          variant='text'
          size='sm'
          color='white'
          className='ml-auto text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden'
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <FaCircleXmark strokeWidth={2} className='h-6 w-6' />
          ) : (
            <FaBars strokeWidth={2} className='h-6 w-6' />
          )}
        </IconButton>

      </div>

      {/* <Collapse className='rounded-xl bg-white px-4 pt-2 pb-4 text-blue-gray-900'
        open={!openNav}
      >
        <div className='container mx-auto'>
          {navLinks}
          <a
            href='https://www.material-tailwind.com/blocks/react?ref=mtkr'
            target='_blank'
            className='mb-2 block'
          >
            <Button variant='text' size='sm' fullWidth>
              pro version
            </Button>
          </a>
        </div>
      </Collapse> */}

    </MTNavbar>
  )
}