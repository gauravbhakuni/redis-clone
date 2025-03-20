import React from 'react'

const Story = () => {
  const stories = [
    {
      category: 'FINANCE',
      company: 'Flowdesk',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Flowdesk implements Redis for real-time analytics, achieving 10x faster query performance and 50% reduction in infrastructure costs.'
    },
    {
      category: 'SOFTWARE',
      company: 'DOCUGAMI',
      image: 'https://images.pexels.com/photos/1181243/pexels-photo-1181243.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Docugami uses Redis to easily store, search, and update vector embeddings at scale.'
    },
    {
      category: 'SECURITY',
      company: 'EKATA',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Ekata uses Auto Tiering, which requires 70% less of the expensive DRAM storage they needed before Redis.'
    }
  ]

  return (
    <section className="mb-10 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          And they tell good stories
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stories.map((story, index) => (
            <div key={index} className="bg-[#1E2537] rounded-lg overflow-hidden">
              <div className="relative">
                <img 
                  src={story.image} 
                  alt={`${story.company} story`} 
                  className="w-full h-48 object-cover"
                />
                <span className="absolute top-4 left-4 bg-red-600 text-white px-2 py-1 text-sm rounded">
                  {story.category}
                </span>
              </div>
              
              <div className="p-6">
                <img 
                  src={`/${story.company.toLowerCase()}-logo.png`}
                  alt={`${story.company} logo`}
                  className="h-8 mb-4"
                />
                <p className="text-gray-300 mb-4">
                  {story.description}
                </p>
                <button className="text-white flex items-center gap-2 hover:underline">
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Story
