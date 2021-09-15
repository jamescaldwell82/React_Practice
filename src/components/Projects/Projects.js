import React from 'react'
import sampleProjects from './sampleProjects'
import './Projects.css'

export default function Projects() {
    return (
        <section className="projects">
            <h1>Projects</h1>
            {sampleProjects.map(x =>
                <a key={x.id} href={x.url} target="_blank" rel="noreferrer">{x.name}</a>    
            )}
        </section>
    )
}
