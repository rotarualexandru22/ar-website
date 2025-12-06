import React from 'react'

const Technology = () => {
  return (
    <section id='technology'>

        <div style={{backgroundImage: "url('/src/assets/background1.jpg')"}}
        className='relative bg-cover h-[500px] bg-fixed'>
        
            <div className="backdrop-blur-md text-white p-7 h-full
            w-full md:w-[750px] md:absolute md:top-00 md:right-0 lg:w-[850px]
            overflow-hidden">
                <h3 className="font-bold text-2xl my-2">Excelent Products and Customer Service</h3>
                <p className='text-justify bg-black/50 p-3 rounded-xl'>At AR Sales, we pride ourselves on delivering not only outstanding products but also exceptional customer service. Our team ensures every client receives personalized support and guidance, making every interaction seamless and satisfying.</p>
                <div className="text-right p-5">
                    <button className='bg-orange-600 px-5 py-2 rounded cursor-pointer
                    hover:bg-orange-700 duration-300'>Read more...</button>
                </div>

                <h3 className="font-bold text-2xl my-2">Customizing all processes</h3>
                <p className='text-justify bg-black/50 p-3 rounded-xl'>We tailor every step of our workflow to meet the unique needs of each client. From strategy to execution, our flexible approach ensures that every process is efficient, effective, and aligned with your goals.</p>

            </div>
        </div>

    </section>
  )
}

export default Technology