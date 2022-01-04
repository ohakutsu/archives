import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

interface Props {
  size: string | number
}

export const TwitterIcon = ({ size }: Props) => (
  <FontAwesomeIcon width={size} icon={faTwitter} color="#1DA1F2" />
)
