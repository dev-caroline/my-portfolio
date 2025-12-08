import React from 'react'
import Link from 'next/link'

const ResumeCTA = () => {
  return (
    <section className='bg-blue-600 text-white py-16'>
      <div className='max-w-4xl mx-auto text-center px-4'>
        <h2 className='text-3xl font-bold mb-4'>Ready to Work Together?</h2>
        <p className='text-xl mb-8 text-blue-100'>
          I'm always open to discussing new opportunities and interesting projects.
        </p>
        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
          <a
            href="/resume.pdf"
            download="Caroline_Ajiboye_Resume.pdf"
            className='bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2'
          >
            <i className="bi bi-download"></i>
            Download Resume
          </a>
          <Link
            href="https://github.com/dev-caroline"
            target="_blank"
            rel="noopener noreferrer"
            className='border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center gap-2'
          >
            <i className="bi bi-github"></i>
            View GitHub
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ResumeCTA