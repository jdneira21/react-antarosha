import { Button } from '@material-tailwind/react'
import { ChangeEvent, useState } from 'react'
import { Cropper, getCroppedImg } from 'react-cropper-custom'
import 'react-cropper-custom/dist/index.css'
import { BiUpload } from 'react-icons/bi'
import useCrop from '../store/useCrop'

type Area = {
  width: number
  height: number
  x: number
  y: number
}

export default function ImageCrop() {
  const { setImageCrop } = useCrop()

  const [img, setImg] = useState('')
  const [zoom, setZoom] = useState(1)

  const onCropComplete = async (croppedArea: Area) => {
    console.log('onCropComplete')
    try {
      const image = await getCroppedImg(img, croppedArea, { width: 600, height: 600 * 1 })
      // setCroppedImg(image)
      setImageCrop(image)
      // console.log(image)
    } catch (e) {
      // console.error(e)
    }
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log('onChange')
    if (e.target.files === null) return
    setImg(URL.createObjectURL(e.target.files[0]))
  }


  return (
    <>
      <div className='w-52 relative flex flex-col gap-4'>
        <Cropper
          src={img}
          zoom={zoom}
          aspect={1}
          onZoomChange={setZoom}
          onCropComplete={onCropComplete}
        />

        <div className="flex items-center justify-center">
          <label className="flex items-center gap-2 py-1 px-2 place-items-center bg-gray-800 text-white hover:bg-gray-900 shadow-lg rounded-md cursor-pointer ">
            <BiUpload />
            <span className="text-[0.8rem]">Subir Imagen</span>
            <input onChange={(e) => onChange(e)} type='file' className="hidden" />
          </label>
        </div>
      </div>
    </>
  )
}