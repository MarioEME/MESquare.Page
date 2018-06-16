import React, { Component } from 'react'
import Data from './data.js'

class Project extends Component {

    constructor() {
        super();
        this.renderProject = this.renderProject.bind(this);
    }

    renderProject(project) {
        var downloadUrl = "";
        if (project.downloadUrl) {
            downloadUrl = <a className="card-link" href={project.downloadUrl}><small>Download</small></a>
        }

        var url = "";
        if (project.url) {
            url = <a className="card-link" href={project.url}><small>Site</small></a>
        }

        return (
            <div className="col-12 mb-5">
                <h2 className="mb-3">{project.name}</h2>
                <div className="ml-4">
                    <h6 className="card-subtitle mb-3 text-muted">{project.keywords}</h6>
                    <p className="card-text">{project.description}</p>
                    <a className="card-link" href={project.sourceUrl}><small>Source Code</small></a>
                    {url}
                    {downloadUrl}
                </div>
            </div>
        );
    }

    render() {
        var projects = new Data().getProjects();

        return (
            <div>
                <h1>My Projects</h1>
                <div className="mt-5 row">
                    {projects.map((p) => this.renderProject(p))}
                </div>
            </div>
        );
    }
}

export default Project;
