import { useParams } from 'react-router-dom';
import detailedProjectData from '../../data/detailedprojectdata';
import { useState, useEffect } from 'react';

export default function ProjectDetails() {

    let { projectName } = useParams();

    const [projectDetails, setProjectDetails] = useState(null);

    useEffect(() => {
        setProjectDetails({ detailedProjectData }[{ projectName }.projectName]);
    }, [projectName]);

    return(
        <div className="project-details">
            {projectDetails ?
                <div>
                    <h1>{ projectDetails.title }</h1>
                    <h2>Stack: { projectDetails.stack }</h2>
                    {projectDetails.desc.map(
                        (para) => {
                            <p>{ para }</p>
                        }
                    )}
                </div>
                :
                <p>Project not found.</p>
            }
        </div>
    )
}