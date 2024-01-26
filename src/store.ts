import { atom } from 'nanostores'
export const atomCOlor = atom<{ from: string; to: string }>({ from: '', to: '' })
