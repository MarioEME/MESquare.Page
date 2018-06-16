import React, { Component } from 'react'
import ReactFrom from 'react-dom'
import Data from './data.js'

class Resume extends Component {

    buildJob(job) {
        job.keywords.sort();
        return (
            <div key={job.id}>
                <h6 className="mb-3 mt-5 border-bottom">{job.date}</h6>
                <h5><a target="_blank" href={job.company.url}>{job.company.name}</a></h5>
                <h6 className="mb-3">{job.company.location}</h6>
                <h2>{job.title}</h2>
                <p>{job.description}</p>
                <p className="text-secondary"><b>Keywords:</b> {job.keywords.join(", ")}</p>
            </div>
        );
    }

    render() {
        var ds = new Data()

        return (
            <div>
                <h1>Resume</h1>
                <div>
                    {ds.getResume().map(this.buildJob)}
                </div>
            </div>
        );
    }
}

export default Resume;