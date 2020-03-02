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
    </ProjectContainer>
  )
}

const ProjectContainer = styled.div`
  max-width: 600px;
`
