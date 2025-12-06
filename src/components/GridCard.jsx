import React from 'react'

const GridCard = () => {
  return (
    <section id='services' className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4
    justify-items-center m-5'>

        {/* Card 1 */}
        <div className="p-4 pb-10 border-b border-slate-200 md:border-b-0 
        rounded-t-2xl md:border-r md:border-slate-200">
            <div className='flex justify-center my-5'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="size-14 md:size-28 text-orange-800" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M15.528 2.973a.75.75 0 0 1 .472.696v8.662a.75.75 0 0 1-.472.696l-7.25 2.9a.75.75 0 0 1-.557 0l-7.25-2.9A.75.75 0 0 1 0 12.331V3.669a.75.75 0 0 1 .471-.696L7.443.184l.01-.003.268-.108a.75.75 0 0 1 .558 0l.269.108.01.003zM10.404 2 4.25 4.461 1.846 3.5 1 3.839v.4l6.5 2.6v7.922l.5.2.5-.2V6.84l6.5-2.6v-.4l-.846-.339L8 5.961 5.596 5l6.154-2.461z"/>
                </svg>
            </div>
            <h3 className='text-xl font-semibold text-center my-2'>Products</h3>
            <p className='text-justify'>Explore our diverse range of high-quality products designed to meet your needs and exceed expectations. Each item is carefully selected to deliver real value and lasting performance.</p>
        </div>

        {/* Card 2 */}
        <div className="p-4 pb-10 border-b border-slate-200 md:border-b-0 
        rounded-t-2xl md:border-r md:border-slate-200">
            <div className='flex justify-center my-5'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="size-14 md:size-28 text-orange-800" viewBox="0 0 16 16">
                    <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
                </svg>
            </div>
            <h3 className='text-xl font-semibold text-center my-2'>Services</h3>
            <p className='text-justify'>Our services are designed to help your business thrive. From consulting to implementation, we provide tailored solutions that optimize performance, streamline operations, and deliver measurable results.</p>
        </div>

        {/* Card 3 */}
        <div className="p-4 pb-10 border-b border-slate-200 md:border-b-0 
        rounded-t-2xl md:border-r md:border-slate-200">
            <div className='flex justify-center my-5'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="size-14 md:size-28 text-orange-800" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                </svg>
            </div>
            <h3 className='text-xl font-semibold text-center my-2'>Connections</h3>
            <p className='text-justify'>Build meaningful connections with clients and partners through our strategic networking solutions. We help you establish lasting relationships that drive collaboration, trust, and business growth.</p>
        </div>

        {/* Card 4 */}
        <div className="p-4 pb-10 border-b border-slate-200 md:border-b-0 
        rounded-t-2xl md:border-r md:border-slate-200">
            <div className='flex justify-center my-5'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="size-14 md:size-28 text-orange-800" viewBox="0 0 16 16">
                    <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5"/>
                    <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85z"/>
                </svg>
            </div>
            <h3 className='text-xl font-semibold text-center my-2'>Portfolios</h3>
            <p className='text-justify'>Showcase of our completed projects highlights the quality and impact of our work. Each portfolio item demonstrates our expertise, creativity, and commitment to delivering excellent results.</p>
        </div>

    </section>
  )
}

export default GridCard