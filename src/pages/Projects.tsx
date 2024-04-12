import { useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import '../static/css/Projects.css';

function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch('projects.json');
                if (!response.ok) {
                    throw new Error('Failed to fetch projects.');
                }
                const data = await response.json();
                setProjects(data);
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        };

        fetchProjects();
    }, []);

    return (
        <div className='projects-container'>
            <div className='container'>
                <h1>Projects</h1>
                <div className='row row-cols-1 row-cols-md-3 g-4'>
                    {projects.map((project: any, index: number) => (
                        <ProjectCard key={index} title={project.title} description={project.description} img={project.img} />
                    ))}
                </div>
            </div> 
        </div>
    );
}

export default Projects;
