import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div className='min-h-screen'>
      <section className='min-h-screen flex items-center justify-center px-4'>
        <div className='flex items-center gap-16 max-w-6xl w-full'>
          <div className='w-96 h-96 morphing-box rounded-2xl hidden lg:block'></div>

          <div className='flex-1 text-center lg:text-left'>
            <p>Hello, i'm</p>
            <h1 className='text-5xl lg:text-6xl font-bold mb-4'>
              Ajiboye Caroline Adetomiwa
            </h1>

            <p className='text-xl lg:text-2xl font-medium mb-6 text-gray-700'>
              Software Engineer | Full Stack Web Developer | MERN Stack
            </p>

            <p className='text-2xl lg:text-3xl font-bold mb-8 leading-relaxed'>
              I build clean and responsive <span className='text-blue-600'>modern websites.</span>
            </p>

            <div className='flex gap-4 justify-center lg:justify-start'>
              <Link href="/about">
                <button className='border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-all'>
                  About me
                </button>
              </Link>
              <Link href="/projects">
                <button className='bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all'>
                  See my work
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className='py-20 px-4 bg-gray-50'>
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-4xl font-bold text-center mb-4'>My Skills</h2>
          <p className='text-center text-gray-600 mb-12'>Technologies I work with</p>

          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
            <div className='bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow'>
              <div className='text-4xl mb-4'><i className="bi bi-code-slash"></i></div>
              <h3 className='text-xl font-bold mb-2'>Frontend</h3>
              <p className='text-gray-600'>React, Next.js, TypeScript, Tailwind CSS</p>
            </div>

            <div className='bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow'>
              <div className='text-4xl mb-4'><i className="bi bi-gear"></i></div>
              <h3 className='text-xl font-bold mb-2'>Backend</h3>
              <p className='text-gray-600'>Node.js, Express, MongoDB</p>
            </div>

            <div className='bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow'>
              <div className='text-4xl mb-4'><i className="bi bi-palette"></i></div>
              <h3 className='text-xl font-bold mb-2'>Design</h3>
              <p className='text-gray-600'>UI/UX Design, Figma, Responsive Design</p>
            </div>

            <div className='bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow'>
              <div className='text-4xl mb-4'><i className="bi bi-tools"></i></div>
              <h3 className='text-xl font-bold mb-2'>Tools</h3>
              <p className='text-gray-600'>Git, Git remote, Vercel</p>
            </div>
          </div>
        </div>
      </section>

      <section className='py-20 px-4'>
        <div className='max-w-4xl mx-auto'>
          <h2 className='text-4xl font-bold text-center mb-4'>Soft Skills</h2>
          <p className='text-center text-gray-600 mb-12'>Professional qualities that drive success</p>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
            <div className='bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center'>
              <div className='text-4xl mb-4'><i className="bi bi-clock"></i></div>
              <h3 className='text-xl font-bold mb-2'>Time Management</h3>
              <p className='text-gray-600'>Efficiently managing tasks and meeting deadlines</p>
            </div>

            <div className='bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center'>
              <div className='text-4xl mb-4'><i className="bi bi-people-fill"></i></div>
              <h3 className='text-xl font-bold mb-2'>Team Player</h3>
              <p className='text-gray-600'>Collaborative and communicative team member</p>
            </div>

            <div className='bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center'>
              <div className='text-4xl mb-4'><i className="bi bi-people"></i></div>
              <h3 className='text-xl font-bold mb-2'>Leadership</h3>
              <p className='text-gray-600'>Natural leader who takes initiative</p>
            </div>

            <div className='bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center'>
              <div className='text-4xl mb-4'><i className="bi bi-crosshair"></i></div>
              <h3 className='text-xl font-bold mb-2'>Accuracy</h3>
              <p className='text-gray-600'>Detail-oriented with precision in work</p>
            </div>

            <div className='bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center'>
              <div className='text-4xl mb-4'><i className="bi bi-lightning"></i></div>
              <h3 className='text-xl font-bold mb-2'>Diligence</h3>
              <p className='text-gray-600'>Committed and hardworking professional</p>
            </div>

            <div className='bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center'>
              <div className='text-4xl mb-4'><i className="bi bi-puzzle"></i></div>
              <h3 className='text-xl font-bold mb-2'>Problem Solving</h3>
              <p className='text-gray-600'>Analytical thinker with creative solutions</p>
            </div>
          </div>
        </div>
      </section>

      <section className='py-20 px-4'>
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-4xl font-bold text-center mb-4'>Featured Projects</h2>
          <p className='text-center text-gray-600 mb-12'>Some of my recent work</p>

          <div className='grid md:grid-cols-3 lg:grid-cols-3 gap-8'>
            <div className='bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow'>
              <div className='bg-gray-100 h-48 flex items-center justify-center'>
                <img src="/images/ecommerce-platform.jpg" alt="E-Commerce Platform" className='w-full h-full object-cover' />
              </div>
              <div className='p-6'>
                <h3 className='text-xl font-bold mb-2'>E-Commerce Platform</h3>
                <p className='text-gray-600 mb-4'>Full-featured online shopping platform with modern UI</p>
                <div className='flex flex-wrap gap-2 mb-4'>
                  <span className='px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded'>React</span>
                  <span className='px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded'>Next.js</span>
                  <span className='px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded'>Stripe</span>
                </div>
                <div className='flex gap-2'>
                  <a href="#" className='text-blue-600 hover:underline text-sm'>Live Demo</a>
                  <a href="#" className='text-gray-600 hover:underline text-sm'>GitHub</a>
                </div>
              </div>
            </div>

            <div className='bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow'>
              <div className='bg-gray-100 h-48 flex items-center justify-center'>
                <img src="/images/task-management.jpg" alt="Task Management App" className='w-full h-full object-cover' />
              </div>
              <div className='p-6'>
                <h3 className='text-xl font-bold mb-2'>Task Management App</h3>
                <p className='text-gray-600 mb-4'>Collaborative task manager with real-time updates</p>
                <div className='flex flex-wrap gap-2 mb-4'>
                  <span className='px-2 py-1 bg-green-100 text-green-800 text-xs rounded'>React</span>
                  <span className='px-2 py-1 bg-green-100 text-green-800 text-xs rounded'>Node.js</span>
                  <span className='px-2 py-1 bg-green-100 text-green-800 text-xs rounded'>Socket.io</span>
                </div>
                <div className='flex gap-2'>
                  <a href="#" className='text-blue-600 hover:underline text-sm'>Live Demo</a>
                  <a href="#" className='text-gray-600 hover:underline text-sm'>GitHub</a>
                </div>
              </div>
            </div>

            <div className='bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow'>
              <div className='bg-gray-100 h-48 flex items-center justify-center'>
                <img src="/images/weather-dashboard.jpg" alt="Weather Dashboard" className='w-full h-full object-cover' />
              </div>
              <div className='p-6'>
                <h3 className='text-xl font-bold mb-2'>Weather Dashboard</h3>
                <p className='text-gray-600 mb-4'>Beautiful weather app with interactive maps</p>
                <div className='flex flex-wrap gap-2 mb-4'>
                  <span className='px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded'>React</span>
                  <span className='px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded'>API</span>
                  <span className='px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded'>CSS</span>
                </div>
                <div className='flex gap-2'>
                  <a href="#" className='text-blue-600 hover:underline text-sm'>Live Demo</a>
                  <a href="#" className='text-gray-600 hover:underline text-sm'>GitHub</a>
                </div>
              </div>
            </div>
          </div>

          <div className='text-center mt-12'>
            <Link href="/projects">
              <button className='bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors'>
                View All Projects
              </button>
            </Link>
          </div>
        </div>
      </section>

         <section className='py-16 px-4 bg-gray-50 text-black'>
      <div className='max-w-4xl mx-auto text-center'>
        <h2 className='text-3xl font-bold mb-4'>Ready to Work Together?</h2>
        <p className='text-xl mb-8 opacity-90'>
          Check out my resume and GitHub to see more of my work and experience.
        </p>
        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
          <a href="/resume.pdf" download className='bg-white text-blue-600 border border-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all inline-flex items-center gap-2'>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Resume
          </a>
          <a href="https://github.com/dev-caroline" target="_blank" rel="noopener noreferrer" className='border px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all inline-flex items-center gap-2'>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            View GitHub
          </a>
        </div>
      </div>
    </section>
    </div>
  )
}

export default page
