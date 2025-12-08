import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div className='min-h-screen'>
      <section className='min-h-screen flex items-center justify-center px-4'>
        <div className='flex items-center gap-16 max-w-6xl w-full'>
          <div className='w-96 h-96 morphing-box rounded-2xl hidden lg:block'></div>

          <div className='flex-1 text-center lg:text-left'>
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
              <div className='text-4xl mb-4'>⚛️</div>
              <h3 className='text-xl font-bold mb-2'>Frontend</h3>
              <p className='text-gray-600'>React, Next.js, TypeScript, Tailwind CSS</p>
            </div>

            <div className='bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow'>
              <div className='text-4xl mb-4'>⚙️</div>
              <h3 className='text-xl font-bold mb-2'>Backend</h3>
              <p className='text-gray-600'>Node.js, Express, MongoDB</p>
            </div>

            <div className='bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow'>
              <div className='text-4xl mb-4'>🎨</div>
              <h3 className='text-xl font-bold mb-2'>Design</h3>
              <p className='text-gray-600'>UI/UX Design, Figma, Responsive Design</p>
            </div>

            <div className='bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow'>
              <div className='text-4xl mb-4'>🚀</div>
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
              <div className='text-4xl mb-4'>⏱️</div>
              <h3 className='text-xl font-bold mb-2'>Time Management</h3>
              <p className='text-gray-600'>Efficiently managing tasks and meeting deadlines</p>
            </div>

            <div className='bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center'>
              <div className='text-4xl mb-4'>🤝</div>
              <h3 className='text-xl font-bold mb-2'>Team Player</h3>
              <p className='text-gray-600'>Collaborative and communicative team member</p>
            </div>

            <div className='bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center'>
              <div className='text-4xl mb-4'>👥</div>
              <h3 className='text-xl font-bold mb-2'>Leadership</h3>
              <p className='text-gray-600'>Natural leader who takes initiative</p>
            </div>

            <div className='bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center'>
              <div className='text-4xl mb-4'>🎯</div>
              <h3 className='text-xl font-bold mb-2'>Accuracy</h3>
              <p className='text-gray-600'>Detail-oriented with precision in work</p>
            </div>

            <div className='bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center'>
              <div className='text-4xl mb-4'>⚡</div>
              <h3 className='text-xl font-bold mb-2'>Diligence</h3>
              <p className='text-gray-600'>Committed and hardworking professional</p>
            </div>

            <div className='bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center'>
              <div className='text-4xl mb-4'>🧩</div>
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

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <div className='bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow'>
              <div className='bg-gray-100 h-48 flex items-center justify-center'>
                <span className='text-6xl'>🛒</span>
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
                <span className='text-6xl'>📋</span>
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
                <span className='text-6xl'>🌤️</span>
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

      <section className='py-20 px-4 bg-gray-50'>
        <div className='max-w-4xl mx-auto text-center'>
          <h2 className='text-4xl font-bold mb-4'>Let's Work Together</h2>
          <p className='text-xl mb-8 text-gray-600'>
            Have a project in mind? I'd love to hear about it and discuss how we can bring your ideas to life.
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
