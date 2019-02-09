export const SHOWN = 'SHOWN'
export const HIDDEN = 'HIDDEN'

export const shown = bool => ({
  type: SHOWN,
  shown: bool
})

export const hidden = bool => ({
  type: HIDDEN,
  shown: bool
})
