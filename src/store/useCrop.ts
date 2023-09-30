import { create } from 'zustand'

interface State {
  imageCrop: string
}

const initialState: State = {
  imageCrop: ''
}

interface Action {
  setImageCrop: (dataImage: string) => void
  resetImageCrop: () => void
}

export default create<State & Action>()((set, get) => ({
  ...initialState,
  setImageCrop: (dataImage) => {
    set({ imageCrop: dataImage })
  },
  resetImageCrop: () => {
    set(initialState)
  }
}))