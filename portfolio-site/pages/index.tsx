import React from 'react'
import styled from 'styled-components'
import { Copyright } from '~/components/molecules/Copyright'
import { About } from '~/components/organisms/About'
import { Activities } from '~/components/organisms/Activities'
import { Links } from '~/components/organisms/Links'
import { Profile } from '~/components/organisms/Profile'
import { Container } from '~/components/templates/Container'
import { Footer } from '~/components/templates/Footer'
import { Header } from '~/components/templates/Header'

const IndexPage: React.FC = () => (
  <>
    <Header>
      <ProfileSection className="container">
        <Profile />
      </ProfileSection>
    </Header>
    <Container>
      <About />
    </Container>
    <Container>
      <Activities />
    </Container>
    <Container>
      <Links />
    </Container>
    <Footer>
      <Copyright>© 2020 ohakutsu.com</Copyright>
    </Footer>
  </>
)

const ProfileSection = styled.section({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
})

export default IndexPage
