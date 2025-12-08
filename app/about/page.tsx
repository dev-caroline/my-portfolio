import React from 'react'
import Link from 'next/link'

const page = () => {
    return (
        <div className='min-h-screen'>
        <section className='py-20 px-4'>
            <div className='max-w-4xl mx-auto text-center'>
            <h1 className='text-5xl font-bold mb-6'>About Me</h1>
            <p className='text-xl text-gray-600 mb-12 leading-relaxed'>
                Passionate software engineer dedicated to creating meaningful digital experiences
            </p>
            </div>
        </section>

        <section className='py-20 px-4'>
            <div className='max-w-6xl mx-auto'>
            <div className='grid lg:grid-cols-2 gap-16 items-center'>
                <div>
                <h2 className='text-3xl font-bold mb-6'>My Journey</h2>
                <div className='space-y-4 text-gray-700 leading-relaxed'>
                    <p>
                    Hello! I'm Ajiboye Caroline Adetomiwa, a passionate Full Stack Web Developer
                    with a love for creating digital solutions that make a difference.
                    </p>
                    <p>
                    I'm that tech girl who knows a little bit about everything! From coding complex
                    web applications to creating stunning designs in Canva, analyzing data in Excel,
                    or delivering compelling presentations in PowerPoint - I thrive on versatility
                    and continuous learning.
                    </p>
                    <p>
                    My journey into tech began with curiosity and has evolved into a fulfilling career
                    where I get to solve complex problems and bring creative ideas to life through code.
                    </p>
                    <p>
                    I specialize in the MERN stack and modern web technologies, always staying
                    updated with the latest trends and best practices in software development.
                    </p>
                    <p>
                    When I'm not coding, you can find me exploring new technologies, contributing
                    to open-source projects, or sharing knowledge with the developer community.
                    </p>
                </div>

                <div className='mt-8'>
                    <Link href="/projects">
                    <button className='border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-all mr-4'>
                        View My Work
                    </button>
                    </Link>
                    <Link href="/certifications">
                    <button className='bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all'>
                        View Certifications
                    </button>
                    </Link>
                </div>
                </div>

                <div>
                <h2 className='text-3xl font-bold mb-6'>Technical Expertise</h2>

                <div className='space-y-6'>
                    <div>
                    <h3 className='text-xl font-semibold mb-3 text-blue-600'>Frontend Development</h3>
                    <div className='flex flex-wrap gap-2'>
                        <span className='px-3 py-1 bg-blue-100 text-blue-800 rounded'>React</span>
                        <span className='px-3 py-1 bg-blue-100 text-blue-800 rounded'>Next.js</span>
                        <span className='px-3 py-1 bg-blue-100 text-blue-800 rounded'>TypeScript</span>
                        <span className='px-3 py-1 bg-blue-100 text-blue-800 rounded'>Tailwind CSS</span>
                        <span className='px-3 py-1 bg-blue-100 text-blue-800 rounded'>JavaScript</span>
                    </div>
                    </div>

                    <div>
                    <h3 className='text-xl font-semibold mb-3 text-blue-600'>Backend Development</h3>
                    <div className='flex flex-wrap gap-2'>
                        <span className='px-3 py-1 bg-green-100 text-green-800 rounded'>Node.js</span>
                        <span className='px-3 py-1 bg-green-100 text-green-800 rounded'>Express</span>
                        <span className='px-3 py-1 bg-green-100 text-green-800 rounded'>MongoDB</span>
                        <span className='px-3 py-1 bg-green-100 text-green-800 rounded'>REST APIs</span>
                        <span className='px-3 py-1 bg-green-100 text-green-800 rounded'>GraphQL</span>
                    </div>
                    </div>

                    <div>
                    <h3 className='text-xl font-semibold mb-3 text-blue-600'>Tools & Technologies</h3>
                    <div className='flex flex-wrap gap-2'>
                        <span className='px-3 py-1 bg-purple-100 text-purple-800 rounded'>Git</span>
                        <span className='px-3 py-1 bg-purple-100 text-purple-800 rounded'>GitHub</span>
                        <span className='px-3 py-1 bg-purple-100 text-purple-800 rounded'>Vercel</span>
                        <span className='px-3 py-1 bg-purple-100 text-purple-800 rounded'>Figma</span>
                        <span className='px-3 py-1 bg-purple-100 text-purple-800 rounded'>VS Code</span>
                        <span className='px-3 py-1 bg-purple-100 text-purple-800 rounded'>Excel</span>
                        <span className='px-3 py-1 bg-purple-100 text-purple-800 rounded'>PowerPoint</span>
                        <span className='px-3 py-1 bg-purple-100 text-purple-800 rounded'>Canva</span>
                    </div>
                    </div>

                    <div>
                    <h3 className='text-xl font-semibold mb-3 text-blue-600'>AI & Prompt Engineering</h3>
                    <div className='flex flex-wrap gap-2'>
                        <span className='px-3 py-1 bg-indigo-100 text-indigo-800 rounded'>ChatGPT</span>
                        <span className='px-3 py-1 bg-indigo-100 text-indigo-800 rounded'>Claude</span>
                        <span className='px-3 py-1 bg-indigo-100 text-indigo-800 rounded'>Prompt Engineering</span>
                        <span className='px-3 py-1 bg-indigo-100 text-indigo-800 rounded'>AI Tools</span>
                        <span className='px-3 py-1 bg-indigo-100 text-indigo-800 rounded'>Problem Solving</span>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>

        <section className='py-20 px-4'>
            <div className='max-w-4xl mx-auto'>
            <h2 className='text-3xl font-bold text-center mb-12'>Experience</h2>

            <div className='space-y-8'>
                <div className='flex gap-6'>
                <div className='shrink-0 w-4 h-4 bg-blue-600 rounded-full mt-2'></div>
                <div className='flex-1'>
                    <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2'>
                    <h3 className='text-xl font-semibold'>Lead Web Developer</h3>
                    <span className='text-gray-500'>Nov 2025 - Present</span>
                    </div>
                    <p className='text-blue-600 mb-2'>Articals Studio · Freelance</p>
                    <p className='text-gray-700 mb-3'>
                    Full-stack web development experience (1+ year), building functional applications, dashboards, and user-centered digital solutions.
                    </p>
                    <p className='text-gray-700 mb-3'>
                    I worked on a Task Management System as the Lead developer, implementing modern technologies and best practices.
                    </p>
                    <a href="https://articals.org/" target="_blank" rel="noopener noreferrer" className='text-blue-600 hover:underline'>
                        Articals.org
                    </a>
                    <div className='flex flex-wrap gap-2 mt-2'>
                        <span className='px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded'>Next.js</span>
                        <span className='px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded'>TypeScript</span>
                        <span className='px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded'>Version Control</span>
                        <span className='px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded'>Critical Thinking</span>
                        <span className='px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded'>Tailwind CSS</span>
                    </div>
                </div>
                </div>


                           <div className='flex gap-6'>
                <div className='shrink-0 w-4 h-4 bg-blue-600 rounded-full mt-2'></div>
                <div className='flex-1'>
                    <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2'>
                    <h3 className='text-xl font-semibold'>Frontend Web Developer</h3>
                    <span className='text-gray-500'>Jan 2025 - Feb 2025</span>
                    </div>
                    <p className='text-blue-600 mb-2'>Oasis Infobyte · Internship</p>
                    <p className='text-gray-700 mb-3'>
                    Virtual internship experience that helped develop foundational web development skills.
                    </p>
                    <div className='flex flex-wrap gap-2'>
                        <span className='px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded'>HTML5</span>
                        <span className='px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded'>GitHub</span>
                        <span className='px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded'>Bootstrap</span>
                        <span className='px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded'>CSS3</span>
                        <span className='px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded'>JavaScript</span>
                        <span className='px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded'>React.js</span>
                        <span className='px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded'>Node.js</span>
                        <span className='px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded'>Firebase</span>
                    </div>
                </div>
                </div>

                <div className='flex gap-6'>
                <div className='shrink-0 w-4 h-4 bg-blue-600 rounded-full mt-2'></div>
                <div className='flex-1'>
                    <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2'>
                    <h3 className='text-xl font-semibold'>Frontend Web Developer</h3>
                    <span className='text-gray-500'>Sep 2024 - Present</span>
                    </div>
                    <p className='text-blue-600 mb-2'>SQI College of ICT · Internship</p>
                    <p className='text-gray-700 mb-3'>
                    On-site internship focusing on front-end development and modern web technologies.
                    </p>
                    <p className='text-gray-700 mb-3'>
                    <a href="https://github.com/dev-caroline" target="_blank" rel="noopener noreferrer" className='text-blue-600 hover:underline'>
                        https://github.com/dev-caroline
                    </a>
                    </p>
                    <div className='flex flex-wrap gap-2'>
                        <span className='px-2 py-1 bg-green-100 text-green-800 text-xs rounded'>React.js</span>
                        <span className='px-2 py-1 bg-green-100 text-green-800 text-xs rounded'>Node.js</span>
                        <span className='px-2 py-1 bg-green-100 text-green-800 text-xs rounded'>HTML5</span>
                        <span className='px-2 py-1 bg-green-100 text-green-800 text-xs rounded'>CSS3</span>
                        <span className='px-2 py-1 bg-green-100 text-green-800 text-xs rounded'>Bootstrap</span>
                        <span className='px-2 py-1 bg-green-100 text-green-800 text-xs rounded'>Firebase</span>
                        <span className='px-2 py-1 bg-green-100 text-green-800 text-xs rounded'>GitHub</span>
                        <span className='px-2 py-1 bg-green-100 text-green-800 text-xs rounded'>Front-End Development</span>
                    </div>
                </div>
                </div>


            </div>
            </div>
        </section>

        <section className='py-20 px-4'>
            <div className='max-w-6xl mx-auto'>
            <h2 className='text-3xl font-bold text-center mb-12'>What Drives Me</h2>

            <div className='grid md:grid-cols-3 gap-8'>
                <div className='text-center'>
                <div className='text-4xl mb-4'><i className="bi bi-check-circle-fill"></i></div>
                <h3 className='text-xl font-semibold mb-3'>Quality First</h3>
                <p className='text-gray-600'>
                    I believe in writing clean, maintainable code and delivering
                    high-quality solutions that stand the test of time.
                </p>
                </div>

                <div className='text-center'>
                <div className='text-4xl mb-4'><i className="bi bi-graph-up"></i></div>
                <h3 className='text-xl font-semibold mb-3'>Continuous Learning</h3>
                <p className='text-gray-600'>
                    Technology evolves rapidly, and I'm committed to staying
                    current with the latest tools and best practices.
                </p>
                </div>

                <div className='text-center'>
                <div className='text-4xl mb-4'><i className="bi bi-share"></i></div>
                <h3 className='text-xl font-semibold mb-3'>Collaboration</h3>
                <p className='text-gray-600'>
                    Great software is built by great teams. I value open
                    communication and working together towards common goals.
                </p>
                </div>
            </div>
            </div>
        </section>

        <section className='py-20 px-4 bg-gray-50'>
            <div className='max-w-4xl mx-auto text-center'>
            <h2 className='text-3xl font-bold mb-4'>Let's Connect</h2>
            <p className='text-xl text-gray-600 mb-8'>
                Interested in working together or just want to chat about tech?
            </p>
            <a href="mailto:contact@example.com">
                <button className='bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition-all'>
                Get In Touch
                </button>
            </a>
            </div>
        </section>
        </div>

    )
}

export default page
