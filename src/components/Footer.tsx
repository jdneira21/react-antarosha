import { Typography } from '@material-tailwind/react';
import { NavLink } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="relative px-4 pt-8 pb-6 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-wrap pt-6 text-center lg:text-left">
          <div className="w-full px-4 lg:w-6/12">
            <h4 className="block antialiased tracking-normal font-open-sans text-2xl font-semibold leading-snug text-blue-gray-900 mb-4">Antarosha - Tu socio en comodidad y limpieza</h4>
            <p className="block antialiased font-open-sans text-base leading-relaxed font-normal text-blue-gray-500">Rodolfo.enrico@antarosha.com</p>
            <p className="block antialiased font-open-sans text-base leading-relaxed font-normal text-blue-gray-500">WhatsApp: +51 942 375 411</p>
            <p className="block antialiased font-open-sans text-base leading-relaxed font-normal text-blue-gray-500">Sede: Av. Andrés Avelino Cáceres 235, San Ramón, Perú</p>
            <p className="block antialiased font-open-sans text-base leading-relaxed font-normal text-blue-gray-500">Distrito Santo Domingo de los Olleros Huarochirí - Lima</p>

            <div className="mx-auto mt-6 mb-8 flex justify-center gap-2 md:mb-0 lg:justify-start">
              <a href="https://www.facebook.com/antaroshaperu" target="_blank" rel="noopener noreferrer">
                <button className="relative middle none font-open-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] text-xs bg-white text-blue-gray-900 shadow-md shadow-blue-gray-500/10 hover:shadow-lg hover:shadow-blue-gray-500/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none rounded-full" type="button">
                  <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                    <p className="block antialiased font-open-sans text-base font-light leading-relaxed text-blue-500">
                      <i className="fa-brands fa-facebook"></i>
                    </p>
                  </span>
                </button>
              </a>
              <a href="https://www.tiktok.com/@antarosha" target="_blank" rel="noopener noreferrer">
                <button className="relative middle none font-open-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] text-xs bg-white text-blue-gray-900 shadow-md shadow-blue-gray-500/10 hover:shadow-lg hover:shadow-blue-gray-500/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none rounded-full" type="button">
                  <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                    <p className="block antialiased font-open-sans text-base font-light leading-relaxed text-light-blue-500">
                      <i className="fa-brands fa-tiktok"></i>
                    </p>
                  </span>
                </button>
              </a>
              <a href="https://www.instagram.com/antarosha" target="_blank" rel="noopener noreferrer">
                <button className="relative middle none font-open-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] text-xs bg-white text-blue-gray-900 shadow-md shadow-blue-gray-500/10 hover:shadow-lg hover:shadow-blue-gray-500/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none rounded-full" type="button">
                  <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                    <p className="block antialiased font-open-sans text-base font-light leading-relaxed text-light-blue-500">
                      <i className="fa-brands fa-instagram"></i>
                    </p>
                  </span>
                </button>
              </a>
              <a href="https://www.linkedin.com/company/antarosha/" target="_blank" rel="noopener noreferrer">
                <button className="relative middle none font-open-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] text-xs bg-white text-blue-gray-900 shadow-md shadow-blue-gray-500/10 hover:shadow-lg hover:shadow-blue-gray-500/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none rounded-full" type="button">
                  <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                    <p className="block antialiased font-open-sans text-base font-light leading-relaxed text-light-blue-500">
                      <i className="fa-brands fa-linkedin"></i>
                    </p>
                  </span>
                </button>
              </a>
              <a href="https://www.instagram.com/antarosha" target="_blank" rel="noopener noreferrer">
                <button className="relative middle none font-open-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] text-xs bg-white text-blue-gray-900 shadow-md shadow-blue-gray-500/10 hover:shadow-lg hover:shadow-blue-gray-500/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none rounded-full" type="button">
                  <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                    <p className="block antialiased font-open-sans text-base font-light leading-relaxed text-light-blue-500">
                      <i className="fa-brands fa-youtube"></i>
                    </p>
                  </span>
                </button>
              </a>
              {/* <a href="https://www.facebook.com/antaroshaperu" target="_blank" rel="noopener noreferrer">
                <button className="relative middle none font-open-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] text-xs bg-white text-blue-gray-900 shadow-md shadow-blue-gray-500/10 hover:shadow-lg hover:shadow-blue-gray-500/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none rounded-full" type="button">
                  <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                    <p className="block antialiased font-open-sans text-base font-light leading-relaxed text-light-blue-500">
                      <i className="fa-brands fa-twitter"></i>
                    </p>
                  </span>
                </button>
              </a>
              <a href="https://www.facebook.com/antaroshaperu" target="_blank" rel="noopener noreferrer">
                <button className="relative middle none font-open-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] text-xs bg-white text-blue-gray-900 shadow-md shadow-blue-gray-500/10 hover:shadow-lg hover:shadow-blue-gray-500/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none rounded-full" type="button">
                  <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                    <p className="block antialiased font-open-sans text-base font-light leading-relaxed text-purple-500">
                      <i className="fa-brands fa-instagram"></i>
                    </p>
                  </span>
                </button>
              </a>
              <a href="https://www.facebook.com/antaroshaperu" target="_blank" rel="noopener noreferrer">
                <button className="relative middle none font-open-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] text-xs bg-white text-blue-gray-900 shadow-md shadow-blue-gray-500/10 hover:shadow-lg hover:shadow-blue-gray-500/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none rounded-full" type="button">
                  <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                    <p className="block antialiased font-open-sans text-base font-light leading-relaxed text-pink-500">
                      <i className="fa-brands fa-dribbble"></i>
                    </p>
                  </span>
                </button>
              </a>
              <a href="https://www.facebook.com/antaroshaperu" target="_blank" rel="noopener noreferrer">
                <button className="relative middle none font-open-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] text-xs bg-white text-blue-gray-900 shadow-md shadow-blue-gray-500/10 hover:shadow-lg hover:shadow-blue-gray-500/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none rounded-full" type="button">
                  <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                    <p className="block antialiased font-open-sans text-base font-light leading-relaxed text-red-500">
                      <i className="fa-brands fa-youtube"></i>
                    </p>
                  </span>
                </button>
              </a>
              <a href="https://www.facebook.com/antaroshaperu" target="_blank" rel="noopener noreferrer">
                <button className="relative middle none font-open-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] text-xs bg-white text-blue-gray-900 shadow-md shadow-blue-gray-500/10 hover:shadow-lg hover:shadow-blue-gray-500/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none rounded-full" type="button">
                  <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                    <p className="block antialiased font-open-sans text-base font-light leading-relaxed text-black">
                      <i className="fa-brands fa-github"></i>
                    </p>
                  </span>
                </button>
              </a> */}
            </div>
          </div>
          <div className="mx-auto mt-12 grid w-max grid-cols-2 gap-24 lg:mt-0">
            <div>
              <p className="antialiased font-open-sans text-sm leading-normal text-blue-gray-900 mb-2 block font-medium uppercase">Vinculos</p>
              <ul className="mt-3">
                <li>
                  <NavLink to='/servicios' className="antialiased font-open-sans text-sm leading-normal mb-2 block font-normal text-blue-gray-500 hover:text-blue-gray-700">
                    Servicios
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/galeria' className="antialiased font-open-sans text-sm leading-normal mb-2 block font-normal text-blue-gray-500 hover:text-blue-gray-700">
                    Galeria
                  </NavLink>
                </li>
                <li>
                <NavLink to='/operaciones' className="antialiased font-open-sans text-sm leading-normal mb-2 block font-normal text-blue-gray-500 hover:text-blue-gray-700">
                  Operaciones
                </NavLink>
                  
                </li>
                <li>
                <NavLink to='/conocenos' className="antialiased font-open-sans text-sm leading-normal mb-2 block font-normal text-blue-gray-500 hover:text-blue-gray-700">
                  Conócenos
                </NavLink>
                </li>

              </ul>
            </div>

            {/* <div>
              <p className="antialiased font-open-sans text-sm leading-normal text-blue-gray-900 mb-2 block font-medium uppercase">other resources</p>
              <ul className="mt-3">
                <li>
                  <a href="https://github.com/creativetimofficial/material-tailwind/blob/main/LICENSE.md?ref=mtk" target="_blank" rel="noreferrer" className="antialiased font-open-sans text-sm leading-normal mb-2 block font-normal text-blue-gray-500 hover:text-blue-gray-700">MIT License</a>
                </li>
                <li><a href="https://github.com/creativetimofficial/material-tailwind/blob/main/CONTRIBUTING.md?ref=mtk" target="_blank" rel="noreferrer" className="antialiased font-open-sans text-sm leading-normal mb-2 block font-normal text-blue-gray-500 hover:text-blue-gray-700">Contribute</a></li>
                <li><a href="https://github.com/creativetimofficial/material-tailwind/blob/main/CHANGELOG.md?ref=mtk" target="_blank" rel="noreferrer" className="antialiased font-open-sans text-sm leading-normal mb-2 block font-normal text-blue-gray-500 hover:text-blue-gray-700">Change Log</a></li>
                <li><a href="https://creative-tim.com/contact-us?ref=mtk" target="_blank" rel="noreferrer" className="antialiased font-open-sans text-sm leading-normal mb-2 block font-normal text-blue-gray-500 hover:text-blue-gray-700">Contact Us</a></li>
              </ul>
            </div> */}


          </div>
        </div>
        <hr className="my-6 border-gray-300" />
        <div className="flex flex-wrap items-center justify-center md:justify-between">
          <div className="mx-auto w-full px-4 text-center">
            <p className="block antialiased font-open-sans text-sm leading-normal font-normal text-blue-gray-500">JDesign
              {/* <a href="https://www.creative-tim.com?ref=mtk" target="_blank" className="text-blue-gray-500 transition-colors hover:text-blue-500">Creative Tim</a>. */}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}