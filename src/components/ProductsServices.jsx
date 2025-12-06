import React from 'react'

const ProductsServices = () => {
  return (
    <section id='products' className='flex flex-col items-center space-y-20'>
        {/* Title */}
        <h2 className='text-3xl md:text-5xl font-bold mt-10 text-orange-800'>Products and Services</h2>

        {/* Card Container */}
        <div className='flex flex-col md:flex-row justify-center items-center
        m-14 space-y-10 md:space-y-0 md:space-x-5 sm:px- md:px-20'>

            {/* Card 1 */}
            <div className='rounded-lg shadow-lg border'>
              <img src="/src/assets/acer.jpg" alt="" className='bg-cover h-60 w-full'/>
              <div className="p-3">
                <h3 className='text-2xl font-semibold'>Products</h3>
                <p className=''>We provide tailored services to help your business grow, from strategy planning to full implementation support.</p>
                
                <button className='btn-secondary'>See more</button>
              </div>

            </div>

            {/* Card 2 */}
            <div className='rounded-lg shadow-lg border'>
              <img src="/src/assets/team.jpg" alt="" className='bg-cover h-60 w-full'/>
              <div className="p-3">
                <h3 className='text-2xl font-semibold'>Services</h3>
                <p className=''>Discover our wide range of high-quality products, designed to meet every need and ensure customer satisfaction.</p>

                <button className='btn-secondary'>See more</button>
              </div>
            </div>

            {/* Card 3 */}
            <div className='rounded-lg shadow-lg border md:hidden xl:block'>
              <img src="/src/assets/hands.jpg" alt="" className='bg-cover h-60 w-full'/>
              <div className="p-3">
                <h3 className='text-2xl font-semibold'>Connections</h3>
                <p className=''>Building strong connections is at the heart of what we do, connecting clients, partners, and communities seamlessly.</p>
              
                <button className='btn-secondary'>See more</button>
              </div>
            </div>

        </div>

    </section>
  )
}

export default ProductsServices