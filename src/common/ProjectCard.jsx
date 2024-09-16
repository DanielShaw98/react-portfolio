import React from 'react'
import './AnimatedTitle.css'

function ProjectCard({ src, link, h3, p, hasAnimation }) {
  return (
    <a href={link} target="_blank">
      {hasAnimation ? (
        <div className="animatedTitle hover">
          <h1>{h3}</h1>
        </div>
      ) : (
        <img className="hover" src={src} alt={`${h3} logo`} />
      )}
      <h3>{h3}</h3>
      <p>{p}</p>
    </a>
  )
}

export default ProjectCard
