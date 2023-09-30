import { Card, CardBody, CardFooter, Typography } from '@material-tailwind/react';

export default function PageAboutUs() {
  return (
    <>
      <section className='relative block h-[140px]'>
        <div className='bg-profile-background absolute top-0 h-full w-full bg-[url("../../public/proceso-del-reciclaje.jpg")] bg-cover bg-center' />
        <div className='absolute top-0 h-full w-full bg-black/75 bg-cover bg-center' />
      </section>

      <section className='container mx-auto'>

        <div className='my-4 text-center'>
          <Typography variant='h1' color='blue-gray' className='font-open-sans text-4xl'>
            Conócenos
          </Typography>
        </div>

        <div className='mb-2 border-t border-blue-gray-50 py-2'>
          <div className='mt-2 flex flex-wrap justify-center'>
            <div className='flex w-full flex-col items-center px-4 lg:w-9/12'>
              <Typography className='font-normal font-open-sans text-blue-gray-500'>
                Somos un grupo de origen peruano especializado en la gestión integral de residuos sólidos, a pesar de los pocos años operando en la Selva Central del Perú, nos hemos posicionado como la única compañía en este sector con la capacidad y recursos propios para ofrecer un servicio integral, de principio a fin, para la gestión de residuos peligrosos, no peligrosos, de establecimientos de salud y aparatos electrónicos.
              </Typography>

              <Typography className='mt-4 font-normal font-open-sans text-blue-gray-500'>
                Realizamos la recolección, valoración y transporte con una flota propia de vehículos, distintos tipos de tratamiento con la tecnología más avanzada. Controlar todas las etapas de la gestión nos permite garantizar la trazabilidad del residuo de cualquier industria nacional.
              </Typography>

            </div>
          </div>
        </div>

        <div className='mb-2 border-t border-blue-gray-50 py-2 text-center'>
          <div className='mb-2 flex flex-col justify-center gap-2'>
            <Typography className='text-xl font-open-sans font-bold text-blue-gray-800'>
              TRANSFORMAMOS DESAFÍOS AMBIENTALES EN SOLUCIONES SOSTENIBLES
            </Typography>
            <div className='container flex justify-center'>
              <img src='../5.jpg' className='rounded border-2 border-white shadow-lg' />
            </div>
          </div>

          <div className='mt-2 flex flex-wrap justify-center'>
            <div className='flex w-full flex-col items-center px-4 lg:w-9/12'>
              <Typography className='mb-8 font-normal text-blue-gray-500 text-justify'>
                Ofrecemos un servicio integral que parte de la recolección hasta el tratamiento y la disposición final de residuos peligrosos. Seleccionamos los distintos tipos de tratamiento luego de analizarlos en nuestro laboratorio de última tecnología asegurando así, el mínimo impacto en el medioambiente.
              </Typography>
            </div>
          </div>
        </div>

        <div className='mb-2 border-t border-blue-gray-50 py-2 text-center'>
          <div className='mb-2 flex flex-col justify-center gap-2'>
            <Typography className='text-xl font-open-sans font-bold text-blue-gray-800'>
              NUESTRA VISIÓN
            </Typography>
            <div className='container flex justify-center'>
              <img src='../6.jpg' className='rounded border-2 border-white shadow-lg' />
            </div>
          </div>

          <div className='mt-2 flex flex-wrap justify-center'>
            <div className='flex w-full flex-col items-center px-4 lg:w-9/12'>
              <Typography className='mb-8 font-normal text-blue-gray-500 text-justify'>
                Ser protagonistas de la transformación del país hacia una economía sostenible.
              </Typography>
            </div>
          </div>
        </div>


        <div className='mb-2 border-t border-blue-gray-50 py-2 text-center'>
          <div className='mb-2 flex flex-col justify-center gap-2'>
            <Typography className='text-xl font-open-sans font-bold text-blue-gray-800'>
              VISIÓN
            </Typography>
            <div className='container flex justify-center'>
              <img src='../7.jpg' className='rounded border-2 border-white shadow-lg' />
            </div>
          </div>

          <div className='mt-2 flex flex-wrap justify-center'>
            <div className='flex w-full flex-col items-center px-4 lg:w-9/12'>
              <Typography className='mb-8 font-normal text-blue-gray-500 text-justify'>
                Desarrollarnos como una empresa líder en la gestión de residuos, en constante crecimiento, mejora de sus procesos, reconocida por la calidad de sus servicios y teniendo como prioridad el bienestar de nuestros colaboradores.
              </Typography>
            </div>
          </div>
        </div>

        <div className='mb-2 border-t border-blue-gray-50 py-2 text-center'>
          <div className='mb-2 flex flex-col justify-center gap-2'>
            <Typography className='text-xl font-open-sans font-bold text-blue-gray-800'>
              SEGURIDAD
            </Typography>
            <div className='container flex justify-center'>
              <img src='../8.jpg' className='rounded border-2 border-white shadow-lg' />
            </div>
          </div>

          <div className='mt-2 flex flex-wrap justify-center'>
            <div className='flex w-full flex-col items-center px-4 lg:w-9/12'>
              <Typography className='mb-8 font-normal text-blue-gray-500 text-justify'>
                Como principio guía en todas nuestras acciones, respetando estándares internacionales para cuidar de nosotros mismos y nuestros compañeros.
              </Typography>
            </div>
          </div>
        </div>


        <div className='mb-2 border-t border-blue-gray-50 py-2 text-center'>
          <div className='mb-2 flex flex-col justify-center gap-2'>
            <Typography className='text-xl font-open-sans font-bold text-blue-gray-800'>
              SOSTENIBILIDAD
            </Typography>
            <div className='container flex justify-center'>
              <img src='../9.jpg' className='rounded border-2 border-white shadow-lg' />
            </div>
          </div>

          <div className='mt-2 flex flex-wrap justify-center'>
            <div className='flex w-full flex-col items-center px-4 lg:w-9/12'>
              <Typography className='mb-8 font-normal text-blue-gray-500 text-justify'>
                Ejercemos una conciencia responsable por los impactos económicos, sociales y ambientales que generamos como individuos y por nuestra actividad empresarial.
              </Typography>
            </div>
          </div>
        </div>


        <div className='mb-2 border-t border-blue-gray-50 py-2 text-center'>
          <div className='mb-2 flex flex-col justify-center gap-2'>
            <Typography className='text-xl font-open-sans font-bold text-blue-gray-800'>
              INTEGRIDAD
            </Typography>
            <div className='container flex justify-center'>
              <img src='../10.jpg' className='rounded border-2 border-white shadow-lg' />
            </div>
          </div>

          <div className='mt-2 flex flex-wrap justify-center'>
            <div className='flex w-full flex-col items-center px-4 lg:w-9/12'>
              <Typography className='mb-8 font-normal text-blue-gray-500 text-justify'>
                Actuamos con honestidad, respeto y transparencia, en coherencia con nuestras convicciones.
              </Typography>
            </div>
          </div>
        </div>

        <div className='mb-2 border-t border-blue-gray-50 py-2 text-center'>
          <div className='mb-2 flex flex-col justify-center gap-2'>
            <Typography className='text-xl font-open-sans font-bold text-blue-gray-800'>
              CALIDAD
            </Typography>
            <div className='container flex justify-center'>
              <img src='../11.jpg' className='rounded border-2 border-white shadow-lg' />
            </div>
          </div>

          <div className='mt-2 flex flex-wrap justify-center'>
            <div className='flex w-full flex-col items-center px-4 lg:w-9/12'>
              <Typography className='mb-8 font-normal text-blue-gray-500 text-justify'>
                Nos esforzamos por un trabajo bien hecho, superando las expectativas y colocando la valla al nivel de los estándares globales más altos.
              </Typography>
            </div>
          </div>
        </div>

        <div className='mb-2 border-t border-blue-gray-50 py-2 text-center'>
          <div className='mb-2 flex flex-col justify-center gap-2'>
            <Typography className='text-xl font-open-sans font-bold text-blue-gray-800'>
              INNOVACIÓN
            </Typography>
            <div className='container flex justify-center'>
              <img src='../12.jpg' className='rounded border-2 border-white shadow-lg' />
            </div>
          </div>

          <div className='mt-2 flex flex-wrap justify-center'>
            <div className='flex w-full flex-col items-center px-4 lg:w-9/12'>
              <Typography className='mb-8 font-normal text-blue-gray-500 text-justify'>
                Buscando permanentemente la tecnología más avanzada para brindar soluciones óptimas.
              </Typography>
            </div>
          </div>
        </div>

      </section>

    </>
  )
}