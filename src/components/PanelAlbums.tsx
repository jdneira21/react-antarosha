import { useQuery } from '@apollo/client/react/hooks'
import { gql } from '@apollo/client'
import { Button, Card, CardBody, CardFooter, CardHeader, Spinner, Typography } from '@material-tailwind/react'
import { Link, NavLink } from 'react-router-dom'
import { FaPlus, FaImages } from 'react-icons/fa'
import useImage from '../store/useImage'
import DialogAddImagen from './DialogAddImagen'
import useAlbum from '../store/useAlbum'
import { useEffect } from 'react'

const ALL_ALBUM = gql`
  query AllAlbum {
    allAlbum {
      id
      title_album
      description
      slug
    }
  }
`

export default function PanelAlbums() {
  const { data, error, loading, refetch } = useQuery(ALL_ALBUM)
  const { openDialogImagen } = useImage()

  const { stateDialogAlbum } = useAlbum()

  useEffect(() => {
    if(!stateDialogAlbum) {
      refetch()
    }
  }, [stateDialogAlbum])


  return (
    <>
      <div className='container mx-auto grid grid-cols-5 gap-6 p-4'>
        {loading ? <Spinner className='mx-auto col-span-full' /> : null}
        {error ? <p>Error: {error.message}</p> : null}

        {data?.allAlbum?.map((album: any) => (
          <Card key={album.id} className='max-w-[24rem] overflow-hidden rounded-none'>
            <CardHeader floated={false} shadow={false} color='transparent' className='m-0 rounded-none'>
              <img
                src={`${import.meta.env.VITE_API_IP}:${import.meta.env.VITE_API_PORT}/${album.slug}.jpg`}
              />
            </CardHeader>
            <CardBody className='p-2'>
              <Typography variant='h5' color='blue-gray'>
                {album.title_album}
              </Typography>
              <Typography variant='lead' color='gray' className='text-sm'>
                {album.description}
              </Typography>
            </CardBody>
            <CardFooter className='flex flex-col gap-2 items-center !pt-0'>
              <Button onClick={() => openDialogImagen(album.id)} className='flex items-center gap-2'> <FaPlus /> Agregar Imagen</Button>
              {/* <Button className='flex items-center gap-2'> <FaImages /> Ver Imagenes</Button> */}
            </CardFooter>
          </Card>
        ))}

      </div>

      <DialogAddImagen />
    </>
  )
}