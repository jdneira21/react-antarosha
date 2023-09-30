import { create } from 'zustand'

interface State {
  stateDialogAlbum: boolean
}

const initialState: State = {
  stateDialogAlbum: false
}

interface Action {
  openDialogAlbum: () => void
  resetDialogAlbum: () => void
}

export default create<State & Action>()((set, get) => ({
  ...initialState,
  openDialogAlbum: () => {
    set(state => ({ stateDialogAlbum: !state.stateDialogAlbum }))
  },
  resetDialogAlbum: () => {
    set(initialState)
  }
}))