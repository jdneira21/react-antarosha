import { Typography } from '@material-tailwind/react';

export default function PageOperations() {
  return (
    <section className="relative bg-green-100/90 py-16 px-4">
      <div className="container mx-auto">
        <div className="relative mb-6 -mt-64 flex w-full min-w-0 flex-col break-words rounded-3xl bg-white shadow-xl shadow-gray-500/5">
          <div className="px-6">

            <div className="my-6 text-center">
              <Typography variant="h2" color="blue-gray">
                Nuestras Operaciones
              </Typography>
            </div>

            <div className="mb-2 border-t border-blue-gray-50 py-2 text-center">
              <div className="mt-2 flex flex-wrap justify-center">
                <div className="flex w-full flex-col items-center px-4 lg:w-9/12">
                  <Typography className="mb-8 font-normal text-blue-gray-500 text-justify">

                    <ul className="list-disc">
                      <li>Recojo de residuos para clientes de diversos sectores: petroleras, pesqueras, hidroeléctricas, construcción, establecimientos de salud y municipalidades.</li>
                      <li>Transporte terrestre, fluvial y aéreo de residuos.</li>
                      <li>Segregación en fuente y manejo interno de residuos en campamentos.</li>
                      <li>Acondicionamiento de residuos.</li>
                      <li>Contención de derrames de petróleo y primera respuesta a emergencias ambientales.</li>
                      <li>Limpieza, remediación ambiental de emergencias y pasivos ambientales.</li>
                      <li>Comercialización de residuos.</li>
                      <li>Capacitación a nuestros clientes sobre Manejo de Residuos.</li>
                    </ul>

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