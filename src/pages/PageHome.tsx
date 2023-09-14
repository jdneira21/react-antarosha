import { Typography } from '@material-tailwind/react';
import logo from '../assets/logo.png'

export default function PageHome() {
  return (
    <section className="relative bg-green-100/90 py-16 px-4">
    <div className="container mx-auto">
    <div className="relative mb-6 -mt-64 flex w-full min-w-0 flex-col break-words rounded-3xl bg-white shadow-xl shadow-gray-500/20">
        <div className="px-6">

          <div className="mb-2 border-t border-blue-gray-50 py-2 text-center">
            <div className="mt-2 flex flex-wrap justify-center">
              <div className="flex w-full flex-col items-center px-4 lg:w-9/12">
                <img src={logo} />
                <Typography className="mb-8 py-4 text-green-800 font-open-sans text-xl font-bold text-justify">
                  "Soluciones Integrales en MANEJO DE RESIDUOS, y remediacion ambiental"
                </Typography>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </section>
  )
}