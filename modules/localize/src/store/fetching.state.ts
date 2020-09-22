import { atom } from 'recoil'

export const fetchingState: any = atom<boolean>({
  key: 'fetching',
  default: true
})
