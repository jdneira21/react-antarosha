import { Typography } from '@material-tailwind/react';

export default function PageAboutUs() {
  return (
    <>
      <section className="relative block h-[50vh]">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('../../public/proceso-del-reciclaje.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
      </section>

      <section className="relative bg-green-100/90 py-16 px-4">
        <div className="container mx-auto">
          <div className="relative mb-6 -mt-64 flex w-full min-w-0 flex-col break-words rounded-3xl bg-white shadow-xl shadow-gray-500/20">
            <div className="px-6">

              <div className="my-6 text-center">
                <Typography variant="h2" color="blue-gray">
                  Quienes Somos
                </Typography>
              </div>

              <div className="mb-2 border-t border-blue-gray-50 py-2 text-center">
                <div className="mt-2 flex flex-wrap justify-center">
                  <div className="flex w-full flex-col items-center px-4 lg:w-9/12">
                    <Typography className="mb-8 font-normal text-blue-gray-500 text-justify">
                      Somos una empresa especializada en el manejo integral de residuos sólidos, brindando a nuestros clientes soluciones integrales en el manejo interno, acondicionamiento, transporte, tratamiento, destrucción y disposición final de sus residuos peligrosos y no peligrosos.
                    </Typography>
                  </div>
                </div>
              </div>

              <div className="mb-2 border-t border-blue-gray-50 py-2 text-center">
                <div className="mb-2 flex items-center justify-center gap-2">
                  <Typography className="text-2xl font-normal text-blue-gray-700">
                    Misión
                  </Typography>
                </div>
                <div className="mt-2 flex flex-wrap justify-center">
                  <div className="flex w-full flex-col items-center px-4 lg:w-9/12">
                    <Typography className="mb-8 font-normal text-blue-gray-500 text-justify">
                      Brindar soluciones ambientales a nuestros clientes, apoyados en un equipo humano altamente calificado y comprometido con la satisfacción de nuestros clientes.
                    </Typography>
                  </div>
                </div>
              </div>

              <div className="mb-2 border-t border-blue-gray-50 py-2 text-center">
                <div className="mb-2 flex items-center justify-center gap-2">
                  <Typography className="text-2xl font-normal text-blue-gray-700">
                    Visión
                  </Typography>
                </div>
                <div className="mt-2 flex flex-wrap justify-center">
                  <div className="flex w-full flex-col items-center px-4 lg:w-9/12">
                    <Typography className="mb-8 font-normal text-blue-gray-500 text-justify">
                      Desarrollarnos como una empresa líder en la gestión de residuos, en constante crecimiento, mejora de sus procesos, reconocida por la calidad de sus servicios y teniendo como prioridad el bienestar de nuestros colaboradores.
                    </Typography>
                  </div>
                </div>
              </div>

              <div className="mb-2 border-t border-blue-gray-50 py-2 text-center">
                <div className="mb-2 flex items-center justify-center gap-2">
                  <Typography className="text-2xl font-normal text-blue-gray-700">
                    Valores
                  </Typography>
                </div>
                <div className="mt-2 flex flex-wrap justify-center">
                  <div className="flex w-full flex-col items-center px-4 lg:w-9/12">
                    <Typography className="mb-8 font-normal text-blue-gray-500 text-justify">
                      Trabajo en equipo | Sostenibilidad | Responsabilidad social Alianzas Estratégicas | Integridad | Compromiso Mejora Continua | Satisfacción del cliente | Estabilidad Financiera.
                    </Typography>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}