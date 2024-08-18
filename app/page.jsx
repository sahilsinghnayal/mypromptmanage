import React from 'react'
import Feed from '@/Components/Feed'

function Home() {
  return (
    <section className='w-full flex-center flex-col'>
      <h1 className='head_text text-center'>
        Discover and share 
        <br  />
        <span className='orange_gradient text-center'>AI-Powered Prompts</span>
      </h1>
      <p className='desc text-center'>
        My Prompt mange is a platform that allows you to discover and share AI-powered prompts.
      </p>
      <Feed/>
    </section>
  )
}

export default Home