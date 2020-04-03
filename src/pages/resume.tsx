import React from 'react'
import styled from 'styled-components'
import { BottomNav } from '../components/BottomNav'

export default () => (
  <Container>
    <HeaderContainer>
      <HeaderText>Arseniy Golovine Avery (Sunny Golovine)</HeaderText>
      <FlexRow>
        <Left>
          <Text>
            <b>Email:</b> <LinkText>sunny@glvn.co</LinkText>
          </Text>
          <Text>
            <b>Website:</b> <LinkText>glvn.co</LinkText>
          </Text>
        </Left>
        <Right>
          <Text>
            <b>Github:</b> <LinkText>sgolovine</LinkText>
          </Text>
          <Text>
            <b>Linkedin:</b> <LinkText>/in/SunnyGolovine</LinkText>
          </Text>
        </Right>
      </FlexRow>
    </HeaderContainer>

    <BodyContainer>
      <SectionContainer>
        <HeaderText>Skillset</HeaderText>
        <SubheaderText>Languages</SubheaderText>
        <Text>NodeJS / JavaScript, Ruby, Python, Objective C, Swift, Java</Text>
        <SubheaderText>Frameworks</SubheaderText>
        <Text>React / React Native, Angular, Vue, Express, Serverless.</Text>
      </SectionContainer>

      <SectionContainer>
        <HeaderText>Work Experience</HeaderText>
        <SubSectionContainer>
          <SubheaderText>
            Cox Automotive (Manheim) Aug 2018 - March 2020
          </SubheaderText>
          <List>
            <ListItem>
              Contributed to the development, deployment, and release of several
              high-profile products that increased company revenue by 20
              percent.
            </ListItem>
            <ListItem>
              Led development of an initiative to transform an internal company
              application into a profitable company product.
            </ListItem>
            <ListItem>
              Contributed to the development of an API that provides vehicle
              information for hundreds of services and other applications within
              the Cox Automotive ecosystem.
            </ListItem>
            <ListItem>
              Excelled in providing cost and time effective solutions for a
              number of issues, business use cases and features to our apps and
              services.
            </ListItem>
          </List>
        </SubSectionContainer>
        <SubSectionContainer>
          <SubheaderText>OnQ (March 2017 - Aug 2018)</SubheaderText>
          <List>
            <ListItem>
              Contributed to the development of companies learning platform
              during the launch phase
            </ListItem>
            <ListItem>
              Worked with the mobile development lead to build out the mobile
              application
            </ListItem>
            <ListItem>
              Led development of custom Javascript modules for internal company
              use as well as modifying open source Javascript
            </ListItem>
            <ListItem>
              Continually worked with product owners and UX designers to enhance
              features and usability of company products and tools.
            </ListItem>
          </List>
        </SubSectionContainer>
      </SectionContainer>

      <SectionContainer>
        <HeaderText>Projects</HeaderText>
        <SubSectionContainer>
          <SubheaderText>TipTrack</SubheaderText>
          <Text>
            A tip tracker for waiters and servers. Allows users to create custom
            analytics based on inputted tips
          </Text>
          <Text>
            <b>Stack:&nbsp;</b>iOS App and Android, React Native, Redux, Redux
            Persist, Fastlane, Lodash FP for Data Parsing. No backend
          </Text>
        </SubSectionContainer>

        <SubSectionContainer>
          <SubheaderText>Fav.sh</SubheaderText>
          <Text>
            Open source bookmark manager for Firefox and Chrome web browsers
            that backs up to GitHub Gist.
          </Text>
          <Text>
            <b>Stack:&nbsp;</b> Chrome Extension, ReactJS, Redux, Redux Persist,
            integrates with Github's API
          </Text>
        </SubSectionContainer>

        <SubSectionContainer>
          <SubheaderText>CopyBin</SubheaderText>
          <Text>
            CopyBin is a cross platform mobile app for storing text snippets for
            quick copy and paste. No backend
          </Text>
          <Text>
            <b>Stack:&nbsp;</b> Android App, React Native
          </Text>
        </SubSectionContainer>
      </SectionContainer>

      <SectionContainer>
        <HeaderText>Education</HeaderText>
        <Text>
          Graduated 2017) Georgia Southern University - Bachelors in Computer
          Science
        </Text>
        <Text>
          (Graduated 2014) Georgia Perimeter College - Associates in Science
        </Text>
      </SectionContainer>
    </BodyContainer>

    <FooterContainer>
      <BottomNav />
    </FooterContainer>
  </Container>
)

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 2.5em;
  padding-left: 2.5em;
  max-width: 800px;
`
const HeaderContainer = styled.div`
  border-left: 3px solid;
  padding-left: 1em;
  border-color: red;
`
const BodyContainer = styled.div``
const FooterContainer = styled.div``

const SectionContainer = styled.div`
  border-left: 3px solid;
  padding-left: 1em;
  border-color: blue;
  margin-top: 2.5em;
  margin-bottom: 2.5em;
`

const SubSectionContainer = styled.div`
  border-left: 3px solid;
  padding-left: 1em;
  border-color: green;
`

const Text = styled.p``
const HeaderText = styled.h1``
const SubheaderText = styled.h2``
const LinkText = styled.a``

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const Left = styled.div``
const Right = styled.div``

const List = styled.ul``
const ListItem = styled.li``
