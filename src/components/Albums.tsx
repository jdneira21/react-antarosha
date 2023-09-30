import { useQuery } from '@apollo/client/react/hooks'
import { gql } from '@apollo/client'
import { Button, Card, CardBody, CardFooter, CardHeader, Spinner, Typography } from '@material-tailwind/react'
import { Link, NavLink } from 'react-router-dom'

const ALL_ALBUM = gql`
  query AllAlbum {
    allAlbum {
      id
      title_album
      description
      slug
      url_img
    }
  }
`

export default function Albums() {
  const { data, error, loading } = useQuery(ALL_ALBUM)
  console.log(data)
  return (
    <div className='container mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-6 p-4'>
      {loading ? <Spinner className='mx-auto col-span-full' /> : null}
      {error ? <p>Error: {error.message}</p> : null}

      {data?.allAlbum?.map((album: any) => (
        <Card key={album.id} className='max-w-[24rem] overflow-hidden'>
          <CardHeader floated={false} shadow={false} color='transparent' className='m-0 rounded-none'>
            <img src={`${import.meta.env.VITE_API_IP}:${import.meta.env.VITE_API_PORT}/${album.url_img}`} />
          </CardHeader>
          <CardBody>
            <Typography variant='h5' color='blue-gray'>
              {album.title_album}
            </Typography>
            <Typography variant='lead' color='gray' className='text-sm'>
              {album.description}
            </Typography>
          </CardBody>
          <CardFooter className='flex items-center justify-center !pt-0'>
            <NavLink to={album.slug}>
              <Button className='rounded-full' color='green'>Ver Galería</Button>
            </NavLink>
          </CardFooter>
        </Card>
      ))}

    </div>
  )
}