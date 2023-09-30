import { Input, Button, Alert } from '@material-tailwind/react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

type FormValues = {
  user: string
  password: string
}

export default function Panel() {

  const navigate = useNavigate()

  const { formState: { errors }, register, handleSubmit } = useForm<FormValues>()
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    navigate('/panel-galeria')
  }

  return (
    <>
      <section className='relative block h-[22vh]'>
        <div className='bg-profile-background absolute top-0 h-full w-full bg-[url("../../public/proceso-del-reciclaje.jpg")] bg-cover bg-center' />
        <div className='absolute top-0 h-full w-full bg-black/75 bg-cover bg-center' />
      </section>

      <div className='grid place-items-center h-[40vh]'>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-2'>
          {errors.user && <Alert className='!py-1 !text-sm' color='red'>{errors.user?.message}</Alert>}
          {errors.password && <Alert className='!py-1 !text-sm' color='red'>{errors.password?.message}</Alert>}
          <Input {...register('user', { required: 'Usuario requerido' })} label='Usuario' autoFocus crossOrigin={undefined} />
          <Input {...register('password', { required: 'Contraseña requerida' })} label='Contraseña' crossOrigin={undefined} />
          <Button type='submit'>Conectar</Button>
        </form>
      </div>
    </>
  )
}