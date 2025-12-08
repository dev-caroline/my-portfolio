import React from 'react'
import Link from 'next/link'

const page = () => {
    const projects = [
        {
        id: 1,
        title: "Notebox",
        description: "A comprehensive note-taking application inspired by Google Keep, featuring real-time synchronization, rich text editing, and intuitive organization tools. Built with Firebase for seamless data persistence and modern JavaScript for a smooth user experience.",
        image: "/images/notebox.png",
        tags: ["JavaScript", "Firebase", "Real-time Sync", "Rich Text Editor"],
        demo: "https://note-box-95a03.web.app/",
        github: "#",
        featured: true
        },
        {
        id: 2,
        title: "Medic Diet Clinic",
        description: "A professional nutrition and dietetics consultation platform that connects clients with certified dietitians. Features include appointment scheduling, personalized meal plans, progress tracking, and secure messaging. Built with the MERN stack for scalability and performance.",
        image: "/images/medic diet clinic.png",
        tags: ["React", "Node.js", "MongoDB", "Express", "MERN Stack"],
        demo: "https://www.medicdietclinic.com/",
        github: "#",
        featured: true
        },
        {
        id: 3,
        title: "Task Management App",
        description: "A collaborative task management application with real-time updates, team workspaces, and productivity analytics. Features drag-and-drop functionality, deadline tracking, and progress visualization. Currently in development.",
        image: "/images/placeholder-project.jpg",
        tags: ["React", "Node.js", "MongoDB", "Real-time", "In Development"],
        demo: "#",
        github: "#",
        featured: true
        },
        {
        id: 3,
        title: "E-Commerce Platform",
        description: "A full-featured online shopping platform with cart functionality, payment integration, and admin dashboard. Includes product management, order tracking, and customer analytics. Currently in development.",
        image: "/images/placeholder-project.jpg",
        tags: ["React", "Node.js", "MongoDB", "Payment Integration", "In Development"],
        demo: "#",
        github: "#",
        featured: false
        }
    ]

    return (
        <div className='min-h-screen'>
        <section className='py-12 md:py-16 lg:py-20 px-4'>
            <div className='max-w-4xl mx-auto text-center'>
            <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6'>My Projects</h1>
            <p className='text-base md:text-lg lg:text-xl text-gray-600 mb-6 md:mb-8 leading-relaxed'>
                Showcasing my completed projects and upcoming developments in full-stack web applications
            </p>
            <p className='text-sm md:text-base text-gray-500'>
                From healthcare platforms to productivity tools, featuring both live applications and planned projects.
            </p>
            </div>
        </section>

        <section className='py-12 md:py-16 lg:py-20 px-4'>
            <div className='max-w-6xl mx-auto'>
            <h2 className='text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center'>All Projects</h2>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {projects.map((project) => (
                <div key={project.id} className='bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow'>
                    <div className='bg-gray-100 h-48 flex items-center justify-center'>
                    {project.image && project.image !== "/images/placeholder-project.jpg" ? (
                        <img src={project.image} alt={project.title} className='w-full h-full object-cover' />
                    ) : (
                        <div className='text-center'>
                            <i className="bi bi-code-slash text-3xl text-gray-400 mb-1"></i>
                            <p className='text-gray-500 text-xs'>Coming Soon</p>
                        </div>
                    )}
                    </div>
                    <div className='p-6'>
                    <h3 className='text-xl font-bold mb-2'>{project.title}</h3>
                    <p className='text-gray-600 mb-4 text-sm leading-relaxed'>{project.description}</p>

                    <div className='flex flex-wrap gap-2 mb-4'>
                        {project.tags.map((tag) => (
                        <span key={tag} className='px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded'>
                            {tag}
                        </span>
                        ))}
                    </div>

                    <div className='flex gap-2'>
                        <a href={project.demo} className='text-blue-600 hover:underline text-sm'>Demo</a>
                        <a href={project.github} className='text-gray-600 hover:underline text-sm'>Code</a>
                    </div>
                    </div>
                </div>
                ))}
            </div>
            </div>
        </section>


        <section className='py-12 md:py-16 lg:py-20 px-4 bg-gray-50'>
            <div className='max-w-4xl mx-auto text-center'>
            <h2 className='text-2xl md:text-3xl font-bold mb-4 md:mb-8'>Let's Build Something Together</h2>
            <p className='text-xl text-gray-600 mb-8'>
                I'm always excited to take on new challenges and bring creative ideas to life.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <Link href="/about">
                <button className='border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-all'>
                    Learn More About Me
                </button>
                </Link>
                <a href="mailto:contact@example.com">
                <button className='bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all'>
                    Start a Project
                </button>
                </a>
            </div>
            </div>
        </section>
        </div>
    )
}

export default page