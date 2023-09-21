import { Button, Carousel, Typography } from '@material-tailwind/react';
import { RiRecycleFill } from 'react-icons/ri'
import logo from '../assets/logo.png'

export default function PageHome() {
  return (
    <>
      <Carousel>
        <div className="relative h-[540px] w-full">
          <img
            src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=940&q=50"
            alt="image 2"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
            <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                Texto
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                Mas texto texto texto texto texto texto texto texto texto texto texto texto texto texto 
              </Typography>
              <div className="flex gap-2">
                <Button size="lg" color="white">
                  Boton
                </Button>
                <Button size="lg" color="white" variant="text">
                  Otro Boton
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-[540px] w-full">
          <img
            src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=940&q=50"
            alt="image 2"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
            <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                Texto
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                Mas texto texto texto texto texto texto texto texto texto texto texto texto texto texto 
              </Typography>
              <div className="flex gap-2">
                <Button size="lg" color="white">
                  Boton
                </Button>
                <Button size="lg" color="white" variant="text">
                  Otro Boton
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Carousel>

      <section className='grid grid-cols-5'>
        <div className='bg-white py-2 px-6 col-span-full lg:col-span-3 md:col-span-3 sm:col-span-full'>
          <Typography className='pt-6 text-[2.2rem] font-open-sans font-bold text-blue-900'>
            Transformamos desafíos ambientales en soluciones sostenibles
          </Typography>
          <Typography className='py-2 text-base font-open-sans text-gray-600'>
            La gama de servicios que ofrecemos nos permite garantizar a nuestros clientes la trazabilidad de sus residuos peligrosos, desde la recolección, valorización, transporte, tratamiento, disposición final y entrega del certificado que comprueba una adecuada gestión del residuo. Contamos con las autorizaciones legales y certificaciones necesarias para cada uno de nuestros procesos.
          </Typography>
          <Button className='rounded-full my-6' color='green'>Conócenos</Button>
        </div>

        <div className='py-2 px-6 col-span-full lg:col-span-2 md:col-span-2 sm:col-span-full bg-center bg-no-repeat bg-cover bg-[url("../../public/siembra-planta.jpg")]'>
          <Typography className='text-[1.8rem] font-open-sans font-bold text-white'>
            Aportamos sostenibilidad a diferentes industrias con soluciones a la medida
          </Typography>
          <Typography className='text-base font-open-sans text-white'>
            Participamos como socios de nuestros clientes sumando a la sostenibilidad de su gestión empresarial, en diversas industrias del país como: minería, hidrocarburos, construcción, hospitales y clínicas, gobierno, petroquímica, agroindustria, pesquera, entre otros.
          </Typography>
          <Button className='rounded-full my-6' color='green'>Nuestros Servicios</Button>
        </div>
      </section>


      <section className='bg-black py-16 bg-[url("https://sechegrouppe.dagobert-vt-preprod-seche-lamp01.dcsrv.eu/wp-content/uploads/2018/10/counter-bg.v2.jpg")]'>

        <Typography className='pb-10 text-2xl font-bold font-open-sans text-white text-center'>
          NUESTROS NÚMEROS
        </Typography>

        <div className='container grid grid-cols-4'>

          <div className='flex flex-col'>
            <Typography className='py-2 text-3xl font-bold text-orange-400 text-center'>
              +400
            </Typography>
            <Typography className='text-xl font-bold text-gray-50 text-center'>
              Clientes
            </Typography>
            <Typography className='text-basename font-bold text-white text-center'>
              de diversas industrias
            </Typography>
          </div>

          <div className='flex flex-col'>
            <Typography className='py-2 text-3xl font-bold text-orange-400 text-center'>
              +400
            </Typography>
            <Typography className='text-xl font-bold text-gray-50 text-center'>
              Clientes
            </Typography>
            <Typography className='text-basename font-bold text-white text-center'>
              de diversas industrias
            </Typography>
          </div>

          <div className='flex flex-col'>
            <Typography className='py-2 text-3xl font-bold text-orange-400 text-center'>
              +400
            </Typography>
            <Typography className='text-xl font-bold text-gray-50 text-center'>
              Clientes
            </Typography>
            <Typography className='text-basename font-bold text-white text-center'>
              de diversas industrias
            </Typography>
          </div>

          <div className='flex flex-col'>
            <Typography className='py-2 text-3xl font-bold text-orange-400 text-center'>
              +400
            </Typography>
            <Typography className='text-xl font-bold text-gray-50 text-center'>
              Clientes
            </Typography>
            <Typography className='text-basename font-bold text-white text-center'>
              de diversas industrias
            </Typography>
          </div>


        </div>
      </section>

      <section className='py-16 bg-white'>
        <Typography className='pb-10 text-2xl font-bold font-open-sans text-blue-900 text-center'>
          NUESTROS SERVICIOS
        </Typography>

        <div className='container grid grid-cols-2 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 p-4'>

          {
            [0, 1, 2, 3, 4, 5].map((r, i) => (
              <div key={r} className='flex flex-col'>
                <div className='flex items-center'>
                  <RiRecycleFill className='text-green-300' fontSize={40} />
                  <Typography className='text-xl pl-4 font-bold font-open-sans text-blue-900 text-center'>
                    Total Waste Management
                  </Typography>
                </div>
                <Typography className='text-base font-open-sans py-2 text-gray-500'>
                  Brindamos el Manejo Integral de Residuos (TWM) dentro de las instalaciones de nuestros clientes, poniendo a disposición los recursos humanos, insumos y equipos necesarios.
                </Typography>
                <div className='py-4'>
                  <Button className='rounded-full' color='green' variant="outlined">Ver Servicio</Button>
                </div>
              </div>
            ))
          }





        </div>

      </section>

      <hr className='border-2' />


    </>
  )
}