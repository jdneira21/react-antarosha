import { Avatar, Button, Typography } from '@material-tailwind/react';

export default function PageServices() {
  return (
    <>
      <section className='relative block h-[140px]'>
        <div className='bg-profile-background absolute top-0 h-full w-full bg-[url("../../public/proceso-del-reciclaje.jpg")] bg-cover bg-center' />
        <div className='absolute top-0 h-full w-full bg-black/75 bg-cover bg-center' />
      </section>

      <section className='container mx-auto'>

        <div className='my-4 text-center'>
          <Typography variant='h1' color='blue-gray' className='font-open-sans text-4xl'>
            Nuestros Servicios
          </Typography>
        </div>

        <div className='mb-2 border-t border-blue-gray-50 py-2 text-center'>
          <div className='mb-2 flex items-center justify-center gap-2'>
            <Typography className='font-medium text-blue-gray-700'>
              DIPOSICIÓN FINAL DE RESIDUOS SÓLIDOS
            </Typography>
          </div>
          <div className='mt-2 flex flex-wrap justify-center'>
            <div className='flex w-full flex-col items-center px-4 lg:w-9/12'>
              <Typography className='mb-8 font-normal text-blue-gray-500 text-justify'>
                Contamos con rellenos autorizados para brindar servicios de disposición final de residuos peligrosos y no peligrosos, del ámbito de Gestión Municipal y No Municipal.
              </Typography>
            </div>
          </div>
        </div>

        <div className='mb-2 border-t border-blue-gray-50 py-2 text-center'>
          <div className='mb-2 flex items-center justify-center gap-2'>
            <Typography className='font-medium text-blue-gray-700'>
              MANEJO INTEGRAL DE RESIDUOS SÓLIDOS
            </Typography>
          </div>
          <div className='mt-2 flex flex-wrap justify-center'>
            <div className='flex w-full flex-col items-center px-4 lg:w-9/12'>
              <Typography className='mb-8 font-normal text-blue-gray-500 text-justify'>
                Con amplia capacidad logística y los permisos de EO-RS, brindamos soluciones integrales para el condicionamiento, recojo y transporte (terrestre y uvial) de residuos peligrosos y no peligrosos; incluyendo servicios de manejo interno de residuos en campamentos petroleros o mineros y recojo de residuos en zonas remotas.
              </Typography>
            </div>
          </div>
        </div>

        <div className='mb-2 border-t border-blue-gray-50 py-2 text-center'>
          <div className='mb-2 flex items-center justify-center gap-2'>
            <Typography className='font-medium text-blue-gray-700'>
              RESPUESTA A EMERGENCIA Y REMEDIACIÓN AMBIENTAL
            </Typography>
          </div>
          <div className='mt-2 flex flex-wrap justify-center'>
            <div className='flex w-full flex-col items-center px-4 lg:w-9/12'>
              <Typography className='mb-8 font-normal text-blue-gray-500 text-justify'>
                Soluciones integrales para la contención, primera respuesta, limpieza y remediación ambiental de derrames de hidrocarburos y materiales peligrosos. Dentro y fuera de las operaciones de nuestros clientes. Identificación y gestión de pasivos ambientales.
              </Typography>
            </div>
          </div>
        </div>

      </section>
    </>
  )
}