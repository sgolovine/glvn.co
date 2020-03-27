import React from 'react'
import styled from 'styled-components'
import { links } from '../data/links'
import { Link } from 'react-router-dom'

const profile = require('../images/profile.png')

type ColTextProps = {
  href?: string
  left: string
  right: string
}

const ColText = (props: ColTextProps) => (
  <ColTextOutside>
    {props.href ? (
      <ColTextLeft href={props.href}>{props.left}</ColTextLeft>
    ) : (
      <ColTextLeftAlt>{props.left}</ColTextLeftAlt>
    )}
    <ColTextRight>{props.right}</ColTextRight>
  </ColTextOutside>
)

const PageGrid = () => {
  const renderLinks = () =>
    links.map((link) => {
      return <ColText href={link.href} left={link.name} right={link.username} />
    })

  return (
    <GridContainer>
      <Col>
        <Row>
          <ColHeader>Work</ColHeader>
          <ColContent>
            <ColText
              href="https://coxautoinc.com"
              left="Current"
              right="Mobile Engineer at Cox Automotive"
            />
            <ColText left="Previously" right="Software Engineer at OnQ" />
          </ColContent>
        </Row>
        <Row>
          <ColHeader>Side Hustle</ColHeader>
          <ColContent>
            <ColText
              href="https://fav.sh"
              left="Fav.sh"
              right="Open source bookmark manager"
            />
            <ColText
              href="https://tiptrack.app"
              left="TipTrack"
              right="Smart tip tracker for servers"
            />
          </ColContent>
        </Row>
      </Col>
      <Col>
        <Row>
          <ColHeader>Links</ColHeader>
          <ColContent>{renderLinks()}</ColContent>
        </Row>
      </Col>
    </GridContainer>
  )
}

export default () => {
  return (
    <OuterContainer>
      <PageContainer>
        <HeadlineContainer>
          <Image src={profile} height="128" />
          <Headline>
            Hi my name is&nbsp;
            <HeadlineName>Sunny Golovine.&nbsp;</HeadlineName>I am a software
            engineer specializing in Javascript, React and React Native. I
            currently work for Cox Automotive as a mobile developer. In my spare
            time I like to go hiking and work on a few of my{' '}
            <HeadlineLink to="/pages/projects">side projects</HeadlineLink>
          </Headline>
        </HeadlineContainer>
        <PageGrid />
        <FooterContainer>
          <FooterLink to="/pages/about">About&nbsp;&nbsp;</FooterLink>
          <FooterLink to="/pages/about">Projects&nbsp;&nbsp;</FooterLink>
          <FooterLink to="/pages/about">Contact</FooterLink>
        </FooterContainer>
      </PageContainer>
    </OuterContainer>
  )
}

const headlineFontSize = '22'
const columnTextSize = '14'
const columnTextFontFamily = 'Roboto Condensed'
const otherTextFontFamily = "'Roboto Slab'; sans-serif"

const HeadlineContainer = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 1em;
    padding-right: 1em;
  }
`

const HeadlineName = styled.span`
  font-size: ${headlineFontSize}px;
  font-weight: bold;
  color: #ff5722;
`

const Headline = styled.p`
  font-size: ${headlineFontSize}px;
  font-family: ${otherTextFontFamily};
`

const HeadlineLink = styled(Link)`
  font-size: ${headlineFontSize}px;
  font-family: ${otherTextFontFamily};
`

const OuterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 2.5rem;
`

const PageContainer = styled.div`
  height: 100%;
  width: 100%;
  max-width: 1000px;
`

const GridContainer = styled.div`
  @media (min-width: 1200px) {
    margin-top: 100px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`

const Col = styled.div`
  padding-left: 1em;
  padding-right: 1em;
`

const Row = styled.div`
  @media (min-width: 1200px) {
    height: 300px;
    width: 400px;
    margin-top: 1em;
    margin-bottom: 1em;
  }
  @media (max-width: 1000px) {
    padding-top: 1em;
    padding-bottom: 1em;
  }
`

const ColHeader = styled.p`
  font-family: ${columnTextFontFamily}; sans-serif;
  font-weight: bold;
  font-size: ${columnTextSize}px;
  text-transform: uppercase;
`

const ColContent = styled.div``

const ColTextOutside = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const ColTextLeft = styled.a`
  font-family: ${columnTextFontFamily}; sans-serif;
  font-size: 16px;
`

const ColTextLeftAlt = styled.p`
font-family: ${columnTextFontFamily}; sans-serif;
font-size: 16px;

`

const ColTextRight = styled.p`
font-family: ${columnTextFontFamily}; sans-serif;
font-size: 16px;
`

const FooterContainer = styled.div``

const FooterLink = styled(Link)`
  font-family: ${otherTextFontFamily};
  font-size: 18px;
`

const Image = styled.img`
  margin: 1em;
`
