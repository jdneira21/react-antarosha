import { Dialog, DialogHeader, DialogBody, DialogFooter, Button, Input, Textarea, Alert } from '@material-tailwind/react'
import useAlbum from '../store/useAlbum'

import { useForm, SubmitHandler } from 'react-hook-form'

import ImageCrop from './ImageCrop'
import useCrop from '../store/useCrop'
import { gql } from '@apollo/client'
import { useMutation } from '@apollo/client/react/hooks'


interface FormValues {
  title_album: string
  description: string
  base64_img: string
}

type IVariables = {
  input: FormValues
}

const ADD_ALBUM = gql`
  mutation AddAlbum($input: InputAlbum) {
    addAlbum(input: $input)
  }
`

export default function DialogAddAlbum() {
  const { stateDialogAlbum, openDialogAlbum, resetDialogAlbum } = useAlbum()
  const { imageCrop, resetImageCrop } = useCrop()
  
  const { formState: { errors }, register, reset, clearErrors, setError, setValue, handleSubmit } = useForm<FormValues>()
  
  const [addAlbum] = useMutation<string, IVariables>(ADD_ALBUM)

  const onSubmit: SubmitHandler<FormValues> = (data) => {

    
    if(!imageCrop.length) return

    addAlbum({
      variables: {
        input: {
          ...data,
          base64_img: imageCrop
        }
      },
      onCompleted: (data) => {
        console.log(data)
        closeDialog()
      },
      onError: ({ message }) => {
        clearError(message)
        console.log(data)
      }
    })

  }

  const closeDialog = () => {
    resetDialogAlbum()
    resetImageCrop()
    reset()
  }

  const clearError = (message: string) => {
    setError('base64_img', { message })
    setTimeout(() => {
      clearErrors()
    }, 1500)
  }

  return (
    <Dialog open={stateDialogAlbum} handler={() => null}>
      <DialogHeader>Nuevo Album</DialogHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogBody divider className='flex gap-2'>

          <ImageCrop />

          <div className='grow flex flex-col gap-2'>

            <Input {...register('title_album', { required: 'requerido' })} label='Titulo Album' autoFocus crossOrigin={undefined} />
            <Textarea  {...register('description', { required: 'requerido' })} label='Descripción' />
            {/* <Input {...register('slug', { required: 'requerido' })} onChange={e => setValue('slug', e.target.value.toLowerCase())} label='Slug' crossOrigin={undefined} /> */}

            {errors.base64_img && <Alert className='!py-1 !text-sm' color='red'>{errors.base64_img?.message}</Alert>}

          </div>

        </DialogBody>
        <DialogFooter className='flex justify-between'>
          <Button variant='filled' color='red' onClick={closeDialog} className='mr-1'>
            <span>Cancelar</span>
          </Button>
          <Button type='submit' variant='gradient' color='gray'>
            <span>Crear Album</span>
          </Button>
        </DialogFooter>
      </form>
    </Dialog >
  )
}