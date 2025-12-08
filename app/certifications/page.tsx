import React from 'react'
import Link from 'next/link'

const page = () => {
    const certifications = [
        {
            id: 1,
            title: "Canva Design Certificate",
            issuer: "Canva",
            description: "Comprehensive training in graphic design, visual communication, and digital content creation using Canva's design tools and platform.",
            skills: ["Graphic Design", "Visual Communication", "Digital Content Creation"],
            date: "2025",
            status: "Certified",
            image: "/images/canva_certificate1 image.jpg",
            color: "blue"
        },
        {
            id: 2,
            title: "Data Analysis Certification",
            issuer: "SQI College of ICT",
            description: "Advanced Excel skills including data visualization, pivot tables, formulas, and data analysis techniques for business intelligence.",
            skills: ["Excel", "Data Visualization", "Business Intelligence"],
            date: "2025",
            status: "Certified",
            image: "/images/Data Analysis cert.jpg",
            color: "green"
        },
        {
            id: 3,
            title: "Full Stack Web Development",
            issuer: "SQI College of ICT",
            description: "Comprehensive knowledge of modern web development technologies including MERN stack, responsive design, and best practices.",
            skills: ["React", "Node.js", "MongoDB", "Express", "TypeScript"],
            date: "2024-2025",
            status: "In Progress",
            image: "/images/placeholder-certificate.jpg",
            color: "purple"
        },
        {
            id: 4,
            title: "Frontend Internship Program",
            issuer: "Oasis Infobyte",
            description: "Hands-on experience in software development, team collaboration, and industry-standard development practices.",
            skills: ["Team Collaboration", "Agile Development", "Professional Development"],
            date: "2025",
            status: "Completed",
            image: "/images/placeholder-certificate.jpg",
            color: "orange"
        }
    ]

    return (
        <div className='min-h-screen'>
            {/* Hero Section */}
            <section className='py-20 px-4'>
                <div className='max-w-4xl mx-auto text-center'>
                <h1 className='text-5xl font-bold mb-6'>Certifications</h1>
                <p className='text-xl text-gray-600 mb-8 leading-relaxed'>
                    My journey of continuous learning and professional development
                </p>
                <p className='text-lg text-gray-500'>
                    From design tools to development frameworks, these certifications represent my commitment to mastering diverse technologies.
                </p>
                </div>
            </section>

            {/* Certifications Grid */}
            <section className='py-20 px-4'>
                <div className='max-w-6xl mx-auto'>
                <div className='grid md:grid-cols-2 gap-8'>
                    {certifications.map((cert) => (
                    <div key={cert.id} className='bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow'>
                        <div className='bg-gray-100 p-8 text-center'>
                        {cert.image && cert.image !== "/images/placeholder-certificate.jpg" ? (
                            <img src={cert.image} alt={cert.title} className='w-32 h-32 mx-auto mb-4 object-cover rounded-lg' />
                        ) : (
                            <div className='w-32 h-32 mx-auto mb-4 bg-gray-200 rounded-lg flex items-center justify-center'>
                                <i className="bi bi-award text-2xl text-gray-400"></i>
                            </div>
                        )}
                        <h3 className='text-2xl font-bold mb-2'>{cert.title}</h3>
                        <p className='text-gray-600 mb-2'>Issued by {cert.issuer}</p>
                        <span className={`inline-block px-3 py-1 bg-${cert.color}-100 text-${cert.color}-800 text-sm rounded font-medium`}>
                            {cert.status} • {cert.date}
                        </span>
                        </div>

                        <div className='p-8'>
                        <p className='text-gray-700 mb-6 leading-relaxed'>{cert.description}</p>

                        <div className='mb-6'>
                            <h4 className='font-semibold mb-3 text-gray-800'>Skills Covered:</h4>
                            <div className='flex flex-wrap gap-2'>
                            {cert.skills.map((skill) => (
                                <span key={skill} className='px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded'>
                                {skill}
                                </span>
                            ))}
                            </div>
                        </div>
                        </div>
                    </div>
                    ))}
                </div>
                </div>
            </section>

            {/* Skills Summary */}
            <section className='py-20 px-4 bg-gray-50'>
                <div className='max-w-4xl mx-auto text-center'>
                <h2 className='text-3xl font-bold mb-8'>Skills Overview</h2>
                <div className='flex flex-wrap justify-center gap-3 mb-8'>
                    {['React', 'Node.js', 'MongoDB', 'TypeScript', 'Excel', 'Canva', 'PowerPoint', 'Data Analysis', 'UI/UX Design', 'Web Development'].map((skill) => (
                    <span key={skill} className='px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-700 font-medium hover:border-blue-300 transition-all'>
                        {skill}
                    </span>
                    ))}
                </div>
                <p className='text-lg text-gray-600'>
                    These certifications reflect my versatile approach to technology - from coding to design to data analysis.
                </p>
                </div>
            </section>

            {/* CTA Section */}
            <section className='py-20 px-4'>
                <div className='max-w-4xl mx-auto text-center'>
                <h2 className='text-3xl font-bold mb-4'>Ready to Work Together?</h2>
                <p className='text-xl text-gray-600 mb-8'>
                    Let's discuss how my diverse skill set can contribute to your next project.
                </p>
                <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                    <Link href="/about">
                    <button className='border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-all'>
                        Learn More About Me
                    </button>
                    </Link>
                    <a href="mailto:contact@example.com">
                    <button className='bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all'>
                        Get In Touch
                    </button>
                    </a>
                </div>
                </div>
            </section>
        </div>
    )
}

export default page