import React from 'react'
import styled from 'styled-components'

export const Container: React.FC = ({ children }) => (
  <StyledContainer className="container">{children}</StyledContainer>
)

const StyledContainer = styled.section({
  marginBottom: '50px',
  maxWidth: '768px',
})
