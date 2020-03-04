import React from 'react'
import { ProjectCard } from '../components/ProjectCard'
import { projects } from '../data/projects'

import styled from 'styled-components'

export default () => {
  return (
    <ProjectContainer>
      {projects.map((project) => {
        return (
          <ProjectCard
            name={project.name}
            desc={project.desc}
            webUrl={project.webUrl}
            githubUrl={project.gitUrl}
          />
        )
      })}
      <MoreLinkContainer>
        <SeeMoreLink href="https://github.com/sgolovine">
          See More on my Github Page...
        </SeeMoreLink>
      </MoreLinkContainer>
    </ProjectContainer>
  )
}

const MoreLinkContainer = styled.div`
  margin: 1.5em;
`

const SeeMoreLink = styled.a`
  font-size: 22px;
`

const ProjectContainer = styled.div`
  max-width: 600px;
`
