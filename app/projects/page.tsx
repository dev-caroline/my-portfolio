import React from 'react'
import Link from 'next/link'

const page = () => {
    const projects = [
        {
        id: 1,
        title: "E-Commerce Platform",
        description: "A full-featured online shopping platform with cart functionality, payment integration, and admin dashboard. Built with modern React and Node.js.",
        image: "/images/ecommerce-platform.jpg",
        tags: ["React", "Next.js", "Node.js", "MongoDB"],
        demo: "#",
        github: "#",
        featured: true
        },
        {
        id: 2,
        title: "Task Management App",
        description: "Collaborative task manager with real-time updates, team workspaces, and productivity analytics. Features drag-and-drop functionality.",
        image: "/images/task-management.jpg",
        tags: ["React", "Node.js", "Tailwind CSS", "MongoDB"],
        demo: "#",
        github: "#",
        featured: true
        },
        {
        id: 3,
        title: "Weather Dashboard",
        description: "Beautiful weather application with location-based forecasts, interactive maps, and weather alerts. Clean, responsive design.",
        image: "/images/weather-dashboard.jpg",
        tags: ["React", "Weather API", "CSS", "JavaScript"],
        demo: "#",
        github: "#",
        featured: false
        },
        {
        id: 4,
        title: "Blog Platform",
        description: "Modern blogging platform with markdown support, SEO optimization, and social sharing features. Built for content creators.",
        image: "/images/blog-platform.jpg",
        tags: ["Next.js", "MDX", "Prisma", "PostgreSQL"],
        demo: "#",
        github: "#",
        featured: false
        },
        {
        id: 5,
        title: "Portfolio Generator",
        description: "SaaS tool that helps developers create stunning portfolio websites with customizable templates and themes.",
        image: "/images/portfolio-generator.jpg",
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
        demo: "#",
        github: "#",
        featured: false
        },
        {
        id: 6,
        title: "Social Media Analytics",
        description: "Analytics dashboard for tracking social media metrics, engagement rates, and audience insights with data visualization.",
        image: "/images/social-analytics.jpg",
        tags: ["React", "D3.js", "Express", "MongoDB"],
        demo: "#",
        github: "#",
        featured: false
        }
    ]

    return (
        <div className='min-h-screen'>
        <section className='py-20 px-4'>
            <div className='max-w-4xl mx-auto text-center'>
            <h1 className='text-5xl font-bold mb-6'>My Projects</h1>
            <p className='text-xl text-gray-600 mb-8 leading-relaxed'>
                A collection of my recent work showcasing my skills in full-stack web development
            </p>
            <p className='text-lg text-gray-500'>
                From e-commerce platforms to productivity tools, each project represents a unique challenge and learning experience.
            </p>
            </div>
        </section>

        <section className='py-20 px-4'>
            <div className='max-w-6xl mx-auto'>
            <h2 className='text-3xl font-bold mb-12 text-center'>Featured Work</h2>

            <div className='grid md:grid-cols-2 gap-8 mb-16'>
                {projects.filter(project => project.featured).map((project) => (
                <div key={project.id} className='bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow'>
                    <div className='bg-gray-100 h-64 flex items-center justify-center'>
                    <img src={project.image} alt={project.title} className='w-full h-full object-cover' />
                    </div>
                    <div className='p-8'>
                    <h3 className='text-2xl font-bold mb-3'>{project.title}</h3>
                    <p className='text-gray-600 mb-6 leading-relaxed'>{project.description}</p>

                    <div className='flex flex-wrap gap-2 mb-6'>
                        {project.tags.map((tag) => (
                        <span key={tag} className='px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded'>
                            {tag}
                        </span>
                        ))}
                    </div>

                    <div className='flex gap-4'>
                        <a href={project.demo} className='flex-1 text-center bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-all'>
                        Live Demo
                        </a>
                        <a href={project.github} className='flex-1 text-center border border-blue-600 text-blue-600 py-2 px-4 rounded-lg font-medium hover:bg-blue-50 transition-all'>
                        GitHub
                        </a>
                    </div>
                    </div>
                </div>
                ))}
            </div>
            </div>
        </section>

        <section className='py-20 px-4'>
            <div className='max-w-6xl mx-auto'>
            <h2 className='text-3xl font-bold mb-12 text-center'>All Projects</h2>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {projects.map((project) => (
                <div key={project.id} className='bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow'>
                    <div className='bg-gray-100 h-48 flex items-center justify-center'>
                    <img src={project.image} alt={project.title} className='w-full h-full object-cover' />
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

        <section className='py-20 px-4'>
            <div className='max-w-4xl mx-auto text-center'>
            <h2 className='text-3xl font-bold mb-8'>Technologies I Work With</h2>
            <div className='flex flex-wrap justify-center gap-3'>
                {['React', 'Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Git', 'Figma', 'Vercel'].map((tech) => (
                <span key={tech} className='px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-700 font-medium hover:border-blue-300 transition-all'>
                    {tech}
                </span>
                ))}
            </div>
            </div>
        </section>

        <section className='py-20 px-4 bg-gray-50'>
            <div className='max-w-4xl mx-auto text-center'>
            <h2 className='text-3xl font-bold mb-4'>Have a Project in Mind?</h2>
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