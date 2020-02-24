import React from 'react'
import Text from '../components/Text'
import { ProjectCard } from '../components/ProjectCard'
import styled from 'styled-components'

export default () => {
  return (
    <ProjectContainer>
      <Text>Hello World /projects</Text>
      <ProjectCard
        name="fav.sh"
        desc="Open source bookmark manager that backs up to Github Gist"
        // webUrl="#"
        githubUrl="#"
      />
      <ProjectCard
        name="fav.sh"
        desc="Open source bookmark manager that backs up to Github Gist"
        webUrl="#"
        // githubUrl="#"
      />
      <ProjectCard
        name="fav.sh"
        desc="Open source bookmark manager that backs up to Github Gist"
        // webUrl="#"
        // githubUrl="#"
      />
    </ProjectContainer>
  )
}

const ProjectContainer = styled.div`
  max-width: 600px;
`
