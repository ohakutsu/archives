import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

interface Props {
  size: string | number
}

export const LinkedinIcon = ({ size }: Props) => (
  <FontAwesomeIcon width={size} icon={faLinkedin} color="#2867B2" />
)
