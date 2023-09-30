import Albums from '../components/Albums';

export default function PageGallery() {
  return (
    <>
      <section className='relative block h-[140px]'>
        <div className='bg-profile-background absolute top-0 h-full w-full bg-[url("../../public/proceso-del-reciclaje.jpg")] bg-cover bg-center' />
        <div className='absolute top-0 h-full w-full bg-black/75 bg-cover bg-center' />
      </section>

      <section className='relative'>
        <Albums />
      </section>

    </>
  )
}