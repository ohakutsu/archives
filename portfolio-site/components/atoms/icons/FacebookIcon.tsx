import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

interface Props {
  size: string | number
}

export const FacebookIcon = ({ size }: Props) => (
  <FontAwesomeIcon width={size} icon={faFacebook} color="#4267B2" />
)
