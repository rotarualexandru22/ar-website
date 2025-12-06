import React from 'react'

const Testimonials = () => {
  return (
    <section id='testimonials' className='flex flex-col justify-center items-center
    my-20'>
        {/* Heading */}
        <h2 className='text-4xl md:text-5xl font-bold my-10 text-orange-800'>Testimonials</h2>

        {/* Testimonials container */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 items-end gap-6">

            {/* Testimonial 1 */}
            <div className="p-3 mx-3">
                {/* Comment */}
                    <div className="relative rounded-lg shadow-lg p-3 border mb-5 bg-slate-600
                    text-white">
                        “At AR Sales, we don’t just focus on selling — 
                        we focus on building trust. Every partnership we 
                        create is guided by integrity, innovation, and the 
                        drive to help our clients succeed. Our goal has always 
                        been simple: deliver results that speak for themselves....

                        <button className='bg-orange-600 rounded text-white text-sm
                        px-2 ml-2 hover:bg-orange-700 cursor-pointer'>Read more</button>

                        <div className="absolute">
                           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="size-8 fill-slate-600" viewBox="0 0 16 16">
                             <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                           </svg>
                        </div>
                    </div>
                {/* Avatar profile */}
                <div className="flex items-center space-x-3">
                    <img src="/person4.jpg" alt="" 
                    className='size-24 rounded-full'/>
                    <div className="text-slate-800">
                        <h5 className='font-bold'>Alex Carter</h5>
                        <p>CEO, AR Sales</p>
                    </div>
                </div>
            </div>

            {/* Testimonial 2 */}
            <div className="p-3 mx-3">
                {/* Comment */}
                    <div className="relative rounded-lg shadow-lg p-3 border mb-5 bg-slate-600
                    text-white">
                        “Technology drives everything we do at AR Sales. 
                        From data-driven insights to seamless automation, 
                        our mission is to give our clients tools that make 
                        growth not just possible, but predictable. 
                        Innovation isn’t just part of our process — it’s part 
                        of our DNA....

                        <button className='bg-orange-600 rounded text-white text-sm
                        px-2 ml-2 hover:bg-orange-700 cursor-pointer'>Read more</button>

                        <div className="absolute">
                           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="size-8 fill-slate-600" viewBox="0 0 16 16">
                             <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                           </svg>
                        </div>
                    </div>
                {/* Avatar profile */}
                <div className="flex items-center space-x-3">
                    <img src="/person3.jpg" alt="" 
                    className='size-24 rounded-full'/>
                    <div className="text-slate-800">
                        <h5 className='font-bold'>Daniel Roberts</h5>
                        <p>CTO, AR Sales</p>
                    </div>
                </div>
            </div>

            {/* Testimonial 3 */}
            <div className="p-3 mx-3">
                {/* Comment */}
                    <div className="relative rounded-lg shadow-lg p-3 border mb-5 bg-slate-600
                    text-white">
                       “Our strength lies in understanding people — their 
                       needs, their goals, and their motivations. 
                       At AR Sales, every client interaction is an 
                       opportunity to build relationships that last. 
                       Seeing our strategies turn into real success stories 
                       is what makes this work truly rewarding....
                        <button className='bg-orange-600 rounded text-white text-sm
                        px-2 ml-2 hover:bg-orange-700 cursor-pointer'>Read more</button>

                        <div className="absolute">
                           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="size-8 fill-slate-600" viewBox="0 0 16 16">
                             <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                           </svg>
                        </div>
                    </div>
                {/* Avatar profile */}
                <div className="flex items-center space-x-3">
                    <img src="/person2.jpg" alt="" 
                    className='size-24 rounded-full'/>
                    <div className="text-slate-800">
                        <h5 className='font-bold'>Emily Thompson</h5>
                        <p>Sales Manager, AR Sales</p>
                    </div>
                </div>
            </div>

            {/* Testimonial 4 */}
            <div className="p-3 mx-3">
                {/* Comment */}
                    <div className="relative rounded-lg shadow-lg p-3 border mb-5 bg-slate-600
                    text-white">
                        “Good design tells a story without words. 
                        At AR Sales, I focus on creating digital experiences 
                        that feel natural and intuitive - where every color, 
                        shape, and interaction guides users seamlessly 
                        toward what matters most....

                        <button className='bg-orange-600 rounded text-white text-sm
                        px-2 ml-2 hover:bg-orange-700 cursor-pointer'>Read more</button>

                        <div className="absolute">
                           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="size-8 fill-slate-600" viewBox="0 0 16 16">
                             <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                           </svg>
                        </div>
                    </div>
                {/* Avatar profile */}
                <div className="flex items-center space-x-3">
                    <img src="/person1.jpg" alt="" 
                    className='size-24 rounded-full'/>
                    <div className="text-slate-800">
                        <h5 className='font-bold'>Michael Lee</h5>
                        <p>UI Expert, AR Sales</p>
                    </div>
                </div>
            </div>

        </div>

    </section>
  )
}

export default Testimonials