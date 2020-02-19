import React from 'react'
import Text from '../components/Text'
import styled from 'styled-components'
import { Link } from 'gatsby'
/**
 * I'm a Full Stack developer from Yekaterinburg, Russia currently living in Atlanta, Georgia.
 * I love creating awesome web and mobile applications that help improve people's lives using
 * technologies like React, React Native, Gatsby and more.
 * When I'm not writing code I'm a world traveler, gearhead,
 * watch nerd and love to get out and meet new people (usually with a pint of beer).
 * If you want to learn more you can check out my projects, or get in touch
 */

export default () => {
  return (
    <TextContainer>
      <StyledText>
        I'm a Full Stack developer from{' '}
        <StyledExternalLink href="#">Yekaterinburg, Russia</StyledExternalLink>{' '}
        currently living in{' '}
        <StyledExternalLink href="#">Atlanta, Georgia</StyledExternalLink>. I
        love creating awesome web and mobile applications that help improve
        people's lives using technologies like{' '}
        <StyledExternalLink href="#">React</StyledExternalLink>,{' '}
        <StyledExternalLink href="#">React Native</StyledExternalLink>,{' '}
        <StyledExternalLink href="#">Gatsby</StyledExternalLink> and{' '}
        <StyledExternalLink href="#">more</StyledExternalLink>.
      </StyledText>
      <StyledText>
        When I'm not writing code I'm a world traveler, gearhead, watch nerd and
        love to get out and meet new people (usually with a pint of beer).
      </StyledText>
      <StyledText>
        If you want to learn more you can check out my{' '}
        <StyledLink to="/projects">projects</StyledLink>, or{' '}
        <StyledLink to="/contact">get in touch</StyledLink>
      </StyledText>
    </TextContainer>
  )
}

/**
 * TODO: Add more styling here
 */

const StyledExternalLink = styled.a``

const StyledLink = styled(Link)``

const TextContainer = styled.div`
  padding: 1.5em;
  max-width: 1200px;
`

const StyledText = styled(Text)`
  font-size: 32px;
  @media (max-width: 1000px) {
    font-size: 28px;
  }
`
