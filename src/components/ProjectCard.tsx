import React from 'react'
import { Card } from 'react-bootstrap'
import styled from 'styled-components'

type Props = {
  name: string
  desc: string
  githubUrl?: string
  webUrl?: string
}

export const ProjectCard = (props: Props) => {
  return (
    <MarginCard>
      <Card.Body>
        <CardTitle>{props.name}</CardTitle>
        <CardText>{props.desc}</CardText>
        {props.githubUrl && (
          <Card.Link href={props.githubUrl}>Source Code</Card.Link>
        )}
        {props.webUrl && <Card.Link href={props.webUrl}>Website</Card.Link>}
      </Card.Body>
    </MarginCard>
  )
}

const MarginCard = styled(Card)`
  margin-top: 5px;
  margin-bottom: 5px;
  background-color: ${(props) => props.theme.background};
  border-color: ${(props) => props.theme.borderColor};
`

const CardTitle = styled(Card.Title)`
  color: ${(props) => props.theme.text};
`

const CardText = styled(Card.Text)`
  color: ${(props) => props.theme.text};
`
