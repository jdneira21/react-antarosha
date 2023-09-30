import { Button } from '@material-tailwind/react'
import { useState } from 'react'
import DialogAddAlbum from '../components/DialogAddAlbum'

import useAlbum from '../store/useAlbum'
import PanelAlbums from '../components/PanelAlbums'





export default function PanelGalery() {
  const { openDialogAlbum } = useAlbum()

  return (
    <>
      <section className='relative block h-[140px]'>
        <div className='bg-profile-background absolute top-0 h-full w-full bg-[url("../../public/proceso-del-reciclaje.jpg")] bg-cover bg-center' />
        <div className='absolute top-0 h-full w-full bg-black/75 bg-cover bg-center' />
      </section>
      <section className='relative py-2 px-4'>
        <div className='container mx-auto flex'>
          <Button onClick={() => openDialogAlbum()} className='rounded-full mx-auto'>
            Nuevo Album
          </Button>
        </div>
      </section>

      <PanelAlbums />

      <DialogAddAlbum />

      {/* <Dialog open={open} handler={() => console.log('dsads')}>
        <DialogHeader>Its a simple dialog.</DialogHeader>
        <DialogBody divider>
          The key to more success is to have a lot of pillows. Put it this way,
          it took me twenty five years to get these plants, twenty five years of
          blood sweat and tears, and I&apos;m never giving up, I&apos;m just
          getting started. I&apos;m up to something. Fan luv.
        </DialogBody>
        <DialogFooter>
          <Button variant='text' color='red' onClick={handleOpen} className='mr-1'>
            <span>Cancel</span>
          </Button>
          <Button variant='gradient' color='green' onClick={handleOpen}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog> */}


    </>
  )
}