import React, { useMemo } from 'react'
import styled from 'styled-components'
import { FacebookIcon } from '~/components/atoms/icons/FacebookIcon'
import { GithubIcon } from '~/components/atoms/icons/GithubIcon'
import { LaprasIcon } from '~/components/atoms/icons/LaprasIcon'
import { LinkedinIcon } from '~/components/atoms/icons/LinkedinIcon'
import { QiitaIcon } from '~/components/atoms/icons/QiitaIcon'
import { TwitterIcon } from '~/components/atoms/icons/TwitterIcon'
import { SectionTitle } from '~/components/molecules/SectionTitle'

export const Links = () => {
  const links = useMemo(() => {
    const iconSize = 24
    return [
      {
        icon: <FacebookIcon size={iconSize} />,
        url: 'https://www.facebook.com/ohakutsu',
      },
      {
        icon: <GithubIcon size={iconSize} />,
        url: 'https://github.com/ohakutsu',
      },
      {
        icon: <LaprasIcon size={iconSize} />,
        url: 'https://lapras.com/public/DVW34MV',
      },
      {
        icon: <LinkedinIcon size={iconSize} />,
        url: 'https://www.linkedin.com/in/ohakutsu/',
      },
      {
        icon: <QiitaIcon size={iconSize} />,
        url: 'https://qiita.com/ohakutsu',
      },
      {
        icon: <TwitterIcon size={iconSize} />,
        url: 'https://twitter.com/ohakutsu',
      },
    ]
  }, [])

  return (
    <>
      <SectionTitle>Links</SectionTitle>
      <StyledUl>
        {links.map((link) => (
          <StyledLi key={link.url}>
            <a href={link.url} target="_blank" rel="noreferrer">
              {link.icon}
            </a>
          </StyledLi>
        ))}
      </StyledUl>
    </>
  )
}

const StyledUl = styled.ul({
  alignItems: 'center',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  listStyle: 'none',
})

const StyledLi = styled.li({
  margin: '0 16px 0 0',
})
