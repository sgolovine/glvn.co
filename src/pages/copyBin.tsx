import React from 'react'
import styled from 'styled-components'

const headerImage = require('../images/copy-bin.png')

export default () => {
  return (
    <Container>
      <ContainerImage>
        <img alt="screenshot" height="600px" src={headerImage} />
      </ContainerImage>
      <Right>
        <h2>CopyBin</h2>
        <p>
          Copy canned responses, hashtags, ASCII art or just about anything else
          with one touch using CopyBin. Better than your notes app, with CopyBin
          you don't have to worry about carefully selecting the text you want to
          copy, just one press and the item is automatically copied to your
          clipboard.
        </p>
        <ul>
          <li>
            One click copy: No more carefully selecting the text you want to
            copy
          </li>
          <li>
            One click paste: In the editor, you have the option of pasting from
            your clipboard with one click instead of long pressing your screen
            and waiting for Android to catch up.
          </li>
          <li>
            Respects your privacy: CopyBin doesn't require an account and stores
            all of your copies on your device. No tracking, no analytics, no
            phoning home.
          </li>
          <li>No Ads</li>
        </ul>
        <a href="#">Download in Google Play</a>
      </Right>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  padding: 2.5em;
  @media (max-width: 1200px) {
    display: block;
    align-content: center;
  }
`

const ContainerImage = styled.div`
  @media (max-width: 1200px) {
    text-align: center;
  }
`

const Right = styled.div`
  margin-left: 1em;
  max-width: 700px;
`
