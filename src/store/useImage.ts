import { create } from 'zustand'

interface State {
  stateDialogImagen: boolean
  albumId: string
}

const initialState: State = {
  stateDialogImagen: false,
  albumId: ''
}

interface Action {
  openDialogImagen: (albumId?: string) => void
  resetDialogImagen: () => void
}

export default create<State & Action>()((set, get) => ({
  ...initialState,
  openDialogImagen: (albumId) => {
    // console.log(albumId)
    set(state => ({ stateDialogImagen: !state.stateDialogImagen, albumId: albumId  }))
  },
  resetDialogImagen: () => {
    set(initialState)
  }
}))