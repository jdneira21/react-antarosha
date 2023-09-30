import { Typography } from '@material-tailwind/react';

export default function PageOperations() {
  return (
    <>
      <section className='relative block h-[140px]'>
        <div className='bg-profile-background absolute top-0 h-full w-full bg-[url("../../public/proceso-del-reciclaje.jpg")] bg-cover bg-center' />
        <div className='absolute top-0 h-full w-full bg-black/75 bg-cover bg-center' />
      </section>

      <section className='container mx-auto'>

        <div className='my-4 text-center'>
          <Typography variant='h1' color='blue-gray' className='font-open-sans text-4xl'>
            Nuestras Operaciones
          </Typography>
        </div>

        <div className='mb-2 border-t border-blue-gray-50 py-2 text-center mx-6'>
          <div className='mt-2 flex flex-wrap justify-center'>
            <div className='flex w-full flex-col items-center px-4 lg:w-9/12'>

              <ul className='list-disc font-normal text-blue-gray-500 text-justify'>
                <li>Recojo de residuos para clientes de diversos sectores: petroleras, pesqueras, hidroeléctricas, construcción, establecimientos de salud y municipalidades.</li>
                <li>Transporte terrestre, fluvial y aéreo de residuos.</li>
                <li>Segregación en fuente y manejo interno de residuos en campamentos.</li>
                <li>Acondicionamiento de residuos.</li>
                <li>Contención de derrames de petróleo y primera respuesta a emergencias ambientales.</li>
                <li>Limpieza, remediación ambiental de emergencias y pasivos ambientales.</li>
                <li>Comercialización de residuos.</li>
                <li>Capacitación a nuestros clientes sobre Manejo de Residuos.</li>
              </ul>

            </div>
          </div>
        </div>


      </section>
    </>
  )
}