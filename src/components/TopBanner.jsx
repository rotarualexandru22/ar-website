import React from 'react'

const TopBanner = () => {
  return (
    <section id='home' className='bg-gray-200 w-full flex flex-col md:flex-row 
             items-center justify-center gap-6 p-6 md:p-12
             pt-20 md:pt-12'>

        {/* Banner image */}
        <img src="/src/assets/person2.png" alt="" className='bg-cover size-60 self-center
        md:size-80 shrink-0 drop-shadow-lg'/>

        {/* Banner text and button */}
        <div className="my-5 p-3 max-w-2xl text-justify">
            <h1 className='font-bold text-3xl md:text-5xl'>Selling is what we do best at 
                <span className='gradient-text'> AR Sales</span></h1>
            <p className='mt-3 text-sm'>At AR Sales, we turn great products into unforgettable experiences. 
            Our team specializes in creating effective strategies that connect 
            brands with real customers — driving engagement, growth, and lasting results.
            From concept to conversion, selling isn’t just what we do — it’s what we perfect.</p>
            <button className='btn-primary'>Explore</button>
        </div>

    </section>
  )
}

export default TopBanner