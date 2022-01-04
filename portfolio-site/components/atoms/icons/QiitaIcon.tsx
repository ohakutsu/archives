import React from 'react'

interface Props {
  size: string | number
}

export const QiitaIcon = ({ size }: Props) => (
  <img src="/qiita-icon.png" width={size} />
)
