import React from 'react';

const Projects = () => {
    const projects = [
        {
            title: 'Project 1',
            description: 'This is the first project',
            repoLink: 'https://github.com/project1',
            demoLink: 'https://demo.project1.com',
        },
        {
            title: 'Project 2',
            description: 'This is the second project',
            repoLink: 'https://github.com/project2',
            demoLink: 'https://demo.project2.com',
        },
        {
            title: 'Project 3',
            description: 'This is the third project',
            repoLink: 'https://github.com/project3',
            demoLink: 'https://demo.project3.com',
        },
        // Add more projects here...
    ];

    return (
        <div className="grid grid-cols-3 gap-4">
            {projects.map((project, index) => (
                <div key={index} className="p-4 border border-gray-300">
                    <h3 className="text-lg font-bold">{project.title}</h3>
                    <p className="mt-2">{project.description}</p>
                    <div className="mt-4">
                        <a href={project.repoLink} className="text-blue-500 hover:underline">Repo</a>
                        <span className="mx-2">|</span>
                        <a href={project.demoLink} className="text-blue-500 hover:underline">Demo</a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Projects;
