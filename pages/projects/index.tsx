import React from 'react'
import { ProjectCard } from '~/components/ProjectCard'
import data from '~/data/projectLinks'

export default () => (
  <div className="page">
    {data.map((item) => {
      return (
        <ProjectCard
          key={item.key}
          name={item.name}
          desc={item.desc}
          links={item.links}
        />
      )
    })}
    <div className="project-footer">
      <a href="https://github.com/sgolovine">
        See more of my projects on Github
      </a>
    </div>
  </div>
)
