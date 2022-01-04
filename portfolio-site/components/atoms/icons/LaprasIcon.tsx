import React from 'react'

interface Props {
  size: string | number
}

export const LaprasIcon = ({ size }: Props) => (
  <img src="/lapras-icon.png" width={size} />
)
