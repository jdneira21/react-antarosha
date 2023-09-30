import { useQuery } from '@apollo/client/react/hooks'
import { gql } from '@apollo/client'
import { useParams } from 'react-router-dom'
import { Spinner, Typography } from '@material-tailwind/react'

const SHOW_IMAGES = gql`
  query ShowImages($slug: String) {
    showImages(slug: $slug) {
      url_img
      description
    }
  }
`

export default function Images() {
  const { slug } = useParams()

  const { data, loading, error } = useQuery(SHOW_IMAGES, {
    variables: {
      slug
    }
  })

  console.log(data)
  console.log(loading)
  console.log(error)

  return (
    <div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 p-4'>
      {loading ? <Spinner className='mx-auto col-span-full' /> : null}
      {error ? <p>Error: {error.message}</p> : null}

      {data?.showImages?.map((imagen: any, i: number) => (
        <figure key={i} className='relative w-full'>
          <img
            className='h-full w-full rounded-xl object-cover object-center'
            src={`${import.meta.env.VITE_API_IP}:${import.meta.env.VITE_API_PORT}/${imagen.url_img}`}
          />
          <figcaption className='absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-md bg-white/40 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm'>
            <Typography variant='lead' color='blue-gray' className='text-lg font-open-sans text-black font-bold'>
              {imagen.description}
            </Typography>
          </figcaption>
        </figure>
      ))}
    </div>
  )
}