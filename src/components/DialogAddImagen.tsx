import { Dialog, DialogHeader, DialogBody, DialogFooter, Button, Textarea, Input, Alert } from '@material-tailwind/react'
import useImage from '../store/useImage'
import ImageCrop from './ImageCrop'
import useCrop from '../store/useCrop'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useMutation } from '@apollo/client/react/hooks'
import { gql } from '@apollo/client'

interface FormValues {
  description: string
  base64_img: string
}

type AlbumId = {
  album_id: string
}

type IVariables = {
  input: FormValues & AlbumId
}

const ADD_IMAGEN = gql`
  mutation AddImagen($input: InputImage) {
    addImagen(input: $input)
  }
`

export default function DialogAddImagen() {
  const { stateDialogImagen, openDialogImagen, albumId } = useImage()
  const { imageCrop, resetImageCrop } = useCrop()
  
  const { formState: { errors }, handleSubmit, register, reset, setError, clearErrors } = useForm<FormValues>()

  const [addImagen] = useMutation<string, IVariables>(ADD_IMAGEN)

  console.log(errors)

  const closeDialog = () => {
    openDialogImagen()
    resetImageCrop()
    reset()
  }

  const onSubmit: SubmitHandler<FormValues> = ({ description }) => {

    if (!imageCrop.length) return

    addImagen({
      variables: {
        input: { album_id: albumId, description, base64_img: imageCrop  }
      },
      onCompleted: (data) => {
        console.log(data)
        closeDialog()
      },
      onError: ({ message }) => {
        clearError(message)
      }
    })

  }

  const clearError = (message: string) => {
    setError('base64_img', { message })
    setTimeout(() => {
      clearErrors()
    }, 1500)
  }

  return (
    <Dialog open={stateDialogImagen} handler={() => null}>
      <DialogHeader>Nueva Imagen</DialogHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogBody divider className='flex gap-2'>
          <ImageCrop />
          <div className='grow flex flex-col gap-2'>
            <Textarea {...register('description')} label='Descripción' />
            {errors.base64_img && <Alert className='!py-1 !text-sm' color='red'>{errors.base64_img?.message}</Alert>}
          </div>
        </DialogBody>
        <DialogFooter className='flex justify-between'>
          <Button variant='filled' color='red' onClick={closeDialog} className='mr-1'>
            <span>Cancelar</span>
          </Button>
          <Button type='submit' variant='gradient' color='gray'>
            <span>Agregar imagen</span>
          </Button>
        </DialogFooter>
      </form>
    </Dialog>
  )
}