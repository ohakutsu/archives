import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

interface Props {
  size: string | number
}

export const GithubIcon = ({ size }: Props) => (
  <FontAwesomeIcon width={size} icon={faGithub} color="#211F1F" />
)
