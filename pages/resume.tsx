import React from 'react'
import { LinkButton } from '~/components/Button'

export default () => (
  <>
    <p>You can view my resume below or download it in DOC or PDF formats</p>
    <div className="resume-button-container">
      <LinkButton href="#" label="Download Resume (DOC)" />
      <LinkButton href="#" label="Download Resume (PDF)" />
    </div>
  </>
)
