import React from 'react'
import { Card, CardImg } from 'react-bootstrap'

type Props = {
  projectName: string
  projectDescriotion: string
  githubUrl: string
  webUrl: string
  imgUrl?: string
}

const ProjectCard = (props: Props) => {
  return (
    <Card>
      {props.imgUrl && <Card.Img variant="top" src={props.imgUrl} />}
      <Card.Body>
        <Card.Title>{props.projectName}</Card.Title>
        <Card.Text>{props.projectDescriotion}</Card.Text>
      </Card.Body>
    </Card>
  )
}
