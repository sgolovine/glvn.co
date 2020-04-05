import React from 'react'

type Props = {
  name: string
  desc?: string
  links?: {
    name: string
    href: string
  }[]
}

export const ProjectCard = (props: Props) => (
  <div className="project-card-container">
    <div>
      <div className="project-card-header-container">
        <p className="project-card-header-text">{props.name}</p>
        {props.links && props.links.length > 0 && (
          <div className="project-card-link-container">
            {props.links.map((item) => {
              return (
                <div
                  key={item.name.replace(' ', '-')}
                  className="project-card-link-item-container"
                >
                  <a className="project-card-link-item-text" href={item.href}>
                    {item.name}
                  </a>
                </div>
              )
            })}
          </div>
        )}
      </div>
      {props.desc && <p className="project-card-desc-text">{props.desc}</p>}
    </div>
  </div>
)
